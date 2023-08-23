import { cardCurso, footerComponent, navbar, sidebar } from "../../scripts/components.js";
import { courses, quickOptions } from "../../scripts/data.js";

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const footer = document.querySelector("footer")
const quickOptionsSections = document.querySelectorAll(".cards-options")
const coursesSection = document.querySelector("#courses .box-container")

header.innerHTML = navbar()
menu.innerHTML = sidebar()
footer.innerHTML = footerComponent(footer)

/* OPÇÕES RÁPIDAS CARDS */
quickOptions.map(({ title, itens }, index) => {
  let links = "";

  itens.map(({ icon, label }) => {
    links += `
    <a href="#"><i class="fas fa-${icon}"></i><span>${label}</span></a>
    `
  })

  quickOptionsSections[index].innerHTML += `
      <div class="box">
        <h3 class="title">${title}</h3>
        <div class="flex">
        ${links}
        </div>
      </div>
`
})


courses.sort((a, b) => {
  return a.course < b.course ? -1 : a.course > b.course ? 1 : 0
})

for (let i = 0; i < 4; i++) {
  coursesSection.innerHTML += cardCurso(courses[i])
}

