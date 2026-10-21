// Optional maintenance command: node scripts/export-pages.js
// Produces committed static HTML from the existing app, without dependencies.
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const base = path.resolve(__dirname, '..');
const outputRoot = path.join(base, 'dist');
fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });
function copyEntry(source, target) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    fs.readdirSync(source).forEach(name => copyEntry(path.join(source, name), path.join(target, name)));
  } else {
    fs.copyFileSync(source, target);
  }
}
const context = vm.createContext({ window: { addEventListener() {} }, document: { addEventListener() {} } });
for (const file of ['data/it.js', 'data/en.js', 'data/tr.js', 'data/projects.js', 'data/services.js']) vm.runInContext(fs.readFileSync(path.join(base, file), 'utf8'), context);
context.PROJECTS = context.window.PROJECTS;
let app = fs.readFileSync(path.join(base, 'app.js'), 'utf8');
app = app.replace(/const _init = resolveRoute\(\);[\s\S]*?\nrender\(\);/, '');
vm.runInContext(app, context);
const routes = vm.runInContext("Object.keys(PAGE_SLUGS).map(page => ({ page, projectId: null })).concat(PROJECTS.filter(p => p.id !== 'amsterdam').map(p => ({ page: 'project', projectId: p.id })))", context);
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const origin = 'https://www.selosdesign.com';
const schema = { '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': origin + '/#studio', name: "Selo's Design", url: origin + '/', logo: origin + '/assets/logo.png', email: 'selosdesign@gmail.com', telephone: '+393662312315', address: { '@type': 'PostalAddress', streetAddress: 'Via Silvio Pellico 40', addressLocality: 'Magenta', postalCode: '20013', addressRegion: 'MI', addressCountry: 'IT' }, areaServed: ['Magenta', 'Milano'], sameAs: ['https://www.instagram.com/selos_design/', 'https://www.facebook.com/selosdesign', 'https://www.linkedin.com/in/selin-hilal'] };
let urls = [];
for (const route of routes) for (const language of ['it', 'en']) {
  context.route = route; context.language = language;
  vm.runInContext('Object.assign(state, route, { lang: language })', context);
  const url = vm.runInContext('pageUrl()', context);
  const it = vm.runInContext("pageUrl(state.page, state.projectId, 'it')", context);
  const en = vm.runInContext("pageUrl(state.page, state.projectId, 'en')", context);
  const meta = vm.runInContext('pageMeta()', context);
  const html = vm.runInContext("renderNav() + ({ home: renderHome, team: renderTeam, projects: renderProjects, project: renderProjectDetail, amsterdam: renderProjectDetail, contact: renderContact, privacy: renderPrivacy }[state.page] || renderServicePage)()", context);
  const dir = url === '/' ? outputRoot : path.join(outputRoot, url.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  const baseHref = url === '/' ? './' : '../';
  const prefix = ''; 
  // All generated pages are at one directory depth. Keep file:// previews working.
  const content = html.replace(/(src|data-open-plan)="assets\//g, '$1="' + prefix + 'assets/');
  const output = `<!DOCTYPE html>
<html lang="${language}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<base href="${baseHref}">
<title>${escape(meta.title)}</title>
<meta name="description" content="${escape(meta.desc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${origin}${url}">
<link rel="alternate" hreflang="it" href="${origin}${it}">
<link rel="alternate" hreflang="en" href="${origin}${en}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Selo's Design">
<meta property="og:locale" content="${language === 'en' ? 'en_GB' : 'it_IT'}">
<meta property="og:url" content="${origin}${url}">
<meta property="og:title" content="${escape(meta.title)}">
<meta property="og:description" content="${escape(meta.desc)}">
<meta property="og:image" content="${origin}/assets/logo.png">
<link rel="icon" type="image/png" href="${prefix}assets/logo.png">
<link rel="stylesheet" href="${prefix}style.css">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body data-theme="lineare" data-page="${route.page}" data-project="${route.projectId || ''}">
<div id="root">${content}</div>
<div id="lightbox" class="lb-overlay" style="display:none"></div>
${['data/it.js', 'data/en.js', 'data/tr.js', 'data/projects.js', 'data/services.js', 'app.js'].map(file => `<script src="${prefix}${file}"></script>`).join('\n')}
</body>
</html>
`;
  fs.writeFileSync(path.join(dir, 'index.html'), output.replace(/[ \t]+$/gm, ''));
  urls.push({ url, it, en });
}
fs.writeFileSync(path.join(outputRoot, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.map(({url, it, en}) => `  <url><loc>${origin}${url}</loc><xhtml:link rel="alternate" hreflang="it" href="${origin}${it}"/><xhtml:link rel="alternate" hreflang="en" href="${origin}${en}"/></url>`).join('\n')}\n</urlset>\n`);

for (const entry of ['assets', 'data', 'style.css', 'app.js', 'robots.txt']) {
  const source = path.join(base, entry);
  const target = path.join(outputRoot, entry);
  copyEntry(source, target);
}
console.log(`Exported ${urls.length} bilingual pages and site assets to dist/.`);
