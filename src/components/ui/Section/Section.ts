import './Section.css'
import { Title } from '../Title/Title';
import { PROJECTS } from '../../../data/projects'
import { personalData } from '../../../data/personalData'
import { phoneFormat } from '../../../utils/phoneFormat'
import { Project } from '../../../types/project';

export const Section = (sectionContent: string, hide: boolean): string => 
`
  <section>
  ${Title()}
  ${hide ? '<div class="underline" hidden></div>' : '<div class="underline"></div>'}
  ${sectionContent}
  </section>
    `
export  const introSection: string = `
    <h3>Full Stack Developer con experiencia en Marketing</h3>
    <h1>brmstudio</h1>
    <a href=${personalData.links.linkedin} class="linkedin-link" target="blank" rel="noopener noreferrer">
    <img src="/linkedin-icon.jpg" alt="linkedin-icon" class="linkedin-icon"/></a>
    `

export const personalSection: string = `
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
export const projectsSection = (): string => 
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

export const contactSection: string = `
<div class="contact-info">
<div class="contact-details">
<a href="tel:+${personalData.phone}">${phoneFormat(personalData.phone)}</a>
<a href="mailto:${personalData.mail}">b_a_ro@hotmail.com</a>
</div>
<div class="personal-links">
<a class="personal-link" href=${personalData.links.github} target="blank" rel="noopener noreferrer">GitHub</a>
<br>
<a class="personal-link" href=${personalData.links.portfolio} target="blank" rel="noopener noreferrer">Portfolio</a>
</div>
<div>
`
