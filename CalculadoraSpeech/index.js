window.onload = function (){

  document.getElementById("9").onclick = function () {

            preencher(9);
    }
  document.getElementById("8").onclick = function () {

            preencher(8);
    }
  document.getElementById("7" ).onclick = function () {

            preencher(7);
    }
  document.getElementById("6").onclick = function () {

            preencher(6);
    }
  document.getElementById("5").onclick = function () {

            preencher(5);
    }
  document.getElementById("4").onclick = function () {

            preencher(4);
    }
  document.getElementById("3").onclick = function () {

            preencher(3);
    }
  document.getElementById("2").onclick = function () {

            preencher(2);
    }
  document.getElementById("1").onclick = function () {

            preencher(1);
    }
  document.getElementById("0").onclick = function () {

            preencher(0);
    }
  document.getElementById("-").onclick = function () {

            preencher("-");
    }
  document.getElementById("*").onclick = function () {

            preencher("*");
    }
  document.getElementById("/").onclick = function () {

            preencher("/");
    }
  document.getElementById("+").onclick = function () {

            preencher("+");
    }

    document.getElementById("limpar").onclick = function(){
        limpar();
      }
      document.getElementById("=").onclick = function(){
          calcular();
        }


}

function preencher(valor){

  document.getElementById("res").value += valor;
 

 }

 function limpar(){
   document.getElementById("res").value = " ";
 }

 function calcular(){
    var resultado = 0;
    resultado = document.getElementById("res").value
    document.getElementById("res").value = eval(resultado)

 }