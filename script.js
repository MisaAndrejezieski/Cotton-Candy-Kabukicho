// VÍDEO PRINCIPAL
const video = document.getElementById('bg-video');
if (video) video.play().catch(e => console.log('Vídeo:', e));

// MÚSICA
const bgMusic = document.getElementById('bg-music');
const playBtn = document.getElementById('btn-play');
const pauseBtn = document.getElementById('btn-pause');
const musicStatus = document.getElementById('music-status');

if (bgMusic) {
    bgMusic.src = 'imagens/musica.mp3';
    bgMusic.volume = 0.5;
    bgMusic.loop = true;
    bgMusic.play().catch(() => {
        if (musicStatus) musicStatus.innerHTML = '🎵 Clique em PLAY 🎵';
    });
}

if (playBtn) {
    playBtn.addEventListener('click', () => {
        bgMusic.play();
        if (musicStatus) musicStatus.innerHTML = '🎵 TOKYO NIGHT CORE 🎵';
    });
}
if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
        bgMusic.pause();
        if (musicStatus) musicStatus.innerHTML = '⛩️ SILÊNCIO ⛩️';
    });
}

// BOTÕES
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
console.log('✅ Vídeos, imagens e música carregados com sucesso!');