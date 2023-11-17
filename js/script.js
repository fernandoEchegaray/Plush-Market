function alerta(elemento) {
  alert("Contact us at 555-5555 or plushstore@mailito.com");
}

var items = [0];
function add_product(indice) {
  items[indice]++;
  document.querySelector(".cantidad"+indice).innerText = items[indice];
}

const select = document.getElementById("select");
const output = document.getElementById("output");

  select.addEventListener("change", () => {
    output.innerText = select.value;
  });