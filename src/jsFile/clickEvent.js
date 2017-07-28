/**
 * Created by dyao on 2017/7/28.
 */
var showBar = function (createBar, createLine) {
    var barData = {
            dataLabels: [],
            data: []
        },
        myLChart = createLine(window),
        myBChart = createBar();


    $("#myLineChart")[0].onclick = function (evt) {
        var activePoints = myLChart.getElementsAtEvent(evt);
        for (var i = 0; i < activePoints.length; i++) {
            barData.dataLabels[i] = myLChart.data.datasets[i].label;
            barData.data[i] = myLChart.data.datasets[i].data[activePoints[i]._index];
            // console.log(barData.dataLabel[i]);
            // console.log(barData.data[i]);

        }
        fixBar(myBChart, barData);
        myBChart.update();
    };
};

function fixBar(myBChart, barData) {
    //this function change the BarChart's data
    myBChart.data.labels = barData.dataLabels;
    myBChart.data.datasets[0].data = barData.data;
    myBChart.data.datasets[0].label = "Just A Test";
};

showBar(createBar, createLine);