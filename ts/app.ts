import {attribute, dataForm} from './selectores.js'
import { formAttribute} from './interfaces/interface_type'
import {UI} from './classes/UI.js'
import {Citas} from './classes/Citas.js'

const classUI = new UI();
const classCitas = new Citas();
const eventListener = () => { 
    document.addEventListener('submit', addCita)
};

const addCita = (e:any):void => {
    e.preventDefault();
    const { mascota, propietario, telefono, fecha, hora, sintomas } = attribute;
    if( mascota.value === '' || propietario.value === '' || telefono.value === '' || fecha.value === '' || hora.value === '' || sintomas.value === ''){
        classUI.printHTML_Message('Todo los campos estan vacios', 'error');
        return;
    };
    const dataCitas:formAttribute = {
        mascota:mascota.value,
        propietario:propietario.value,
        telefono: Number(telefono.value),
        fecha:fecha.value,
        hora:hora.value,
        sintomas:sintomas.value,
        id: Date.now()
    };
    classCitas.addCitas(dataCitas);
    const {citas_array} = classCitas
    dataForm.nueva_cita.reset();
    classUI.printHTML_Citas(citas_array);

};

eventListener()