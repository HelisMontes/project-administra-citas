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
    addCitas(attributes:formAttribute):void;
}

interface interfaceUI{
    printHTML_Message(message:string, type?:string):void;
    printHTML_Citas(citas:formAttribute[]):void;
    insertParrafo(data:string | number, nameSpan:string, divCita:any):void;
    limpiarHTML():void;
}

export{ formAttribute, interfaceCitas, interfaceUI }