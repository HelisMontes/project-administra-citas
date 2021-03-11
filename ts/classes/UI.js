"use strict";
import {attribute, dataForm} from '../selectores.js'

export class UI {
    printHTML_Error(message, type) {
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
};
