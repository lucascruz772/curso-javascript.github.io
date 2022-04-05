function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function dadosPacientes(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //inclusão das td's dentro da Tr, com as informações
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

//montar as td com classes
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}


//validações
function validaPeso(peso) {
  if (peso > 30 && peso < 300) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0.3 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

function validaPaciente(paciente) {

  var erros = [];
  
  if(paciente.nome.length < 3) erros.push("Digite um nome com pelo menos 3 letras");

  if (!validaPeso(paciente.peso)) erros.push("Peso é invalido");
  
  if (paciente.gordura == 0 || paciente.gordura.length >= 3) erros.push("Digite uma % de gordura válida");

  if (!validaAltura(paciente.altura)) erros.push("Altura é invalido");
  
  return erros;
}

//exibir as mensagens de erro em uma lista

function exibeMensagensdeErro(erros){
  var ul = document.querySelector("#mensagem-erros");
  ul.innerHTML = "";

  erros.forEach(function (erro){
  var li = document.createElement("li");
  li.textContent = erro;
  ul.appendChild(li);
  });
}

