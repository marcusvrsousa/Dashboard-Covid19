let myChart = null;

export function createLineChart(cases, date){

  const config = {
    type: 'line',
    data: {
      labels: date,
      datasets: [{
        label: 'Número de Mortes',
        data: cases,
        borderWidth: 1,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3
      },
      {
        label: 'Média de Mortes',
        data: cases,
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
                    size: 24,
                    style: 'italic',
                    family: 'Helvetica Neue'
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
  console.log('context:', ctx)
  if(myChart != null){
    myChart.destroy();
  }

  myChart = new Chart(ctx, config)
};