function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";

    
}


const ctx = document.getElementById('statsChart').getContext('2d');
        const statsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Grain Mix', 'Automatic Waterer', 'Chicken Coop', 'Poultry Vaccines', 
                    'Automatic Feeder', 'Nest Boxes', 'Poultry Medicine', 'Egg Incubators', 
                    'Organic Fertilizer', 'Organic Chickens', 'Premium Eggs', 'Brooder'
                ],
                datasets: [{
                    label: 'Monthly Sales (Units)',
                    data: [200, 150, 120, 180, 220, 140, 100, 90, 60, 250, 300, 110],
                    backgroundColor: [
                        'rgba(34, 139, 34, 0.8)', // Green
                        'rgba(255, 165, 0, 0.8)'  // Light Orange
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: 'Product Sales Analytics',
                        font: {
                            size: 18,
                            family: 'Poppins',
                            weight: 'bold'
                        },
                        color: '#4682B4' // Theme color (steel blue)
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#228B22', // Theme color (e.g., green)
                            font: {
                                family: 'Poppins'
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(34, 139, 34, 0.3)' // Theme color (e.g., green)
                        },
                        ticks: {
                            color: '#228B22', // Theme color (e.g., green)
                            font: {
                                family: 'Poppins'
                            },
                            stepSize: 50
                        },
                        beginAtZero: true
                    }
                }
            }
        });

