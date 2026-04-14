// ============================================
// MENU MOBILE
// ============================================
let btnMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu');

if (btnMenu) {
    btnMenu.addEventListener('click', () => {
        menuMobile.classList.add('abrir');
        if (overlayMenu) overlayMenu.style.display = 'block';
    });
}

function fecharMenu() {
    menuMobile.classList.remove('abrir');
    if (overlayMenu) overlayMenu.style.display = 'none';
}

if (overlayMenu) overlayMenu.addEventListener('click', fecharMenu);
document.querySelectorAll('.menu-mobile nav a').forEach(link => link.addEventListener('click', fecharMenu));

// ============================================
// MÚSICA AMBIENTE (Tóquio night style)
// ============================================
const bgMusic = document.getElementById('bg-music');
const playBtn = document.getElementById('btn-play');
const pauseBtn = document.getElementById('btn-pause');
const reggaetonBtn = document.getElementById('btn-reggaeton');
const funkBtn = document.getElementById('btn-funk');
const musicStatus = document.getElementById('musica-status');

// URLs de músicas noturnas estilo Tóquio (substitua pelas suas)
const musicas = {
    eletronica: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    reggaeton: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    funk: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
};

let musicaAtual = musicas.eletronica;
bgMusic.src = musicaAtual;
bgMusic.volume = 0.5;

if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (bgMusic.src !== musicas.eletronica) {
            bgMusic.src = musicas.eletronica;
        }
        bgMusic.play().catch(e => console.log('Áudio:', e));
        musicStatus.innerHTML = '🎧 Tocando: Eletrônica · Tokyo Night Mix';
    });
}

if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
        bgMusic.pause();
        musicStatus.innerHTML = '⏸ Música pausada';
    });
}

if (reggaetonBtn) {
    reggaetonBtn.addEventListener('click', () => {
        bgMusic.src = musicas.reggaeton;
        bgMusic.play();
        musicStatus.innerHTML = '🎵 Reggaeton · Perreo na Kabukicho';
    });
}

if (funkBtn) {
    funkBtn.addEventListener('click', () => {
        bgMusic.src = musicas.funk;
        bgMusic.play();
        musicStatus.innerHTML = '🔥 Funk · Pancadão neon';
    });
}

// ============================================
// BOTÕES INTERATIVOS
// ============================================
document.querySelectorAll('.btn-solicitar').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        alert('🔞 Apenas para maiores de 18 anos.\nEntrada mediante convite.');
    });
});

document.getElementById('btn-mapa')?.addEventListener('click', () => {
    alert('📍 Kabukicho, Shinjuku · Beco Neon\nAbre às 21h.');
});

document.getElementById('btn-vip')?.addEventListener('click', () => {
    alert('🎴 ACESSO VIP\nvip@cottoncandy.jp');
});

// ============================================
// EVITA PULOS - força altura do vídeo
// ============================================
window.addEventListener('load', () => {
    const video = document.getElementById('bg-video');
    if (video) {
        video.style.minHeight = '100vh';
    }
});