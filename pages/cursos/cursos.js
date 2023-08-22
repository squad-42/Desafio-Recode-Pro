import {cardCurso, navbar, sidebar} from '../../scripts/components.js'
import { courses} from '../../scripts/data.js'

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const cursosSection = document.querySelector("#courses .box-container")

header.innerHTML = navbar()
menu.innerHTML = sidebar()

courses.map((course) => {
    cursosSection.innerHTML+=cardCurso(course)
})