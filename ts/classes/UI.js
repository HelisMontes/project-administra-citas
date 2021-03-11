"use strict";
import {attribute, dataForm} from '../selectores.js'

export class UI {
    printHTML_Message(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert', 'd-block', 'col-12')
        if (type) {
            divMessage.classList.add('alert-danger');
        }else {
            divMessage.classList.add('alert-success');
        }
        divMessage.innerHTML = message;
        dataForm.contenido.insertBefore(divMessage, dataForm.agregarCita);
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    };
    printHTML_Citas(citas){
        this.limpiarHTML();
        citas.map( cita =>{
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-10');
            divCita.dataset.id = id;
            const namePet = document.createElement('h2');
            namePet.classList.add('card-title', 'font-weight-bolder');
            namePet.textContent = mascota;
            divCita.appendChild(namePet);
            this.insertParrafo(propietario, 'Propietario', divCita);   
            this.insertParrafo(telefono, 'Teléfono', divCita);
            this.insertParrafo(fecha, 'Fecha', divCita);
            this.insertParrafo(hora, 'Hora', divCita);
            this.insertParrafo(sintomas,'Síntomas', divCita);
            dataForm.citas.appendChild(divCita);
        })
    };
    insertParrafo(data, nameSpan, divCita){
        const dataOwner = document.createElement('p');
        dataOwner.innerHTML = ` <span class="font-weight-bolder">${nameSpan}: </span> ${data}`;
        divCita.appendChild(dataOwner);
    }
    limpiarHTML(){
        while(dataForm.citas.firstChild){
            dataForm.citas.firstChild.remove()
        }
    };
};
