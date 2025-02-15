// Variabel Global
let countdownTime = 3; // Waktu hitungan mundur (dalam detik)
let interval;

// Elemen DOM
const startButton = document.getElementById('startButton');
const countdown = document.querySelector('.countdown');
const timer = document.getElementById('timer');
const initialMessage = document.getElementById('initialMessage');
const secretMessage = document.getElementById('secretMessage');
const backgroundMusic = document.getElementById('backgroundMusic');

// Fungsi untuk memulai hitungan mundur
const startCountdown = () => {
    // Sembunyikan tombol dan tampilkan hitungan mundur
    startButton.style.display = 'none';
    countdown.classList.remove('hidden');
    countdown.classList.add('visible');

    // Mulai hitungan mundur
    interval = setInterval(() => {
        countdownTime--;
        timer.textContent = `00:00:${String(countdownTime).padStart(2, '0')}`;

        // Jika hitungan mundur selesai
        if (countdownTime === 0) {
            clearInterval(interval);
            showSecretMessage(); // Tampilkan pesan rahasia
        }
    }, 1000);
};

// Fungsi untuk menampilkan pesan rahasia
const showSecretMessage = () => {
    initialMessage.style.display = 'none'; // Sembunyikan tulisan awal
    countdown.style.display = 'none'; // Sembunyikan hitungan mundur
    secretMessage.classList.remove('hidden'); // Tampilkan pesan rahasia
    secretMessage.classList.add('visible'); // Tambahkan animasi
    backgroundMusic.play(); // Mulai musik
};

// Mulai hitungan mundur saat tombol diklik
startButton.addEventListener('click', startCountdown);