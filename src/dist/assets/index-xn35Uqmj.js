(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const m=[{id:1,codigo:987654,fecha:"30/11/2023",aula:"A4",grupo:"ESO1",ordenador:"PC7",descripcion:"Problema de impresión",alumno:"José Rodríguez",estado:0},{id:2,codigo:987655,fecha:"01/12/2023",aula:"B2",grupo:"BACH2",ordenador:"PC2",descripcion:"Fallo en la conexión USB",alumno:"María Sánchez",estado:0},{id:3,codigo:987656,fecha:"02/12/2023",aula:"C1",grupo:"BACH1",ordenador:"PC5",descripcion:"Pérdida de datos en la aplicación",alumno:"Antonio López",estado:0},{id:4,codigo:987657,fecha:"03/12/2023",aula:"A4",grupo:"ESO2",ordenador:"PC1",descripcion:"Problema con el teclado",alumno:"Isabel Martínez",estado:0},{id:5,codigo:987658,fecha:"04/12/2023",aula:"B3",grupo:"BACH3",ordenador:"PC4",descripcion:"Error en la conexión a la impresora",alumno:"Francisco García",estado:0},{id:6,codigo:845672,fecha:"25/06/2023",fecharesuelto:"22/07/2023",aula:"B3",grupo:"BACH3",ordenador:"PC5",descripcion:"Problema de software",alumno:"Elena Fernández",estado:1},{id:7,codigo:845673,fecha:"26/06/2023",fecharesuelto:"23/07/2023",aula:"A4",grupo:"ESO2",ordenador:"PC4",descripcion:"No se puede acceder a la red interna",alumno:"Carlos Martínez",estado:1},{id:8,codigo:845674,fecha:"27/06/2023",fecharesuelto:"24/07/2023",aula:"C1",grupo:"BACH1",ordenador:"PC6",descripcion:"Problema con el mouse",alumno:"Laura Sánchez",estado:1},{id:9,codigo:845675,fecha:"28/06/2023",fecharesuelto:"25/07/2023",aula:"B2",grupo:"BACH2",ordenador:"PC3",descripcion:"No se puede imprimir en color",alumno:"Miguel Torres",estado:1},{id:10,codigo:845676,fecha:"29/06/2023",fecharesuelto:"26/07/2023",aula:"T6",grupo:"DAW1",ordenador:"PC7",descripcion:"Problema con la tarjeta gráfica",alumno:"Carmen García",estado:1}],T=[{id:0,autor:"Carlos",fecha:"13/11/2023",comentario:"Muy buena película"},{id:1,autor:"Ana",fecha:"15/11/2023",comentario:"Interesante artículo, gracias por compartir."},{id:2,autor:"David",fecha:"20/11/2023",comentario:"Me encantó el concierto, la banda estuvo genial."},{id:3,autor:"María",fecha:"25/11/2023",comentario:"El libro me pareció fascinante, no pude soltarlo hasta terminarlo."}],C=(a,o,i)=>`
      <div class="card p-3">
        <h5 class="text-end">Autor: <span id="autor">${a}</span><span id="fecha" class="ms-4">${o}</span></h5>
        <p id="comentario">${i}</p>
      </div>    
    `,q={script:()=>{let a="";T.forEach(o=>{a+=C(o.autor,o.fecha,o.comentario)}),document.querySelector("#comentarios").innerHTML=a}},L={template:`
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
    `,script:()=>{q.script(),document.querySelector("#btnAñadir").addEventListener("click",a=>{a.preventDefault();const o=document.querySelector("#comentario").value,i=document.querySelector("#hora").value;document.querySelector("#nombre").value;const r=i.split("T")[0].split("-"),e=`${r[2]}/${r[1]}/${r[0]}`,n=document.querySelector("#correo").textContent;let l=localStorage.getItem("usuarios");l=JSON.parse(l);const s={autor:l.find(t=>t.mail===n).nombre,fecha:e,comentario:o};T.push(s),q.script()}),document.querySelector("#btnVolver").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=u.template,u.script()})}};let f=m;function I(a,o,i){const e=a.target.closest(".ticket").dataset.ticketid;let n=f.filter(t=>t.id!=e&&t.estado==0),l=f.filter(t=>t.id==e||t.estado==1),c="",s="";n.forEach(t=>{c+=`
            <tr data-ticketid=${t.id} class="ticket">
                <td>${t.codigo}</td>
                <td>${t.fecha}</td>
                <td>${t.aula}</td>
                <td>${t.grupo}</td>
                <td>${t.ordenador}</td>
                <td>${t.descripcion}</td>
                <td>${t.alumno}</td>
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
        `}),l.forEach(t=>{if(!t.fecharesuelto){const p=new Date,d=p.getDate(),g=p.getMonth()+1,v=p.getFullYear(),y=`${d.toString().padStart(2,"0")}/${g.toString().padStart(2,"0")}/${v}`;t.fecharesuelto=y,t.estado=1}s+=`
            <tr data-ticketid=${t.id} class="ticket">
                <td>${t.codigo}</td>
                <td>${t.fecha}</td>
                <td>${t.fecharesuelto}</td>
                <td>${t.aula}</td>
                <td>${t.grupo}</td>
                <td>${t.ordenador}</td>
                <td>${t.descripcion}</td>
                <td>${t.alumno}</td>
                <td><button id="btnComment" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                </button></td>
                <td><button id="btnEliminar" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                </i>
                </button></td>
            </tr>
        `}),console.log(c),console.log(s),o.innerHTML=c,i.innerHTML=s,f=[...n,...l]}function A(){document.querySelector("main").innerHTML=L.template,L.script()}function M(a,o,i){const e=a.target.closest(".ticket").dataset.ticketid;let n=f.filter(t=>t.id!=e&&t.estado==0),l=f.filter(t=>t.id!=e&&t.estado==1),c="",s="";n.forEach(t=>{c+=`
            <tr data-ticketid=${t.id} class="ticket">
                <td>${t.codigo}</td>
                <td>${t.fecha}</td>
                <td>${t.aula}</td>
                <td>${t.grupo}</td>
                <td>${t.ordenador}</td>
                <td>${t.descripcion}</td>
                <td>${t.alumno}</td>
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
        `}),l.forEach(t=>{s+=`
            <tr data-ticketid=${t.id} class="ticket">
                <td>${t.codigo}</td>
                <td>${t.fecha}</td>
                <td>${t.fecharesuelto}</td>
                <td>${t.aula}</td>
                <td>${t.grupo}</td>
                <td>${t.ordenador}</td>
                <td>${t.descripcion}</td>
                <td>${t.alumno}</td>
                <td><button id="btnComment" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                </button></td>
                <td><button id="btnEliminar" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                </i>
                </button></td>
            </tr>
        `}),o.innerHTML=c,i.innerHTML=s,f=[...n,...l]}function H(a){let i=a.target.closest(".ticket").dataset.ticketid;const r=m.find(n=>n.id==i);let e=document.querySelector("#exampleModal");e.classList.add("show"),e.style.display="block",r&&(r.fecha=r.fecha.split("/"),r.fecha=r.fecha[2]+"-"+r.fecha[1]+"-"+r.fecha[0],console.log("ticketSeleccionado.fecha",r.fecha),document.querySelector("#codigo").value=r.codigo,document.querySelector("#fecha").value=r.fecha,document.querySelector("#aula").value=r.aula,document.querySelector("#ordenador").value=r.ordenador,document.querySelector("#descripcion").value=r.descripcion,document.querySelector("#alumno").value=r.alumno,document.querySelector("#grupo").value=r.grupo),document.getElementById("btnEditarTicket").addEventListener("click",n=>{n.preventDefault();var l=document.querySelector("#fecha").value,c=l.split("-"),s=c[2]+"/"+c[1]+"/"+c[0];const t=parseInt(document.querySelector("#codigo").value),p=document.querySelector("#aula").value,d=document.querySelector("#ordenador").value,g=document.querySelector("#descripcion").value,v=document.querySelector("#alumno").value,y=document.querySelector("#grupo").value,S=m.findIndex(x=>x.id==i);S!=-1?(m[S]={id:i,codigo:t,fecha:s,aula:p,ordenador:d,descripcion:g,alumno:v,grupo:y,estado:m[S].estado},document.querySelector("#pendientes").innerHTML="",u.script()):console.error("Ticket no encontrado en la base de datos");let E=document.querySelector("#exampleModal");E.classList.remove("show"),E.style.display="none"}),document.querySelector("#btnCerrar").addEventListener("click",n=>{let l=document.querySelector("#exampleModal");l.classList.add("show"),l.style.display="none"})}const k={template:`
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
      
    `,script:()=>{document.getElementById("btnAñadirTicket").addEventListener("click",a=>{a.preventDefault();const o=parseInt(document.getElementById("codigo").value),i=document.getElementById("aula").value,r=document.getElementById("ordenador").value,e=document.getElementById("descripcion").value,n=document.getElementById("alumno").value,l=document.getElementById("grupo").value;var c=document.querySelector("#fecha").value,s=c.split("-"),t=s[2]+"/"+s[1]+"/"+s[0];const d={id:(m.length>0?m[m.length-1].id:0)+1,codigo:o,fecha:t,aula:i,grupo:l,ordenador:r,descripcion:e,alumno:n,estado:0};m.push(d),document.querySelector("main").innerHTML=u.template,u.script()}),document.getElementById("btnSalir").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=u.template,u.script()})}},u={template:`
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
    `,script:()=>{document.querySelector("#login").classList.add("d-none"),document.querySelector("#registro").classList.add("d-none"),document.querySelector("#sesion").classList.remove("d-none");let a=document.querySelector("#pendientes"),o=document.querySelector("#resueltos"),i="",r="";m.forEach(e=>{e.estado==0?(i=`
            <tr data-ticketid=${e.id} class="ticket">
              <td>${e.codigo}</td>
              <td>${e.fecha}</td>
              <td>${e.aula}</td>
              <td>${e.grupo}</td>
              <td>${e.ordenador}</td>
              <td>${e.descripcion}</td>
              <td>${e.alumno}</td>
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

          `,document.querySelector("#pendientes").innerHTML+=i):(r=`

              <tr data-ticketid=${e.id} class="ticket">
                <td>${e.codigo}</td>
                <td>${e.fecha}</td>
                <td>${e.fecharesuelto}</td>
                <td>${e.aula}</td>
                <td>${e.grupo}</td>
                <td>${e.ordenador}</td>
                <td>${e.descripcion}</td>
                <td>${e.alumno}</td>
                <td><button id="btnComment" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                </button></td>
                <td><button id="btnEliminar" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                </i>
                </button></td>
              </tr>

            `,document.querySelector("#resueltos").innerHTML+=r)}),document.querySelector("#sesion").addEventListener("click",e=>{e.preventDefault();const n=document.querySelector("#correo").innerHTML;let l=localStorage.getItem("usuarios");l=JSON.parse(l);const c=l.find(t=>t.mail==n),s=l.findIndex(t=>t.mail==n);c&&(l[s].log=0,localStorage.setItem("usuarios",JSON.stringify(l))),document.querySelector("#correo").innerHTML="",document.querySelector("#sesion").classList.add("d-none"),document.querySelector("#login").classList.remove("d-none"),document.querySelector("#registro").classList.remove("d-none"),document.querySelector("main").innerHTML=b.template,b.script()}),document.querySelector("body").addEventListener("click",e=>{const n=document.querySelector("#correo").textContent;let l=localStorage.getItem("usuarios");l=JSON.parse(l);const c=l.find(s=>s.mail===n);c.rol==0&&(document.querySelector("#pendientesH2").classList.contains("d-none")||document.querySelector("#pendientesH2").classList.add("d-none"),document.querySelector("#pendientesTable").classList.contains("d-none")||document.querySelector("#pendientesTable").classList.add("d-none"),document.querySelector("#resueltosH2").classList.contains("d-none")||document.querySelector("#resueltosH2").classList.add("d-none"),document.querySelector("#resueltosTable").classList.contains("d-none")||document.querySelector("#resueltosTable").classList.add("d-none")),c.rol==1&&(document.querySelectorAll("#btnEliminar").forEach(function(d){d.classList.contains("d-none")||d.classList.add("d-none")}),document.querySelectorAll("#btnResolver").forEach(function(d){d.classList.contains("d-none")||d.classList.add("d-none")}),document.querySelectorAll("#btnEdit").forEach(function(d){d.classList.contains("d-none")||d.classList.add("d-none")})),c.rol==2&&(e.target.id=="btnResolver"&&I(e,a,o),e.target.id=="btnEdit"&&H(e),e.target.id=="btnEliminar"&&M(e,a,o)),(c.rol==2||c.rol==1)&&e.target.id=="btnComment"&&A(),e.target.id=="btnAñadirTicket"&&(document.querySelector("main").innerHTML=k.template,k.script())})}},h={template:`
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
    `,script:()=>{document.querySelector("#butRegistro").addEventListener("click",a=>{a.preventDefault;let o=localStorage.getItem("usuarios");o?o=JSON.parse(o):o=[];let i=document.querySelector("#nombre").value,r=document.querySelector("#apellido").value,e=document.querySelector("#email").value,n=document.querySelector("#contra").value,l=document.getElementById("rol").value;const c={nombre:i,apellido:r,mail:e,pass:n,log:0,rol:l};o.length==0?(o.push(c),localStorage.setItem("usuarios",JSON.stringify(o)),document.querySelector("main").innerHTML=b.template,b.script()):o.forEach(s=>{s.mail!=e?(o.push(c),localStorage.setItem("usuarios",JSON.stringify(o)),document.querySelector("main").innerHTML=b.template,b.script()):alert("Correo en uso")})})}},b={template:`
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
    
    `,script:()=>{document.querySelector("#butLogin").addEventListener("click",a=>{a.preventDefault();let o=localStorage.getItem("usuarios"),i=document.querySelector("#email").value,r=document.querySelector("#contra").value;console.log("correo ",i),console.log("password",r),o?o=JSON.parse(o):o=[];let e=0;o.forEach(n=>{n.mail==i&&n.pass==r?(n.log=1,document.querySelector("main").innerHTML=u.template,u.script(),alert("Inicio de sesión exitoso"),document.querySelector("#correo").innerHTML=i,document.querySelector("#sesion").classList.remove("d-none")):e++}),localStorage.setItem("usuarios",JSON.stringify(o)),e==o.length&&alert("Inicio de sesión equivocado")}),document.querySelector("#butRegistro").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=h.template,h.script()})}},$={template:`
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
    `,script:()=>{let a=localStorage.getItem("usuarios");if(a){a=JSON.parse(a);for(let o=0;o<a.length;o++)a[o].log==1&&(document.querySelector("main").innerHTML=u.template,document.querySelector("#correo").innerHTML=a[o].mail,u.script())}else a=[],localStorage.setItem("usuarios",JSON.stringify(a));document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=h.template,h.script()})}};document.querySelector("header").innerHTML=$.template;$.script();
