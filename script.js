// =====================
// Tema claro/escuro
// =====================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;
const navbar = document.querySelector(".navbar");
const jumbotron = document.querySelector(".jumbotron");
const footer = document.querySelector("footer");

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  navbar.classList.toggle("light-theme");
  jumbotron.classList.toggle("light-theme");
  footer.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeIcon.classList.remove("lightbulb-off");
    themeIcon.classList.add("lightbulb-on");
  } else {
    themeIcon.classList.remove("lightbulb-on");
    themeIcon.classList.add("lightbulb-off");
  }
});

// =====================
// Catálogo: filtros + busca + ordenação + paginação
// =====================

// Config
const PAGE_SIZE = 8;
const WA_PHONE = "5585987764006";

// Dados (adicione/edite aqui)
const products = [
  // FEMININO
  { id: "conjunto-feminino", title: "Conjunto Feminino", price: 40.0, image: "assets/img/fotos-femininas/Conjunto Feminino.jpeg", category: "feminino" },
  { id: "bolsa-night",       title: "Bolsa Night", price: 50.0, image: "assets/img/fotos-femininas/Bolsa Night.jpeg", category: "feminino", stock: 0 }, // ESGOTADO
  { id: "body-feminino",     title: "Body", price: 10.0, image: "assets/img/fotos-femininas/Body.jpeg", category: "feminino" },
  { id: "cropped-prateado",  title: "Cropped Brilhoso Prateado", price: 20.0, image: "assets/img/fotos-femininas/croped-brilhoso-prateado.jpeg", category: "feminino" },
  { id: "cinta-preta",       title: "Cinta Preta", price: 15.0, image: "assets/img/fotos-femininas/cinta-feminina-preta.jpeg", category: "feminino" },
  { id: "cropped-verde",     title: "Cropped", price: 15.0, image: "assets/img/fotos-femininas/Cropped Verde.jpeg", category: "feminino" },
  { id: "cropped",           title: "Cropped", price: 15.0, image: "assets/img/fotos-femininas/Cropped.jpeg", category: "feminino" },
  { id: "macacao-estampado", title: "Macacão Estampado", price: 20.0, image: "assets/img/fotos-femininas/Macacão Estampado.jpeg", category: "feminino" },
  { id: "macacao-verde",     title: "Macacão Verde", price: 15.0, image: "assets/img/fotos-femininas/Macacão Verde.jpeg", category: "feminino" },
  { id: "macacao-vermelho",  title: "Macacão Vermelho", price: 15.0, image: "assets/img/fotos-femininas/Macacçao Vermelho.jpeg", category: "feminino" },
  { id: "saia-saida",        title: "Saia", price: 15.0, image: "assets/img/fotos-femininas/Saia de Saida.jpeg", category: "feminino" },
  { id: "saia",              title: "Saia", price: 15.0, image: "assets/img/fotos-femininas/Saia.jpeg", category: "feminino" },
  { id: "sandalia-shutz",    title: "Sandália Shutz", price: 20.0, image: "assets/img/fotos-femininas/Sandália Shutz.jpeg", category: "feminino", badge: "37/38" },
  { id: "short-verde",       title: "Short Verde", price: 10.0, image: "assets/img/fotos-femininas/WhatsApp Image 2024-10-04 at 12.05.03.jpeg", category: "feminino" },
  { id: "short-feminino",    title: "Short", price: 10.0, image: "assets/img/fotos-femininas/Short.jpeg", category: "feminino" },
  { id: "vestido-verde",     title: "Vestido", price: 20.0, image: "assets/img/fotos-femininas/Vestido Verde.jpeg", category: "feminino" },

  // CRIANÇAS
  { id: "tenis-bibi-azul",   title: "Tênis Bibi Azul", price: 20.0, image: "assets/img/fotos-infantis/tenis-bibi-azul.jpeg", category: "criancas", badge: "23/24" },
  { id: "conj-dream",        title: "Conjunto Infantil Dream Calça", price: 15.0, image: "assets/img/fotos-infantis/conjunto-infantil-dream-calça.jpeg", category: "criancas" },
  { id: "biquini",           title: "Biquini Infantil", price: 10.0, image: "assets/img/fotos-infantis/biquini-inantil.jpeg", category: "criancas" },
  { id: "conj-magic-girl",   title: "Conjunto Infantil Magic Girl", price: 15.0, image: "assets/img/fotos-infantis/conjunto-infantil-magic_girl.jpeg", category: "criancas" },
  { id: "conj-rosa",         title: "Conjunto Infantil Rosa", price: 15.0, image: "assets/img/fotos-infantis/conjunto-infantil-rosa.jpeg", category: "criancas" },
  { id: "conj-seja-feliz",   title: "Conjunto Infantil Seja Feliz", price: 15.0, image: "assets/img/fotos-infantis/conjunto-infantil-seja_feliz.jpeg", category: "criancas" },
  { id: "conj-surf",         title: "Conjunto Infantil Surf Clube", price: 15.0, image: "assets/img/fotos-infantis/conjunto-infantil-surf-clube.jpeg", category: "criancas" },
  { id: "conj-moletom-lilas",title: "Conjunto Moletom Lilás", price: 20.0, image: "assets/img/fotos-infantis/conjunto-moletom-lilas.jpeg", category: "criancas" },
  { id: "maio-unicornio",    title: "Maiô Unicórnio", price: 10.0, image: "assets/img/fotos-infantis/maiô-unicornio.jpeg", category: "criancas" },
  { id: "macacao-rosa",      title: "Macacão Infantil Rosa", price: 15.0, image: "assets/img/fotos-infantis/macacão-rosa.jpeg", category: "criancas" },
  { id: "sandalia-lilas",    title: "Sandália Infantil Lilás", price: 15.0, image: "assets/img/fotos-infantis/sandalia-infantil-lilas.jpeg", category: "criancas" },
  { id: "sapato-rosa",       title: "Sapato Infantil Rosa", price: 20.0, image: "assets/img/fotos-infantis/sapato-rosa.jpeg", category: "criancas" },
  { id: "tenis-bibi-azul-2", title: "Tênis Bibi", price: 20.0, image: "assets/img/fotos-infantis/tenis-bibi-azul-2.jpeg", category: "criancas", badge: "23/24" },
  { id: "tenis-ouro",        title: "Tênis Infantil Ouro", price: 20.0, image: "assets/img/fotos-infantis/tenis-infantil-ouro.jpeg", category: "criancas", badge: "23/24" },
  { id: "vestido-abacaxi",   title: "Vestido Infantil Abacaxi", price: 10.0, image: "assets/img/fotos-infantis/vestido-abacaxi.jpeg", category: "criancas" },
  { id: "vestido-branco",    title: "Vestido Infantil Branco", price: 10.0, image: "assets/img/fotos-infantis/vestido-branco.jpeg", category: "criancas" },
  { id: "vestido-colorido",  title: "Vestido Infantil Colorido", price: 15.0, image: "assets/img/fotos-infantis/vestido-colorido.jpeg", category: "criancas" },
  { id: "vestido-listrado",  title: "Vestido Infantil Listrado", price: 10.0, image: "assets/img/fotos-infantis/vestido-listrado.jpeg", category: "criancas" },
  { id: "vestido-rosa-anagua", title: "Vestido Infantil Rosa", price: 20.0, image: "assets/img/fotos-infantis/vestido-rosa-anagua.jpeg", category: "criancas" },
  { id: "vestido-rosa-tuli", title: "Vestido Infantil", price: 20.0, image: "assets/img/fotos-infantis/vestido-rosa-tuli.jpeg", category: "criancas" },
  { id: "sandalia-melissa-ouro",  title: "Sandália Melissa Ouro", price: 15.0, image: "assets/img/fotos-infantis/Sandália Melissa Ouro.jpeg", category: "criancas", badge: "21/22" },
  { id: "sandalia-melissa-preta", title: "Sandália Melissa Preta", price: 15.0, image: "assets/img/fotos-infantis/Sandália Melissa Preta.jpeg", category: "criancas", badge: "23/24" },
  { id: "sandalia-bibi-rosa",     title: "Sandália Bibi Rosa", price: 15.0, image: "assets/img/fotos-infantis/Sandália Bibi Rosa.jpeg", category: "criancas", badge: "23/24" },
  { id: "crocs-branca",           title: "Crocs Infantil Branca", price: 30.0, image: "assets/img/fotos-infantis/Crocs Infantil Branca.jpeg", category: "criancas", badge: "23/24", stock: 0 }, // ESGOTADO

  // MASCULINO (ajuste os caminhos das imagens)
  { id: "camiseta-preta-m",  title: "Camiseta Básica Preta", price: 20.0, image: "assets/img/fotos-masculinas/camiseta-preta.jpg", category: "masculino", badge: "M" },
  { id: "bermuda-jeans-42",  title: "Bermuda Jeans", price: 25.0, image: "assets/img/fotos-masculinas/bermuda-jeans-42.jpg", category: "masculino", badge: "42" },
  { id: "sapatenis-41",      title: "Sapatênis Marrom", price: 30.0, image: "assets/img/fotos-masculinas/sapatenis-marrom-41.jpg", category: "masculino", badge: "41" }
];


// Estado
const state = { category: "todas", page: 1, search: "", sort: "relevance" };

// Helpers
const formatBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const buildWaLink = (title, price) => {
  const msg = `Gostaria de comprar ${title} por ${formatBRL(price)}`;
  return `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(msg)}`;
};
const normalize = (s) => (s || "").toString()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().trim();

const parseHash = () => {
  const mCat  = location.hash.match(/cat=([^&]+)/);
  const mPage = location.hash.match(/page=(\d+)/);
  if (mCat) state.category = decodeURIComponent(mCat[1]);
  if (mPage) state.page = Math.max(1, parseInt(mPage[1], 10) || 1);
};
const syncHash = () => {
  history.replaceState(null, "", `#cat=${state.category}&page=${state.page}`);
};

// Filtro + busca
const getFiltered = () => {
  const byCat = state.category === "todas"
    ? products
    : products.filter((p) => p.category === state.category);

  if (!state.search) return byCat;

  const q = normalize(state.search);
  return byCat.filter((p) => normalize(p.title).includes(q));
};

// Ordenação
const sortItems = (items) => {
  const arr = [...items];
  switch (state.sort) {
    case "price_asc":
      arr.sort((a, b) => a.price - b.price); break;
    case "price_desc":
      arr.sort((a, b) => b.price - a.price); break;
    case "name_asc":
      arr.sort((a, b) => normalize(a.title).localeCompare(normalize(b.title))); break;
    case "relevance":
    default:
      // mantém ordem original
      break;
  }
  return arr;
};

// Paginação
const paginate = (items, page, size) => {
  const start = (page - 1) * size;
  return items.slice(start, start + size);
};

// Render
const gridEl = document.getElementById("itemsGrid");
const pagEl  = document.getElementById("pagination");
const metaEl = document.getElementById("catalogMeta");

function renderGrid() {
  const filtered = sortItems(getFiltered());
  const pageItems = paginate(filtered, state.page, PAGE_SIZE);

  // Meta
  const total = filtered.length;
  const startIdx = total ? (state.page - 1) * PAGE_SIZE + 1 : 0;
  const endIdx = Math.min(state.page * PAGE_SIZE, total);
  metaEl.textContent =
    total ? `Mostrando ${startIdx}–${endIdx} de ${total} itens`
          : `Nenhum item encontrado`;

  if (!pageItems.length) {
    gridEl.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning text-center mb-0">
          Nenhum item encontrado para os filtros aplicados.
        </div>
      </div>`;
    return;
  }

  gridEl.innerHTML = pageItems.map((p) => {
    const oos = (p.stock ?? 1) <= 0;
    const btn = oos
      ? `<button class="btn btn-secondary" disabled>Esgotado</button>`
      : `<a class="btn btn-primary" href="${buildWaLink(p.title, p.price)}" target="_blank" rel="noopener">Comprar</a>`;
    const badge = p.badge ? `<span class="badge-chip">${p.badge}</span>` : "";
    return `
      <div class="col-6 col-md-3">
        <div class="card catalog-card h-100 ${oos ? "oos" : ""}">
          ${oos ? `<div class="oos-ribbon">ESGOTADO</div>` : ""}
          <img src="${p.image}" class="card-img-top" alt="${p.title}" loading="lazy">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-between align-items-start">
              <span>${p.title}</span>
              ${badge}
            </h5>
            <p class="card-text">${formatBRL(p.price)}</p>
            ${btn}
          </div>
        </div>
      </div>`;
  }).join("");
}

function renderPagination() {
  const total = getFiltered().length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  state.page = Math.min(state.page, totalPages);
  const page = state.page;

  const liPrev = `
    <li class="page-item ${page === 1 ? "disabled" : ""}">
      <a class="page-link" href="#" data-page="${page - 1}" aria-label="Anterior">&laquo;</a>
    </li>`;

  const liNext = `
    <li class="page-item ${page === totalPages ? "disabled" : ""}">
      <a class="page-link" href="#" data-page="${page + 1}" aria-label="Próximo">&raquo;</a>
    </li>`;

  const windowSize = 5;
  const half = Math.floor(windowSize / 2);
  let start = Math.max(1, page - half);
  let end   = Math.min(totalPages, start + windowSize - 1);
  start     = Math.max(1, end - windowSize + 1);

  const nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(`
      <li class="page-item ${i === page ? "active" : ""}">
        <a class="page-link" href="#" data-page="${i}" ${i === page ? 'aria-current="page"' : ""}>${i}</a>
      </li>`);
  }

  pagEl.innerHTML = liPrev + nums.join("") + liNext;

  // Eventos
  pagEl.querySelectorAll("a[data-page]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const p = parseInt(a.getAttribute("data-page"), 10);
      if (!isNaN(p)) {
        state.page = Math.max(1, p);
        syncHash();
        renderAll();
      }
    });
  });
}

function updateFilterButtons() {
  document.querySelectorAll('[data-filter]').forEach((btn) => btn.classList.remove("active"));
  const active = document.querySelector(`[data-filter="${state.category}"]`);
  if (active) active.classList.add("active");
}

function renderAll() {
  updateFilterButtons();
  renderGrid();
  renderPagination();
}

// Listeners
document.querySelectorAll('[data-filter]').forEach((btn) => {
  btn.addEventListener("click", () => {
    state.category = btn.getAttribute("data-filter");
    state.page = 1;
    syncHash();
    renderAll();
  });
});

document.getElementById("searchInput")?.addEventListener("input", (e) => {
  state.search = e.target.value || "";
  state.page = 1;
  renderAll();
});

document.getElementById("sortSelect")?.addEventListener("change", (e) => {
  state.sort = e.target.value;
  state.page = 1;
  renderAll();
});

// Init
document.addEventListener("DOMContentLoaded", () => {
  parseHash();
  renderAll();
});
