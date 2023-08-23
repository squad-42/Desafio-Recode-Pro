import { footerComponent, navbar, sidebar } from "../../scripts/components.js";

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const footer = document.querySelector("footer")

const form = document.querySelector("#form")
const email = form.querySelector("#inpEmail")
const password = form.querySelector("#inpPassword")
const btnLogin = form.querySelector("#btnLogin")


const users = JSON.parse(localStorage.getItem("users")) || []

header.innerHTML = navbar()
menu.innerHTML = sidebar()
footer.innerHTML = footerComponent(footer)

btnLogin.addEventListener("click", () => {
  const user = users.find((user) => user.email === email.value)

  if (user.password === password.value) {
    localStorage.setItem("user", JSON.stringify(user))
  }

})