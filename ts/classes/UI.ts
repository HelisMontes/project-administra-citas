import {interfaceUI,formAttribute} from '../interfaces/interface_type'
import {attribute, dataForm} from '../selectores.js'

export class UI implements interfaceUI{
    public printHTML_Message(message:string, type?:string):void{
        const divMessage:any = document.createElement('div');
        divMessage.classList.add('text-center', 'alert', 'd-block', 'col-12')
        if (type) {
            divMessage.classList.add('alert-danger');
        }else {
            divMessage.classList.add('alert-success');
        }
        divMessage.innerHTML = message;
        dataForm.contenido.insertBefore(divMessage, dataForm.agregarCita);
        setTimeout(() => {
            divMessage.remove()
        }, 3000)
    };
    public printHTML_Citas(citas:formAttribute[]){
        this.limpiarHTML();
        citas.map( cita =>{
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            const divCita:any = document.createAttribute('div')
            divCita.classList.add('cita','p-10');
            divCita.dataset.id = id;
            const namePet = document.createElement('h2');
            namePet.classList.add('card-title', 'font-weight-bolder');
            namePet.textContent = mascota;
            this.insertParrafo(propietario, 'Propietario', divCita);   
            this.insertParrafo(telefono, 'Teléfono', divCita);
            this.insertParrafo(fecha, 'Fecha', divCita);
            this.insertParrafo(hora, 'Hora', divCita);
            this.insertParrafo(sintomas,'Síntomas', divCita);
            dataForm.citas.appendChild(divCita);
        })
    };

    public insertParrafo(data:string | number, nameSpan:string, divCita:any):void{
        const dataOwner = document.createElement('p');
        dataOwner.innerHTML = ` <span class="font-weight-bolder">${nameSpan}: </span> ${data}`;
        divCita.appendChild(dataOwner);
    }

    public limpiarHTML(){
        while(dataForm.citas.firstChild){
            dataForm.citas.firstChild.remove()
        }
    }
}