"use strict";
import {dataForm} from '../selectores.js'
import {eliminarCita, dataActualizada, cargarEdicion} from '../app.js'

export class UI {
    printHTML_Message(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert', 'd-block', 'col-12');
        if (type) {
            divMessage.classList.add('alert-danger');
        }
        else {
            divMessage.classList.add('alert-success');
        }
        divMessage.innerHTML = message;
        dataForm.contenido.insertBefore(divMessage, dataForm.agregarCita);
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }
    ;
    printHTML_Citas(citas) {
        this.limpiarHTML();
        citas.map(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-10');
            divCita.dataset.id = id;
            const namePet = document.createElement('h2');
            namePet.classList.add('card-title', 'font-weight-bolder');
            namePet.textContent = mascota;
            this.insertParrafo(propietario, 'Propietario', divCita);
            this.insertParrafo(telefono, 'Teléfono', divCita);
            this.insertParrafo(fecha, 'Fecha', divCita);
            this.insertParrafo(hora, 'Hora', divCita);
            this.insertParrafo(sintomas, 'Síntomas', divCita);
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id);
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);
            dataForm.citas.appendChild(divCita);
        });
    };
    
    insertParrafo(data, nameSpan, divCita) {
        const dataOwner = document.createElement('p');
        dataOwner.innerHTML = ` <span class="font-weight-bolder">${nameSpan}: </span> ${data}`;
        divCita.appendChild(dataOwner);
    };

    limpiarHTML() {
        while (dataForm.citas.firstChild) {
            dataForm.citas.firstChild.remove();
        };
    };

    add_DeleteBtn = (type, name='Crear', id) =>{
        const divPadre = document.querySelector('button').parentNode;
        divPadre.firstElementChild.remove();
        const btnGuardar = document.createElement('button');
        btnGuardar.type=type
        btnGuardar.className = 'btn btn-success w-100 d-block';
        btnGuardar.textContent = `${name} Cita`;
        if(name==='Actualizar'){
            btnGuardar.onclick = () => dataActualizada(id);
        };
        divPadre.appendChild(btnGuardar);
    };
};
