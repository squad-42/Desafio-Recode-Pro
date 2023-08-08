import { usuarioAluno, usuarioProfessor } from "./user.js"

const perfil = localStorage.getItem("perfil")
const username = localStorage.getItem("username")

const userBio = document.querySelector("#user-bio")

console.log(username)

userBio.innerHTML = `${perfil === "aluno" ? usuarioAluno(username) : usuarioProfessor(username)}`