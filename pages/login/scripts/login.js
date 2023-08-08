const username = document.querySelector("#input-login")

const btnDiv = document.querySelector("#btn-div")
const btnAluno = btnDiv.querySelector("#btnAluno")
const btnProfessor = btnDiv.querySelector("#btnProfessor")

function setInfo(perfil, username) {
  localStorage.setItem("perfil", perfil)
  localStorage.setItem("username", username.value)
}

btnAluno.addEventListener("click", () => setInfo("aluno", username))

btnProfessor.addEventListener("click", () => setInfo("professor", username))