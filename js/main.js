const T = {
  en: {
    "nav.about":"About","nav.skills":"Skills","nav.projects":"Projects","nav.experience":"Experience","nav.contact":"Contact",
    "hero.hi":"Hi, I'm","hero.role":"Web & Software Developer",
    "hero.lead":"I design and build fast, accessible and maintainable web applications — from prototype to production.",
    "hero.work":"View my work","hero.contact":"Get in touch","hero.cv":"Download my CV",
    "stats.years":"years of experience","stats.projects":"projects delivered","stats.passion":"passion for code",
    "about.title":"About","about.p1":"I'm a passionate developer who turns ideas into real products. I work across the whole stack: interface, API, database and deployment.",
    "about.p2":"I care about clean, tested and documented code, with a strong focus on user experience and performance.",
    "about.p3":"Always learning, I'm looking for challenging projects where I can grow and add value.",
    "about.loc":"Location","about.remote":"Remote OK","about.lang":"Languages","about.avail":"Availability","about.open":"Open to opportunities",
    "skills.title":"Skills","skills.data":"Data","skills.tools":"Tools",
    "projects.title":"Projects","projects.web":"Web application","projects.api":"API / Backend","projects.tool":"Tool / Software",
    "projects.d1":"Short description: the problem solved, your role and the resulting impact.",
    "projects.d2":"Short description: the problem solved, your role and the resulting impact.",
    "projects.d3":"Short description: the problem solved, your role and the resulting impact.",
    "projects.demo":"Demo","projects.code":"Source code",
    "exp.title":"Experience","exp.now":"Present","exp.r1":"Full-Stack Developer","exp.c1":"Company / Freelance — design and development of custom web applications.",
    "exp.r2":"Web Developer","exp.c2":"Company — front-end integration, API development and maintenance of production products.",
    "exp.r3":"Computer Science Studies","exp.c3":"School / University — degree in software development.",
    "contact.title":"Contact","contact.lead":"Got a project, a role or just want to chat? My inbox is always open.","contact.cta":"Say hello",
    "footer":"Designed and built with care."
  }
};
const fr = {};
document.querySelectorAll("[data-i18n]").forEach(e => fr[e.dataset.i18n] = e.innerHTML);
T.fr = fr;
const store = { get: k => { try { return localStorage.getItem(k) } catch { return null } }, set: (k, v) => { try { localStorage.setItem(k, v) } catch {} } };

function setLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(e => { const v = T[l][e.dataset.i18n]; if (v) e.innerHTML = v; });
  document.getElementById("lang").textContent = l === "fr" ? "EN" : "FR";
  store.set("lang", l);
}
setLang(store.get("lang") || (navigator.language.startsWith("en") ? "en" : "fr"));
document.getElementById("lang").onclick = () => setLang(document.documentElement.lang === "fr" ? "en" : "fr");

const root = document.documentElement;
root.dataset.theme = store.get("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
document.getElementById("theme").onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  store.set("theme", root.dataset.theme);
};
document.getElementById("year").textContent = new Date().getFullYear();

const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: .12 });
document.querySelectorAll(".card,.timeline li,.about,.stats").forEach(e => { e.classList.add("reveal"); io.observe(e); });
