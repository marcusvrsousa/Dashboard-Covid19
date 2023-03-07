export const createBarChart = (arrCountry, arrTotalDeaths) => {

  const ctx = document.getElementById('bar-chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arrCountry,
      datasets: [{
        data: arrTotalDeaths,
        borderWidth: 1,
        backgroundColor: '#B266FF',
        responsive: true
      }]
    },
    options: {
        plugins: {
          
            
          title: {
              display: true,
              text: 'Total de Mortes por País - Top 10'
          },
          //To remove label
          legend: {
              display: false
          },

          
        },
        layout: {
            padding: 150,
            
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
};