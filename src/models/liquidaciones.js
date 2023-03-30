class liquidacionesAnuales {
    constructor(año, mes,ingresos, gastos , ganancias, perdidas, idEmpresa) {
        this.año=año
        this.mes=mes
        this.ingresos=ingresos,
        this.gastos=gastos,
        this.ganancias=ganancias
        this.perdidas=perdidas
        this.idEmpresa=idEmpresa
    }
    
    static fromJson({año, mes,ingresos, gastos , ganancias, perdidas, idEmpresa}){
    return new liquidacionesAnuales(año, mes,ingresos, gastos , ganancias, perdidas, idEmpresa)
    }
    }
    
export default liquidacionesAnuales;