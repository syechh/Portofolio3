// Data untuk grafik batang
const data = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'], // Label untuk sumbu x
    datasets: [
        {
            label: 'Tahun 2022',
            data: [4.017, 6.135, 7.091, 5.841, 5.036, 4.547, 3.467, 3.970, 6.313, 3.595, 9.207, 5.945], // Data tahun 2023
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Warna batang tahun 2022
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Tahun 2023',
            data: [2.416, 4.136, 7.935, 8.004, 9.505, 5.026, 6.108, 6.343, 9.404, 9.280, 9.287, 8.689], // Data tahun 2024
            backgroundColor: 'rgba(255, 99, 132, 0.6)', // Warna batang tahun 2023
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};

// Konfigurasi grafik
const config = {
    type: 'bar', // Jenis grafik: batang
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Posisi legenda
            },
            title: {
                display: true,
                text: 'Data Tahun 2022 dan 2023' // Judul grafik
            }
        },
        scales: {
            y: {
                beginAtZero: true // Mulai dari 0 di sumbu y
            }
        }
    }
};

// Render grafik menggunakan Chart.js
const ctx = document.getElementById('barChart').getContext('2d');
new Chart(ctx, config);