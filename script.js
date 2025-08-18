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
  // ===== FEMININO (simples) =====
    {
      id: "blusa-feminina-amarela-2025",
      title: "Blusa Feminina Amarela",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusa-feminina-amarela-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusa-feminina-laranja-2025",
      title: "Blusa Feminina Laranja",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusa-feminina-laranja-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusa-feminina-rosa-2025",
      title: "Blusa Feminina Rosa",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusa-feminina-rosa-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusa-feminina-verde-claro-tam-g-2025",
      title: "Blusa Feminina Verde Claro",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusa-feminina-verde-claro-tam-g-2025.jpg",
      category: "feminino",
      badge: "G"
    },
    {
      id: "blusa-feminina-verde-escuro-2025",
      title: "Blusa Feminina Verde Escuro",
      price: 20.0,
      image: "assets/img/fotos-femininas/blusa-feminina-verde-escuro-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusas-diversas-feminina-2025",
      title: "Blusas Diversas Feminina",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-diversas-feminina-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusas-diversas-feminina2-2025",
      title: "Blusas Diversas Feminina",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-diversas-feminina2-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusas-diversas-femininas-2025",
      title: "Blusas Diversas Femininas",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-diversas-feminina3-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusas-diversas-tam-g-2025",
      title: "Blusas Diversas",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-diversas-tam-g-2025.jpg",
      category: "feminino",
      badge: "G"
    },
    {
      id: "blusas-femininas-diversas-2025",
      title: "Blusas Femininas Diversas",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-femininas-diversas-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusas-femininas-diversas2-2025",
      title: "Blusas Femininas Diversas 2",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-diversas-feminina2-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusas-femininas-tam-u-2025",
      title: "Blusas Femininas",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-femininas-tam-u-2025.jpg",
      category: "feminino",
      badge: "U"
    },
    {
      id: "blusas-femininas-variedades-2025",
      title: "Blusas Femininas Variedades",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-femininas-variadas-2025.jpg",
      category: "feminino"
    },
    {
      id: "blusas-femininas-variadas-2-2025",
      title: "Blusas Femininas Variadas 2",
      price: 15.0,
      image: "assets/img/fotos-femininas/blusas-femininas-variadas2-2025.jpg",
      category: "feminino"
    },
    {
      id: "body-claro-2025",
      title: "Body Claro",
      price: 20.0,
      image: "assets/img/fotos-femininas/body-claro-2025.jpg",
      category: "feminino"
    },
    {
      id: "calca-feminina-preta-g-2025",
      title: "Calça Feminina Preta",
      price: 35.0,
      image: "assets/img/fotos-femininas/calca-feminina-preta-g-2025.jpg",
      category: "feminino",
      badge: "G"
    },
    {
      id: "calca-feminina-verde-m-2025",
      title: "Calça Feminina Verde",
      price: 35.0,
      image: "assets/img/fotos-femininas/calca-feminina-verde-m-2025.jpg",
      category: "feminino",
      badge: "M"
    },
    {
      id: "conj-feminino-laranja-2025",
      title: "Conjunto Feminino Laranja",
      price: 20.0,
      image: "assets/img/fotos-femininas/conj-feminino-laranja-2025.jpg",
      category: "feminino"
    },
    {
      id: "conj-feminino-preto-2025",
      title: "Conjunto Feminino Preto",
      price: 25.0,
      image: "assets/img/fotos-femininas/conj-feminino-preto-2025.jpg",
      category: "feminino"
    },
    {
      id: "conj-feminino-preto2-2025",
      title: "Conjunto Feminino Preto Triplo",
      price: 30.0,
      image: "assets/img/fotos-femininas/conj-feminino-preto2-2025.jpg",
      category: "feminino"
    },
    {
      id: "conj-feminino-verde-2025",
      title: "Conjunto Feminino Verde",
      price: 20.0,
      image: "assets/img/fotos-femininas/conj-feminino-verde-2025.jpg",
      category: "feminino"
    },
    {
      id: "conj-verde-vinho-2025",
      title: "Conjunto Verde/Vinho",
      price: 20.0,
      image: "assets/img/fotos-femininas/conj-verde-vinho-2025.jpg",
      category: "feminino"
    },
    {
      id: "conjunto-croped-brilhoso-2025",
      title: "Conjunto Cropped Brilhoso",
      price: 30.0,
      image: "assets/img/fotos-femininas/conjunto-croped-brilhoso-2025.jpg",
      category: "feminino"
    },
    {
      id: "conjunto-croped-preto-2025",
      title: "Conjunto Cropped Preto",
      price: 20.0,
      image: "assets/img/fotos-femininas/conjunto-croped-preto-2025.jpg",
      category: "feminino"
    },
    {
      id: "croped-azul-tam-unico-2025",
      title: "Cropped Azul",
      price: 10.0,
      image: "assets/img/fotos-femininas/croped-azul-tam-unico-2025.jpg",
      category: "feminino",
      badge: "U"
    },
    {
      id: "croped-diversos-tam-u-2025",
      title: "Cropped Diversos",
      price: 15.0,
      image: "assets/img/fotos-femininas/croped-diversos-tam-u-2025.jpg",
      category: "feminino",
      badge: "U"
    },
    {
      id: "croped-estampado-branco-tam-u-2025",
      title: "Cropped Estampado Branco",
      price: 20.0,
      image: "assets/img/fotos-femininas/croped-estampado-branco-tam-u-2025.jpg",
      category: "feminino",
      badge: "U"
    },
    {
      id: "croped-estampado-preto-2025",
      title: "Cropped Estampado Preto",
      price: 20.0,
      image: "assets/img/fotos-femininas/croped-estampado-preto-2025.jpg",
      category: "feminino"
    },
    {
      id: "croped-estampado-preto-tam-m-2025",
      title: "Cropped Estampado Preto",
      price: 15.0,
      image: "assets/img/fotos-femininas/croped-estampado-preto-tam-m-2025.jpg",
      category: "feminino",
      badge: "M"
    },
    {
      id: "croped-tam-u-2025",
      title: "Cropped",
      price: 15.0,
      image: "assets/img/fotos-femininas/croped-tam-u-2025.jpg",
      category: "feminino",
      badge: "U"
    },
    {
      id: "saia-diversas-2025",
      title: "Saias Diversas",
      price: 15.0,
      image: "assets/img/fotos-femininas/saia-diversas-2025.jpg",
      category: "feminino"
    },
    {
      id: "saia-laranja-2025",
      title: "Saia Laranja",
      price: 15.0,
      image: "assets/img/fotos-femininas/saia-laranja-2025.jpg",
      category: "feminino"
    },
    {
      id: "saia-longa-preta-2025",
      title: "Saia Longa Preta",
      price: 20.0,
      image: "assets/img/fotos-femininas/saia-longa-preta-2025.jpg",
      category: "feminino"
    },
    {
      id: "saia-preta-tam-unico-2025",
      title: "Saia Preta",
      price: 15.0,
      image: "assets/img/fotos-femininas/saia-preta-tam-unico-2025.jpg",
      category: "feminino",
      badge: "U"
    },
    {
      id: "saia-vinho-2025",
      title: "Saia Vinho",
      price: 20.0,
      image: "assets/img/fotos-femininas/saia-vinho-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-diversos-2025",
      title: "Short Diversos",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-diversos-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-feminino-bege-2025",
      title: "Short Feminino Bege",
      price: 20.0,
      image: "assets/img/fotos-femininas/short-feminino-bege-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-feminino-bege2-2025",
      title: "Short Feminino Bege 2",
      price: 20.0,
      image: "assets/img/fotos-femininas/short-feminino-bege2-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-feminino-cinza-2025",
      title: "Short Feminino Cinza",
      price: 20.0,
      image: "assets/img/fotos-femininas/short-feminino-cinza-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-feminino-cinza-com-bolso-2025",
      title: "Short Feminino Cinza com Bolso",
      price: 20.0,
      image: "assets/img/fotos-femininas/short-feminino-cinza-com-bolso-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-feminino-laranja-gg-2025",
      title: "Short Feminino Laranja",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-feminino-laranja-GG-2025.jpg",
      category: "feminino",
      badge: "GG"
    },
    {
      id: "short-feminino-marrom-2025",
      title: "Short Feminino Marrom",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-feminino-marrom-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-feminino-marrom-gg-2025",
      title: "Short Feminino Marrom",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-feminino-marrom-GG-2025.jpg",
      category: "feminino",
      badge: "GG"
    },
    {
      id: "short-feminino-vermelho-tam-2025",
      title: "Short Feminino Vermelho",
      price: 15.0,
      image: "assets/img/fotos-femininas/short-feminino-vermelho-tam-p-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-feminino-2025",
      title: "Short Feminino Vinho",
      price: 15.0,
      image: "assets/img/fotos-femininas/short-feminino-vinho-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-jeans-feminino-estampado-2025",
      title: "Short Jeans Feminino Estampado",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-jeans-feminino-estampado-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-jeans-feminino-estiloso-tam-38-2025",
      title: "Short Jeans Feminino Estiloso",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-jeans-feminino-estiloso-tam-38-2025.jpg",
      category: "feminino",
      badge: "38"
    },
    {
      id: "short-jeans-feminino-estiloso2-tam-38-2025",
      title: "Short Jeans Feminino Estiloso 2",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-jeans-feminino-estiloso2-tam-38-2025.jpg",
      category: "feminino",
      badge: "38"
    },
    {
      id: "short-jeans-feminino-tam-38-2025",
      title: "Short Jeans Feminino",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-jeans-feminino-tam-38-2025.jpg",
      category: "feminino",
      badge: "38"
    },
    {
      id: "short-jeans-feminino-tam-46-2025",
      title: "Short Jeans Feminino",
      price: 30.0,
      image: "assets/img/fotos-femininas/short-jeans-feminino-tam-46-2025.jpg",
      category: "feminino",
      badge: "46"
    },
    {
      id: "short-jeans-plus-size-tam-52-2025",
      title: "Short Jeans Plus Size",
      price: 25.0,
      image: "assets/img/fotos-femininas/short-jeans-plus-size-tam-52-2025.jpg",
      category: "feminino",
      badge: "52"
    },
    {
      id: "short-lilas-2025",
      title: "Short Lilás",
      price: 15.0,
      image: "assets/img/fotos-femininas/short-lilas-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-lilas-botao-2025",
      title: "Short Lilás Botão",
      price: 15.0,
      image: "assets/img/fotos-femininas/short-lilas-botao-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-lilas-com-botao-2025",
      title: "Short Lilás com Botão",
      price: 15.0,
      image: "assets/img/fotos-femininas/short-lilas-com-botao-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-lilas-g-2025",
      title: "Short Lilás",
      price: 12.0,
      image: "assets/img/fotos-femininas/short-lilas-g-2025.jpg",
      category: "feminino",
      badge: "G"
    },
    {
      id: "short-marrom-feminino-2025",
      title: "Short Marrom Feminino",
      price: 15.0,
      image: "assets/img/fotos-femininas/short-marrom-feminino-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-preto-2025",
      title: "Short Preto",
      price: 20.0,
      image: "assets/img/fotos-femininas/short-preto-2025.jpg",
      category: "feminino"
    },
    {
      id: "short-verde-2025",
      title: "Short Verde",
      price: 15.0,
      image: "assets/img/fotos-femininas/short-verde-2025.jpg",
      category: "feminino"
    },
    {
      id: "vestido-verde-girls-summer",
      title: "Vestido Verde Girls Summer",
      price: 15.0,
      image: "assets/img/fotos-femininas/Vestido Verde Girls Summer.jpg",
      category: "feminino"
    },
    {
      id: "vestido-estampado-azul-tam-g-2025",
      title: "Vestido Estampado Azul",
      price: 20.0,
      image: "assets/img/fotos-femininas/vestido-estampado-azul-tam-g-2025.jpg",
      category: "feminino",
      badge: "G"
    },
    {
      id: "vestido-estampado-azul-tam-m-2025",
      title: "Vestido Estampado Azul",
      price: 30.0,
      image: "assets/img/fotos-femininas/vestido-estampado-azul-tam-m-2025.jpg",
      category: "feminino",
      badge: "M"
    },
    {
      id: "vestido-feminino-vermelho-tam-u-2025",
      title: "Vestido Feminino Vermelho",
      price: 15.0,
      image: "assets/img/fotos-femininas/vestido-feminino-vermelho-tam-u-2025.jpg",
      category: "feminino",
      badge: "U"
    },
    {
      id: "vestido-laranja-2025",
      title: "Vestido Laranja",
      price: 15.0,
      image: "assets/img/fotos-femininas/vestido-laranja-2025.jpg",
      category: "feminino"
    },
    {
      id: "vestido-preto-2025",
      title: "Vestido Preto",
      price: 15.0,
      image: "assets/img/fotos-femininas/vestido-preto-2025.jpg",
      category: "feminino"
    },
    {
      id: "vestido-verde-alinhado-2025",
      title: "Vestido Verde Alinhado",
      price: 30.0,
      image: "assets/img/fotos-femininas/vestido-verde-alinhado-2025.jpg",
      category: "feminino"
    },
    {
      id: "vestido-verde-feminino-2025",
      title: "Vestido Verde Feminino",
      price: 30.0,
      image: "assets/img/fotos-femininas/vestido-verde-feminino-2025.jpg",
      category: "feminino"
    },
    {
      id: "vestido-vermelho-adulto-2025",
      title: "Vestido Vermelho",
      price: 20.0,
      image: "assets/img/fotos-femininas/vestido-vermelho-adulto.jpg",
      category: "feminino"
    },
    {
      id: "vestido-vermelho-claro-2025",
      title: "Vestido Vermelho Claro",
      price: 25.0,
      image: "assets/img/fotos-femininas/vestido-vermelho-claro-2025.jpg",
      category: "feminino"
    },
    {
      id: "vestido-vermelho-simples-2025",
      title: "Vestido Vermelho Liso",
      price: 15.0,
      image: "assets/img/fotos-femininas/vestido-vermelho-simples-2025.jpg",
      category: "feminino",
      //stock: 0 // ESGOTADO
    },
    {
      id: "vestido-vermelho-tam-m-2025",
      title: "Vestido Vermelho",
      price: 30.0,
      image: "assets/img/fotos-femininas/vestido-vermelho-tam-m-2025.jpg",
      category: "feminino",
      badge: "M"
    },


  // CRIANÇAS
  { id: "bermuda-vermelha-infantil-2025", title: "Bermuda Vermelha Infantil", price: 15.0, image: "assets/img/fotos-infantis/bermuda-vermelha-infantil-2025.jpg", category: "infantil" },
  { id: "biquinis-infantil-2025",         title: "Biquínis Infantil",         price: 20.0, image: "assets/img/fotos-infantis/biquinis-infantil-2025.jpg",         category: "infantil" },
  { id: "camisa-infantil-4anos-2025",     title: "Camisa Infantil 4 anos",     price: 15.0, image: "assets/img/fotos-infantis/camisa-infantil-4anos-2025.jpg",     category: "infantil", badge: "4 anos" },
  { id: "conj-infantil-branco-2025",      title: "Conjunto Infantil Branco",   price: 15.0, image: "assets/img/fotos-infantis/conj-infantil-branco-2025.jpg",      category: "infantil" },
  { id: "conj-infantil-lilas-g-2025",     title: "Conjunto Infantil Lilás",    price: 20.0, image: "assets/img/fotos-infantis/conj-infantil-lilas-g-2025.jpg",     category: "infantil", badge: "G" },
  { id: "conj-infantil-lilas-m-2025",     title: "Conjunto Infantil Lilás",    price: 20.0, image: "assets/img/fotos-infantis/conj-infantil-lilas-m-2025.jpg",     category: "infantil", badge: "M" },
  { id: "macaquinho-vermelho-infantil-2025", title: "Macaquinho Vermelho Infantil", price: 20.0, image: "assets/img/fotos-infantis/macaquinho-vermelho-infantil-2025.jpg", category: "infantil" },
  { id: "vestido-azul-estampado-infantil-2025", title: "Vestido Azul Estampado Infantil", price: 20.0, image: "assets/img/fotos-infantis/vestido-azul-estampado-infantil-2025.jpg", category: "infantil" },
  { id: "vestido-infantil-estampado-2025", title: "Vestido Infantil Estampado", price: 20.0, image: "assets/img/fotos-infantis/vestido-infantil-estampado-2025.jpg", category: "infantil" },
  { id: "vestido-infantil-lilas-2025",    title: "Vestido Infantil Lilás",     price: 25.0, image: "assets/img/fotos-infantis/vestido-infantil-lilas-2025.jpg",    category: "infantil" },
  { id: "vestido-infantil-vermelho-2025", title: "Vestido Infantil Vermelho",  price: 20.0, image: "assets/img/fotos-infantis/vestido-infantil-vermelho-2025.jpg", category: "infantil" },
  { id: "vestido-rosa-infantil-2025",     title: "Vestido Rosa Infantil",      price: 20.0, image: "assets/img/fotos-infantis/vestido-rosa-infantil-2025.jpg",     category: "infantil" },
  { id: "vestido-rosa-vermelho-infantil-2025", title: "Vestido Rosa/Vermelho Infantil", price: 20.0, image: "assets/img/fotos-infantis/vestido-rosa-vermelho-infantil-2025.jpg", category: "infantil" },
  { id: "vestido-stitch-infantil-2025",   title: "Vestido Stitch Infantil",    price: 20.0, image: "assets/img/fotos-infantis/vestido-stitch-infantil-2025.jpg",   category: "infantil" },
  { id: "vestido-vermelho-infantil-2025", title: "Vestido Vermelho Infantil",  price: 20.0, image: "assets/img/fotos-infantis/vestido-vermelho-infantil-2025.jpg", category: "infantil" },

  // MASCULINO (ajuste os caminhos das imagens)
  { id: "bermuda-diversas-2025",          title: "Bermudas Diversas",          price: 15.0, image: "assets/img/fotos-masculinas/bermuda-diversas-2025.jpg",          category: "masculino" },
  { id: "bermuda-jeans-tam-36-2025",      title: "Bermuda Jeans",              price: 20.0, image: "assets/img/fotos-masculinas/bermuda-jeans-tam-36-2025.jpg",      category: "masculino", badge: "36" },
  { id: "bermuda-jeans-tam-44-2025",      title: "Bermuda Jeans",              price: 20.0, image: "assets/img/fotos-masculinas/bermuda-jeans-tam-44-2025.jpg",      category: "masculino", badge: "44" },
  { id: "bermuda-seaway-2025",            title: "Bermuda Seaway",             price: 15.0, image: "assets/img/fotos-masculinas/bermuda-seaway-2025.jpg",            category: "masculino" },
  { id: "blusa-camiseta-masculina",       title: "Camiseta Masculina",         price: 12.0, image: "assets/img/fotos-masculinas/blusa-camiseta-masculina.jpg",       category: "masculino" },
  { id: "camisa-lacoste-masculina-2025",  title: "Camisa Lacoste Masculina",   price: 15.0, image: "assets/img/fotos-masculinas/camisa-lacoste-masculina-2025.jpg",  category: "masculino" },
  { id: "sunga-diversos-2025",            title: "Sungas Diversas",            price: 12.0, image: "assets/img/fotos-masculinas/sunga-diversos-2025.jpg",            category: "masculino" }
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
