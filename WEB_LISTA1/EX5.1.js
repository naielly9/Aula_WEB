let pessoa = {
  nome: "Naielly",
  idade: 21,
  profissao: "Analista e desenvolvedora de sistemas"
};

function descreverPessoa(obj) {
  return `${obj.nome} tem ${obj.idade} anos e é ${obj.profissao}.`;
}


console.log(descreverPessoa(pessoa));