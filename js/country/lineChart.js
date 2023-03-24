let myChart = null;

export function createLineChart(cases, date, arrAverage, content){

  const config = {
    type: 'line',
    data: {
      labels: date,
      datasets: [{
        label: content,
        data: cases,
        borderWidth: 1,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3
      },
      {
        label: 'Média de Casos',
        data: arrAverage,
        borderWidth: 1,
        borderColor: 'black',
        tension: 0.4
      }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Curva Diária de Covid-19',
                font: {
                    size: 28,
                    style: 'italic',
                    family: 'Roboto'
                  }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
  };
  
  const ctx = document.getElementById('line-chart').getContext('2d');
  if(myChart != null){
    myChart.destroy();
  }

  myChart = new Chart(ctx, config)
};