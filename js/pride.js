const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("pride");
  btnSwitch.classList.toggle("active");
  //guardamos modo en localStorage//
document.body.classList.contains("pride")?localStorage.setItem("pride-mode", "true"):localStorage.setItem("pride-mode", "false");
});

//obtener modo actual//
if (localStorage.getItem("pride-mode") === "true") {
  document.body.classList.add("pride");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("pride");
  btnSwitch.classList.remove("active");
}
