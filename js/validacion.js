/*declaracion de variables*/

let tarjetaOculta = document.querySelector(".formulario-tarjeta")
let numeroTarjeta = document.querySelector("#inputNumero")
let nombreTarjeta = document.querySelector("#inputNombre")
let firma = document.querySelector(".firma")


// /*funcion*/

function mostrar(){
tarjetaOculta.classList.contains("formulario-tarjetaT")?tarjetaOculta.classList="formulario-tarjeta":tarjetaOculta.classList="formulario-tarjetaT"
}


/*mostrar formulario*/
const mostrarFormulario=document.querySelector("#btnAbrir");
mostrarFormulario.addEventListener("click", mostrar);

//input numero de tarjeta//
tarjetaVisualNumero=document.querySelector("#numero"),
tarjetaVisualNombre=document.querySelector("#nombre");
logo=document.querySelector("#logo-marca")
numeroTarjeta.addEventListener("keyup",(e)=>{
    let valorInput=e.target.value;
    numeroTarjeta.value=valorInput
    .replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

    tarjetaVisualNumero.textContent=valorInput;

    if(valorInput==""){tarjetaVisualNumero.textContent="#### #### #### ####"};
    logo.innerHTML=""
    if(valorInput[0]== 4){ const imagen= document.createElement("img");
    imagen.src="/imagenes/visa.png";
    logo.appendChild(imagen);
} else if(valorInput[0]== 5){const imagen= document.createElement("img");
imagen.src="/imagenes/mastercard.png";
logo.appendChild(imagen);}
});

//input nombre de tarjeta//

nombreTarjeta.addEventListener("keyup",(e)=>{
let valorInput=e.target.value;
nombreTarjeta.value=valorInput
.replace(/[0-9]/g, '');
tarjetaVisualNombre.textContent=valorInput;
firma.textContent=valorInput;


})

