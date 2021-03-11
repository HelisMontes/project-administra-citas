type formAtributos = {
    mascota:string,
    propietario:string,
    telefono:number,
    fecha:string,
    hora:string,
    sintomas:string
};
interface interfaceCitas{
    citas_array:formAtributos[];
}

interface interfaceUI{
    printHTML_Error(message:string, type?:string):void;
}

export{ formAtributos, interfaceCitas, interfaceUI }