import { footerComponent, navbar, sidebar } from "../../scripts/components.js"
import { comments, courses } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const footer = document.querySelector("footer")
const player = document.querySelector(".player")
const countComments = document.querySelector("#count-comments")
const userComment = document.querySelector("#user-comment")
const commentsSection = document.querySelector("#comments")

const user = JSON.parse(localStorage.getItem("user"))
const numClass = localStorage.getItem("class")


const codCourse = localStorage.getItem("codCurso")
const { prof, profPic, thumb, date, course } = courses.find((course) => course.cod === codCourse)

header.innerHTML = navbar()
menu.innerHTML = sidebar()
footer.innerHTML = footerComponent(footer)

player.innerHTML = `
    <div class="video-details">
        <video src="" class="video" poster="../../assets/imgs/thumb-${thumb}.png" controls></video>
        <span class="num-class">Aula ${numClass}</span>
        <h3 class="title">${course}</h3>
        <div class="info">
          <i class="fas fa-calendar">
            <span>${date}</span>
          </i>
        </div>
        <div class="tutor">
          <img src="../../assets/imgs/pic-${profPic}.jpg" alt="">
          <div>
            <h3>${prof}</h3>
            <span>Professor</span>
          </div>
        </div>
        <form action="">
          <a href="../cursos/cursos.html" class="btn btn-dark-blue">Ver playlist</a>
        </form>
        <div class="description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem harum unde voluptate enim quis asperiores
            dignissimos officia, ex ipsam aliquid?</p>
        </div>
      </div>
`

countComments.innerText = `${user !== null ? comments.length + 1 : comments.length} comentários`


userComment.innerHTML =
  user !== null ?
    `
        <div class="box">

          <div class="user">
            <img src="../../assets/imgs/pic-${user.userPic}.jpg" alt="">
            <div>
              <h3>${user.name}</h3>
              <span>23-08-2023</span>
            </div>
          </div>
          <p class="text">Adorei a aula.</p>
          <form class="flex-btn">
            <button class="btn btn-orange">Editar</button>
            <button class="btn btn-red">Deletar</button>
          </form>
        </div>


`
    :
    ``


comments.map(({ name, userPic, date, text }) => {
  commentsSection.innerHTML += `
          <div class="box">

            <div class="user">
              <img src="../../assets/imgs/pic-${userPic}.jpg" alt="">
              <div>
                <h3>${name}</h3>
                <span>${date}</span>
              </div>
            </div>
            <p class="text">${text}</p>

          </div>
`

})
