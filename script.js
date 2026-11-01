// The website reads the information from js_config.js.
// To edit your details, open js_config.js and change the values there.
const $ = (id) => document.getElementById(id);
const esc = (s="") => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function renderPortfolio() {
  document.title = `${portfolio.name} | BSIT Student Portfolio`;
  $("brandName").textContent = portfolio.name;
  $("heroName").textContent = portfolio.name;
  $("heroRole").textContent = `${portfolio.role} · ${portfolio.school}`;
  $("heroIntro").textContent = portfolio.intro;
  $("aboutText").textContent = portfolio.about;
  $("profilePhoto").src = portfolio.photo;
  $("profilePhoto").alt = `${portfolio.name} profile photo`;
  $("location").textContent = portfolio.location;
  $("contactLocation").textContent = portfolio.location;
  $("email").textContent = portfolio.email;
  $("email").href = `mailto:${portfolio.email}`;
  $("phone").textContent = portfolio.phone;
  $("facebook").href = portfolio.facebook;
  $("github").href = portfolio.github;
  $("footerGithub").href = portfolio.github;
  $("footerName").textContent = portfolio.name;
  $("footerEmail").textContent = portfolio.email;
  $("footerEmail").href = `mailto:${portfolio.email}`;
  $("footerRole").textContent = portfolio.role;
  $("copyrightYear").textContent = new Date().getFullYear();
  $("copyrightName").textContent = portfolio.name;

  $("highlights").innerHTML = portfolio.highlights.map(x =>
    `<div class="highlight"><strong>${esc(x.number)}</strong><span>${esc(x.label)}</span></div>`).join("");

  $("skillsList").innerHTML = portfolio.skills.map(x =>
    `<article class="skill"><div class="skill-head"><h3>${esc(x.name)}</h3><span>${esc(x.level)}</span></div><p>${esc(x.note)}</p></article>`).join("");

  const projectSearch = $("projectSearch");
  const categoryFilter = $("projectCategory");
  const yearFilter = $("projectYear");
  [...new Set(portfolio.projects.map(p => p.category))].sort().forEach(category => {
    categoryFilter.insertAdjacentHTML("beforeend", `<option value="${esc(category)}">${esc(category)}</option>`);
  });
  [...new Set(portfolio.projects.map(p => p.year))].sort().reverse().forEach(year => {
    yearFilter.insertAdjacentHTML("beforeend", `<option value="${esc(year)}">${esc(year)}</option>`);
  });
  const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  function drawProjects() {
    const query = projectSearch.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const year = yearFilter.value;
    const visible = portfolio.projects.filter(p => {
      const haystack = [p.title, p.description, p.category, p.year, p.status, p.role, ...(p.technologies || [])].join(" ").toLowerCase();
      return (!query || haystack.includes(query)) && (!category || p.category === category) && (!year || p.year === year);
    });
    $("projectsList").innerHTML = visible.map((p, i) =>
      `<article class="project">
        <img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy">
        <div class="project-content">
          <div class="eyebrow">${esc(p.category)} · ${esc(p.year)} · ${esc(p.status)}</div>
          <h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
          <div class="tags">${p.technologies.map(t=>`<span>${esc(t)}</span>`).join("")}</div>
          <a class="button secondary project-details-button" href="project-details.html?id=${encodeURIComponent(p.id)}">View project details ↗</a>
        </div>
      </article>`).join("");
    $("projectCount").textContent = `Showing ${visible.length} of ${portfolio.projects.length} projects`;
    if (!visible.length) $("projectsList").innerHTML = '<p class="empty-state">No projects match your search. Try another keyword or filter.</p>';
  }
  projectSearch.addEventListener("input", drawProjects);
  categoryFilter.addEventListener("change", drawProjects);
  yearFilter.addEventListener("change", drawProjects);
  drawProjects();

  $("experienceList").innerHTML = portfolio.experience.map(x =>
    `<article class="timeline-item"><div class="timeline-date">${esc(x.period)}</div><div><h3>${esc(x.role)}</h3><strong>${esc(x.organization)}</strong><p>${esc(x.description)}</p></div></article>`).join("");

  $("educationList").innerHTML = portfolio.education.map(x =>
    `<article class="simple-card"><h3>${esc(x.course)}</h3><strong>${esc(x.school)}</strong><span>${esc(x.period)}</span><p>${esc(x.note)}</p></article>`).join("");

  $("certificatesList").innerHTML = portfolio.certificates.map(x => `<li>${esc(x)}</li>`).join("");

  $("achievementsList").innerHTML = (portfolio.achievements || []).map(x => `<li>${esc(x)}</li>`).join("");

  $("collectionsList").innerHTML = (portfolio.graphicDesign || []).map(group => `
    <article class="gallery-category">
      <h3>${esc(group.category)} Gallery</h3>
      <p>${esc(group.description)}</p>
      <div class="gallery-items">
        ${(group.works || []).map(work => `
          <figure class="gallery-item">
            <button type="button" class="gallery-open" data-image="${esc(work.image)}" data-title="${esc(work.title)}">
              <img src="${esc(work.image)}" alt="${esc(work.title)}" loading="lazy">
              <figcaption>${esc(work.title)}</figcaption>
            </button>
            <small>${esc(work.note || "")}</small>
          </figure>`).join("")}
      </div>
    </article>`).join("");
}

renderPortfolio();

const menuButton = $("menuButton");
menuButton.addEventListener("click", () => {
  const isOpen = $("navLinks").classList.toggle("show");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => {
  $("navLinks").classList.remove("show");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
}));

$("themeButton").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("portfolioTheme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("portfolioTheme") === "dark") {
  document.body.classList.add("dark");
  $("themeButton").setAttribute("aria-pressed", "true");
} else {
  $("themeButton").setAttribute("aria-pressed", "false");
}

$("collectionsList").addEventListener("click", event => {
  const button = event.target.closest(".gallery-open");
  if (!button) return;
  $("galleryTitle").textContent = button.dataset.title;
  $("galleryImage").src = button.dataset.image;
  $("galleryImage").alt = button.dataset.title;
  $("galleryViewer").showModal();
});
$("closeGallery").addEventListener("click", () => $("galleryViewer").close());
$("galleryViewer").addEventListener("click", event => {
  if (event.target === $("galleryViewer")) $("galleryViewer").close();
});

$("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const subject = encodeURIComponent(fd.get("subject"));
  const body = encodeURIComponent(`Name: ${fd.get("senderName")}\nEmail: ${fd.get("senderEmail")}\n\n${fd.get("message")}`);
  window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
});
