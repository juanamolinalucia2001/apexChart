export const generarDatos = (idEmpresa, anioInicio, anioFin) => {
    const datos = []
    for (let anio = anioInicio; anio <= anioFin; anio++) {
      for (let mes = 1; mes <= 12; mes++) {
        const ingresos = Math.floor(Math.random() * 10000) + 10000
        const gastos = Math.floor(Math.random() * 8000) + 8000
        const ganancias = ingresos - gastos
        const perdidas = ganancias < 0 ? Math.abs(ganancias) : 0
        const porcentajeGanancia = ganancias / ingresos * 100
        datos.push({
          año: anio,
          mes: mes,
          ingresos: ingresos,
          gastos: gastos,
          ganancias: ganancias,
          perdidas: perdidas,
          porcentajeGanancia: porcentajeGanancia,
          idEmpresa: idEmpresa
        })
      }
    }
    return datos
  }
  