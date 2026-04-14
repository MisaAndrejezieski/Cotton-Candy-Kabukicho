// VÍDEO
const video = document.getElementById('bg-video');
if (video) {
    video.play().catch(e => console.log('Vídeo:', e));
}

// MÚSICA - INICIA AUTOMATICAMENTE
const bgMusic = document.getElementById('bg-music');
const playBtn = document.getElementById('btn-play');
const pauseBtn = document.getElementById('btn-pause');
const musicStatus = document.getElementById('music-status');

if (bgMusic) {
    bgMusic.src = 'imagens/musica.mp3';
    bgMusic.volume = 0.5;
    bgMusic.loop = true;
    
    // TENTA TOCAR AUTOMATICAMENTE
    bgMusic.play().catch(e => {
        console.log('⚠️ Autoplay bloqueado. Clique em PLAY.');
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

// BOTÕES HOSTESS
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
console.log('✅ Vídeo: imagens/night club, Tokyo, Japan.mp4');
console.log('✅ Música: musica.mp3');
console.log('✅ Imagens na pasta imagens/');