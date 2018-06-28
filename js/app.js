function dibujar() {

    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'altura (niños)'
        },
        subtitle: {
            text: 'Información: www.who.int/childgrowth/standards/es/'
        },
        xAxis: {
            categories: ['0', '6', '12', '18', '24'],
            title: {
                text: 'Meses'
            }
        },
        yAxis: {
            title: {
                text: 'altura (cm.)'
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
                data: [54, 56, 58, 60, 62]
            },
            {
                name: 'Percentil 50',
                data: [52, 54, 56, 58, 60]
            },
            {
                name: 'Percentil 3',
                data: [50, 52, 54, 56, 58]
            },
            {
                name: 'Mis medidas',
                marker: {
                    symbol: 'null'
                },
                data: [{
                    x: (0.2083) * 3,
                    y: 59,
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

function desplegarGrafica() {

    console.log(getDatosXMes("VaronesPeso.json"));


}


function graficar(P3, P50, P97, genero, myData, edad, tipo) {

}


function dataP3(data) {
    console.log(data);
    P3 = [];

    $.each(data, function () {
        console.log(value);
        P3.push(data["P3"]);
    });
    console.log(P3);
    return P3;
}

function dataP50(data) {
    P50 = [];

    $.each(data, function () {
        console.log(value);
        P50.push(data["P50"]);
    });
    return P50;
}

function dataP97(data) {
    P97 = [];

    $.each(data, function () {
        P97.push(data["P97"]);
    });
    return P97;
}



var obj = "";
function getDatosXMes(tipo) {

    $.getJSON("json/" + tipo, function (data) {
        obj = data["meses"];
    });


    return obj;


}

function getdatosXAnio(tipo) {
    $.getJSON("json/" + tipo, function (data) {
        return data["años"];
    });
}

