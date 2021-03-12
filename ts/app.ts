import {attribute, dataForm} from './selectores.js'
import { formAttribute} from './interfaces/interface_type'
import {UI} from './classes/UI.js'
import {Citas} from './classes/Citas.js'

const classUI = new UI();
const classCitas = new Citas();
const eventListener = () => { 
    document.addEventListener('submit', addCita);
};

const getValues = (id:number = Date.now()):formAttribute=>{
    const { mascota, propietario, telefono, fecha, hora, sintomas } = attribute;
    const dataCitas:formAttribute = {
        mascota:mascota.value,
        propietario:propietario.value,
        telefono: Number(telefono.value),
        fecha:fecha.value,
        hora:hora.value,
        sintomas:sintomas.value,
        id: id,
    }
    return dataCitas;
}

const addCita = (e:any):void => {
    e.preventDefault();
    const { mascota, propietario, telefono, fecha, hora, sintomas } = attribute;
    if( mascota.value === '' || propietario.value === '' || telefono.value === '' || fecha.value === '' || hora.value === '' || sintomas.value === ''){
        classUI.printHTML_Message('Todo los campos estan vacios', 'error');
        return;
    };
    const dataCitas:any = getValues();
    classCitas.addCitas(dataCitas);
    const {citas_array} = classCitas
    dataForm.nueva_cita.reset();
    classUI.printHTML_Message('Cita creada correctamente');
    classUI.printHTML_Citas(citas_array);

};

const eliminarCita = (id:number):void=>{
    classCitas.removeCitas(id);
    const {citas_array} = classCitas;
    classUI.printHTML_Message('La cita fue eliminada correctamente');
    classUI.printHTML_Citas(citas_array);
};

const cargarEdicion = (cita:formAttribute):void => {
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
    attribute.mascota.value = mascota
    attribute.propietario.value = propietario
    attribute.telefono.value = telefono
    attribute.fecha.value = fecha
    attribute.hora.value = hora
    attribute.sintomas.value = sintomas
    
    classUI.add_DeleteBtn('button','Actualizar',id);
};

const dataActualizada = (id:number):void =>{
    const dataCitas:formAttribute = getValues(id);
    dataForm.nueva_cita.reset();
    classCitas.updateCitas(dataCitas);
    const {citas_array} = classCitas;
    classUI.printHTML_Message('Cita Actualizada correctamente');
    classUI.printHTML_Citas(citas_array);
    classUI.add_DeleteBtn('submit');
};

eventListener();
export{eliminarCita, cargarEdicion, dataActualizada};
