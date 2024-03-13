import { tickets } from "../bd/tickets";
import { panel } from "../vistas/Panel";
import { vistaComentarios } from "../vistas/vistaComentarios"; 

let ticketsBD = tickets

export function Resolver(e, panelPendiente, panelResuelto){

    const identificoTicket = e.target.closest('.ticket')   //ME FIJO CUAL ES EL TICKET MAS CERCANO AL CLICK
    const pilloTicket = identificoTicket.dataset.ticketid //QUE ID HE PILLADO

    
    let ticketPendientes = ticketsBD.filter((item) => item.id != pilloTicket && item.estado == 0)
    let ticketResueltos = ticketsBD.filter((item) => item.id == pilloTicket || item.estado == 1)

    let pendiente= ''
    let resuelto = ''

    ticketPendientes.forEach(item => {

        pendiente += `
            <tr data-ticketid=${item.id} class="ticket">
                <td>${item.codigo}</td>
                <td>${item.fecha}</td>
                <td>${item.aula}</td>
                <td>${item.grupo}</td>
                <td>${item.ordenador}</td>
                <td>${item.descripcion}</td>
                <td>${item.alumno}</td>
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

    })


    ticketResueltos.forEach(item => {

        if (!item.fecharesuelto) {
        
        const fecha = new Date()
        const dia = fecha.getDate()
        const mes = fecha.getMonth() + 1
        const año = fecha.getFullYear()
        
        const fechaFormateada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${año}`
        item.fecharesuelto = fechaFormateada
        item.estado = 1
        }

        resuelto += `
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
    })
    console.log(pendiente)
    console.log(resuelto)
    //PINTO EN LOS DOS QS QUE HE PILLADO EN EL CLICK DEL BOTON LAS DOS TABLAS ACTUALIZADAS
    panelPendiente.innerHTML = pendiente
    panelResuelto.innerHTML = resuelto

    //ESTO SIRVE PARA METER EN LA BD GENERAL LAS DOS MINIBD Y CONCATENARLAS
    ticketsBD = [...ticketPendientes, ...ticketResueltos]
}

export function Comentar(){
    document.querySelector('main').innerHTML= vistaComentarios.template
    vistaComentarios.script()
}

export function Eliminar(e, panelPendiente, panelResuelto){
    const identificoTicket = e.target.closest('.ticket')   //ME FIJO CUAL ES EL TICKET MAS CERCANO AL CLICK
    const pilloTicket = identificoTicket.dataset.ticketid //QUE ID HE PILLADO

    
    let ticketPendientes = ticketsBD.filter((item) => item.id != pilloTicket && item.estado == 0)
    let ticketResueltos = ticketsBD.filter((item) => item.id != pilloTicket && item.estado == 1)

    let pendiente= ''
    let resuelto = ''

    ticketPendientes.forEach(item => {

        pendiente += `
            <tr data-ticketid=${item.id} class="ticket">
                <td>${item.codigo}</td>
                <td>${item.fecha}</td>
                <td>${item.aula}</td>
                <td>${item.grupo}</td>
                <td>${item.ordenador}</td>
                <td>${item.descripcion}</td>
                <td>${item.alumno}</td>
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

    })


    ticketResueltos.forEach(item => {

        resuelto += `
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
    })

    //PINTO EN LOS DOS QS QUE HE PILLADO EN EL CLICK DEL BOTON LAS DOS TABLAS ACTUALIZADAS
    panelPendiente.innerHTML = pendiente
    panelResuelto.innerHTML = resuelto

    //ESTO SIRVE PARA METER EN LA BD GENERAL LAS DOS MINIBD Y CONCATENARLAS
    ticketsBD = [...ticketPendientes, ...ticketResueltos]
}

export function Editar(e){

    const identificoTicket = e.target.closest('.ticket')   //ME FIJO CUAL ES EL TICKET MAS CERCANO AL CLICK
    let pilloTicket = identificoTicket.dataset.ticketid //QUE ID HE PILLADO
    const ticketSeleccionado = tickets.find(ticket => ticket.id == pilloTicket)


    let modal = document.querySelector('#exampleModal')
    modal.classList.add('show')
    modal.style.display='block'

    if (ticketSeleccionado) {
        
        ticketSeleccionado.fecha = ticketSeleccionado.fecha.split('/') 
        ticketSeleccionado.fecha = ticketSeleccionado.fecha[2] + '-' + ticketSeleccionado.fecha[1] + '-' + ticketSeleccionado.fecha[0]

        
        console.log('ticketSeleccionado.fecha', ticketSeleccionado.fecha)

        document.querySelector('#codigo').value = ticketSeleccionado.codigo
        document.querySelector('#fecha').value = ticketSeleccionado.fecha
        document.querySelector('#aula').value = ticketSeleccionado.aula
        document.querySelector('#ordenador').value = ticketSeleccionado.ordenador
        document.querySelector('#descripcion').value = ticketSeleccionado.descripcion
        document.querySelector('#alumno').value = ticketSeleccionado.alumno
        document.querySelector('#grupo').value = ticketSeleccionado.grupo

    }


    document.getElementById('btnEditarTicket').addEventListener('click', (event) => {
        event.preventDefault()

        var fechaMAL = document.querySelector('#fecha').value
        var fechaDividida = fechaMAL.split('-')
        var fechaOriginal = fechaDividida[2] + '/' + fechaDividida[1] + '/' + fechaDividida[0] 
    
        const codigoTicket = parseInt(document.querySelector('#codigo').value)
        const aula = document.querySelector('#aula').value
        const ordenador = document.querySelector('#ordenador').value
        const descripcion = document.querySelector('#descripcion').value
        const alumno = document.querySelector('#alumno').value
        const grupo = document.querySelector('#grupo').value
    
        const ticketSeleccionado = tickets.findIndex(ticket => ticket.id == pilloTicket)




        if (ticketSeleccionado != -1) {

            tickets[ticketSeleccionado] = {
                id: pilloTicket,
                codigo: codigoTicket,
                fecha: fechaOriginal,
                aula: aula,
                ordenador: ordenador,
                descripcion: descripcion,
                alumno: alumno,
                grupo: grupo,
                estado: tickets[ticketSeleccionado].estado // Mantener el estado original
            }

            document.querySelector('#pendientes').innerHTML = ""
            panel.script()

        } else {
            console.error('Ticket no encontrado en la base de datos')
        }
    
        let modal = document.querySelector('#exampleModal')
        modal.classList.remove('show')
        modal.style.display = 'none'
    })

    document.querySelector('#btnCerrar').addEventListener('click', (event) => {
        let modal = document.querySelector('#exampleModal')
        modal.classList.add('show')
        modal.style.display='none'
    })

}
