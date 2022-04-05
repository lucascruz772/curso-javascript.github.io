var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(exclui){
 /* var alvoEvento = exclui.target;
  var paiAlvo = alvoEvento.parentNode;  --metodo com variavel
  paiAlvo.remove();*/
  exclui.target.parentNode.remove();
});
