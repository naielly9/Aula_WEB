function somarArray(Lista) {
  let soma = 0;
  for (let num of Lista) {
      soma += num;
  }
  return soma;
}


console.log(somarArray([7, 2, 10, 4, 25])); 
