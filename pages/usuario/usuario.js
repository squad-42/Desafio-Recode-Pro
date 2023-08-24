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
          <p class="text-capitalize">${type}</p>
          <a href="../update/update.html" class="btn btn-dark-blue">Editar perfil</a>
        </div>

        <div class="box-container">

          <div class="box">
            <div class="flex">
              <i class="fas fa-bookmark"></i>
              <div>
                <h3>${type === "professor" ? 2 : 3}</h3>
                <span>Playlist ${type === "professor" ? "criadas" : ""}</span>
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


const cardCursoProf = ({ numOfVid, course, thumb }) => {
  return `
    <div class="box">
      <div class="tutor">
      </div>
      <div class="thumb">
        <img src="/assets/imgs/thumb-${thumb}.png" alt="">
        <span>${numOfVid} videos</span>
      </div>
      <h3 class="title">${course}</h3>
      <div class="flex">
        <a href="" class="btn btn-orange">Editar</a>
        <a href="" class="btn btn-red">Deletar</a>
      </div>
      <a href="" class="btn btn-dark-blue" style="width: 100%;">Ver playlist</a>
    </div>
  `
}


if (type === "aluno") {
  for (let i = 0; i < 3; i++) {
    playlists.innerHTML += cardCurso(courses[i])
  }
} else {
  playlists.innerHTML = `
          <div class="box" style="height: fit-content;">
            <h3 class="title text-center">Adicionar nova playlist</h3>
            <a href="" class="btn btn-dark-blue" style="width: 100%;">Adicionar</a>
          </div>
  `
  for (let i = 0; i < 2; i++) {
    playlists.innerHTML += cardCursoProf(courses[i])
  }
}

