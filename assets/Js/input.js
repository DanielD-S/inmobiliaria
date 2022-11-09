/*Validacion Solo datos Numericos no permite letras*/
onload = function(){ 
    var elemento = document.querySelectorAll('.inputcuartos')[0];
    elemento.onkeypress = function(cuartos) {
       if(isNaN(this.value+String.fromCharCode(cuartos.charCode)))
          return false;
    }
    elemento.onpaste = function(cuartos){
       cuartos.preventDefault();
    }
    var elemento2 = document.querySelectorAll('.inputdesde')[0];
    elemento2.onkeypress = function(desde) {
       if(isNaN(this.value+String.fromCharCode(desde.charCode)))
          return false;
    }
    elemento2.onpaste = function(desde){
       elemento2.preventDefault();
    }
    var elemento3 = document.querySelectorAll('.inputhasta')[0];
    elemento3.onkeypress = function(hasta) {
       if(isNaN(this.value+String.fromCharCode(hasta.charCode)))
          return false;
    }
    elemento3.onpaste = function(hasta){
       hasta.preventDefault();
    }
  } 
