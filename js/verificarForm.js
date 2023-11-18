function enviarFormulario() {
  var nome = document.getElementById("nome").value;
  var fone = document.getElementById("fone").value;
  var email = document.getElementById("email").value;
  var opiniao = document.getElementById("opiniao").value;

  if (verificarNome(nome)) {
    alert("Por favor, preencha o campo 'Seu nome' corretamente!!")
    return false;
  } else if (verificarTelefone(fone)) {
    alert("Por favor, preencha o campo 'Seu telefone' corretamente!!")
    return false;
  } else if (verificarEmail(email)) {
    alert("Por favor, preencha o campo 'Seu email' corretamente!!")
    return false;
  } else if (verificarOpiniao(opiniao)) {
    alert("Por favor, preencha o campo 'Deixe aqui sua opiniao' corretamente!!")
    return false;
  } 

  document.getElementById("enviar-mensagem").submit();
}

function verificarNome(nome) {
  return nome == "" || nome.length < 10;
}

function verificarTelefone(fone) {
  return fone == "" || fone.length != 10;
}

function verificarEmail(email) {
  return email == "" || !validarEmail(email);
}

function validarEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function verificarOpiniao(opiniao) {
  return opiniao == "" || !(opiniao.length >= 10 && opiniao.length <= 50);
}
