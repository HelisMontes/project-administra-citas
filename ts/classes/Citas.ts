import {interfaceCitas, formAttribute} from '../interfaces/interface_type'
export class Citas implements interfaceCitas{
    citas_array:formAttribute[];
    constructor() {
      this.citas_array = [];  
    };
    
    public addCitas(citas:formAttribute):void{
      this.citas_array = [...this.citas_array, citas];
    };
    
    public removeCitas(id:number):void{
      this.citas_array = this.citas_array.filter( cita => cita.id !== id);
    };

    public updateCitas(citaUpdated:formAttribute):void{
      this.citas_array = this.citas_array.map( citas => citas.id === citaUpdated.id ? citaUpdated : citas);
    }
};