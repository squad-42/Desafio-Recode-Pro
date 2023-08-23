import { navbar, sidebar } from "../../scripts/components.js";

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const form = document.querySelector("#form")

const name = form.querySelector("#name")
const email = form.querySelector("#email")
const type = form.querySelector("#type")
const password = form.querySelector("#password")
const confPassword = form.querySelector("#confPassword")
const btnSignUp = form.querySelector("#btnSignUp")

const users = JSON.parse(localStorage.getItem("users")) || []

header.innerHTML = navbar()
menu.innerHTML = sidebar()

btnSignUp.addEventListener("click", () => {
  if (password.value === confPassword.value) {
    const user = {
      id: users.length + 1,
      name: name.value,
      email: email.value,
      type: type.value,
      password: password.value,
      userPic: 1,
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    console.log("Cadastrado")
  }
})