import { navbarLinks } from "./data.js";



// Função para alternar o tema
function alternarTema(tema) {
  const body = document.body;
  const navbar = body.querySelector('.navbar');
  const footer = body.querySelector('.footer');
  if (tema === 'claro') {
    body.classList.remove('theme-dark'); // Remover a classe do tema dark do body
    navbar.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light'); // Altera a classe da navegação para o tema claro
    footer.classList.remove('footer-primary'); // Remove a classe escura do footer
    footer.classList.remove('bg-primary'); // Remover a classe de background dark do footer
    footer.classList.remove('text-white'); // Remover a classe de cor branca da fonte
    footer.style.backgroundColor = 'white'; // Define o background do footer como branco
    footer.style.color = 'black'; // Define a cor da fonte do footer como preta
  } else {
    body.classList.add('theme-primary'); // Adiciona a classe do tema dark ao body
    navbar.setAttribute('class', 'navbar navbar-expand-lg navbar-primary bg-primary'); // Altera a classe da navegação para o tema escuro
    footer.classList.add('footer-primary'); // Adiciona a classe de tema escuro ao footer
    footer.classList.add('bg-primary'); // Adiciona a classe de background dark ao footer
    footer.classList.add('text-white'); // Adiciona a classe de cor branca da fonte
    footer.style.backgroundColor = ''; // Remove o background do footer (para herdar o do tema claro definido no CSS)
    footer.style.color = ''; // Remove a cor da fonte do footer (para herdar a do tema claro definido no CSS)
  }
}

export const trocarTemasBtn = () => {
  // Adiciona um ouvinte de evento para os botões
  document.getElementById('btnClaro').addEventListener('click', function () {
    alternarTema('claro');
  });
  document.getElementById('btnEscuro').addEventListener('click', function () {
    alternarTema('escuro');
  });
}



/* NAVBAR */

export const navbar = () => {
  const header = document.querySelector("header")
  header.innerHTML = `
   <nav class="navbar navbar-expand-md navbar-primary bg-primary">
      <div class="container">
        <div>
          <a class="navbar-brand" href="./index.html">
            <img src="../../assets/icons/logo.svg" alt="Logotipo" width="50">
          </a>
          <div class="btn-group mx-2" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnClaro" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnClaro">
              <img src="../../assets/icons/sun.svg" />
            </label>
            <input type="radio" class="btn-check" name="btnradio" id="btnEscuro" autocomplete="off" checked>
            <label class="btn btn-outline-secondary" for="btnEscuro">
              <img src="../../assets/icons/moon.svg" />
            </label>
          </div>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-start"
          aria-controls="offcanvasTop">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-start bg-primary " tabindex="-1" id="offcanvas-start"
          aria-labelledby="offcanvasTopLabel">
          <div class="container">
            <div class="offcanvas-header">
              <a class="navbar-brand" id="logo-mobile" href="./index.html">
                <img src="../../assets/icons/Logo.svg" alt="Daviagens logo" width="50">
              </a>

              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>
            <ul class="navbar-nav text-uppercase mx-auto d-flex justify-content-end">
            </ul>
            </div>
            </nav>
            `

  const navbarNav = document.querySelector(".navbar-nav")
  navbarLinks.map(({ link, texto }) => {
    navbarNav.innerHTML += `
          <li class="nav-item  fs-4">
            <a class="nav-link" aria-current="page" href="../${link}/${link}.html" >${texto}</a>
          </li>`
  })
}
