// Código para o gráfico de pizza
const ctxPie = document.getElementById('myPizzaChart').getContext('2d');
new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Pernambuco', 'Ceará', 'Bahia', 'Paraíba', 'Rio Grande do Norte', 'Alagoas', 'Sergipe', 'Piauí', 'Maranhão'],
    datasets: [{
      label: 'Acesso à internet geral',
      data: [70, 85.6, 40, 57, 63, 20, 30, 10, 40],
      backgroundColor: [
         'rgba(46, 204, 113, 0.8)',   // Verde
         'rgba(52, 152, 219, 0.8)',   // Azul
         'rgba(231, 76, 60, 0.8)',   // Vermelho
         'rgba(241, 196, 15, 0.8)',   // Amarelo
         'rgba(155, 89, 182, 0.8)',   // Roxo    
         'rgba(211, 84, 0, 0.8)',   // Laranja               
         'rgba(149, 165, 166, 0.8)',   // Cinza
         'rgba(22, 160, 133, 0.8)',   // Verde-azulado
         'rgba(230, 126, 34, 0.8)'    // Laranja-escuro
      ], 
      borderColor: [
        'rgba(46, 204, 113, 1)',
        'rgba(52, 152, 219, 1)',
        'rgba(231, 76, 60, 1)',
        'rgba(241, 196, 15, 1)',
        'rgba(155, 89, 182, 1)',
        'rgba(211, 84, 0, 1)',
        'rgba(149, 165, 166, 1)',
        'rgba(22, 160, 133, 1)',
        'rgba(230, 126, 34, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});