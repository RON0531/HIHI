const xValues = ["YT", "B站", "IG", "動漫瘋"];
const yValues = [30, 40, 10, 20];
const barColors = ["red", "pink", "orange", "blue"];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "pie", 
  plugins: [ChartDataLabels],
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true, 
    plugins: {
      legend: { display: true }, 
      title: {
        display: true,
        text: "自我分析統計圖", 
        font: { size: 16 }
      },
      datalabels: {
        color: '#ffffff',
        font: { weight: 'bold', size: 14 },
        formatter: (value, ctx) => {
          const sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          return ((value / sum) * 100).toFixed(0) + "%";
        }
      }
    }
  }
});