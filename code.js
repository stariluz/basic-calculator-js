var result=0;
var entrada=document.getElementById("numero");
var imprime=document.getElementById("result");
var suma=document.getElementById("suma");

var operacion="";
var val=0;
var anterior=0;

function operaciones(opcion){
  if(opcion==="suma"){
    result+=val;
  }else if(opcion==="resta"){
    result-=val;
  }else if(opcion==="multiplicacion"){
    result*=val;
  }else if(opcion==="division"){
    result/=val;
  }else if(opcion==="potencia"){
    result=Math.pow(result, val);
  }else if(opcion==="raiz"){
    result=Math.pow(result, (1/val));
    salida=document.createTextNode(")");
    imprime.appendChild(salida);
  }else if(opcion===""){
    result=val;
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
  entrada.innerText=result;
  anterior=result;
}
function ans(){
  val=anterior;
  operaciones(operacion);
  entrada.innerText=val;
}
function eraseAll(){
  imprime.innerText="";
  result=0;
  operacion="";
  entrada.innerText="";
}
function teclear(tecla){
  entrada.innerText+=tecla;
}