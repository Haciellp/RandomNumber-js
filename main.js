window.onload=inicio;
let urlDeLaMoneda="https://www.html6.es/img/moneda.png";
let campoValor;
let monedas=5;
let coincidencia=0;

function inicio(){
    totalMonedas()
    mantenerFocus()
    document.querySelector(".boton").onclick=getValue;
    document.querySelector("#campo").onkeydown=teclado;

}

// Leer el contenido del input
function getValue(){
    coincidencia=0;
    campoValor=document.querySelector("#campo").value;
    if(campoValor>=2 && campoValor<=9){
        crearCuadros();

    }else{
        mantenerFocus()
        limpiarInput()
    }
}
//Funcion para Mantener Focus el input siempre que coincida o no
function mantenerFocus(){
    document.querySelector("#campo").focus();
}
//Funcion para limpiar el input
function limpiarInput(){
    document.querySelector("#campo").value="";
}
//Funcion para que haciendo "Enter" pueda ejecutar la funcion getValue
function teclado(e){
    let tecla= e.key;
    if(tecla=="Enter"){
        getValue()
    }
  }
  //crear cuadros
  function crearCuadros(){

    document.querySelector(".contenido").innerHTML="";
    for(let k=0;k<campoValor;k++){
        let randomNumber=Math.ceil(Math.random()*campoValor);
        let estilo=comprobar(randomNumber)
        document.querySelector(".contenido").insertAdjacentHTML("beforeend",`<div class="cuadro ${estilo}">${randomNumber}</div>`)
        mantenerFocus()
        limpiarInput()
    }
    if(coincidencia>0){
        var mensaje=`Se ha producido ${coincidencia} coincidencia${plural(coincidencia)} y has ganado ${coincidencia} moneda${plural(coincidencia)}`
        monedas+=coincidencia;
    }
    else{
        var mensaje= ` No se ha producido ninguna coincidencia y has perdido ${campoValor} moneda${plural(coincidencia)}`
        monedas-=campoValor;
    }
    document.querySelector(".informacion").innerHTML=mensaje;
    totalMonedas();
  }
  function comprobar(randomNumber){
    if(randomNumber==campoValor){
        coincidencia++;
        return "verde"
    }else{
        return "rojo"
    }
  }
  function totalMonedas(){
    let m=document.querySelector(".monedas");
        m.innerHTML=`<div>Monedas: <span class="grande">${monedas}</span></div>`;
    for(let i=0;i<monedas;i++){
        m.insertAdjacentHTML("beforeend",`<img src=${urlDeLaMoneda}>`)
    }
  }
  function plural(cantidad){
    if(cantidad!=1){
        return "s";
    }else{
        return "";
    }
  }
