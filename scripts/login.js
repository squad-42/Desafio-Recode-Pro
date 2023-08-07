const btnDiv = document.querySelector("#btn-div")
const btnAluno = btnDiv.querySelector("#btnAluno")
const btnProfessor = btnDiv.querySelector("#btnProfessor")

btnAluno.addEventListener("click", () => localStorage.setItem("perfil", "aluno"))

btnProfessor.addEventListener("click", () => localStorage.setItem("perfil", "professor"))