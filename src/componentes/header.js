import { login } from "../vistas/Login";
import { panel } from "../vistas/Panel";
import { registro } from "../vistas/Registro";

export const header = {
  
    template:  //html
    `
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
          <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
        </div>
        <div>
          <span id="correo">administrador@fpllefia.com</span>
          <button id="sesion" class="btn btn-secondary ms-2 d-none">CERRAR SESIÓN</button>
        </div>
      </div>
    </nav>
    `,

    script : ()=>{
  
      let usuario = localStorage.getItem("usuarios")
      usuario = JSON.parse(usuario);

      for(let i=0;i<usuario.length;i++){
        if(usuario[i].log == 1){
          document.querySelector('main').innerHTML= panel.template;
          document.querySelector('#correo').innerHTML= usuario[i].mail;
          panel.script()
        }
      }

      document.querySelector('#login').addEventListener('click', () => {
        document.querySelector('main').innerHTML= login.template;
        login.script()
      });

      document.querySelector('#registro').addEventListener('click', () => {
        document.querySelector('main').innerHTML= registro.template;
        registro.script()
      });

    } 
}