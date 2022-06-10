export const calculaIdade = (dataNasc:any) => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const anoNascParts = dataNasc.split("/");
  const diaNasc = Number(anoNascParts[0]);
  const mesNasc = Number(anoNascParts[1]);
  const anoNasc = Number(anoNascParts[2]);
  let idade = anoAtual - anoNasc;
  const mesAtual = dataAtual.getMonth() + 1;
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (mesAtual < mesNasc) {
    idade--;
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (mesAtual == mesNasc) {
      if (new Date().getDate() < diaNasc) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--;
      }
    }
  }
  return idade;
};