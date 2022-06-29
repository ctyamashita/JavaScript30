const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  const input = e.target
  const image = document.querySelector('.image');
  const suffix = input.dataset.sizing || '';
  image.style.setProperty(`--${input.name}`, input.value + suffix)
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
