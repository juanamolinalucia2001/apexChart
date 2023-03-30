class empleados {
    constructor(id,idEmpresa, nombre, puesto, telefono, correo) {
    	this.id = id
        this.idEmpresa=idEmpresa
        this.nombre = nombre
        this.puesto=puesto
        this.telefono=telefono
        this.correo=correo
       
    }
    
    static fromJson({id,idEmpresa, nombre, puesto, telefono, correo}){
    return new empleados(id,idEmpresa, nombre, puesto, telefono, correo)
    }
    }
    
export default empleados;