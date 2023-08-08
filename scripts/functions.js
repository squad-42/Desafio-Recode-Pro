// Função para alternar o tema
function alternarTema(tema) {
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('.footer');
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
