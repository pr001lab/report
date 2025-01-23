const elStateSignButton= document.querySelector('.state-sign__button');
const elIdentificationPersonsButton= document.querySelector('.identification-persons__button');
const elStateSignSection= document.querySelector('.state-sign__section');
const elIdentifiedPersonsSection= document.querySelector('.identified-persons__section');

elStateSignButton.addEventListener('click',()=>{
  elStateSignButton.classList.toggle('active');
  elIdentificationPersonsButton.classList.toggle('active');
  elStateSignSection.classList.toggle('active');
  elIdentifiedPersonsSection.classList.toggle('active');
})

elIdentificationPersonsButton.addEventListener('click',()=>{
  elStateSignButton.classList.toggle('active');
  elIdentificationPersonsButton.classList.toggle('active');
  elStateSignSection.classList.toggle('active');
  elIdentifiedPersonsSection.classList.toggle('active');
})
