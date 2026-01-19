// Fungsi untuk tombol Start
document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
});

// Fungsi untuk menu hamburger
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// Fungsi untuk navigasi halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active');
    
    // Tutup menu
    document.getElementById('menu').classList.remove('active');
}

// Fungsi untuk menambahkan penghasilan (contoh simpel - edit sesuai kebutuhan)
function updatePenghasilan(data) {
    const content = document.getElementById('penghasilan-content');
    content.innerHTML = '<p>Total Penghasilan: ' + data.total + '</p><ul>';
    data.monthly.forEach(item => {
        content.innerHTML += '<li>' + item.month + ': ' + item.amount + '</li>';
    });
    content.innerHTML += '</ul>';
}

// Contoh penggunaan (hapus atau ganti dengan data real)
const sampleData = {
    total: 'Rp 100.000.000',
    monthly: [
        { month: 'Bulan 1', amount: 'Rp 5.000.000' },
        { month: 'Bulan 2', amount: 'Rp 6.000.000' }
    ]
};
updatePenghasilan(sampleData);