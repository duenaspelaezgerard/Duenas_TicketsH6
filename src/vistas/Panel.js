import { tickets } from "../bd/tickets.js";
import { registro } from "../vistas/Registro";
import { login } from "./Login.js";

export const panel = {
    template: //html 
    `
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
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
        <tr>
          <td>123459</td>
          <td>18/04/2023</td>
          <td>T6</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Error de impresora</td>
          <td>Ana Martínez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>

        <tr>
          <td>123460</td>
          <td>19/04/2023</td>
          <td>T8</td>
          <td>DAW2</td>
          <td>PC4</td>
          <td>Problema de acceso a archivos</td>
          <td>Pedro Gómez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123461</td>
          <td>20/04/2023</td>
          <td>T6</td>
          <td>DAW1</td>
          <td>PC1</td>
          <td>Aplicación se cierra inesperadamente</td>
          <td>Sofía Fernández</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123462</td>
          <td>21/04/2023</td>
          <td>T7</td>
          <td>DAW2</td>
          <td>PC2</td>
          <td>Problema de conexión a la red</td>
          <td>Luis Torres</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
        <tr>
          <td>123463</td>
          <td>22/04/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Archivos corruptos</td>
          <td>Carolina Ramírez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
      </tbody>
    </table>
    
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
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
        <tr>
          <td>123457</td>
          <td>16/04/2023</td>
          <td>15/05/2023</td>
          <td>T7</td>
          <td>DAW2</td>
          <td>PC1</td>
          <td>Problema de conexión a Internet</td>
          <td>Maria López</td>
          
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
        <tr>
          <td>123458</td>
          <td>17/04/2023</td>
          <td>15/05/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC2</td>
          <td>Pantalla en blanco</td>
          <td>Juan Rodríguez</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
        <tr>
          <td>123459</td>
          <td>18/04/2023</td>
          <td>15/05/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Error de impresora</td>
          <td>Ana Martínez</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
      </tbody>
    </table>
    `,
    script : ()=>{

      document.querySelector('#login').classList.add('d-none');
      document.querySelector('#registro').classList.add('d-none');
      document.querySelector('#sesion').classList.remove('d-none');
      let ticketsPendientes=document.querySelector('#pendientes');
      let ticketsResueltos=document.querySelector('#resueltos');
      let tablaPendiente= ``
      let tablaResuelto =``

      tickets.forEach(item => { 
          
          if(item.estado==0){

            tablaPendiente= `
            <tr data-ticketid=${item.id}>
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

              <tr data-ticketid=${item.id}>
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

      let usuario = localStorage.getItem("usuarios")
      usuario = JSON.parse(usuario);

      for(let i=0;i<usuario.length;i++){
        if(document.querySelector('#correo').innerHTML== usuario[i].mail ){
          usuario[i].log = 0
          localStorage.setItem("usuarios", JSON.stringify(usuario))
        }
      }

        document.querySelector('#sesion').addEventListener('click', (event) => {
          event.preventDefault()
          document.querySelector('#correo').innerHTML="";
          document.querySelector('#sesion').classList.add('d-none');

          document.querySelector('#login').classList.remove('d-none');
          document.querySelector('#registro').classList.remove('d-none');

          document.querySelector('main').innerHTML= login.template;
          login.script()
        });
      
        document.querySelector('body').addEventListener('click', (e) => {

            if(e.target.id == 'btnResolver'){
              console.log('completar', e.target.id)
              Resolver(e, ticketsPendientes, ticketsResueltos)
            }

            if(e.target.id == 'btnEdit'){
              console.log('editar', e.target.id)
              Editar(e, ticketsPendientes, ticketsResueltos)
            }

            if(e.target.id == 'btnComment'){
              console.log('completar', e.target.id)
              Comentar(e, ticketsPendientes, ticketsResueltos)
            }
    

            if(e.target.id == 'btnEliminar'){
              console.log('borrar', e.target.id)
              Eliminar(e, ticketsPendientes, ticketsResueltos)
            }
    
        })
    }
}