(function (global) {
    $(function () {
        new Chart($('#myChart')[0].getContext('2d'), {
            type: 'line',
            data: parseData(global.rawRentData)
        })
    });

    function parseData(rawRentData) {
        var result = {
                labels: [],
                datasets: []
            },
            HOUSE_TYPE = ['一居室', '二居室', '三居室', '四居室'],
            HOUSE_TYPE_COLOR = ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'];


        rawRentData.split('&').forEach(function (rawHouseTypeData, index) {
            var houseTypeData = JSON.parse(rawHouseTypeData),
                rentPricesByHouseType = [],
                i;

            for (i = 0; i < houseTypeData.length; i++) {
                rentPricesByHouseType.push(houseTypeData[i][1]);

                if(index === 0) {
                    result.labels.push((new Date(houseTypeData[i][0]).getMonth() + 1) + '月');
                }
            }

            result.datasets[index] = {
                label: HOUSE_TYPE[index],
                borderColor: HOUSE_TYPE_COLOR[index],
                fill: false,
                data: rentPricesByHouseType
            };
        });

        return result;
    }
})(window);








