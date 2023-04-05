const empleado = {
    bruto: 12000,
    hijos: 1,
    pagas: 14
}

let nPorcentajeRetencion = 0, nNeto = 0;

if(empleado.bruto < 12000) {
    nPorcentajeRetencion = 0;
}
else if(empleado.bruto < 24000) {
    nPorcentajeRetencion = 8;
}
else if (empleado.bruto < 34000) {
    nPorcentajeRetencion = 16;
}
else {
    nPorcentajeRetencion = 30;
}

if (nPorcentajeRetencion > 0 && empleado.hijos > 0)
{
    nPorcentajeRetencion = nPorcentajeRetencion - 2;
}

nNeto = empleado.bruto - (empleado.bruto * (nPorcentajeRetencion / 100));

console.log("\nCALCULO SUELDO NETO" +
            "\n-------------------" +
            "\nSueldo bruto: " + empleado.bruto + 
            "\nNº hijos: " + empleado.hijos +
            "\nNº pagas: " + empleado.pagas +
            "\n% Retencion: " + nPorcentajeRetencion +
            "\nSueldo neto: " + nNeto +
            "\nNeto mensual: " + (nNeto / empleado.pagas));


