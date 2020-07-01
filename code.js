var resultado=0;
var entrada=document.getElementById("numero");
var imprime=document.getElementById("resultado");
var suma=document.getElementById("suma");

var operacion="";
var val=0;
var anterior=0;

function operaciones(opcion){
  if(opcion==="suma"){
    resultado+=val;
  }else if(opcion==="resta"){
    resultado-=val;
  }else if(opcion==="multiplicacion"){
    resultado*=val;
  }else if(opcion==="division"){
    resultado/=val;
  }else if(opcion==="potencia"){
    resultado=Math.pow(resultado, val);
  }else if(opcion==="raiz"){
    resultado=Math.pow(resultado, (1/val));
    salida=document.createTextNode(")");
    imprime.appendChild(salida);
  }else if(opcion===""){
    resultado=val;
  }
}
function sumar(){
  if(operacion===""){
    imprime.innerText="";
  }
  val=parseFloat(entrada.innerText);
  salida=document.createTextNode(val);
  imprime.appendChild(salida);
  operaciones(operacion);
  salida=document.createTextNode("+");
  operacion="suma"
  entrada.innerText="";
  imprime.appendChild(salida);
}
function restar(){
  if(operacion===""){
    imprime.innerText="";
  }
  val=parseFloat(entrada.innerText);
  salida=document.createTextNode(val);
  imprime.appendChild(salida);
  operaciones(operacion);
  salida=document.createTextNode("-");
  operacion="resta"
  entrada.innerText="";
  imprime.appendChild(salida);
}
function multiplicar(){
  if(operacion===""){
    imprime.innerText="";
  }
  val=parseFloat(entrada.innerText);
  salida=document.createTextNode(val);
  imprime.appendChild(salida);
  operaciones(operacion);
  salida=document.createTextNode("×");
  operacion="multiplicacion"
  entrada.innerText="";
  imprime.appendChild(salida);
}
function dividir(){
  if(operacion===""){
    imprime.innerText="";
  }
  val=parseFloat(entrada.innerText);
  salida=document.createTextNode(val);
  imprime.appendChild(salida);
  operaciones(operacion);
  salida=document.createTextNode("÷");
  operacion="division"
  entrada.innerText="";
  imprime.appendChild(salida);
}
function potencia(){
  if(operacion===""){
    imprime.innerText="";
  }
  val=parseFloat(entrada.innerText);
  salida=document.createTextNode(val);
  imprime.appendChild(salida);
  operaciones(operacion);
  salida=document.createTextNode("^");
  operacion="potencia"
  entrada.innerText="";
  imprime.appendChild(salida);
}
function raiz(){
  if(operacion===""){
    imprime.innerText="";
  }
  val=parseFloat(entrada.innerText);
  salida=document.createTextNode(val);
  imprime.appendChild(salida);
  operaciones(operacion);
  salida=document.createTextNode("^(1/");
  operacion="raiz"
  entrada.innerText="";
  imprime.appendChild(salida);
}
function igual(){
  if(operacion===""){
    imprime.innerText="";
  }
  val=parseFloat(entrada.innerText);
  imprime.innerText+=(val);
  operaciones(operacion);
  imprime.innerText+=(" = ");
  operacion="";
  entrada.innerText=resultado;
  anterior=resultado;
}
function ans(){
  val=anterior;
  operaciones(operacion);
  entrada.innerText=val;
}
function borrar(){
  imprime.innerText="";
  resultado=0;
  operacion="";
  entrada.innerText="";
}
function teclear(tecla){
  entrada.innerText+=tecla;
}