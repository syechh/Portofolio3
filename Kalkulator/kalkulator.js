function appendToInput(value) {
    document.getElementById('input').value += value;
}

function calculate() {
    const input = document.getElementById('input').value;
    let hasil;

    try {
        hasil = eval(input); // Menggunakan eval untuk menghitung ekspresi
        document.getElementById('input').value = hasil; // Mengupdate input dengan hasil
    } catch (error) {
        document.getElementById('input').value = 'Error: ' + error.message; // Menampilkan error di input
    }
}

function clearInput() {
    document.getElementById('input').value = '';
}
