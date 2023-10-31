import './style.css'
import { Section } from './components/ui/Section/Section'
import { PROJECTS } from './Data/projects'
import { Project } from './types/project';
import { Button } from './components/ui/Button/Button';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <body>
  <article>
${Section()} 
${Section()}
${Section()}
${Section()}
    </article>  
    
    <aside>
    <img class="personal-img" src="/personal-img.jpg" alt="brmstudio"/>
    ${Button()}
    </aside>

    </body>
`

const titles = document.querySelectorAll<HTMLElement>('h2');
const titlesTexts: string[] = ["", "yo", "algunos de mis trabajos", "contacto"];

titlesTexts.map((text, i) => titles[i].innerText = text)


const sections = document.querySelectorAll<HTMLElement>('section');
sections.forEach((section,i) => section.className = `section-${titlesTexts[i].split(' ')[0]}`)

const introSection = document.querySelector<HTMLElement>('.section-');
if (introSection) { introSection.innerHTML = `
<h3>Full Stack Developer con experiencia en Marketing</h3>
<h1>brmstudio</h1>
<a href="https://linkedin.com/in/beatrizrodriguezmaya" class="linkedin-link" target="blank" rel="noopener noreferrer">
<img src="/linkedin-icon.jpg" alt="linkedin-icon" class="linkedin-icon"/></a>
`
}

const personalSection = document.querySelector<HTMLDivElement>('.section-yo');
const personalSectionContent: string = `
<div class="second-section">
<h4>"¿Límite? ¿Qué es eso?"</h4>
<h3 class="hola">¡hola! soy Beatriz</h3>
<h3 class="que-hago">Hago webs y apps</h3>
<p>De siempre marketiniana, ahora explorando - y en ello, amando - la programación. 
Una baza segura para tu equipo: absorvente y exprimible como una esponja 😂
<br><br>
¿Te atreves a dar esa primera oportunidad?</p>
</div>
`
personalSection?.insertAdjacentHTML('beforeend', personalSectionContent)

const projectsSection = document.querySelector<HTMLElement>('.section-algunos');

const projectsSectionContent = () => 
`<ul class="projects-list">
${PROJECTS.map((project: Project) =>
`
<li>
<a href=${project.projectURL}>
<img class="project-img" src=${project.image} alt=${project.name} target="blank" rel="noopener noreferrer"/>
</a>
</li>
`
).join('')}

</ul>`

projectsSection?.insertAdjacentHTML('beforeend', projectsSectionContent())

const contactSection = document.querySelector<HTMLElement>('.section-contacto');
const contactSectionContent: string = `
<div class="contact-info">
<div class="contact-details">
<a href="tel:+678207035">678 207 035</a>
<a href="mailto:b_a_ro@hotmail.com">b_a_ro@hotmail.com</a>
</div>
<div class="personal-links">
<a class="personal-link" href="https://github.com/Bea-ro" target="blank" rel="noopener noreferrer">GitHub</a>
<br>
<a class="personal-link" href="https://developer-portfolio-brm.netlify.app" target="blank" rel="noopener noreferrer">Portfolio</a>
</div>
<div>
`
contactSection?.insertAdjacentHTML('beforeend', contactSectionContent)


const scrollButton: HTMLElement | null = document.querySelector('.button');
window.addEventListener('scroll', () => {
  const currentSection = Array.from(sections).find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
  });

  if (scrollButton) {
    if (currentSection && currentSection !== sections[0]) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}
});

const scrollToTop = () => window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
});

scrollButton?.addEventListener('click', scrollToTop);