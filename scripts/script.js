const productos = [
  { nombre: "Laptop Acer Aspire 5", precio: "$2.199.000", imagen: "../assets/imagenes/computador2.webp" },
  { nombre: "HP Pavilion 14 Ryzen 5", precio: "$2.499.000", imagen: "../assets/imagenes/computador5.webp" },
  { nombre: "Lenovo IdeaPad Gaming 3", precio: "$3.299.000", imagen: "../assets/imagenes/computador8.webp" },
  { nombre: "Asus VivoBook S14", precio: "$2.599.000", imagen: "../assets/imagenes/computador3.webp" },
  { nombre: "Dell Inspiron 15 3000", precio: "$2.899.000", imagen: "../assets/imagenes/computador10.webp" },
  { nombre: "MSI Modern 14", precio: "$3.199.000", imagen: "../assets/imagenes/computador4.webp" },
  { nombre: "Apple MacBook Air M1", precio: "$4.499.000", imagen: "../assets/imagenes/computador7.webp" },
  { nombre: "Lenovo ThinkPad E14", precio: "$3.599.000", imagen: "../assets/imagenes/computador6.webp" },
  { nombre: "HP Victus 16", precio: "$4.199.000", imagen: "../assets/imagenes/computador1.webp" },
  { nombre: "Asus TUF Gaming F15", precio: "$4.899.000", imagen: "../assets/imagenes/computador9.webp" },
  { nombre: "Huawei MateBook D15", precio: "$3.099.000", imagen: "../assets/imagenes/computador4.webp" },
  { nombre: "Gigabyte G5 Gaming", precio: "$3.799.000", imagen: "../assets/imagenes/computador2.webp" },
  { nombre: "Dell XPS 13", precio: "$5.199.000", imagen: "../assets/imagenes/computador6.webp" },
  { nombre: "Acer Nitro 5", precio: "$3.999.000", imagen: "../assets/imagenes/computador1.webp" },
  { nombre: "HP Envy x360", precio: "$4.299.000", imagen: "../assets/imagenes/computador10.webp" },
  { nombre: "Asus ZenBook 14", precio: "$3.899.000", imagen: "../assets/imagenes/computador3.webp" },
  { nombre: "MacBook Pro M2", precio: "$6.199.000", imagen: "../assets/imagenes/computador7.webp" },
  { nombre: "Lenovo Legion 5", precio: "$4.599.000", imagen: "../assets/imagenes/computador9.webp" },
  { nombre: "HP ProBook 440", precio: "$2.999.000", imagen: "../assets/imagenes/computador5.webp" },
  { nombre: "MSI GF63 Thin", precio: "$3.699.000", imagen: "../assets/imagenes/computador8.webp" },
  { nombre: "Chuwi HeroBook Pro", precio: "$1.299.000", imagen: "../assets/imagenes/computador6.webp" },
  { nombre: "Samsung Galaxy Book3", precio: "$3.299.000", imagen: "../assets/imagenes/computador2.webp" },
  { nombre: "Microsoft Surface Laptop Go", precio: "$3.099.000", imagen: "../assets/imagenes/computador4.webp" },
  { nombre: "Acer Swift 3", precio: "$2.699.000", imagen: "../assets/imagenes/computador1.webp" },
  { nombre: "HP Spectre x360", precio: "$5.099.000", imagen: "../assets/imagenes/computador9.webp" },
  { nombre: "Asus ROG Zephyrus G14", precio: "$5.499.000", imagen: "../assets/imagenes/computador7.webp" },
  { nombre: "Lenovo Yoga Slim 7", precio: "$3.599.000", imagen: "../assets/imagenes/computador8.webp" },
  { nombre: "Dell Latitude 3520", precio: "$3.299.000", imagen: "../assets/imagenes/computador10.webp" },
  { nombre: "HP Chromebook 14", precio: "$1.499.000", imagen: "../assets/imagenes/computador3.webp" },
  { nombre: "Acer Chromebook Spin 514", precio: "$1.899.000", imagen: "../assets/imagenes/computador5.webp" },
  { nombre: "Huawei MateBook X Pro", precio: "$4.899.000", imagen: "../assets/imagenes/computador6.webp" },
  { nombre: "Apple MacBook Pro 16", precio: "$8.499.000", imagen: "../assets/imagenes/computador7.webp" },
  { nombre: "Asus ROG Strix G15", precio: "$4.299.000", imagen: "../assets/imagenes/computador9.webp" },
  { nombre: "Lenovo ThinkBook 14", precio: "$3.199.000", imagen: "../assets/imagenes/computador2.webp" },
  { nombre: "MSI Katana GF76", precio: "$4.499.000", imagen: "../assets/imagenes/computador1.webp" },
  { nombre: "HP ZBook Firefly", precio: "$6.299.000", imagen: "../assets/imagenes/computador10.webp" },
  { nombre: "Acer Predator Helios 300", precio: "$5.999.000", imagen: "../assets/imagenes/computador4.webp" },
  { nombre: "Dell G15 Gaming", precio: "$4.199.000", imagen: "../assets/imagenes/computador3.webp" },
  { nombre: "Asus ProArt StudioBook", precio: "$7.299.000", imagen: "../assets/imagenes/computador8.webp" },
  { nombre: "Samsung Galaxy Book2", precio: "$2.799.000", imagen: "../assets/imagenes/computador5.webp" },
  { nombre: "Lenovo Flex 5", precio: "$3.499.000", imagen: "../assets/imagenes/computador6.webp" },
  { nombre: "MSI Summit E14", precio: "$4.699.000", imagen: "../assets/imagenes/computador7.webp" },
  { nombre: "HP EliteBook 845", precio: "$3.999.000", imagen: "../assets/imagenes/computador9.webp" },
  { nombre: "Chuwi GemiBook X", precio: "$1.099.000", imagen: "../assets/imagenes/computador1.webp" },
  { nombre: "Apple MacBook Air M2", precio: "$5.099.000", imagen: "../assets/imagenes/computador2.webp" },
  { nombre: "Asus ExpertBook B9", precio: "$6.799.000", imagen: "../assets/imagenes/computador3.webp" },
  { nombre: "Acer TravelMate P2", precio: "$2.199.000", imagen: "../assets/imagenes/computador10.webp" },
  { nombre: "HP Omen 16", precio: "$5.499.000", imagen: "../assets/imagenes/computador4.webp" },
  { nombre: "Lenovo V14 Ryzen 3", precio: "$1.799.000", imagen: "../assets/imagenes/computador8.webp" },
  { nombre: "Acer Predator Holox 950", precio: "$5.399.000", imagen: "../assets/imagenes/computador4.webp" }
];



const contenedor = document.getElementById("contenedor-productos");

productos.forEach(producto => {
    contenedor.innerHTML += `
    <article class="tarjeta-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}" width=200>
        <h3>${producto.nombre}</h3>
        <p class="precio">${producto.precio}</p>
        <button>Agregar</button>
    </article>
    `;
});
