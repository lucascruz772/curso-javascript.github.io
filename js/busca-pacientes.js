var buscaPaciente = document.querySelector("#busca-pacientes");

buscaPaciente.addEventListener("click", function(){ 

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        var certoAjax = document.querySelector("#certo-ajax");

        if(xhr.status == 200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function(paciente) {
            addPaciente(paciente); 
        });
        console.log(certoAjax);
        certoAjax.classList.remove("desaparece");
        buscaPaciente.classList.add("desaparece"); 
        setTimeout(ganharEsmeacer, 1000);
    }else{
        erroAjax.classList.remove("desaparece");
    }
    });

    xhr.send();
});

