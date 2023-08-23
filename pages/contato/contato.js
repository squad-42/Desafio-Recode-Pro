import { navbar, sidebar } from "../../scripts/components.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")

header.innerHTML = navbar()
menu.innerHTML = sidebar()