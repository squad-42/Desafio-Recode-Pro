import { menuItens } from "./data.js"

export const user = JSON.parse(localStorage.getItem("user"))

const users = JSON.parse(localStorage.getItem("users"))

console.log(users)
console.log(user)

const profile = (user, location) => {
  return user !== null ?
    `
    <img src="../../assets/imgs/pic-${user.userPic}.jpg" alt="Foto de Perfil" class="object-fit-cover">
    <h3 class="name">${user.name}</h3>
    <p class="role text-capitalize">${user.type}</p>
    <a href="../usuario/usuario.html" class="btn d-block w-100 btn-dark-blue">Ver perfil</a>
    ${location === "header" ? `
        <div class="d-flex gap-3 mt-3">
          <a href="../home/index.html" class="btn btn-orange" onclick="logout()">Logout</a>
        </div>      
      ` : ``
    }
` : `
    <h3 class="name">Por favor logar ou registrar</h3>
    <div class="d-flex gap-3 mt-3">
      <a href="../login/login.html" class="btn btn-orange">Login</a>
      <a href="../cadastro/cadastro.html" class="btn btn-orange">Registrar</a>
    </div>
`
}


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
        ${profile(user, "header")}
      </div>
    </section>
 `
}

export const sidebar = () => {
  let links = ""
  menuItens.map(({ icon, label, link }) => {
    links += `
  <a href="../${link}/${link === "home" ? "index" : link}.html"><i class="fas fa-${icon}"></i><span>${label}</span></a>
  `
  })
  if (user !== null) {
    links += `
  <a href="../home/index.html" onclick="logout()"><i class="fas fa-right-from-bracket"></i></i><span>Logout</span></a>
`
  }
  return `
  <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar">
    <div class="profile text-center" id="profile-sidebar">
      ${profile(user, "sidebar")}
    </div>
    <nav class="navbar d-flex flex-column align-items-start justify-content-around ">
    ${links}
    </nav>
  </div>
  `
}

export const footerComponent = (footer) => {
  footer.classList.add("position-sticky")
  footer.classList.add("bottom-0")
  footer.classList.add("end-0")
  footer.classList.add("start-0")
  return `
    <div>
      &copy; 2023. Desenvolvido por <span>Squad 42</span> | Todos os direitos reservados!
    </div>
`
}

export const cardCurso = ({ cod, prof, profPic, date, numOfVid, thumb, course }) => {
  return `
  <div class="box">
  <div class="tutor">
    <img src="../../assets/imgs/pic-${profPic}.jpg" alt="">
    <div class="info">
      <h3>${prof}</h3>
      <span>${date}</span>
    </div>
  </div>
  <div class="thumb">
    <img src="../../assets/imgs/thumb-${thumb}.png" alt="">
    <span>${numOfVid} videos</span>
  </div>
  <h3 class="title">${course}</h3>
  <a href="../aulas/aulas.html" class="btn btn-dark-blue" onclick="setCurso(${cod})">ver playslist</a>
</div>
  `
}