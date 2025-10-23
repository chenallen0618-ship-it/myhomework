const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['日本', '韓國', '法國', '泰國', '美國'],
        datasets: [{
            label: '旅遊次數',
            data: [5, 3, 2, 4, 1],
            backgroundColor: ['#45a29e', '#66fcf1', '#3282b8', '#0f4c75', '#1b262c']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { labels: { color: '#66fcf1' } },
            title: {
                display: true,
                text: '我最常造訪的國家',
                color: '#66fcf1',
                font: { size: 18 }
            }
        },
        scales: {
            x: { ticks: { color: '#c5c6c7' } },
            y: { ticks: { color: '#c5c6c7' } }
        }
    }
});
