const form = document.querySelector('form');
const input_weight = document.querySelector('#input_weight');
const input_height = document.querySelector('#input_height');
const btn_calc = document.querySelector('#btn_calc');
const btn_close = document.querySelector('#btn_close')

const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span')

form.onsubmit = function(event){
  event.preventDefault();

  const weigth = input_height.value
  const heigth = input_height.value
  const imc = calcular_IMC(weigth, heigth);
}



function toggleScreen(){
  
}

function calcular_IMC(weigth, heigth){
  return (weigth / ((heigth / 100) ** 2)).toFixed(2);
}

function IMC(imc){
  if(imc < 17){
    return 'Muito abaixo do peso'
  }else if(imc >= 17 && imc <= 18.49){
    return 'Abaixo do peso';
  }else if(imc>=18.5 && imc<=24.99){
    return 'Peso normal'
  }else if(imc>= 25 && imc<=29.99){
    return 'Acima do peso'
  }else if(imc>=30 && imc<=34.99){
    return 'Obesidade grau 1'
  }else if(imc >= 35 && imc<=39.99){
    return 'Obesidade grau 2 (severa)'
  }else if(imc >= 40){
    return 'Obesidade grau 3 (obesidade mórbida)'
  }
}


