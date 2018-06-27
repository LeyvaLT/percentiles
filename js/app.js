function dibujar() {
    var ctx = document.getElementById("pLongitud");
    Chart.defaults.line.spanGaps = true;
    //var ctx = document.getElementById("myChart").getContext("2d");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0", "6", "12", "18", "24"],
            datasets: [{
                label: 'Altura en niños',
                data: [{
                    x: 10,
                    y: 20
                }, {
                    x: 15,
                    y: 30
                }, {
                    x: 20,
                    y: 40
                }, {
                    x: 25,
                    y: 50
                }, {
                    x: 30,
                    y: 60
                }, {
                    x: 35,
                    y: 70
                }],
                borderWidth: 2
            }],
            options: {
                showLines: false, // disable for all datasets
            }
        }

    });
}
