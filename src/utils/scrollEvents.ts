export const showScrollButton = (sections: NodeListOf<HTMLElement>, scrollButton: HTMLButtonElement | null): void => {
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
}

export const scrollToTop = (): void => window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });