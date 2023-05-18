const stepForm = document.getElementById('step-form');
const designDiario = document.getElementById('design-diario');
const barbeariaAlura = document.getElementById('barbearia-alura');
const projectLinks = document.querySelectorAll('.project__link');

projectLinks.forEach(link => {
  link.addEventListener('click', event => event.stopPropagation());
})

stepForm.addEventListener('click', event => {
  event.stopPropagation();
  window.open('https://ananuness.github.io/step-form/', '_blank');
});

designDiario.addEventListener('click', event => {
  event.stopPropagation();
  window.open(
    `https://www.figma.com/file/zg2upbaEV1TRGgJDryU65e/Design-Di%C3%A1rio?
    type=design&node-id=153%3A4118&t=wguV2bcUwLVxJeCg-1`, 
    '_blank'
  );
});

barbeariaAlura.addEventListener('click', event => {
  event.stopPropagation();
  window.open('https://ananuness.github.io/barbearia-alura/', '_blank');
});