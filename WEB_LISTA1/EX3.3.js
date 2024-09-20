function contarPares(listaPar) {
  let totalPares = 0;
  for (let num of listaPar) {
      if (num % 2 === 0) {
          totalPares++;
      }
  }
  return totalPares;
}


console.log(contarPares([1, 2, 3, 4, 5, 6])); 
