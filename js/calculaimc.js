//alterar o titulo principal
let titulo = document.querySelector(".titulo");
titulo.textContent = "Lija Nutricionista";

//pegando o kg e altura dos pacientes
let pacientes = document.querySelectorAll(".paciente");


for (i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

  //guardando-os em uma variavel
  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;
  let alturacliente = paciente.querySelector(".info-altura");
  let altura = alturacliente.textContent;

  //pegando o valor de imc atual
  let tdimc = paciente.querySelector(".info-imc");

  //calculando o imc
  let imc = peso / (altura * altura);

  let pesoValidacao = validaPeso(peso);
  let alturaValidacao = validaAltura(altura);

  //editando o imc na tabela
  tdimc.textContent = imc;

  if (!pesoValidacao) {
    pesoValidacao = false;
    tdimc.textContent = "Peso invalido";
    paciente.classList.add("paciente-invalido");
    }

  if (!alturaValidacao) {
    alturaValidacao = false;
    tdimc.textContent = "Altura invalida!";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValidacao && pesoValidacao) {
    let imc = calculaImc(peso,altura);
    tdimc.textContent = imc;
  }
}

