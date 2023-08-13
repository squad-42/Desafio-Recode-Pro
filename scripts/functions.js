const body = document.body
const profile = body.querySelector("#profile-modal")
const searchForm = body.querySelector(".search-form")
const toggleBtn = body.querySelector("#toggle-btn")
const offcanvas = body.querySelector(".offcanvas")
const logo = body.querySelector("#logo")


localStorage.setItem("dark-mode", "false")



const toggleProfile = () => {
  profile.classList.toggle("active")
  searchForm.classList.remove("active")
}

const toggleSearchForm = () => {
  searchForm.classList.toggle("active")
  profile.classList.remove("active")
}




window.onscroll = () => {
  profile.classList.remove("active")
  searchForm.classList.remove("active")
}


const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun")
  localStorage.setItem("dark-mode", "true")
  body.classList.add("dark")
  offcanvas.classList.add("text-bg-dark")
  logo.src = "../../assets/icons/logo-texto-branco.svg"
}

const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon")
  localStorage.setItem("dark-mode", "false")
  body.classList.remove("dark")
  offcanvas.classList.remove("text-bg-dark")
  logo.src = "../../assets/icons/logo-texto.svg"
}


const switchTheme = () => {
  let darkMode = localStorage.getItem("dark-mode")
  darkMode === "false" ? enableDarkMode() : disableDarkMode()
}
