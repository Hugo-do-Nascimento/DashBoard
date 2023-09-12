// Código para o gráfico de barras
const ctxBar = document.getElementById('myChart').getContext('2d');

new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Nordeste', 'Norte', 'Sul', 'Sudeste', 'Centro-Oeste'],
    datasets: [
      {
        label: 'Escola pública',
        data: [12, 5, 14, 16, 6], // Se tu mudar algo no index.html tu avisa     
        borderWidth: 1,
        backgroundColor: ['rgba(250, 232, 148, 1)', 'rgba(250, 232, 148, 1)', 'rgba(250, 232, 148, 1)', 'rgba(250, 232, 148, 1)', 'rgba(250, 232, 148, 1)']
      },
      {
        label: 'Rede Privada',
        data: [17, 10, 19.5, 8.9, 7],
        borderWidth: 1,
        backgroundColor: ['rgba(110, 145, 103, 1)', 'rgba(110, 145, 103, 1)', 'rgba(110, 145, 103, 1)', 'rgba(110, 145, 103, 1)', 'rgba(110, 145, 103, 1)']
      }
    ]
  },    
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});