export function createPieChart(totalConfirmed, totalDeaths,totalRecovered){

  const ctxPieChart = document.getElementById('pie-chart');

  const data = {
      labels: ['Confirmados', 'Mortes', 'Recuperados'],
      datasets: [{
          data: [totalConfirmed, totalDeaths, totalRecovered],
          backgroundColor: ['#79D1CF', 'gray', 'green'],
          hoverOffset: 4,
      },
  ]};

  new Chart (ctxPieChart, {
    type: 'pie',
    data: data,
    plugins: [ChartDataLabels],
    options: {
      color: "black", //caption text color
      responsive: true,
      //o aspecto do gráfico normaliza com false
      maintainAspectRatio: false,
      aspectRatio:4,
      plugins: {
        datalabels: {
          color: "white",
          //anchor: 'middle',
          //align: 'top',
          font: {
            weight: 'bold',
          }
        },
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Distribuição de novos casos'
        }
      }
    },
  });
}
  


//   {
//     labels: ['Confirmados', 'Recuperados', 'Mortes'],
//     datasets: [{
//         label: 'Confirmados',
//         data: [150000] ,
//         backgroundColor: [
//             'rgb(255, 99, 132)' ],
//         responsive: true
//     }, {
//         label: 'Recuperados',
//         data: [20000] ,
//         backgroundColor: [  
//             'rgb(54, 162, 235)',
//         ],
       
//         responsive: true
//     },{
//         label: 'Mortes',
//         data: [5000] , 
//         backgroundColor: [
//             'rgb(255, 205, 86)'],
//         responsive: true
//     }],  
    
//   }, 