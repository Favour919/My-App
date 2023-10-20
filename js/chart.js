const ctx = document.getElementById('myChart');


  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: '#38d39f',
        backgroundColor: '#38d39f',
      }]
    },
    options: {
      responsive: true,
      
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  });