import { tickets } from "../bd/tickets.js";
import { login } from "./Login.js";
import { Resolver, Editar, Eliminar, Comentar } from "../componentes/funciones.js";
import { vistaTicket } from "./vistaTicket.js";

export const panel = {
    template: //html 
    `
    <h1>Administración de incidencias</h1>
    <h2 id="pendientesH2" class="mt-5">Tickets pendientes</h2>

    <div class="text-end"><button type="button" id="btnAñadirTicket" class="btn btn-primary text-light"> Añadir Ticket </button></div>
    
    <table id="pendientesTable" class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody id="pendientes">

      </tbody>
    </table>
    
    <h2 id="resueltosH2" class="mt-5">Tickets resueltos</h2>
    <table id="resueltosTable" class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>

      <tbody id="resueltos">
      
      </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Ticket</h5>
            <button type="button" id="btnCerrar" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="" class="form card p-3 shadow" id="editarForm">
              <label for="codigoTicket" class="form-label">Código: </label>
              <input type="text" class="form-control mb-3" id="codigo">

              <label for="fecha" class="form-label">Fecha: </label>
              <input type="date" class="form-control mb-3" id="fecha">

              <label for="aula" class="form-label">Aula: </label>
              <input type="text" class="form-control mb-3" id="aula">

              <label for="ordenador" class="form-label">Ordenador: </label>
              <input type="text" class="form-control mb-3" id="ordenador">

              <label for="descripcion" class="form-label">Descripción: </label>
              <textarea class="form-control mb-3" id="descripcion" rows="3"></textarea>

              <label for="alumno" class="form-label">Alumno: </label>
              <input type="text" class="form-control mb-3" id="alumno">

              <label for="grupo" class="form-label">Grupo: </label>
              <input type="text" class="form-control mb-3" id="grupo">

              <div class="d-flex align-items-center">
                <button id="btnEditarTicket" class="btn btn-success ms-auto">Guardar</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    `,
    script : ()=>{

      document.querySelector('#login').classList.add('d-none')
      document.querySelector('#registro').classList.add('d-none')
      document.querySelector('#sesion').classList.remove('d-none')

      let ticketsPendientes=document.querySelector('#pendientes')
      let ticketsResueltos=document.querySelector('#resueltos')
      let tablaPendiente= ``
      let tablaResuelto =``

      tickets.forEach(item => { 
          
          if(item.estado==0){

            tablaPendiente= `
            <tr data-ticketid=${item.id} class="ticket">
              <td>${item.codigo}</td>
              <td>${item.fecha}</td>
              <td>${item.aula}</td>
              <td>${item.grupo}</td>
              <td>${item.ordenador}</td>
              <td>${item.descripcion}</td>
              <td>${item.alumno}</td>
              </td>
              <td><button id="btnResolver" class="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td><button id="btnEdit" class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </button>
              </td>
              <td><button id="btnComment" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button id="btnEliminar" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
            </tr>

          `
          document.querySelector("#pendientes").innerHTML += tablaPendiente

          }else{

            tablaResuelto= `

              <tr data-ticketid=${item.id} class="ticket">
                <td>${item.codigo}</td>
                <td>${item.fecha}</td>
                <td>${item.fecharesuelto}</td>
                <td>${item.aula}</td>
                <td>${item.grupo}</td>
                <td>${item.ordenador}</td>
                <td>${item.descripcion}</td>
                <td>${item.alumno}</td>
                <td><button id="btnComment" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                </button></td>
                <td><button id="btnEliminar" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                </i>
                </button></td>
              </tr>

            `
            document.querySelector("#resueltos").innerHTML += tablaResuelto
            
          }

      })

      document.querySelector('#sesion').addEventListener('click', (event) => {

        event.preventDefault()

        const correo = document.querySelector('#correo').innerHTML
        
        let usuariosGuardados = localStorage.getItem("usuarios")
        usuariosGuardados = JSON.parse(usuariosGuardados)

        const usuarioLogueadoEncontrado = usuariosGuardados.find(usuari => usuari.mail == correo)
        const IDusuarioLogueadoEncontrado = usuariosGuardados.findIndex(usuari => usuari.mail == correo)

        if(usuarioLogueadoEncontrado){
          usuariosGuardados[IDusuarioLogueadoEncontrado].log = 0
          localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados))
        }

        document.querySelector('#correo').innerHTML="";
        document.querySelector('#sesion').classList.add('d-none');

        document.querySelector('#login').classList.remove('d-none');
        document.querySelector('#registro').classList.remove('d-none');

        document.querySelector('main').innerHTML= login.template;
        login.script()

      })
      
      document.querySelector('body').addEventListener('click', (e) => {

        const correoEsquina = document.querySelector('#correo').textContent
        let usuario = localStorage.getItem("usuarios")
        usuario = JSON.parse(usuario)
        const coincidencia = usuario.find(usuario => usuario.mail === correoEsquina)


        if (coincidencia.rol == 0) {

          if (!document.querySelector('#pendientesH2').classList.contains('d-none')) {
            document.querySelector('#pendientesH2').classList.add('d-none')
          }
          
          if (!document.querySelector('#pendientesTable').classList.contains('d-none')) {
              document.querySelector('#pendientesTable').classList.add('d-none')
          }
          
          if (!document.querySelector('#resueltosH2').classList.contains('d-none')) {
              document.querySelector('#resueltosH2').classList.add('d-none')
          }
          
          if (!document.querySelector('#resueltosTable').classList.contains('d-none')) {
              document.querySelector('#resueltosTable').classList.add('d-none')
          }
          
        }

        if (coincidencia.rol == 1) {

          let btnEliminarElements = document.querySelectorAll('#btnEliminar')

          btnEliminarElements.forEach(function(element) {
              if (!element.classList.contains('d-none')) {
                  element.classList.add('d-none')
              }
          })
      
         
          let btnResolverElements = document.querySelectorAll('#btnResolver')

          btnResolverElements.forEach(function(element) {
              if (!element.classList.contains('d-none')) {
                  element.classList.add('d-none')
              }
          })

          let btnEditElements = document.querySelectorAll('#btnEdit')

          btnEditElements.forEach(function(element) {
              if (!element.classList.contains('d-none')) {
                  element.classList.add('d-none')
              }
          })
        }
      

        if(coincidencia.rol == 2) {
              
          if(e.target.id == 'btnResolver'){
            Resolver(e, ticketsPendientes, ticketsResueltos)
          }

          if(e.target.id == 'btnEdit'){
            Editar(e, ticketsPendientes, ticketsResueltos)
          }

          if(e.target.id == 'btnEliminar'){
            Eliminar(e, ticketsPendientes, ticketsResueltos)
          }

        }

        if(coincidencia.rol == 2 || coincidencia.rol == 1) {

          if(e.target.id == 'btnComment'){
            Comentar(e)
          }

        }

        if(e.target.id == 'btnAñadirTicket'){
          document.querySelector('main').innerHTML= vistaTicket.template;
          vistaTicket.script()
        }

      })
    }
}