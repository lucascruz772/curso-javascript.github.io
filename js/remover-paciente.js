var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(exclui){
 /* var alvoEvento = exclui.target;
  var paiAlvo = alvoEvento.parentNode;  --metodo com variavel
  paiAlvo.remove();*/
  exclui.target.parentNode.classList.add("esmaecer");

    setTimeout(function(){
        exclui.target.parentNode.remove();
    }, 500);
  
});
