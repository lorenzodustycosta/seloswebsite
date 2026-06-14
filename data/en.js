// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH TRANSLATIONS — en.js
//
// To edit a string: find the matching key and change only the value
// in quotes on the right side of the colon.
//
// ⚠️  Do not change key names (e.g. "nav", "hero", "title") — only the values.
// ─────────────────────────────────────────────────────────────────────────────

window.LANG_EN = {

  nav: {
    home:     "Home",
    team:     "The Team",
    projects: "Projects",
    contact:  "Contact"
  },

  hero: {
    eyebrow: "Interior Design Studio · Magenta · Milan",
    title1:  "Spaces that",
    title2:  "tell",
    title3:  "stories.",
    desc:    "Selo's Design was born from a passion for spaces that reflect those who live in them: aesthetics, function and carefully chosen materials, in balance.",
    cta:     "View Projects",
    cta2:    "Contact us"
  },

  about: {
    label: "About Selo's Design",
    title: "Where creativity\nand harmony meet",
    p1:    "Selo's Design grew out of the belief that every space can become a place of wellbeing and inspiration. We design bespoke for each client, bringing together carefully chosen materials, functional solutions and an aesthetic that outlasts trends. We always start by listening — who you are, how you live, what inspires you.",
    link:  "Learn more"
  },

  process: {
    label: "How We Work",
    title: "Our process",
    steps: [
      { num: "01", title: "First Meeting",  desc: "We listen to your needs, your lifestyle and your expectations. A no-obligation introductory meeting." },
      { num: "02", title: "Concept",        desc: "We develop the project vision: moodboard, material palette and initial spatial concept." },
      { num: "03", title: "Design",         desc: "Detailed floor plans, photorealistic renderings and technical specifications for every space." },
      { num: "04", title: "Execution",      desc: "Coordination with craftsmen, suppliers and builders — we guide you through every phase on site." },
      { num: "05", title: "Handover",       desc: "Your space, ready to live in. We follow every detail through to the final handover." }
    ]
  },

  services: {
    label: "Services",
    title: "What we do",
    items: [
      { num: "01", title: "Interior Design",       desc: "We design bespoke spaces, optimising room layouts and furnishings to create functional and harmonious environments tailored to your needs." },
      { num: "02", title: "3D Rendering",           desc: "We bring your project to life with photorealistic renderings that provide a detailed, realistic vision of the final result before any work begins." },
      { num: "03", title: "Furnishing Consultancy", desc: "We guide you in choosing materials, colours, and suppliers, creating unique environments perfectly aligned with your taste and lifestyle." }
    ]
  },

  values: {
    label: "Why choose Selo's Design",
    title: "Our values",
    items: [
      { title: "Personalisation",   desc: "We create bespoke design solutions tailored to each client's unique needs. Every project reflects the style and personality of those who inhabit it." },
      { title: "Quality",           desc: "From design to materials, from client care to supplier selection, we maintain high standards in every aspect of the work." },
      { title: "End-to-End Service", desc: "Thanks to a network of qualified collaborators, we follow the whole project from start to finish, integrating technical aspects, furniture supply and works coordination." }
    ]
  },

  team: {
    label: "The Team",
    title: "The people behind\nevery project",
    desc:  "Two complementary figures, one shared goal: transforming your spaces into places that feel truly yours.",
    members: [
      {
        name:  "Selin Hilal",
        role:  "Interior Designer · Founder",
        bio:   "I'm Selin, the founder of Selo's Design. My roots are in Antalya, on the Mediterranean: it was there, between the sea and my father's furniture shop, that my passion for design was born.\n\nI nurtured it in Ankara, with a master's in Interior Architecture at Bilkent University, and then in Istanbul, where for a few years I designed interiors for luxury hotels, villas and offices. In 2016 I came to Italy — my second home — and earned a master's in Architecture at the Politecnico di Milano.\n\nSince then I've worked freelance between Italy and the rest of Europe, on residential and commercial projects. My vision blends the vibrant energy of my Turkish roots with the elegance of Italian taste: I bring my experience and creativity to every client, to make each space unique.",
        color: "oklch(84% 0.04 85)",
        photo: "assets/selin.png"
      },
      {
        name:  "Lorenzo Costa",
        role:  "Project Manager · Co-founder",
        bio:   "I look after the operational side of the studio. From the first client contact to project delivery, I manage quotes, supplier and craftsmen relations, site visits, and the control of timelines and budget.\n\nWith an analytical, organised approach, I make sure every project moves forward with clarity and punctuality, leaving Selin free to focus on the creative side. For the client, it means always having a point of reference who keeps everything under control.",
        color: "oklch(84% 0.03 220)",
        photo: "assets/lorenzo.png"
      }
    ]
  },

  projects: {
    label:         "Projects",
    title:         "Our portfolio",
    desc:          "Every project is unique — a story of space, light and materials designed around the people who live there.",
    back:          "All projects",
    planLabel:     "Floor plan",
    galleryLabel:  "Gallery",
    overviewLabel: "Overview",
    metaLocation:  "Location",
    metaArea:      "Area",
    viewLabel:     "View",
    ctaTitle:      "Like what you see?",
    ctaText:       "Tell us about your space. The first meeting is introductory and with no obligation.",
    ctaBtn:        "Contact us"
  },

  contact: {
    label:          "Contact",
    title:          "Let's talk about\nyour project",
    areaText:       "We work in Magenta, Milan and the surrounding area — we come to you for the site visit. We also follow projects abroad.",
    emailLabel:     "Email",
    phoneLabel:     "Phone",
    whatsappLabel:  "Message us on WhatsApp",
    socialLabel:    "Follow us",
    form: {
      name:               "Name",
      surname:            "Surname",
      email:              "Email",
      phone:              "Phone",
      messageLabel:       "Message",
      messagePlaceholder: "Tell me about your project…",
      send:               "Send Message",
      sending:            "Sending…",
      success:            "Message sent! We'll get back to you soon.",
      error:              "Something went wrong. Please try again or email us directly."
    }
  },

  footer: {
    tagline:     "Interior Design Studio · Magenta · Milan.",
    studioLabel: "Contact",
    hoursLabel:  "Hours",
    hoursLine1:  "Mon – Fri: 9:00 – 19:00",
    hoursLine2:  "Saturday: by appointment",
    privacy:     "Privacy Policy",
    rights:      `© ${new Date().getFullYear()} Selo's Design. All rights reserved.`
  },

  privacy: {
    title: "Privacy & Cookie Policy",
    body: `## 1. Data Controller
The controller of personal data collected through this website is **Ummusan Selin Hilal**, VAT no. **11190110962**, based in **Via Silvio Pellico 40, 20013, Magenta**.
Contact email: **selosdesign@gmail.com**

## 2. What data we collect
This website only collects the data you voluntarily provide through the contact form: first and last name, email address, phone number (if provided) and the content of your message.
We do not collect browsing data for statistical or profiling purposes, we do not use traffic analysis tools (e.g. Google Analytics), and we do not run newsletters or marketing communications.

## 3. Purpose and legal basis
We use the form data solely to respond to your enquiry and manage any preliminary contact regarding our services. Legal basis: responding to your request and pre-contractual measures (Art. 6.1.b GDPR) and our legitimate interest in replying to you (Art. 6.1.f GDPR). Providing the data is optional, but without it we cannot reply.

## 4. How and where we store data
Messages sent through the form are delivered to and stored in our email inbox (Google/Gmail), for as long as necessary to handle your enquiry and any follow-up, subject to legal obligations.

## 5. Who we share data with
We do not sell or transfer your data to third parties. It may be processed on our behalf by the technical providers we use: **Cloudflare** (website hosting and delivery), **Google/Gmail** (email inbox), **Formspree** (technical form submission). Some providers may process data outside the EU, under the safeguards required by the GDPR. Data may be disclosed to authorities where legally required.

## 6. Your rights
You have the right to access your data, request its rectification or erasure, restrict or object to processing, request data portability, and withdraw any consent. Write to **selosdesign@gmail.com**. You may also lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, www.garanteprivacy.it).

## 7. Cookies
Cookies are small text files stored on your device. This website uses **only technical cookies** necessary for its operation, which do not require consent. We do **not** use profiling, analytics or marketing cookies. Fonts are hosted on our own server and involve no data transmission to third parties. The site does not embed third-party maps or content that install cookies.

## 8. Changes
We may update this policy over time. Last updated: **14/06/2026**.

## 9. Contact
For questions about this policy: **selosdesign@gmail.com**`
  }

};
