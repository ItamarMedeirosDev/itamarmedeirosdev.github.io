const sections = document.querySelectorAll('.js-scroll');


function animaScroll(){
  const windowHalf = window.innerHeight*0.6;
  sections.forEach((section)=>{
  const sectionTop = section. getBoundingClientRect().top;
  const isSectionVisible = (sectionTop - windowHalf)<0;

  if(isSectionVisible){
    section.classList.add('ativo')
  }
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);