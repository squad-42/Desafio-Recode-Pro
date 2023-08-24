import{footerComponent, navbar,sidebar} from "../../scripts/components.js"
import { sobreCards } from "../../scripts/data.js"
const header=document.querySelector("header")
const menu=document.querySelector(".sidebar")
const cardSection=document.querySelector(".row")
const footer=document.querySelector("footer")

header.innerHTML=navbar()
menu.innerHTML=sidebar()
footer.innerHTML=footerComponent(footer)
sobreCards.map(({img,title,text})=>{
cardSection.innerHTML += `
               <div class="col-md-4">
                  <div class="main">
                      <div class="service">
                         <div class="service-logo">
                            <img src="../../assets/imgs/${img}.png" alt="">
                          </div>
                          <h4>${title}</h4>
                          <p>${text}</p>
                      </div>
                      <div class="sombra1"></div>
                      <div class="sombra2"></div>
                  </div>
              </div>

`

})
