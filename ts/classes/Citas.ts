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

    public updateCitas(cita:formAttribute):void{
      this.citas_array.map(citas =>{
        if(citas.id === cita.id){
          citas.mascota=cita.mascota;
          citas.propietario=cita.propietario;
          citas.telefono=cita.telefono;
          citas.fecha=cita.fecha;
          citas.hora=cita.hora;
          citas.sintomas=cita.sintomas;
          return citas;
        }else{
          return citas;
        };
      });
    }
};