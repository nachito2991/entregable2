const mercaderia = [
        {id :1,
        titulo: "tableteria",
        precio: 500,
        img:  "https://www.instagram.com/p/CbOWmqDAJFN/",
        },

        {id :2,
        titulo: "Helados",
        precio: 1000,
        img:  "https://www.instagram.com/p/CZ5YFejgAWt/",
        },



        {id :3,
        titulo: "Postres",
        precio: 600,
        img:  "https://www.instagram.com/p/CbJIKXvApdA/",
        },

        {id :4,
        titulo: "mayorista",
        precio: 4000,
        img:  "https://www.instagram.com/p/CU57IsWAuYA/",
        },
    ];

    let  carrito =[];
    const items = document.querySelector("#items");
    const carritoHTML = document.querySelector("#carrito");



function renderizarProductos(){
    mercaderia.forEach((producto) => {

            let productoHTML =`
            
            <div class="card" style="width: 18rem;">
  <img src="${mercaderia.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mercaderia.producto}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p> $${mercaderia.precio}</p>
    <a href="#" class="btn btn-primary" onclick="AgregarProductoAlCarrito"(${producto.id})>agregar al carrito</a>
  </div>
</div>
            
 `;

            items.innerHTML += productoHTML;
          
    });
}
renderizarProductos () ;