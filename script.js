// MENU FIXO
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 5, 5, 0.95)';
    } else {
        header.style.background = 'rgba(10, 5, 5, 0.9)';
    }
});

// MÚSICA
const bgMusic = document.getElementById('bg-music');
const playBtn = document.getElementById('btn-play');
const pauseBtn = document.getElementById('btn-pause');
const musicStatus = document.getElementById('music-status');

if (bgMusic) {
    bgMusic.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    bgMusic.volume = 0.4;
}

if (playBtn) {
    playBtn.addEventListener('click', () => {
        bgMusic.play();
        musicStatus.innerHTML = '🎧 Tocando: Tokyo Night Mix';
    });
}

if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
        bgMusic.pause();
        musicStatus.innerHTML = '⏸ Pausado';
    });
}

// BOTÕES HOSTESS
document.querySelectorAll('.btn-hostess').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const girl = btn.getAttribute('data-girl');
        alert(`✧ ${girl} · Clube privê\nReserva exclusiva.\nEntre em contato com nosso host.`);
    });
});

// BOTÃO RESERVAR / VIP
const btnReserve = document.getElementById('btn-reserve');
const btnVip = document.getElementById('btn-vip');

if (btnReserve) {
    btnReserve.addEventListener('click', () => {
        alert('✧ RESERVA · Clube privê\ncontato@cottoncandy.jp');
    });
}

if (btnVip) {
    btnVip.addEventListener('click', () => {
        alert('✧ ÁREA VIP\nReserva exclusiva.\nvip@cottoncandy.jp');
    });
}

// BOTÃO MAPA
const btnMapa = document.getElementById('btn-mapa');
if (btnMapa) {
    btnMapa.addEventListener('click', () => {
        alert('📍 Kabukicho, Shinjuku\nBeco Neon · Entrada discreta');
    });
}

// FALLBACK IMAGENS
document.querySelectorAll('.drink-img, .girl-img').forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg || bg === 'none') {
        el.style.backgroundImage = 'url(https://via.placeholder.com/300x200?text=Imagem)';
    }
});

console.log('🍭 Cotton Candy Kabukicho · Clube Privê');