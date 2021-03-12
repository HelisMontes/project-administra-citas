"use strict";
export const attribute = {
    mascota: document.querySelector('#mascota'),
    propietario: document.querySelector('#propietario'),
    telefono: document.querySelector('#telefono'),
    fecha: document.querySelector('#fecha'),
    hora: document.querySelector('#hora'),
    sintomas: document.querySelector('#sintomas')
}; Object.freeze(attribute);

export const dataForm = {
    nueva_cita: document.querySelector('#nueva-cita'),
    citas: document.querySelector('#citas'),
    contenido: document.querySelector('#contenido'),
    agregarCita: document.querySelector('.agregar-cita')
}; Object.freeze(dataForm);
