import { bdComentarios } from "../bd/bd.js"
import { comentarios } from "../componentes/comentarios.js"
import { panel } from "./Panel.js"

export const vistaComentarios = {
    template: 
    `
    <div class="d-flex">
        <h1>Comentarios</h1><button id="btnVolver" class="btn btn-link ms-auto"> < Volver</button>
    </div>
  
    <h2 class="my-4">Código ticket: <span>123456</span></h2>
    <div class="">
        <form action="" class="form card p-3 shadow">
            <label for="comentario" class="form-label">Comentario: </label>
            <textarea id="comentario" class="form-control" col="3"></textarea>
            <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
            <div class="d-flex align-items-center">
                <input id="hora" type="datetime-local" class="form-control w-25">
                <label for="nombre" class="form-label ms-3">Nombre: </label>
                <input id="nombre" type="text" class="form-control w-25">
                <button id="btnAñadir" class="btn btn-success ms-auto">Añadir comentario</button>
            </div>
        </form>
    </div>
    <div id="comentarios" class="mt-4">
      
    </div>
    `,
    script: () => {

    comentarios.script()
    document.querySelector('#btnAñadir').addEventListener('click', (event) => {
        event.preventDefault()

        const comentarioInput = document.querySelector('#comentario').value
        const horaInput = document.querySelector('#hora').value
        const nombreInput = document.querySelector('#nombre').value

        const fechaArray = horaInput.split('T')[0].split('-')
        const fechaFormateada = `${fechaArray[2]}/${fechaArray[1]}/${fechaArray[0]}`

        const correoEsquina = document.querySelector('#correo').textContent
        let usuarios = localStorage.getItem("usuarios")
        usuarios = JSON.parse(usuarios)
        const coincidencia = usuarios.find(usuario => usuario.mail === correoEsquina)
        
        const nuevoComentario = {
            autor: coincidencia.nombre,
            fecha: fechaFormateada,
            comentario: comentarioInput
        }

        bdComentarios.push(nuevoComentario)

        comentarios.script()
    })

    document.querySelector('#btnVolver').addEventListener('click', (event) => {
        event.preventDefault()
        document.querySelector('main').innerHTML= panel.template;
        panel.script()
    })

    }
}