// ============================================
// MENU MOBILE (igual ao portfólio)
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
    if (menuMobile) menuMobile.classList.remove('abrir');
    if (overlayMenu) overlayMenu.style.display = 'none';
}

if (overlayMenu) {
    overlayMenu.addEventListener('click', fecharMenu);
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu-mobile nav a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

// ============================================
// MÚSICA (Eletrônica, Funk, Reggaeton)
// ============================================
const bgMusic = document.getElementById('bg-music');
const playBtn = document.getElementById('btn-play');
const pauseBtn = document.getElementById('btn-pause');
const reggaetonBtn = document.getElementById('btn-reggaeton');
const funkBtn = document.getElementById('btn-funk');
const musicStatus = document.getElementById('musica-status');

// URLs de música pública (exemplos funcionais)
const musicas = {
    eletronica: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    reggaeton: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    funk: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
};

let musicaAtual = musicas.eletronica;
bgMusic.src = musicaAtual;

// Play
if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (bgMusic.src !== musicas.eletronica) {
            bgMusic.src = musicas.eletronica;
            musicaAtual = musicas.eletronica;
        }
        bgMusic.play();
        if (musicStatus) musicStatus.innerHTML = '🎧 Tocando: Eletrônica Suave · Tokyo Night Mix';
    });
}

// Pause
if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
        bgMusic.pause();
        if (musicStatus) musicStatus.innerHTML = '⏸ Música pausada · A noite continua...';
    });
}

// Reggaeton
if (reggaetonBtn) {
    reggaetonBtn.addEventListener('click', () => {
        bgMusic.src = musicas.reggaeton;
        musicaAtual = musicas.reggaeton;
        bgMusic.play();
        if (musicStatus) musicStatus.innerHTML = '🎵 Reggaeton Mix · Perreo na Kabukicho 🔥';
    });
}

// Funk
if (funkBtn) {
    funkBtn.addEventListener('click', () => {
        bgMusic.src = musicas.funk;
        musicaAtual = musicas.funk;
        bgMusic.play();
        if (musicStatus) musicStatus.innerHTML = '🔥 Funk Carioca · Pancadão neon 🔥';
    });
}

// ============================================
// EFEITO FUNK NOS DRINKS
// ============================================
const drinkCards = document.querySelectorAll('.drink-card');
drinkCards.forEach(card => {
    card.addEventListener('click', () => {
        const drinkName = card.querySelector('h3')?.innerText || 'Drink';
        
        // Toca um efeito funk rápido (se quiser, pode substituir por um som real)
        if (musicStatus) {
            musicStatus.innerHTML = `🍹 ${drinkName} · 🎧 Beat funk ativado!`;
            setTimeout(() => {
                if (bgMusic.paused) {
                    if (musicStatus) musicStatus.innerHTML = '⏸ Música pausada';
                } else {
                    const genero = bgMusic.src.includes('Song-1') ? 'Eletrônica Suave' : 
                                  bgMusic.src.includes('Song-2') ? 'Reggaeton Mix' : 'Funk Carioca';
                    if (musicStatus) musicStatus.innerHTML = `🎧 Tocando: ${genero}`;
                }
            }, 2000);
        }
    });
});

// ============================================
// BOTÃO SOLICITAR (Tokyo Girls - estilo bordel)
// ============================================
const solicitarBtns = document.querySelectorAll('.btn-solicitar');
solicitarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const girlName = btn.getAttribute('data-girl') || 'a anfitriã';
        alert(`🔮 ${girlName} · Apenas para maiores de 18 anos.\n\nEntrada mediante convite.\nPara mais informações, fale com nosso host.`);
    });
});

// ============================================
// BOTÃO MAPA
// ============================================
const mapaBtn = document.getElementById('btn-mapa');
if (mapaBtn) {
    mapaBtn.addEventListener('click', () => {
        alert('📍 Kabukicho, Shinjuku · Tóquio\n\nBeco Neon · Entrada discreta atrás do izakaya.\nAbre às 21h · Encerra às 5h.');
    });
}

// ============================================
// BOTÃO VIP (ACESSO)
// ============================================
const vipBtn = document.getElementById('btn-vip');
if (vipBtn) {
    vipBtn.addEventListener('click', () => {
        alert('🎴 ACESSO VIP · Reserva exclusiva\n\nEntre em contato pelo e-mail:\nvip@cottoncandy.jp\n\nAguardamos seu convite.');
    });
}

// ============================================
// SCROLL SUAVE (âncoras)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// PLACEHOLDER PARA IMAGENS (evita erros)
// ============================================
const allImages = document.querySelectorAll('img');
allImages.forEach(img => {
    img.addEventListener('error', () => {
        console.log('⚠️ Imagem não encontrada:', img.src);
        // Opcional: substituir por placeholder
        // img.src = 'https://via.placeholder.com/300x200?text=Imagem+CCK';
    });
});

// ============================================
// LOGO HEADER FIXO (scroll)
// ============================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 5, 5, 0.95)';
            header.style.backdropFilter = 'blur(16px)';
        } else {
            header.style.background = 'rgba(10, 5, 5, 0.85)';
            header.style.backdropFilter = 'blur(12px)';
        }
    }
});

// ============================================
// MENSAGEM DE BOAS-VINDAS (console)
// ============================================
console.log('🍭 Cotton Candy Kabukicho · Doce e misterioso 🌙');
console.log('🔞 Apenas para maiores de 18 anos.');