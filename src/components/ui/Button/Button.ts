import './Button.css'

export const Button = (text: string, className: string): string =>
   `
    <button type="button" class="${className}">
    ${text}
    </button>
  `;



