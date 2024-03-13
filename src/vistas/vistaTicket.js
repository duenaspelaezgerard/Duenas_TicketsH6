import { tickets } from "../bd/tickets";
import { panel } from "../vistas/Panel";


export const vistaTicket = {
  
    template:  //html
    `
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
          <button id="btnAñadirTicket" class="btn btn-success me-2">Añadir</button>
          <div class="ms-2"></div> <!-- Espacio entre botones -->
          <button id="btnSalir" class="btn btn-warning">Salir</button>
        </div>
      
    `,

    script : ()=>{

      document.getElementById('btnAñadirTicket').addEventListener('click', (event) => {
        event.preventDefault()


        const codigo =  parseInt(document.getElementById('codigo').value)
        const aula = document.getElementById('aula').value
        const ordenador = document.getElementById('ordenador').value
        const descripcion = document.getElementById('descripcion').value
        const alumno = document.getElementById('alumno').value
        const grupo = document.getElementById('grupo').value


        var fechaMAL = document.querySelector('#fecha').value
        var fechaDividida = fechaMAL.split('-')
        var fecha = fechaDividida[2] + '/' + fechaDividida[1] + '/' + fechaDividida[0] 

        const ultimoId = tickets.length > 0 ? tickets[tickets.length - 1].id : 0

        const ticket = {
            id: ultimoId + 1,
            codigo,
            fecha,
            aula,
            grupo,
            ordenador,
            descripcion,
            alumno,
            estado: 0
        }

        tickets.push(ticket)

        document.querySelector('main').innerHTML= panel.template
        panel.script()
    })

    document.getElementById('btnSalir').addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('main').innerHTML= panel.template;
      panel.script()
    })

  } 
}