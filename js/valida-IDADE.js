export default function ehMaiorDeIdade(campo) {
  let dataDeNascimento = new Date(campo.value);
  validaIdade(dataDeNascimento);
}

function validaIdade(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataAtual >= dataMais18;
}
