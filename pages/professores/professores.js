import { footerComponent, navbar, sidebar } from "../../scripts/components.js";
import { courses } from "../../scripts/data.js";

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const footer = document.querySelector("footer")
const teachers = document.querySelector(".box-container")

header.innerHTML = navbar()
menu.innerHTML = sidebar()
footer.innerHTML = footerComponent(footer)


courses.map(({ cod, prof, profPic, numOfVid }) => {
  teachers.innerHTML += `
        <div class="box">
          <div class="tutor">
            <img src="../../assets/imgs/pic-${profPic}.jpg" alt="">
            <div>
              <h3 class="title">${prof}</h3>
              <span>Professor</span>
            </div>
          </div>
          <div class="stats">
            <p>Playlist: <span>1</span></p>
            <p>Nº de vídeos: <span>${numOfVid}</span></p>
            <a href="../professor/professor.html" class="btn btn-dark-blue" onclick="setCurso(${cod})">Ver perfil</a>
          </div>
        </div>
  `
})