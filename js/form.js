var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();    

    var form = document.querySelector("#form-adiciona");
    var paciente = dadosPacientes(form);
    var erros = validaPaciente(paciente);

    addPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensdeErro(erros);
        return; 
    }
   
    form.reset();
    var erro = document.querySelector("#mensagem-erros");
    erro.innerHTML = "";
});




