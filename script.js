// Ganti background color
const bgColorSelector = document.getElementById('bg-color');
bgColorSelector.addEventListener('change', function() {
    if (!document.body.classList.contains('dark-mode')) { // Hanya ganti warna jika dark mode tidak aktif
        document.body.style.backgroundColor = this.value;
    }
});

// Ganti ukuran font
const fontSizeSlider = document.getElementById('font-size');
fontSizeSlider.addEventListener('input', function() {
    document.documentElement.style.fontSize = this.value + 'px'; // Ubah ukuran font di root (html)
});

// Tombol dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Jika dark mode aktif, atur background ke default dark
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#333'; // Warna background dark mode
    } else {
        document.body.style.backgroundColor = bgColorSelector.value; // Kembali ke warna yang dipilih user
    }
});

// Ganti font ke Serif
const serifFontButton = document.getElementById('serif-font');
const sansSerifFontButton = document.getElementById('sans-serif-font');
const container = document.getElementById('mainContainer');

serifFontButton.addEventListener('click', function() {
    container.classList.remove('sans-serif');
    container.classList.add('serif');
});

// Ganti font ke Sans-Serif
sansSerifFontButton.addEventListener('click', function() {
    container.classList.remove('serif');
    container.classList.add('sans-serif');
});
