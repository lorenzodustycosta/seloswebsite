"""Check exported public pages, local assets, metadata and bilingual alternates."""
from pathlib import Path
from html.parser import HTMLParser
import json
import xml.etree.ElementTree as ET
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / 'dist'
ORIGIN = 'https://selosdesign.com'

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.tags = []
        self.json = []
        self.in_schema = False
        self.feed(source)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_schema = True
    def handle_endtag(self, tag):
        if tag == 'script': self.in_schema = False
    def handle_data(self, data):
        if self.in_schema: self.json.append(json.loads(data))

sitemap = ET.parse(OUTPUT / 'sitemap.xml')
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [el.text for el in sitemap.findall('s:url/s:loc', ns)]
assert len(urls) == len(set(urls))
parsed = {}
for url in urls:
    assert url.startswith(ORIGIN + '/') and '#' not in url
    path = urlsplit(url).path
    page = Page((OUTPUT / path.lstrip('/') / 'index.html').read_text())
    parsed[url] = page
    assert sum(tag == 'h1' for tag, _ in page.tags) == 1, url
    assert sum(tag == 'main' for tag, _ in page.tags) == 1, url
    assert any(tag == 'link' and a.get('rel') == 'canonical' and a['href'] == url for tag, a in page.tags), url
    assert any(tag == 'meta' and a.get('name') == 'description' and a.get('content') for tag, a in page.tags), url
    assert page.json and page.json[0]['@type'] == 'ProfessionalService'
    for tag, attrs in page.tags:
        value = attrs.get('src') or (attrs.get('href') if tag in ('a', 'link') else None)
        if not value: continue
        parts = urlsplit(value)
        if parts.scheme or parts.netloc or value.startswith('#'): continue
        target = OUTPUT / value.lstrip('/')
        assert target.exists(), (url, value)
    for tag, attrs in page.tags:
        if tag == 'label':
            assert any(a.get('id') == attrs.get('for') for _, a in page.tags), (url, attrs)
for url, page in parsed.items():
    for tag, attrs in page.tags:
        if tag == 'link' and attrs.get('hreflang'):
            alternate = attrs['href']
            assert alternate in parsed, (url, alternate)
            assert any(t == 'link' and a.get('hreflang') and a.get('href') == url for t, a in parsed[alternate].tags), url
robots = (OUTPUT / 'robots.txt').read_text()
assert 'User-agent: OAI-SearchBot\nAllow: /' in robots
assert 'User-agent: OAI-AdsBot\nAllow: /' in robots
assert 'Sitemap: ' + ORIGIN + '/sitemap.xml' in robots
print(f'Validated {len(urls)} pages: links, assets, H1, main, labels, canonical, reciprocal hreflang, JSON-LD, sitemap and robots.')
