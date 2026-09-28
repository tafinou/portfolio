const T = {
  en: {
    "nav.about":"About","nav.skills":"Skills","nav.projects":"Projects","nav.experience":"Experience","nav.contact":"Contact",
    "hero.hi":"Hi, I'm","hero.role":"Full-Stack Analyst Developer",
    "hero.lead":"I design and build robust enterprise web applications with Java and Angular for public administrations and organisations that demand reliability and security.",
    "hero.work":"View my work","hero.contact":"Get in touch","hero.cv":"Download my CV",
    "stats.projects":"applications in production","stats.back":"server side","stats.front":"user interface",
    "about.title":"About","about.p1":"I am a Full-Stack Java / Angular analyst developer building management applications for public institutions and companies: mail digitisation, overtime tracking, number management.",
    "about.p2":"I work across the stack: Java API, database and Angular interface, with a focus on clean code, security and usability for business users.",
    "about.edu":"Education","about.eduv":"Professional bachelor's degree in business computing",
    "about.loc":"Location","about.remote":"Remote OK","about.lang":"Languages","about.avail":"Availability","about.open":"Open to opportunities",
    "skills.title":"Skills","skills.data":"Data","skills.msg":"Messaging","skills.tools":"Tools",
    "projects.title":"Projects","projects.b1":"Public administration · AWI","projects.b2":"HR management · Yas","projects.b3":"Telecoms · Yas",
    "projects.d1":"Mail management application for the Ministry of Finance and Budget: registration, tracking, assignment and archiving of incoming and outgoing mail.",
    "projects.d2":"Overtime management application: declaration, hierarchical validation and tracking of staff attendance time.",
    "projects.d3":"Number Management System (NMS): number management and swap application, developed at Yas.",
    "exp.title":"Experience","exp.now":"Present","exp.r1":"Full-Stack Analyst Developer · Yas","exp.c1":"Development of management applications for the telecom operator, including TAM and NMS Swap.",
    "exp.r2":"Full-Stack Analyst Developer · SETER","exp.c2":"Design and development of Java and Angular web management applications for the passenger service and first-level maintenance.",
    "exp.r3":"Full-Stack Analyst Developer · AWI","exp.c3":"Development of business applications, including e-Courrier for the Ministry of Finance and Budget.",
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
