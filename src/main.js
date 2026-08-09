import './style.css'

// --- Função para criar o overlay de transição ---
function criarOverlay() {
  const overlay = document.createElement('div')
  overlay.id = 'transition-overlay'
  overlay.innerHTML = `
    <div class="portal">
      <div class="estrela"></div>
      <div class="estrela"></div>
      <div class="estrela"></div>
      <div class="estrela"></div>
      <div class="estrela"></div>
    </div>
  `
  document.body.appendChild(overlay)
  return overlay
}

const overlay = criarOverlay()

// --- Função de transição (efeito de viagem) ---
function viajarPara(destino) {
  return new Promise((resolve) => {
    overlay.classList.add('ativo')
    // Animação de entrada (abertura do portal)
    setTimeout(() => {
      // Navega para o destino
      window.location.href = destino
      // A transição de saída será acionada na nova página
      resolve()
    }, 800) // duração do efeito (ajuste conforme CSS)
  })
}

// --- Interceptar cliques em links internos ---
document.addEventListener('click', (e) => {
  const link = e.target.closest('a')
  if (!link) return

  const href = link.getAttribute('href')
  // Ignora links com # (âncoras) ou que começam com http ou mailto
  if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return

  e.preventDefault()
  viajarPara(href)
})

// --- Se a página carregar com o overlay ativo, remove-o após a transição ---
window.addEventListener('load', () => {
  // Se veio de uma navegação com transição, o overlay pode estar ativo
  // Removemos após um pequeno atraso para a animação de saída
  if (overlay.classList.contains('ativo')) {
    setTimeout(() => {
      overlay.classList.remove('ativo')
    }, 400) // tempo para desaparecer
  }
})

// --- Renderizar a página inicial (seu conteúdo original) ---
document.querySelector('#app').innerHTML = `
  <header class="topo">
    <div class="logo">
      <span class="logo-icon">🌌</span>
      <div>
        <strong>UNIVERSO</strong>
        <span>ALTERNATIVO</span>
      </div>
    </div>

    <nav class="menu">
      <a href="/">Início</a>
      <a href="jogos.html">🎮 Jogos</a>
      <a href="animes.html">📺 Animes</a>
      <a href="musica.html">🎵 Música</a>
      <a href="retro.html">📼 Retrô</a>
      <a href="filmes.html">🎬 Filmes</a>
      <a href="tecnologia.html">💻 Tecnologia</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-conteudo">
        <span class="tag">✦ UM UNIVERSO DE POSSIBILIDADES ✦</span>
        <h1>Bem-vindo ao<br><span>Universo Alternativo</span></h1>
        <p>Jogos, animes, música, cultura retrô, filmes, tecnologia e tudo aquilo que torna a cultura pop simplesmente incrível.</p>
        <div class="hero-botoes">
          <a href="#categorias" class="botao principal">Explorar o Universo</a>
          <a href="#destaques" class="botao secundario">Ver destaques</a>
        </div>
      </div>
      <div class="hero-planeta">
        <div class="orbita orbita-1"></div>
        <div class="orbita orbita-2"></div>
        <div class="planeta">🌌</div>
      </div>
    </section>

    <section id="categorias" class="secao">
      <div class="titulo-secao">
        <span>EXPLORE</span>
        <h2>Um universo inteiro para descobrir</h2>
        <p>Escolha uma dimensão e comece sua jornada.</p>
      </div>
      <div class="categorias">
        <a href="/jogos.html" class="card">
          <div class="card-icone">🎮</div>
          <h3>Jogos</h3>
          <p>Games atuais, clássicos, indies, consoles e muito mais.</p>
        </a>
        <a href="/animes.html" class="card">
          <div class="card-icone">📺</div>
          <h3>Animes</h3>
          <p>Obras, personagens, curiosidades, notícias e recomendações.</p>
        </a>
        <a href="/musica.html" class="card">
          <div class="card-icone">🎵</div>
          <h3>Música</h3>
          <p>Artistas, álbuns, gêneros, histórias e trilhas sonoras.</p>
        </a>
        <a href="/retro.html" class="card">
          <div class="card-icone">📼</div>
          <h3>Cultura Retrô</h3>
          <p>Arcades, consoles, desenhos, tecnologia e memórias.</p>
        </a>
        <a href="/filmes.html" class="card">
          <div class="card-icone">🎬</div>
          <h3>Filmes & Séries</h3>
          <p>Clássicos, novidades, análises, curiosidades e indicações.</p>
        </a>
        <a href="/tecnologia.html" class="card">
          <div class="card-icone">💻</div>
          <h3>Tecnologia</h3>
          <p>Computadores, internet, programação e o mundo digital.</p>
        </a>
      </div>
    </section>

    <section id="destaques" class="destaques">
      <div>
        <span class="tag">EM BREVE</span>
        <h2>O Universo está apenas começando.</h2>
        <p>Este é apenas o primeiro passo. Novas áreas, conteúdos e experiências serão adicionados ao longo da jornada.</p>
      </div>
      <div class="estrelas">✦ ✧ ★ ✧ ✦</div>
    </section>
  </main>

  <footer>
    <div class="footer-logo">🌌 Universo Alternativo</div>
    <p>Um universo criado para quem nunca parou de explorar.</p>
    <span>© 2026 Universo Alternativo</span>
  </footer>
`
