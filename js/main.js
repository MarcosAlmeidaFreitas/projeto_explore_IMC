import { Modal } from "./modal.js";
import { AlertError } from './alert-error.js'
import * as Util from './utils.js'

const form = document.querySelector('form');
const input_weight = document.querySelector('#input_weight');
const input_height = document.querySelector('#input_height');


form.onsubmit = function(event){
  event.preventDefault();
  const weigth = input_weight.value;
  const heigth = input_height.value;

  if(Util.isNotNumber(weigth) == false && Util.isNotNumber(heigth) == false){
    AlertError.close();
    const imc = Util.calcular_IMC(weigth, heigth);
    const message1 = `Seu imc é de ${imc}`;
    const message2 = Util.IMC(imc);
    
    Modal.open();
    Modal.message1.innerText = message1;
    Modal.message2.innerText = message2;
  }else{
    AlertError.open();
  }
}


