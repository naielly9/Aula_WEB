function classificarIdade(idade) {
  if (idade >= 0 && idade <= 12) {
      return "Criança";
  } else if (idade >= 13 && idade <= 17) {
      return "Adolescente";
  } else if (idade >= 18 && idade <= 59) {
      return "Adulto";
  } else {
      return "Idoso";
  }
}


console.log(classificarIdade(6)); 
console.log(classificarIdade(14)); 
console.log(classificarIdade(33)); 
console.log(classificarIdade(62)); 