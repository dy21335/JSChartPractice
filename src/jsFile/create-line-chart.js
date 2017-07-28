var createLine = function () {
    var myLChart = new Chart($('#myLineChart')[0].getContext('2d'), {
        type: 'line',
        data: parseData(window.rawRentData)
    });
    return myLChart;
};

function parseData(rawRentData) {
    var result = {
            labels: [],
            datasets: []
        },
        HOUSE_TYPE = ['一居室', '二居室', '三居室', '四居室'],
        HOUSE_TYPE_COLOR = ['#CCCCCC', '#FF9900', '#FFCC00', '#66CCCC'];


    rawRentData.split('&').forEach(function (rawHouseTypeData, index) {
        var houseTypeData = JSON.parse(rawHouseTypeData),
            rentPricesByHouseType = [],
            i;

        for (i = 0; i < houseTypeData.length; i++) {
            rentPricesByHouseType.push(houseTypeData[i][1]);

            if (index === 0) {
                result.labels.push((new Date(houseTypeData[i][0]).getMonth() + 1) + '月');
            }
        }

        result.datasets[index] = {
            label: HOUSE_TYPE[index],
            data: rentPricesByHouseType,
            borderColor: HOUSE_TYPE_COLOR[index],
            pointBackgroundColor: HOUSE_TYPE_COLOR[index],
            fill: false
        };
    });

    return result;
};








