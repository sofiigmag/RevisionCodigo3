/* Agregamos punto y coma al final de varias líneas */

/* Modificamos la ruta de las imágenes porque se encuentran en el mismo directorio */
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "zapato-rojo.jpg" }
];

/* cambiar getElementByName por getElementById porque lista-de-productos es un Id no un nombre */
/* cambiamos el nombre de algunas variables para que sean mas fáciles de entender */
const listaProductos = document.getElementById("lista-de-productos");
const $inputColor = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;

  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  listaProductos.appendChild(d);
}

//displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = $inputColor.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaProductos.appendChild(d);
  }
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}; 