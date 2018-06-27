function dibujar() {
    new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'longitud',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { month: "0", value: 20 },
            { month: "6", value: 10 },
            { month: "12", value: 5 },
            { month: "18", value: 5 },
            { month: "24", value: 20 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: ['month'],
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['puto'],
        xLabels: ['value']

    });
}


