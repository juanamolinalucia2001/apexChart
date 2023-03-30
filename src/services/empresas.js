import axios from "axios";
import Empresa from "@/models/empresas";
import Ganancias from "@/models/ganancias";
import Liquidaciones from "@/models/liquidaciones";
import Servicios from "@/models/servicios"
import Empleados from "@/models/empleados";



class EmpresaService {
//traigo todos las empresas desde la api
getAllEmpresas() {
    const url = "https://private-2fd53-juana.apiary-mock.com/empresas";
    return axios.get(url).then(({ data }) => {
        return data.map((item) => {
            return Empresa.fromJson(item);

        });
    });
}

getAllEmpleados() {
    const url = "https://private-2fd53-juana.apiary-mock.com/empleados";
    return axios.get(url).then(({ data }) => {
        console.log('servi', data)
        return data.map((item) => {
            return Empleados.fromJson(item);
        });
    });
}


getAllServicios() {
    const url = "https://private-2fd53-juana.apiary-mock.com/servicios";
    return axios.get(url).then(({ data }) => {
        return data.map((item) => {
            return Servicios.fromJson(item);

        });
    });
}


getAllGanancias() {
    const url = "https://private-2fd53-juana.apiary-mock.com/ganancias";
    return axios.get(url).then(({ data }) => {
        return data.map((item) => {
            return Ganancias.fromJson(item);
        });
    });
    
}

getAllLiquidaciones() {
    const url = "https://private-2fd53-juana.apiary-mock.com/liquidacionesAnuales";
    return axios.get(url).then(({ data }) => {
        console.log(data)
        return data.map((item) => {
            return Liquidaciones.fromJson(item);
        });
    });
    
}



}
export default EmpresaService ;

