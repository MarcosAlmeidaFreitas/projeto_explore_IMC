export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message1: document.querySelector('#message1'),
  message2: document.querySelector('#message2'),
  btn_close: document.querySelector('#btn_close'),

  open(){
    Modal.wrapper.classList.add('open');
  },

  close(){
    Modal.wrapper.classList.remove('open');
  }
}

Modal.btn_close.addEventListener('click', ()=>{
  Modal.close();
});

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event){
  if(event.key === 'Escape'){
    Modal.close();
  }
}