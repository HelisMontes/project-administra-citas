"use strict";

export class Citas {
    constructor() {
        this.citas_array = [];
    };
    addCitas(citas){
        this.citas_array = [...this.citas_array, citas]
        console.log(this.citas_array)
    }
};
