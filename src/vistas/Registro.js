import { login } from "./Login";

export const registro = {
    template: //html 
    `
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h1 class="text-center mt-3 mb-5">Registro</h1>
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="InputNombre1" class="form-label">Nombre:</label>
                    <input type="nombre" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="InputEmail1" class="form-label">Apellidos:</label>
                    <input type="email" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="InputEmail1" class="form-label">Email:</label>
                    <input id="email" type="email" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="InputPassword1" class="form-label">Contraseña: </label>
                    <input id="contra" type="password" class="form-control">
                  </div>
                  <button id="butRegistro" type="" class="btn btn-primary w-100">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,

    script : ()=>{
      
        let correos = document.querySelector('#email')
        let contrasenyas = document.querySelector('#contra')

        document.querySelector('#butRegistro').addEventListener('click', () => {
            
            document.querySelector('main').innerHTML= login.template
            login.script()  

            const correo = correos.value
            const contrasenya = contrasenyas.value
           

            let usuario = localStorage.getItem("usuarios")
            if (!usuario) {
              usuario = [];
            } else {
              usuario = JSON.parse(usuario);
            }
            
            let existe = false;
            
            for (let i = 0; i < usuario.length; i++) {
              if (correo === usuario[i].mail) {
                existe = true;
                break; // Ya encontramos un usuario con el mismo correo, no es necesario seguir buscando
              }
            }
            
            if (!existe) {
              usuario.push({
                mail: correo,
                pass: contrasenya,
                log: 0
              });
              alert('Usuario registrado con éxito');
              document.querySelector('main').innerHTML = login.template;
              login.script();
            } else {
              alert('Usuario ya registrado.');
              document.querySelector('main').innerHTML = registro.template;
              registro.script();
            }
            
            // Guardamos en localstorage
            localStorage.setItem("usuarios", JSON.stringify(usuario));
          });
    }
}
