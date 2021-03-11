import {interfaceCitas, formAtributos} from '../interfaces/interface_type'
class Citas implements interfaceCitas{
    citas_array:formAtributos[];
    constructor() {
      this.citas_array = [];  
    };
};