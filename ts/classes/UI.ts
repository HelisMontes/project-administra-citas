import {interfaceUI} from '../interfaces/interface_type'
import {attribute, dataForm} from '../selectores.js'

export class UI implements interfaceUI{
    public printHTML_Error(message:string, type?:string):void{
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
}