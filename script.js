document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('nav-name').textContent = CONFIG.name;
document.getElementById('hero-name').textContent = CONFIG.name;
document.getElementById('hero-title').textContent = CONFIG.title;
document.getElementById('hero-tagline').textContent = CONFIG.tagline;
document.getElementById('about-text').textContent = CONFIG.about;

// Skills
const skillsContainer = document.getElementById('skills-container');
CONFIG.skills.forEach(skill => {
  const div = document.createElement('div');
  div.className = 'skill';
  div.innerHTML = `
    <div>${skill.name}</div>
    <div class="bar"><div class="fill" style="width: ${skill.level}%"></div></div>
  `;
  skillsContainer.appendChild(div);
});

// Projects
const projectsContainer = document.getElementById('projects-container');
CONFIG.projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    <a href="${p.link}" target="_blank" style="display:inline-block;margin-top:1rem;color:var(--accent);">查看项目 →</a>
  `;
  projectsContainer.appendChild(card);
});

// Experience
const expContainer = document.getElementById('experience-container');
CONFIG.experience.forEach(exp => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <h3>${exp.role} @ ${exp.company}</h3>
    <p style="color:var(--muted);">${exp.period}</p>
    <p>${exp.details}</p>
  `;
  expContainer.appendChild(div);
});

// Contact
const contactContainer = document.getElementById('contact-container');
const links = [
  { text: '📧 Email', url: `mailto:${CONFIG.contact.email}` },
  { text: '🐙 GitHub', url: CONFIG.contact.github },
  { text: '💼 LinkedIn', url: CONFIG.contact.linkedin }
];
links.forEach(l => {
  if (l.url) {
    const a = document.createElement('a');
    a.href = l.url;
    a.textContent = l.text;
    a.target = '_blank';
    contactContainer.appendChild(a);
  }
});
