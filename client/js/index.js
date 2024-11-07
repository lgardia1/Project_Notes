import { HttpFetch } from "./modules/HttpFetch.js";
function hola(a){
    console.log('Datos listos' + a)
}
const httpFetch = new HttpFetch('http://localhost:3000');
httpFetch.obtenerUI('', (datos) => {
    const contenedor = document.getElementById("main_container");
    
    
    datos.panels.forEach(panel => {
        const panelNote = document.createElement(panel.element);
        panelNote.setAttribute('class', panel.classElement);
        contenedor.appendChild(panelNote);
    });
});


function addClass(element, classElement, atributte) {

    classElement.forEach(element => {
        element.classList.add(element);
    });
}