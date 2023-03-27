import moment from 'moment';
class empresa {
    constructor( id,
                nombre,
                direccion,
                telefono,
                correo,
                sector,
                pais ,
                cuidad,
                tamanio,
                empleados,
                fundacion) {
    	this.id=id
        this.nombre=nombre
        this.direccion=direccion
        this.telefono=telefono
        this.correo= correo
        this.sector=sector
        this.pais=pais
        this.cuidad=cuidad
        this.tamanio= tamanio
        this.empleados=empleados
        this.fundacion=fundacion
    }
    
    static fromJson({ id,
        nombre,
        direccion,
        telefono,
        correo,
        sector,
        pais,
        cuidad,
        tamanio,
        empleados,
        fundacion }) {
            
const formattedFundacion = moment(fundacion, 'YYYY-MM-DD').format('DD/MM/YYYY');
return new empresa(id,
            nombre,
            direccion,
            telefono,
            correo,
            sector,
            pais,
            cuidad,
            tamanio,
            empleados,
            formattedFundacion);
}

    }
    
export default empresa;
