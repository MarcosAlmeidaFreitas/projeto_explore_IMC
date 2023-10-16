export function isNotNumber(value){
  return isNaN(value) || value == '';
}

export function calcular_IMC(weigth, heigth){
  return (weigth / ((heigth / 100) ** 2)).toFixed(2);
}

export function IMC(imc){
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
