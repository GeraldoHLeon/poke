const botonAdoptar= document.querySelector(".botonAdoptar");

botonAdoptar.addEventListener("click",()=>{
Swal.fire({
  title: '!Fantastico¡ dime tu email',
  input: 'email',
  inputLabel: 'Te enviaremos toda la informacion para que puedas agendar una visita',
  inputPlaceholder: 'profesorOak@gmail.com'
})
});





