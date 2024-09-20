function positivoNegativo(numero) {
  if (numero > 0) {
      return "O número é positivo.";
  } else if (numero < 0) {
      return "O número é negativo.";
  } else {
      return "O número é zero.";
  }
}


console.log(positivoNegativo(85)); 
console.log(positivoNegativo(-3));
console.log(positivoNegativo(0));  
