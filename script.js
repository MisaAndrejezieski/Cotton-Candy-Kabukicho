// VÍDEO - garantir que toque
const video = document.getElementById('bg-video');
if (video) {
    video.play().catch(e => console.log('Vídeo:', e));
}

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
        musicStatus.innerHTML = '🔥 TOKYO NIGHT CORE 🔥';
    });
}

if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
        bgMusic.pause();
        musicStatus.innerHTML = '⛩️ SILÊNCIO ⛩️';
    });
}

// BOTÕES
document.querySelectorAll('.btn-hostess').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const girl = btn.getAttribute('data-girl');
        alert(`⛩️ ${girl} · Clube Privê\nAcesso restrito. Contato: host@cottoncandy.jp`);
    });
});

document.getElementById('btn-reserve')?.addEventListener('click', () => {
    alert('⛩️ ACESSO RESTRITO\nContato: vip@cottoncandy.jp');
});

document.getElementById('btn-vip')?.addEventListener('click', () => {
    alert('⛩️ ÁREA VIP · Reserva exclusiva\nvip@cottoncandy.jp');
});

document.getElementById('btn-mapa')?.addEventListener('click', () => {
    alert('📍 Kabukicho, Shinjuku\nBeco Neon · Entrada pela luz vermelha');
});

console.log('🔥 Cotton Candy Kabukicho · 闇夜 🔥');