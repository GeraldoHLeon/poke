/* declarar variables*/
let boton = document.getElementById("boton")
let resultado = document.querySelector("#resultado")

boton.addEventListener("click", (e)=>{
e.preventDefault();
const email = document.getElementById("input1").value;
validarCorreo(email);

})

/*creacion de funcion*/
const validarCorreo = (input1)=>{
let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let verificar = expReg.test(input1);
verificar?resultado.innerHTML= "Te hemos enviado la informacion 💚":resultado.innerHTML= "Tu correo es invalido 🛑 "
}