import { cardCurso, footerComponent, navbar, sidebar } from '../../scripts/components.js'
import { courses } from '../../scripts/data.js'

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const footer = document.querySelector("footer")
const cursosSection = document.querySelector("#courses .box-container")

header.innerHTML = navbar()
menu.innerHTML = sidebar()
footer.innerHTML = footerComponent(footer)

courses.map((course) => {
    cursosSection.innerHTML += cardCurso(course)
})