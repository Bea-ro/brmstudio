import './style.css'
import { Section, introSection, personalSection, projectsSection, contactSection } from './components/ui/Section/Section'
import { Button } from './components/ui/Button/Button';
import { titlesTexts } from './data/titlesTexts'
import { scrollToTop, showScrollButton } from './utils/scrollEvents'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <body>
  <article>
${Section(introSection, true)} 
${Section(personalSection, false)}
${Section(projectsSection(), false)}
${Section(contactSection, false)}
    </article>  
    
    <aside>
    <img class="personal-img" src="/personal-img.jpg" alt="brmstudio"/>
    ${Button("&#8743;", "scroll-button")}
    </aside>

    </body>
`

const titles: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('h2');
titlesTexts.map((text, i) => titles[i].innerText = text)

const sections: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('section');
const scrollButton: HTMLButtonElement | null = document.querySelector('.scroll-button');

window.addEventListener('scroll', () => showScrollButton(sections, scrollButton));
scrollButton?.addEventListener('click', scrollToTop);


