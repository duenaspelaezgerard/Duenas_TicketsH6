export const comentario = (nombre,fecha,comentario) => {
    const template =
    `
      <div class="card p-3">
        <h5 class="text-end">Autor: <span id="autor">${nombre}</span><span id="fecha" class="ms-4">${fecha}</span></h5>
        <p id="comentario">${comentario}</p>
      </div>    
    `
    return template
}


