export const navbar = () => {
  return `
  <section class="d-flex align-items-center justify-content-between position-relative section-header">

      <a href="../home/index.html" class="logo">
        <img src="../../assets/icons/logo-texto.svg" alt="Logotipo" width="80">
      </a>

      <form action="" method="post" class="d-flex align-content-center search-form">
        <input type="text" name="search_box" placeholder="Buscar cursos" maxlength="100" required>
        <button type="submit" class="fas fa-search"></button>
      </form>

      <div class="icons">
        <div class="fas fa-bars" id="menu-btn" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></div>
        <div class="fas fa-search" id="search-btn" onclick="toggleSearchForm()"></div>
        <div class="fas fa-user" id="user-btn" onclick="toggleProfile()"></div>
        <div class="fas fa-sun" id="sun-btn"></div>
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