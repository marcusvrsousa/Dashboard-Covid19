const ctx = document.getElementById('line-chart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2021-05-01', '2021-05-01', '2021-05-01', '2021-05-01', '2021-05-01', '2021-05-01'],
      datasets: [{
        label: 'Número de Mortes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3
      },
      {
        label: 'Média de Mortes',
        data: [7, 10, 12, 1, 8, 12],
        borderWidth: 1,
        borderColor: 'black',
        tension: 0.1
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
  });