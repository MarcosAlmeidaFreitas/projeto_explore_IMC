export const AlertError = {
  element: document.querySelector('.alert-error'),
  open(){
    AlertError.element.classList.add('open')
  },
  close(){
    AlertError.element.classList.remove('open')
  }
}

input_weight.addEventListener('keypress', ()=>{
  AlertError.close();
});

input_height.addEventListener('keypress', ()=>{
  AlertError.close();
});