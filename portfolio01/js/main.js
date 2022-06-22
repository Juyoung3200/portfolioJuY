$(document).ready(function () {
    // 첫번째 도넛차트
    var ctx = document.getElementById("myChart1");
    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 20, 30, 40, 50],
            backgroundColor: ["#D5EFFF","#88D1FF", "#2a93d5", "#135589", "#00375A"],
            label: "Dataset 1",
          },
        ],
        labels: ["표본", "추출물", "미생물", "미세조류", "유전자원"],
      },
      options: {
        cutoutPercentage: 60,
        responsive: true,
        legend: {
          position: "left",
        },
        animation: {
          animationScale: true,
          animationRotate: true,
          duration: 2000,
        },
        plugins: {
          datalabels: {
            display: true,
            backgroundColor: '#fff',
            borderRadius: 3,
            font: {
              weight: 'bold',
            }
          },
          doughnutlabel: {
            labels: [{
              text: '총 등록 수',
              font: {
                size: 22,
                weight: 'bold',
                color: '#333'
                
              }
            }],
          }
        }
      }
    };
  
    var myDoughnutChart = new Chart(ctx, config);
  
    // 두번째 도넛차트
    var ctx2 = document.getElementById("myChart2");
    var config2 = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 20, 30, 40],
            backgroundColor: ["#FFB692", "#E46425", "#AE3900", "#6B2300"],
            label: "Dataset 2",
          },
        ],
        labels: ["추출물", "미생물", "미세조류", "유전자원"],
      },
      options: {
        cutoutPercentage: 60,
        responsive: true,
        legend: {
          position: "left",
        },
        animation: {
          animationScale: true,
          animationRotate: true,
          duration: 2000,
        },
        plugins: {
          datalabels: {
            display: true,
            backgroundColor: '#fff',
            borderRadius: 3,
            font: {
              weight: 'bold',
            }
          },
          doughnutlabel: {
            labels: [
              {
                text: "분양 가능 수",
                font: {
                  size: 22,
                  weight: 'bold'
                }
              },
            ],
          },
        },
      },
    };
    var myDoughnutChart2 = new Chart(ctx2, config2);
})
