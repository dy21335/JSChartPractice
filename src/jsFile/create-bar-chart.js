/**
 * Created by dyao on 2017/7/27.
 */
 var createBar=function () {
    var ctx= document.getElementById("myBarChart").getContext('2d');
    var myBChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["一居室", "二居室", "三居室","四居室"],
            datasets: [{
                label: 'just a test',
                data: [0, 0, 0,0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    return myBChart;
};