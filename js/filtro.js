var campoFiltro = document.querySelector("#filtra-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0 ){
    for (var i = 0; i < pacientes.length ; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value,"i");

        if(!expressao.test(nome)){
            paciente.classList.add("desaparece");
        } else {
            paciente.classList.remove("desaparece");
        }
    }
} else {
    for (var i = 0; i < pacientes.length ; i++){
        var paciente = pacientes[i];
        paciente.classList.remove("desaparece");
}}
});