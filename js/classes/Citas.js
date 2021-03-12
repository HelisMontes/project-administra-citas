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

    updateCitas(citaUpdated) {
        this.citas_array = this.citas_array.map(citas => citas.id === citaUpdated.id ? citaUpdated : citas);
    };
};
