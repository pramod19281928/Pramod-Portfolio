const links = [...document.querySelectorAll('.control')];
const sections = [...document.querySelectorAll('header[id], main section[id]')];

const setActive = () => {
  const pivot = window.scrollY + window.innerHeight * 0.42;
  let current = sections[0].id;
  sections.forEach(section => { if (section.offsetTop <= pivot) current = section.id; });
  links.forEach(link => link.classList.toggle('active', link.dataset.section === current));
};

window.addEventListener('scroll', setActive, { passive: true });
window.addEventListener('load', setActive);
