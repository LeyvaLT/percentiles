function desplegarGrafica() {
    /*
    *
    id = edad 	  => cantidad de edad
    id = edadTipo => Unidad de medidad de la edad 0 = meses 1 = años
    id = sexo 	  => Genero 0 = femenino 1 = masculino
    id = longitud => dato longitud
    id = peso	  => dato peso
    id = pCraneal => dato perimetro craneal

    id = longitudG => grafica para longitud
    id = pesoG 	   => grafica para peso
    id = pCranealG => grafica para perimetro craneal
    *
    * */

    $("#longitudG").empty();
    $("#pesoG").empty();
    $("#pCranealG").empty();
    var genero = $("#sexo").val();
    var tipo = $("#edadTipo").val(); // unidad de medida de la edad
    var edad = $("#edad").val();
    var peso = $("#peso").val();
    var pCraneal = $("#pCraneal").val();
    var longitud = $("#longitud").val();
    var factorXanios = 1;//21/11;
    var factorXmes = 0.3333;
    var rangoMeses = [0,3,6,9];
    //var rangoAños = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5];
    var rangoAños = [1,2,3,4,5,6,7,8,9,10,11];
    var myDatoPeso = [edad,peso];
    var myDatoLongitud = [edad,longitud];
    var myDatoPCraneal = [edad,pCraneal];

    if (genero == 1 && tipo == 0) {

        P3 = dataP3(getDatosXMes("VaronesLongitud.json"));
        P50 = dataP50(getDatosXMes("VaronesLongitud.json"));
        P97 = dataP97(getDatosXMes("VaronesLongitud.json"));
        graficar(P3, P50, P97, "longitudG", myDatoLongitud, rangoMeses, "Meses", "Altura (cm)", "Altura en niños",
                factorXmes);

        P3 = dataP3(getDatosXMes("VaronesPeso.json"));
        P50 = dataP50(getDatosXMes("VaronesPeso.json"));
        P97 = dataP97(getDatosXMes("VaronesPeso.json"));
        graficar(P3, P50, P97, "pesoG", myDatoPeso, rangoMeses, "Meses", "Peso (kg)", "Peso en niños",
                factorXmes);

        P3 = dataP3(getDatosXMes("VaronesPCraneal.json"));
        P50 = dataP50(getDatosXMes("VaronesPCraneal.json"));
        P97 = dataP97(getDatosXMes("VaronesPCraneal.json"));
        graficar(P3, P50, P97, "pCranealG", myDatoPCraneal, rangoMeses, "Meses", "Perímetro Craneal (cm)",
                "Perimetro Craneal en niños", factorXmes);

    }
    else if (genero == 1 && tipo == 1) {
        P3 = dataP3(getdatosXAnio("VaronesLongitud.json"));
        P50 = dataP50(getdatosXAnio("VaronesLongitud.json"));
        P97 = dataP97(getdatosXAnio("VaronesLongitud.json"));
        graficar(P3, P50, P97, "longitudG", myDatoLongitud, rangoAños, "Años", "Altura (cm)", "Altura en niños",
                factorXanios);
        P3 = dataP3(getdatosXAnio("VaronesPeso.json"));
        P50 = dataP50(getdatosXAnio("VaronesPeso.json"));
        P97 = dataP97(getdatosXAnio("VaronesPeso.json"));
        graficar(P3, P50, P97, "pesoG", myDatoPeso, rangoAños, "Años", "Peso (kg)", "Peso en niños",
                factorXanios);

        if (edad <= 2) {
            P3 = dataP3(getdatosXAnio("VaronesPCraneal.json"));
            P50 = dataP50(getdatosXAnio("VaronesPCraneal.json"));
            P97 = dataP97(getdatosXAnio("VaronesPCraneal.json"));
            graficar(P3, P50, P97, "pCranealG", myDatoPCraneal, rangoAños, "Años", "Perímetro Craneal (cm)",
                    "Perimetro craneal en niños", factorXanios);
        }
    }
    if (genero == 0 && tipo == 0) {

        P3 = dataP3(getDatosXMes("MujeresLongitud.json"));
        P50 = dataP50(getDatosXMes("MujeresLongitud.json"));
        P97 = dataP97(getDatosXMes("MujeresLongitud.json"));
        graficar(P3, P50, P97, "longitudG", myDatoLongitud, rangoMeses, "Meses", "Altura (cm)", "Altura en niñas",
                factorXmes);

        P3 = dataP3(getDatosXMes("MujeresPeso.json"));
        P50 = dataP50(getDatosXMes("MujeresPeso.json"));
        P97 = dataP97(getDatosXMes("MujeresPeso.json"));
        graficar(P3, P50, P97, "pesoG", myDatoPeso, rangoMeses, "Meses", "Peso (kg)", "Peso en niñas",
                factorXmes);

        P3 = dataP3(getDatosXMes("MujeresPCraneal.json"));
        P50 = dataP50(getDatosXMes("MujeresPCraneal.json"));
        P97 = dataP97(getDatosXMes("MujeresPCraneal.json"));
        graficar(P3, P50, P97, "pCranealG", myDatoPCraneal, rangoMeses, "Meses", "Perímetro Craneal (cm)",
            "Perimetro craneal en niñas", factorXmes);

    }
    else if (genero == 0 && tipo == 1) {
        P3 = dataP3(getdatosXAnio("MujeresLongitud.json"));
        P50 = dataP50(getdatosXAnio("MujeresLongitud.json"));
        P97 = dataP97(getdatosXAnio("MujeresLongitud.json"));
        graficar(P3, P50, P97, "longitudG", myDatoLongitud, rangoAños, "Años", "Altura (cm)", "Altura en niñas",
                factorXanios);

        P3 = dataP3(getdatosXAnio("MujeresPeso.json"));
        P50 = dataP50(getdatosXAnio("MujeresPeso.json"));
        P97 = dataP97(getdatosXAnio("MujeresPeso.json"));
        graficar(P3, P50, P97, "pesoG", myDatoPeso, rangoAños, "Años", "Peso (kg)", "Peso en niñas",
                factorXanios);

        if (edad <= 2) {
            P3 = dataP3(getdatosXAnio("MujeresPCraneal.json"));
            P50 = dataP50(getdatosXAnio("MujeresPCraneal.json"));
            P97 = dataP97(getdatosXAnio("MujeresPCraneal.json"));
            graficar(P3, P50, P97, "pCranealG", myDatoPCraneal, rangoAños, "Años", "Perímetro Craneal (cm)",
                    "Perimetro craneal en niñas", factorXanios);
        }
    }


}

function graficar(P3, P50, P97, contenedor, myDato, rango, etiquetaX, etiquetaY, titulo, factor) {
    Highcharts.chart(contenedor, {
        chart: {
            type: 'spline'
        },
        title: {
            text: titulo
        },
        subtitle: {
            text: 'Información: www.who.int/childgrowth/standards/es/'
        },
        xAxis: {
            categories: rango,
            title: {
                text: etiquetaX
            }
        },
        yAxis: {
            title: {
                text: etiquetaY
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },

        series: [
            {
                name: 'Percentil 97',
                data: P97
            },
            {
                name: 'Percentil 50',
                data: P50
            },
            {
                name: 'Percentil 3',
                data: P3
            },
            {
                name: 'Mis medidas',
                marker: {
                    symbol: 'null'
                },
                data: [{
                    x: parseFloat(parseFloat(myDato[0])*factor),//(0.2083) * 3
                    y: parseFloat(myDato[1]),
                    marker: {
                        symbol: 'url(css/img/1.png)'
                    }
                }]
            }],
        navigation: {
            buttonOptions: {
                height: 40,
                width: 48,
                symbolSize: 24,
                symbolX: 23,
                symbolY: 21,
                symbolStrokeWidth: 2
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }


    });
}

function dataP3(data) {
    //console.log(data);
    P3 = [];
    var i = 1;
    $.each(data, function (k, m) {
        //if((i%2)!=0) {
            P3.push(data[k].P3);
        //}
        i++;
    });
    P3.sort(function(a, b){return a - b});
    return P3;
}

function dataP50(data) {
    //console.log(data);
    P50 = [];
    var i = 1;
    $.each(data, function (k, m) {
        //console.log(data[k].P50);
      //  if((i%2)!=0) {

            P50.push(data[k].P50);
        //}
        i++;
    });
    //console.log(P50);
    P50.sort(function(a, b){return a - b});

    return P50;
}

function dataP97(data) {
    //console.log(data);
    P97 = [];
    var i = 1;
    $.each(data, function (k, m) {
        // console.log(data[k].P97);
       // if((i%2)!=0) {
            P97.push(data[k].P97);
        //}
        i++;
    });

    //console.log(P97);
    P97.sort(function(a, b){return a - b});
    return P97;
}

function getDatosXMes(tipo) {
    var return_first = function () {
        var tmp = null;
        $.ajax({
            'async': false,
            'type': "GET",
            'global': false,
            'dataType': 'json',
            'url': "json/" + tipo,
            'success': function (data) {
                tmp = data;
            }
        });
        console.log(tmp.meses);
        return tmp.meses;
    }();

    return return_first;
}

function getdatosXAnio(tipo) {
    var return_first = function () {
        var tmp = null;
        $.ajax({
            'async': false,
            'type': "GET",
            'global': false,
            'dataType': 'json',
            'url': "json/" + tipo,
            'success': function (data) {
                tmp = data;
            }
        });
        return tmp.años;
    }();

    return return_first;
}

