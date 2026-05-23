const dataUrl = './data.json';

async function loadPortfolioData() {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) throw new Error('Failed to load portfolio data');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

function renderSkills(skills) {
  const skillsList = document.getElementById('skills-list');
  if (!skillsList) return;
  skillsList.innerHTML = skills.map(skill => `
    <article class="skill-card">
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
    </article>
  `).join('');
}

function renderProjects(projects) {
  const projectsList = document.getElementById('projects-list');
  if (!projectsList) return;
  projectsList.innerHTML = projects.map(project => `
    <article class="project-card">
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-meta">
        <span>${project.technology}</span>
        <span>${project.type}</span>
      </div>
    </article>
  `).join('');
}

async function init() {
  const data = await loadPortfolioData();
  if (!data) return;
  renderSkills(data.skills);
  renderProjects(data.projects);
}

init();
