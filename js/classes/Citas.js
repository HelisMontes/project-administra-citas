"use strict";
export class Citas {
    constructor() {
        this.citas_array = [];
    };

    addCitas(citas) {
        this.citas_array = [...this.citas_array, citas];
    };
    
    removeCitas(id) {
        this.citas_array = this.citas_array.filter(cita => cita.id !== id);
    };

    updateCitas(cita) {
        this.citas_array.map(citas => {
            if (citas.id === cita.id) {
                citas.mascota = cita.mascota;
                citas.propietario = cita.propietario;
                citas.telefono = cita.telefono;
                citas.fecha = cita.fecha;
                citas.hora = cita.hora;
                citas.sintomas = cita.sintomas;
                return citas;
            }
            else {
                return citas;
            };
        });
    };
};
