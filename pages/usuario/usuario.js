import { cardCurso, footerComponent, navbar, sidebar, user } from "../../scripts/components.js"
import { courses } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const profileDetails = document.querySelector(".details")
const playlistSection = document.querySelector("#courses")
const playlists = document.querySelector("#courses .box-container")
const footer = document.querySelector("footer")

const { name, userPic, type } = user

header.innerHTML = navbar()
menu.innerHTML = sidebar()
footer.innerHTML = footerComponent(footer)




profileDetails.innerHTML = `
        <div class="user">
          <img src="../../assets/imgs/pic-${userPic}.jpg" alt="">
          <h3>${name}</h3>
          <p>${type}</p>
          <a href="../update/update.html" class="btn btn-dark-blue">Editar perfil</a>
        </div>

        <div class="box-container">

          <div class="box">
            <div class="flex">
              <i class="fas fa-bookmark"></i>
              <div>
                <h3>3</h3>
                <span>Playlist salvas</span>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="flex">
              <i class="fas fa-heart"></i>
              <div>
                <h3>5</h3>
                <span>Aulas curtidas</span>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="flex">
              <i class="fas fa-comments"></i>
              <div>
                <h3>10</h3>
                <span>Comentarios</span>
              </div>
            </div>
          </div>


        </div>

`





if (type === "Aluno(a)") {
  for (let i = 0; i < 3; i++) {
    playlists.innerHTML += cardCurso(courses[i])
  }
} else {

}

