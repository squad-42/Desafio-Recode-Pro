import { navbar, sidebar } from "../../scripts/components.js";
import { courses } from "../../scripts/data.js";

const header = document.querySelector("header");
const menu = document.querySelector(".sidebar");
const detalhesPlaylist = document.querySelector(".row");
const videosSection = document.querySelector(".box-container");
const codCurso = localStorage.getItem("codCurso");
const { prof, profPic, thumb, date, course, numOfVid } = courses.find(
  (course) => course.cod === codCurso
);

header.innerHTML = navbar();
menu.innerHTML = sidebar();

detalhesPlaylist.innerHTML = `
<div class="col">
<form action="" method="post" class="save-list">
   <button class="" type="submit" name="save_list"><i class="far fa-bookmark"></i><span>Save Playslist</span></button> 
</form> 
<div class="thumb">
  <span>${numOfVid} videos</span>

  <img src="../../assets/imgs/thumb-${thumb}.png" alt="">

</div>
</div> 
<div class="col">
<div class="tutor">
<img src="../../assets/imgs/pic-${profPic}.jpg" alt="">
<div>
    <h3>${prof}</h3>
    <span>Developer</span>
</div>
</div> 
<div class="details">
<h3>${course}</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, facere hic odio optio delectus non id porro provident quasi, autem, quaerat aliquid. Odit porro nisi, commodi voluptas obcaecati libero harum.</p>
<div class="date"><i class="fas fa-calendar"></i> <span>${date}</span></div>
</div>
</div> 
</div>
`;


for (let i = 1; i<= numOfVid; i++) {
    videosSection.innerHTML+=`
    <a href="watch-video.html" class="box">
          <i class="fas fa-play"></i>
          <img src="../../assets/imgs/thumb-${thumb}.png" alt="">
          <span>Aula ${i}</span>
          <h3>${course}</h3>
    </a>

    `
}