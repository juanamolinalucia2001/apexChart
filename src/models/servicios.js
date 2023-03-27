class Servicio {
    constructor(idServicio, idEmpresa, nombre, costo, ganancia) {
      this.idServicio = idServicio
      this.idEmpresa = idEmpresa
      this.nombre = nombre;
      this.costo = costo;
      this.ganancia = ganancia;
    }
  
    get precio() {
      return this.costo + this.ganancia;
    }
  
    static fromJson({ idServicio, idEmpresa, nombre, costo, ganancia }) {
      return new Servicio(idServicio, idEmpresa, nombre, costo, ganancia);
    }
  }
  
  export default Servicio;
  