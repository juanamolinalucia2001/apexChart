class ganancias {
    constructor(idEmpresa, mes,anio,monto) {
    	
        this.idEmpresa=idEmpresa
        this.mes=mes
        this.anio=anio
        this.monto=monto
       
    }
    
    static fromJson({idEmpresa, mes,anio,monto}){
    return new ganancias(idEmpresa, mes,anio,monto)
    }
    }
    
export default ganancias;

