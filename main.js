const input_weight = document.querySelector('#input_weight');
const input_height = document.querySelector('#input_height');
const btn_calc = document.querySelector('#btn_calc');
const btn_close = document.querySelector('#btn_close')

btn_calc.addEventListener("click", tryClickSubmit);

function tryClickSubmit(event){
  event.preventDefault();
  let weight = input_weight.value;
  let height = input_height.value;

  let IMC = weight / (height * height);

  if(IMC < 17){

  }
}

function toggleScreen(){
  
}




