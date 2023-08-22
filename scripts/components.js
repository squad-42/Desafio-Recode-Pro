import { menuItens } from "./data.js"

export const navbar = () => {
  return `
  <section class="d-flex align-items-center justify-content-between position-relative section-header">

      <a href="../home/index.html" class="logo">
        <img src="../../assets/icons/logo-texto.svg" alt="Logotipo" width="80" id="logo">
      </a>

      <form action="" method="post" class="d-flex align-content-center search-form">
        <input type="text" name="search_box" placeholder="Buscar cursos" maxlength="100" required>
        <button type="submit" class="fas fa-search"></button>
      </form>

      <div class="icons">
        <div class="fas fa-bars" id="menu-btn" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></div>
        <div class="fas fa-search" id="search-btn" onclick="toggleSearchForm()"></div>
        <div class="fas fa-user" id="user-btn" onclick="toggleProfile()"></div>
        <div class="fas fa-moon" id="toggle-btn" onclick="switchTheme()"></div>
      </div>


      <div class="profile position-absolute text-center" id="profile-modal">
        <img src="../../assets/imgs/pic-1.jpg" alt="Foto de Perfil" class="object-fit-cover">
        <h3 class="name">Harry Potter</h3>
        <p class="role">Aluno</p>
        <a href="#" class="btn d-block w-100 btn-dark-blue">Ver perfil</a>
        <div class="d-flex gap-3 mt-3">
          <a href="#" class="btn btn-orange">Login</a>
          <a href="#" class="btn btn-orange">Registrar</a>
        </div>
      </div>

    </section>
 `
}

export const sidebar = () => {
  let links = ""
  menuItens.map(({ icon, label, link }) => {
    links += `
  <a href="/pages/${link}/${link === "home" ? "index" : link}.html"><i class="fas fa-${icon}"></i><span>${label}</span></a>
  `
  })
  return `
  <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar">
    <div class="profile text-center" id="profile-sidebar">
      <img src="../../assets/imgs/pic-1.jpg" alt="Foto de Perfil" class="object-fit-cover">
      <h3 class="name">Harry Potter</h3>
      <p class="role">Aluno</p>
      <a href="#" class="btn d-block w-100 btn-dark-blue">Ver perfil</a>
    </div>
    <nav class="navbar d-flex flex-column align-items-start justify-content-around ">
    ${links}
    </nav>
  </div>
  `
}

export const cardCurso = ({cod, prof, profPic, date, numOfVid, thumb, course})=> {
  return `
  <div class="box">
  <div class="tutor">
    <img src="/assets/imgs/pic-${profPic}.jpg" alt="">
    <div class="info">
      <h3>${prof}</h3>
      <span>${date}</span>
    </div>
  </div>
  <div class="thumb">
    <img src="/assets/imgs/thumb-${thumb}.png" alt="">
    <span>${numOfVid} videos</span>
  </div>
  <h3 class="title">${course}</h3>
  <a href="../aulas/aulas.html" class="btn btn-dark-blue" onclick="setCurso(${cod})">ver playslist</a>
</div>
  `
}