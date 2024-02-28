import { bdComentarios } from "../bd/bd.js";
import { comentario } from "./comentario.js";

export const comentarios = {
    script: () =>{
        let html= ``
        bdComentarios.forEach(element =>{
            html += comentario(element.autor,element.fecha,element.comentario)
        })

        document.querySelector("#comentarios").innerHTML = html
    }
}
