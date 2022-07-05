const panels = document.querySelectorAll(".panel");

const toggleOpen = (e) => {
  panels.forEach(panel => panel.classList.remove('open'))
  e.target.classList.add('open');
  if (e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
