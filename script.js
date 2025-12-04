fetch("libros.json")
  .then(response => response.json())
  .then(libros => {
    const contenedor = document.getElementById("contenedorLibros");

    if (!contenedor) return;

    const categoria = document.body.id; // educativos, historia, cuentos

    libros.forEach(libro => {
      if (libro.categoria === categoria) {
        contenedor.innerHTML += `
          <div class="libro-card">
            <img src="${libro.imagen}">
            <h3>${libro.titulo}</h3>
            <p>${libro.descripcion}</p>
            <a href="${libro.archivo}" target="_blank">Leer libro</a>
          </div>
        `;
      }
    });
  });
