import {interfaceCitas, formAttribute} from '../interfaces/interface_type'
export class Citas implements interfaceCitas{
    citas_array:formAttribute[];
    constructor() {
      this.citas_array = [];  
    };
    addCitas(citas:formAttribute):void{
      this.citas_array = [...this.citas_array, citas]
      console.log(this.citas_array)
    }
};