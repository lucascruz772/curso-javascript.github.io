var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //buscar as informações do #form-adciona
    
    var form = document.querySelector("#form-adiciona");

    //pegar os valores dos campos dos forms

    var paciente = dadosPacientes(form);

    //criar a tr (tabela), indicando onde quer criar
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensdeErro(erros);
        return; 
    }
   
    //colocando dentro da tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
    var erro = document.querySelector("#mensagem-erros");
    erro.innerHTML = "";
});




