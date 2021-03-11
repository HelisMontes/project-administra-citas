import {attribute, dataForm} from './selectores.js'
import { formAtributos} from './interfaces/interface_type'
import {UI} from './classes/UI.js'

const classUI = new UI();
const eventListener = () => { 
    document.addEventListener('submit', addCita)
};

const addCita = (e:any):void => {
    e.preventDefault();
    const { mascota, propietario, telefono, fecha, hora, sintomas } = attribute;
    const attributes:formAtributos = {
        mascota:mascota.value,
        propietario:propietario.value,
        telefono: Number(telefono.value),
        fecha:fecha.value,
        hora:hora.value,
        sintomas:sintomas.value
    };
    if( mascota.value === '' || propietario.value === '' || telefono.value === '' || fecha.value === '' || hora.value === '' || sintomas.value === ''){
        classUI.printHTML_Error('Todo los campos estan vacios', 'error');
        return;
    };
};

eventListener()