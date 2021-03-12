type formAttribute = {
    mascota:string,
    propietario:string,
    telefono:number,
    fecha:string,
    hora:string,
    sintomas:string,
    id:number
};
interface interfaceCitas{
    citas_array:formAttribute[];
    addCitas(cita:formAttribute):void;
    removeCitas(id:number):void;
    updateCitas(citaUpdated:formAttribute);
}

interface interfaceUI{
    printHTML_Message(message:string, type?:string):void;
    printHTML_Citas(citas:formAttribute[]):void;
    insertParrafo(data:string | number, nameSpan:string, divCita:any):void;
    limpiarHTML():void;
    add_DeleteBtn(type:string, name:string, id?:number);
}

export{ formAttribute, interfaceCitas, interfaceUI }