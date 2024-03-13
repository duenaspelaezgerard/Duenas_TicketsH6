import { panel } from "./Panel";
import { registro } from "./Registro";

export const login = {
    template: //html 
    `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="text-center mt-3 mb-5">Iniciar Sesión</h1>
          <div class="card">
            <div class="card-body">
              <form action="proyectos.html">
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Email:</label>
                  <input id="email" type="text" class="form-control" aria-describedby="emailHelp" >
                </div>
                <div class="mb-3">
                  <label for="InputPassword1" class="form-label">Contraseña: </label>
                  <input id="contra" type="text" class="form-control">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="Check1">
                  <label class="form-check-label" for="Check1">Recordar Contraseña</label>                 
                </div>
                <div class="text-end mb-3">
                  <a href="#" >¿Has olvidado la contraseña?</a>
                </div>
                <a href=""><button id="butLogin" type="" class="btn btn-primary w-100">Iniciar Sesión</button></a>
              </form>
            </div>
          </div>
          <div class="mt-5">
            <a id="butRegistro" href="registro.html" class="btn btn-secondary w-100">¿Eres nuevo? Regístrate</a>
          </div>
        </div>
      </div>
    </div>
    
    `,
    script : ()=>{

        document.querySelector('#butLogin').addEventListener('click', (event) => {

          event.preventDefault()

          let usuariosLS = localStorage.getItem("usuarios")
          let correo= document.querySelector('#email').value
          let password = document.querySelector('#contra').value
        
          console.log('correo ',correo )
          console.log('password', password )

          if (usuariosLS) {
            usuariosLS = JSON.parse(usuariosLS)
          } else {
            usuariosLS = []
          }
          
          let error = 0
          usuariosLS.forEach(element => {

            if((element.mail == correo)&& (element.pass == password) ){

              element.log = 1              
              document.querySelector('main').innerHTML= panel.template;
              panel.script()            
              alert("Inicio de sesión exitoso")
              document.querySelector('#correo').innerHTML=correo;
              document.querySelector('#sesion').classList.remove('d-none')
            }else{
              error++
            }

          })

          localStorage.setItem("usuarios", JSON.stringify(usuariosLS))
          
          if(error==usuariosLS.length){
            alert("Inicio de sesión equivocado")
          }

        })

        document.querySelector('#butRegistro').addEventListener('click', (event) => {
          event.preventDefault()
          document.querySelector('main').innerHTML= registro.template;
          registro.script()
        })
    }
}
