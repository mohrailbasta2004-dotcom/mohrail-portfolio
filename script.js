// Highlights the nav link for the section currently in view.
const sections = document.querySelectorAll('section[id], .wrap.hero[id]');
const navLinks = document.querySelectorAll('.navlinks a');

function setActiveLink() {
  let current = '';
  document.querySelectorAll('section[id]').forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();
