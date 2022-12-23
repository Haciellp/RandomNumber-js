window.onload=inicio;
let urlDeLaMoneda="https://www.html6.es/img/moneda.png"
let randomNumber;
let campoValor;

function inicio(){
    mantenerFocus()
    document.querySelector(".boton").onclick=getValue;
    document.querySelector("#campo").onkeydown=teclado;

}
function getValue(){
    campoValor=document.querySelector("#campo").value;
    if(campoValor>=2 && campoValor<=9){
        let randomNumber=Math.floor(Math.random() * 10);
        document.querySelector(".contenido").insertAdjacentHTML("beforeend",`<div class="cuadro rojo">${randomNumber}</div>`)
        mantenerFocus()
        limpiarInput()
    }else{
        mantenerFocus()
        limpiarInput()
    }
}
function mantenerFocus(){
    document.querySelector("#campo").focus();
}
function limpiarInput(){
    document.querySelector("#campo").value="";
}
function teclado(e){
    let tecla= e.key;
    if(tecla=="Enter"){
        getValue()
    }
  }