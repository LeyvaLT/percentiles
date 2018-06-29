function desplegarGrafica() {
    var genero;
    var tipo;
    var edad;
    var rango;
    P3 = dataP3(getDatosXMes("VaronesPeso.json"));
    P50 = dataP50(getDatosXMes("VaronesPeso.json"));
    P97 = dataP97(getDatosXMes("VaronesPeso.json"));

    graficar(P3, P50, P97);

}

function graficar(P3, P50, P97) {
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
                    x: (0.2083) * 3,
                    y: 10,
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
    $.each(data, function (k, m) {
        P3.push(data[k].P3);
    });
    return P3;
}

function dataP50(data) {
    //console.log(data);
    P50 = [];
    $.each(data, function (k, m) {
        //console.log(data[k].P50);
        P50.push(data[k].P50);
    });
    //console.log(P50);
    return P50;
}

function dataP97(data) {
    //console.log(data);
    P97 = [];
    $.each(data, function (k, m) {
        // console.log(data[k].P97);
        P97.push(data[k].P97);
    });
    //console.log(P97);
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

