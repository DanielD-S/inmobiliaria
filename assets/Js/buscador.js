/*Propiedades cada template, tipo db*/
const productos = [
    {
        id: 1,
        nombre: "Casa de Campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "./assets/img/campo.jpg",
        cuartos: 2,
        metros: 170
    },
    {
        id: 2,
        nombre: "Casa de Playa",
        descripcion: "Despierta tus dias oyendo el oceano",
        src: "./assets/img/casaplaya.jpg",
        cuartos: 2,
        metros: 130
    },
    {
        id: 3,
        nombre: "Casa en el Centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src: "./assets/img/casacentro.jpg",
        cuartos: 1,
        metros: 80
    },
    {
        id: 4,
        nombre: "Casa Rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "./assets/img/casrodante.jpeg",
        cuartos: 1,
        metros: 6
    },
    {
        id: 5,
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "./assets/img/depa.jpg",
        cuartos: 3,
        metros: 200
    },
    {
        id: 6,
        nombre: "Mansión",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "./assets/img/mansion.jpg",
        cuartos: 5,
        metros: 500
    },

]

/* Construccion Template Individual*/
function construyeCard(producto) {
    let productoTemplate =
        `<div class="card2"  style="width: 15rem; margin-top:15px">
    <img src="${producto.src}" class="card-img-top" alt="Imagen">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <div class="flex">
            <p class="card-text">Cuartos: ${producto.cuartos}</p>
            <p class="card-text">Metros: ${producto.metros}</p>
        </div>
        <p class="card-text">${producto.descripcion}</p>
        </div>
        <div class="boton-template2">
            <a href="#" class="btn btn-primary boton-template">Ver Mas</a>
        </div> 
    </div>`;
    return productoTemplate
}

/* Ciclo recorrido template*/
let html = '';
for (const producto of productos) {
    html += construyeCard(producto);
}
/* Creacion de Templates en HTML*/
const productosDiv = document.querySelector('#productos');
productosDiv.innerHTML = html

/* Funcion Buscador*/
function buscador() {
    const cantidadCuartos = Number(document.querySelector("#cantidad1").value);
    const metrosDesde = Number(document.querySelector("#desde").value);
    const metroshasta = Number(document.querySelector("#hasta").value);
    let htmlFiltrado = '';
    let contador2 = 0;
    let html2 = '';
    /* Condicion 1, validacion de parametros busqueda, si alguno no tiene datos*/
    if (cantidadCuartos == '' || metrosDesde == '' || metroshasta == '') {
        for (const producto2 of productos) {
            html2 += construyeCard(producto2);
        }
        alert('Debes Rellenar todos los campos de Busqueda');
        return (producto2);
    } /* Condicion 2, si hay parametros de busqueda recorra Array y genere card segun corresponda*/
    else {
        for (let objeto of productos) {
            if (cantidadCuartos == objeto.cuartos &&
                (objeto.metros >= metrosDesde && objeto.metros <= metroshasta)) {
                htmlFiltrado += construyeCard(objeto);
                contador2++
            }
        }
    }

    /*Si No hay Datos buscados*/
    if (contador2 == 0) {
        alert("No Hay Construcciones con esos parametros de Busqueda")
        return (producto2);
    }


    /*Creacion Card Buscador*/
    const productosDiv3 = document.querySelector('#productos');
    productosDiv3.innerHTML = htmlFiltrado;

    /*Creacion Totalidad de Card encontradas*/
    const cantidad = document.querySelector('#contador');
    contador.innerHTML = "<b>Total Inmuebles:</b> " + contador2;

}


