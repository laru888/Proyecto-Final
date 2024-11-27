const menus = [{nombre: "Inicio", url: "index.html"},
  {nombre: "Contacto", url: "contacto.html"},
  {nombre: "Carrito", url: "carrito.html"},
]

function cargarmenu() {
let enlaces = document.getElementById("ulmenu")
for (const menu of menus) {
let lista = document.createElement("li")
lista.innerHTML =`<a href=${menu.url}>${menu.nombre}</a>`;
enlaces.appendChild(lista);
}
}
cargarmenu() 

const productos = [
    {
        id: 1,
        nombre: "Cosmeticos",
        stock: 123,
        imagen: "maquillaje.jpg",
        precio: 29.99, 
        descripcion: "Productos de belleza y maquillaje."
    
    },
    {
        id: 2,
        nombre: "Cuidado Facial",
        stock: 231,
        imagen: "skincare5.jpg",
        precio: 39.99,
        descripcion: "Productos para el cuidado de la piel."
    },
    {
        id: 3,
        nombre: "Fragancias",
        stock: 312,
        imagen: "perfume.jpg",
        precio: 59.99,
        descripcion: "Diferentes tipos de perfumes."
    },
    {
        id: 4,
        nombre: "Joyeria",
        stock: 456, 
        imagen: "accesorios.jpg",
        precio: 149.99,
        descripcion: "Accesorios y joyas elegantes."
    },
    {
        id: 5,
        nombre: "Bolsos",
        stock: 564, 
        imagen: "bolsos.jpg",
        precio: 199.99,
        descripcion: "Bolsos de moda y calidad."
    },
    {
        id: 6,
        nombre: "Moda",
        stock: 645, 
        imagen: "bikini.jpeg",
        precio: 79.99,
        descripcion: "Ropa de moda para todas las ocasiones."
    }
];


function cargarproductos() {
let enlaces = document.getElementById("boxproductos")
for (const producto of productos) {
let lista = document.createElement("div")
lista.innerHTML =` <div class = "boxcomprar">
                  <h3>${producto.nombre}</h3>
                  <img src=${producto.imagen} alt="" width ="300px">
                  <p>${producto.precio}</p>
                  <button onclick="verdetalle('${producto.id}')">Detalles</button>
                  </div>
              `;
enlaces.appendChild(lista);
}
}
cargarproductos()

function verdetalle(idproducto) {
const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
const enJSON = JSON.stringify(buscarProducto);
localStorage.setItem("detalleproducto", enJSON)
window.location.href="detalle.html"
}

