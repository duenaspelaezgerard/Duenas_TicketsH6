(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(a){if(a.ep)return;a.ep=!0;const e=n(a);fetch(a.href,e)}})();const u=[{id:1,codigo:987654,fecha:"30/11/2023",aula:"A4",grupo:"ESO1",ordenador:"PC7",descripcion:"Problema de impresión",alumno:"José Rodríguez",estado:0},{id:2,codigo:987655,fecha:"01/12/2023",aula:"B2",grupo:"BACH2",ordenador:"PC2",descripcion:"Fallo en la conexión USB",alumno:"María Sánchez",estado:0},{id:3,codigo:987656,fecha:"02/12/2023",aula:"C1",grupo:"BACH1",ordenador:"PC5",descripcion:"Pérdida de datos en la aplicación",alumno:"Antonio López",estado:0},{id:4,codigo:987657,fecha:"03/12/2023",aula:"A4",grupo:"ESO2",ordenador:"PC1",descripcion:"Problema con el teclado",alumno:"Isabel Martínez",estado:0},{id:5,codigo:987658,fecha:"04/12/2023",aula:"B3",grupo:"BACH3",ordenador:"PC4",descripcion:"Error en la conexión a la impresora",alumno:"Francisco García",estado:0},{id:6,codigo:845672,fecha:"25/06/2023",fecharesuelto:"22/07/2023",aula:"B3",grupo:"BACH3",ordenador:"PC5",descripcion:"Problema de software",alumno:"Elena Fernández",estado:1},{id:7,codigo:845673,fecha:"26/06/2023",fecharesuelto:"23/07/2023",aula:"A4",grupo:"ESO2",ordenador:"PC4",descripcion:"No se puede acceder a la red interna",alumno:"Carlos Martínez",estado:1},{id:8,codigo:845674,fecha:"27/06/2023",fecharesuelto:"24/07/2023",aula:"C1",grupo:"BACH1",ordenador:"PC6",descripcion:"Problema con el mouse",alumno:"Laura Sánchez",estado:1},{id:9,codigo:845675,fecha:"28/06/2023",fecharesuelto:"25/07/2023",aula:"B2",grupo:"BACH2",ordenador:"PC3",descripcion:"No se puede imprimir en color",alumno:"Miguel Torres",estado:1},{id:10,codigo:845676,fecha:"29/06/2023",fecharesuelto:"26/07/2023",aula:"T6",grupo:"DAW1",ordenador:"PC7",descripcion:"Problema con la tarjeta gráfica",alumno:"Carmen García",estado:1}],$=[{id:0,autor:"Carlos",fecha:"13/11/2023",comentario:"Muy buena película"},{id:1,autor:"Ana",fecha:"15/11/2023",comentario:"Interesante artículo, gracias por compartir."},{id:2,autor:"David",fecha:"20/11/2023",comentario:"Me encantó el concierto, la banda estuvo genial."},{id:3,autor:"María",fecha:"25/11/2023",comentario:"El libro me pareció fascinante, no pude soltarlo hasta terminarlo."}],C=(r,o,n)=>`
      <div class="card p-3">
        <h5 class="text-end">Autor: <span id="autor">${r}</span><span id="fecha" class="ms-4">${o}</span></h5>
        <p id="comentario">${n}</p>
      </div>    
    `,E={script:()=>{let r="";$.forEach(o=>{r+=C(o.autor,o.fecha,o.comentario)}),document.querySelector("#comentarios").innerHTML=r}},q={template:`
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
    `,script:()=>{E.script(),document.querySelector("#btnAñadir").addEventListener("click",r=>{r.preventDefault();const o=document.querySelector("#comentario").value,n=document.querySelector("#hora").value;document.querySelector("#nombre").value;const l=n.split("T")[0].split("-"),a=`${l[2]}/${l[1]}/${l[0]}`,e=document.querySelector("#correo").textContent;let i=localStorage.getItem("usuarios");i=JSON.parse(i);const s={autor:i.find(t=>t.mail===e).nombre,fecha:a,comentario:o};$.push(s),E.script()}),document.querySelector("#btnVolver").addEventListener("click",r=>{r.preventDefault(),document.querySelector("main").innerHTML=d.template,d.script()})}};let p=u;function I(r,o,n){const a=r.target.closest(".ticket").dataset.ticketid;let e=p.filter(t=>t.id!=a&&t.estado==0),i=p.filter(t=>t.id==a||t.estado==1),c="",s="";e.forEach(t=>{c+=`
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
        `}),i.forEach(t=>{if(!t.fecharesuelto){const b=new Date,f=b.getDate(),g=b.getMonth()+1,v=b.getFullYear(),y=`${f.toString().padStart(2,"0")}/${g.toString().padStart(2,"0")}/${v}`;t.fecharesuelto=y,t.estado=1}s+=`
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
        `}),console.log(c),console.log(s),o.innerHTML=c,n.innerHTML=s,p=[...e,...i]}function M(){document.querySelector("main").innerHTML=q.template,q.script()}function A(r,o,n){const a=r.target.closest(".ticket").dataset.ticketid;let e=p.filter(t=>t.id!=a&&t.estado==0),i=p.filter(t=>t.id!=a&&t.estado==1),c="",s="";e.forEach(t=>{c+=`
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
        `}),i.forEach(t=>{s+=`
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
        `}),o.innerHTML=c,n.innerHTML=s,p=[...e,...i]}function H(r){let n=r.target.closest(".ticket").dataset.ticketid;const l=u.find(e=>e.id==n);let a=document.querySelector("#exampleModal");a.classList.add("show"),a.style.display="block",l&&(l.fecha=l.fecha.split("/"),l.fecha=l.fecha[2]+"-"+l.fecha[1]+"-"+l.fecha[0],console.log("ticketSeleccionado.fecha",l.fecha),document.querySelector("#codigo").value=l.codigo,document.querySelector("#fecha").value=l.fecha,document.querySelector("#aula").value=l.aula,document.querySelector("#ordenador").value=l.ordenador,document.querySelector("#descripcion").value=l.descripcion,document.querySelector("#alumno").value=l.alumno,document.querySelector("#grupo").value=l.grupo),document.getElementById("btnEditarTicket").addEventListener("click",e=>{e.preventDefault();var i=document.querySelector("#fecha").value,c=i.split("-"),s=c[2]+"/"+c[1]+"/"+c[0];const t=parseInt(document.querySelector("#codigo").value),b=document.querySelector("#aula").value,f=document.querySelector("#ordenador").value,g=document.querySelector("#descripcion").value,v=document.querySelector("#alumno").value,y=document.querySelector("#grupo").value,S=u.findIndex(T=>T.id==n);S!=-1?(u[S]={id:n,codigo:t,fecha:s,aula:b,ordenador:f,descripcion:g,alumno:v,grupo:y,estado:u[S].estado},document.querySelector("#pendientes").innerHTML="",d.script()):console.error("Ticket no encontrado en la base de datos");let k=document.querySelector("#exampleModal");k.classList.remove("show"),k.style.display="none"}),document.querySelector("#btnCerrar").addEventListener("click",e=>{let i=document.querySelector("#exampleModal");i.classList.add("show"),i.style.display="none"})}const L={template:`
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
      
    `,script:()=>{document.getElementById("btnAñadirTicket").addEventListener("click",r=>{r.preventDefault();const o=parseInt(document.getElementById("codigo").value),n=document.getElementById("aula").value,l=document.getElementById("ordenador").value,a=document.getElementById("descripcion").value,e=document.getElementById("alumno").value,i=document.getElementById("grupo").value;var c=document.querySelector("#fecha").value,s=c.split("-"),t=s[2]+"/"+s[1]+"/"+s[0];const f={id:(u.length>0?u[u.length-1].id:0)+1,codigo:o,fecha:t,aula:n,grupo:i,ordenador:l,descripcion:a,alumno:e,estado:0};u.push(f),document.querySelector("main").innerHTML=d.template,d.script()}),document.getElementById("btnSalir").addEventListener("click",r=>{r.preventDefault(),document.querySelector("main").innerHTML=d.template,d.script()})}},d={template:`
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>

    <div class="text-end"><button type="button" id="btnAñadirTicket" class="btn btn-primary text-light"> Añadir Ticket </button></div>
    
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
    `,script:()=>{document.querySelector("#login").classList.add("d-none"),document.querySelector("#registro").classList.add("d-none"),document.querySelector("#sesion").classList.remove("d-none");let r=document.querySelector("#pendientes"),o=document.querySelector("#resueltos"),n="",l="";u.forEach(e=>{e.estado==0?(n=`
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

          `,document.querySelector("#pendientes").innerHTML+=n):(l=`

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

            `,document.querySelector("#resueltos").innerHTML+=l)});let a=localStorage.getItem("usuarios");a=JSON.parse(a);for(let e=0;e<a.length;e++)document.querySelector("#correo").innerHTML==a[e].mail&&(a[e].log=0,localStorage.setItem("usuarios",JSON.stringify(a)));document.querySelector("#sesion").addEventListener("click",e=>{e.preventDefault(),document.querySelector("#correo").innerHTML="",document.querySelector("#sesion").classList.add("d-none"),document.querySelector("#login").classList.remove("d-none"),document.querySelector("#registro").classList.remove("d-none"),document.querySelector("main").innerHTML=m.template,m.script()}),document.querySelector("body").addEventListener("click",e=>{e.target.id=="btnResolver"&&(console.log("completar",e.target.id),I(e,r,o)),e.target.id=="btnEdit"&&(console.log("editar",e.target.id),H(e)),e.target.id=="btnComment"&&(console.log("completar",e.target.id),M()),e.target.id=="btnEliminar"&&(console.log("borrar",e.target.id),A(e,r,o)),e.target.id=="btnAñadirTicket"&&(document.querySelector("main").innerHTML=L.template,L.script())})}},h={template:`
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
    `,script:()=>{document.querySelector("#butRegistro").addEventListener("click",r=>{r.preventDefault;let o=localStorage.getItem("usuarios");o?o=JSON.parse(o):o=[];let n=document.querySelector("#nombre").value,l=document.querySelector("#apellido").value,a=document.querySelector("#email").value,e=document.querySelector("#contra").value,i=document.getElementById("rol").value;const c={nombre:n,apellido:l,mail:a,pass:e,log:0,rol:i};o.length==0?(o.push(c),localStorage.setItem("usuarios",JSON.stringify(o)),document.querySelector("main").innerHTML=m.template,m.script()):o.forEach(s=>{s.mail!=a?(o.push(c),localStorage.setItem("usuarios",JSON.stringify(o)),document.querySelector("main").innerHTML=m.template,m.script()):alert("Correo en uso")})})}},m={template:`
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
    
    `,script:()=>{document.querySelector("#butLogin").addEventListener("click",r=>{r.preventDefault();let o=localStorage.getItem("usuarios"),n=document.querySelector("#email").value,l=document.querySelector("#contra").value;console.log("correo ",n),console.log("password",l),o?o=JSON.parse(o):o=[];let a=0;o.forEach(e=>{e.mail==n&&e.pass==l?(e.log=1,document.querySelector("main").innerHTML=d.template,d.script(),alert("Inicio de sesión exitoso"),document.querySelector("#correo").innerHTML=n,document.querySelector("#sesion").classList.remove("d-none")):a++}),localStorage.setItem("usuarios",JSON.stringify(o)),a==o.length&&alert("Inicio de sesión equivocado")}),document.querySelector("#butRegistro").addEventListener("click",r=>{r.preventDefault(),document.querySelector("main").innerHTML=h.template,h.script()})}},x={template:`
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
    `,script:()=>{let r=[];localStorage.setItem("usuarios",JSON.stringify(r)),r=localStorage.getItem("usuarios"),r?r=JSON.parse(r):r=[],localStorage.setItem("usuarios",JSON.stringify(r));for(let o=0;o<r.length;o++)r[o].log==1&&(document.querySelector("main").innerHTML=d.template,document.querySelector("#correo").innerHTML=r[o].mail,d.script());document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=m.template,m.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=h.template,h.script()})}};document.querySelector("header").innerHTML=x.template;x.script();
