import { login } from "./Login"


export const registro = {
    template: //html 
    `
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h1 class="text-center mt-3 mb-5">Registro</h1>
            <div class="card">
              <div class="card-body">
                  <div class="mb-3">
                    <label for="InputNombre1" class="form-label">Nombre:</label>
                    <input id="nombre" type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="InputEmail1" class="form-label">Apellidos:</label>
                    <input  id="apellido" type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="InputEmail1" class="form-label">Email:</label>
                    <input id="email" type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="InputPassword1" class="form-label">Contraseña: </label>
                    <input id="contra" type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="rol" class="form-label">Rol:</label><br>
                    <select class="form-select" id="rol" name="rol">
                        <option value="0" selected>Alumno</option>
                        <option value="1">Profesor</option>
                        <option value="2">Administrador</option>
                    </select>
                  </div>
                  <button id="butRegistro" type="" class="btn btn-primary w-100">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,

    script : ()=>{

        document.querySelector('#butRegistro').addEventListener('click', (event) => {
  
            event.preventDefault
            let usuarios = localStorage.getItem("usuarios")

            if (usuarios) {
              usuarios = JSON.parse(usuarios)
            } else {
              usuarios = []
            }

            let nombre = document.querySelector('#nombre').value
            let apellido = document.querySelector('#apellido').value
            let correo = document.querySelector('#email').value
            let contrasenya = document.querySelector('#contra').value
            let valorSelect = document.getElementById("rol").value

            const usuarioRegistrado = {
              nombre: nombre,
              apellido: apellido,
              mail: correo,
              pass: contrasenya,
              log: 0,
              rol: valorSelect
            }
            
            if (usuarios.length == 0) {

              usuarios.push(usuarioRegistrado)
              localStorage.setItem("usuarios", JSON.stringify(usuarios))
              document.querySelector('main').innerHTML= login.template
              login.script() 

            } else {

              usuarios.forEach(element =>{
                if(element.mail != correo ){

                  usuarios.push(usuarioRegistrado)
                  localStorage.setItem("usuarios", JSON.stringify(usuarios))
                  document.querySelector('main').innerHTML= login.template
                  login.script()

                }else{

                  alert('Correo en uso')

                }
              })

            }

        })
    }
}
