$(function () {
    var rawData = "[[1469980800000,2347],[1472659200000,2347],[1475251200000,2347],[1477929600000,2347]," +
            "[1480521600000,2347],[1483200000000,2347],[1485878400000,2347],[1488297600000,2347]," +
            "[1490976000000,2347],[1493568000000,2347],[1496246400000,2347],[1498838400000,2347]]&" +
            "[[1469980800000,1479],[1472659200000,1492],[1475251200000,1622],[1477929600000,1516]," +
            "[1480521600000,2291],[1483200000000,2291],[1485878400000,2291],[1488297600000,2291]," +
            "[1490976000000,2291],[1493568000000,2291],[1496246400000,2755],[1498838400000,2517]]&" +
            "[[1469980800000,2859],[1472659200000,2926],[1475251200000,2981],[1477929600000,2944]," +
            "[1480521600000,2930],[1483200000000,2917],[1485878400000,2897],[1488297600000,2719]," +
            "[1490976000000,2711],[1493568000000,2717],[1496246400000,2701],[1498838400000,2697]]&" +
            "[[1469980800000,3514],[1472659200000,3518],[1475251200000,3514],[1477929600000,3486]," +
            "[1480521600000,3481],[1483200000000,3477],[1485878400000,3501],[1488297600000,3435]," +
            "[1490976000000,3469],[1493568000000,3422],[1496246400000,3409],[1498838400000,3386]]",
        categorizedData,
        finalData,
        monthData;

    categorizedData = rawData.split("&");
    finalData = [];
    for (var i = 0; i < categorizedData.length; i++) {
        finalData[i] = changeS(JSON.parse(categorizedData[i]), 1);
        console.log(finalData[i]);
    }
    monthData = changeS(JSON.parse(categorizedData[0]), 0);
    for (var i = 0; i < monthData.length; i++) {
        monthData[i] = new Date(monthData[i]).getMonth() + 1;
        monthData[i] += "月";
        //   console.log(monthData[i]);
    }

    function changeS(categoryData, k) {
        var result = [],
            i = 0;
        for (i; i < categoryData.length; i++) {
            result[i] = categoryData[i][k];
        }
        return result;
    }

    //var dts是datasets的数据
    var dts =
        [
            {
                label: "一居室",
                borderColor: "#3e95cd",
                fill: false,
                data: []
            },
            {
                label: "二居室",
                borderColor: "#8e5ea2",
                fill: false,
                data: []
            },
            {
                label: "三居室",
                borderColor: "#3cba9f",
                fill: false,
                data: []
            },
            {
                label: "四居室",
                borderColor: "#e8c3b9",
                fill: false,
                data: []
            }];

    for (var i = 0; i < finalData.length; i++) {
        dts[i].data = finalData[i];
    }

    var data,options;
    data = {
        labels: [],
        datasets: []
    };
    data.labels=monthData;
    data.datasets=dts;
    options={};

    var ctx = $('#myChart')[0].getContext('2d');
    var mychart = new Chart(ctx,{
        type:'line',
        data:data
    })
});





