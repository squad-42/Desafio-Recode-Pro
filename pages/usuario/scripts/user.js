import { materias } from "../../../scripts/data.js"

const userCards = document.querySelector("#user-cards")

const card = (classe, professor) => {
  return `<div class="w-100 d-flex lesson-card p-3">
    <div class="card-description">
      <h3>${classe}</h3>
      <p class="professor">Prof: ${professor}</p>
    </div>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 30C13.45 30 12.979 29.804 12.587 29.412C12.195 29.02 11.9993 28.5493 12 28V12C12 11.45 12.196 10.979 12.588 10.587C12.98 10.195 13.4507 9.99934 14 10H26C26.55 10 27.021 10.196 27.413 10.588C27.805 10.98 28.0007 11.4507 28 12V28C28 28.55 27.804 29.021 27.412 29.413C27.02 29.805 26.5493 30.0007 26 30H14ZM19 19L21.5 17.5L24 19V12H19V19Z"
        fill="currentcolor" />
    </svg>

  </div>`

}


export const usuarioAluno = (username) => {
  let userInfo = `
  <img src="../../assets/imgs/user.jpg" alt="" id="user-picture">
    <div class="d-flex flex-column justify-content-center ms-3 " id="user-description">
      <p>Aluno: ${username}</p>
      <p>Matricula: 123456</p>
      <p>Turma: Ingles</p>
    </div>
    `
  materias.map(({ classe, professor }) => {
    userCards.innerHTML += card(classe, professor)
  })


  return userInfo
}

export const usuarioProfessor = (username) => {
  return `
    <img src="../../assets/imgs/user.jpg" alt="" id="user-picture">
    <div class="d-flex flex-column justify-content-center ms-3 " id="user-description">
      <p>Prof: ${username}</p>
      <p>Materia 1: Verbo to be</p>
      <p>Materia 2: Past Continuous</p>
    </div>
  
  `
}
