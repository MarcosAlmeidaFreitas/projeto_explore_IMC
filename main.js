const form = document.querySelector('form');
const input_weight = document.querySelector('#input_weight');
const input_height = document.querySelector('#input_height');
const btn_calc = document.querySelector('#btn_calc');




const Modal = {
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

form.onsubmit = function(event){
  event.preventDefault();
  const weigth = input_weight.value;
  const heigth = input_height.value;
  const imc = calcular_IMC(weigth, heigth);
  const message1 = `Seu imc é de ${imc}`;
  const message2 = IMC(imc);
  
  Modal.open();
  Modal.message1.innerText = message1;
  Modal.message2.innerText = message2;
  
}

Modal.btn_close.addEventListener('click', ()=>{
  Modal.close();
});


function calcular_IMC(weigth, heigth){
  return (weigth / ((heigth / 100) ** 2)).toFixed(2);
}

function IMC(imc){
  if(imc < 17){
    return 'Você está muito abaixo do peso'
  }else if(imc >= 17 && imc <= 18.49){
    return 'Você está abaixo do peso';
  }else if(imc >= 18.5 && imc <= 24.99){
    return 'Você está com o peso normal'
  }else if(imc >= 25 && imc <= 29.99){
    return 'Você está com sobrepeso'
  }else if(imc >= 30 && imc <= 34.99){
    return 'Você está com obesidade grau 1'
  }else if(imc >= 35 && imc <= 39.99){
    return 'Você está com obesidade grau 2 (severa)'
  }else if(imc >= 40){
    return 'Você está com obesidade grau 3 (obesidade mórbida)'
  }
}


