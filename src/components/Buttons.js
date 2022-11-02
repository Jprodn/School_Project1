import Cat_1 from "../images/img_Cat_1.jpg"
import Cat_2 from "../images/img_Cat_2.jpg"
import Cat_3 from "../images/img_Cat_3.jpg"
import Cat_4 from "../images/img_Cat_4.jpg"
import Cat_5 from "../images/img_Cat_5.jpg"
import Cat_6 from "../images/img_Cat_6.jpg"
import Cat_7 from "../images/img_Cat_7.jpg"
import Cat_8 from "../images/img_Cat_8.jpg"

export default function Buttons(){
    return (
        
        <div className="buttons">
        <img src={Cat_1} id="hidden1" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
        <img src={Cat_2} id="hidden2" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
        <img src={Cat_3} id="hidden3" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
        <img src={Cat_4} id="hidden4" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
        <img src={Cat_5} id="hidden5" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
        <img src={Cat_6} id="hidden6" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
        <img src={Cat_7} id="hidden7" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
        <img src={Cat_8} id="hidden8" alt="" onLoad={(event) => event.target.style.display = 'none'}/>
            <button onClick={() => iconSelector()}>Add To Collection</button>
           <button onClick={() => getRandomImg()}>Get Next Card</button>
        </div>

    )
    function getRandomImg() {
        let Num = Math.floor(Math.random() * 8)
        let Cat = ""
        let catname = ""
         if (Num === 0){
            Cat = "hidden1"
            catname = "Boppo"
         }else if (Num === 1){
            Cat = "hidden2"
            catname = "Unknown Assailant"
         }else if (Num === 2){
            Cat = "hidden3"
            catname = "Idol of Misery"
         }else if (Num === 3){
            Cat = "hidden4"
            catname = "Wendy's Baked Potato"
         }else if (Num === 4){
            Cat = "hidden5"
            catname = "Garubguhuklunshwak"
         }else if (Num === 5){
            Cat = "hidden6"
            catname = "The Visitor"
         }else if (Num === 6){
            Cat = "hidden7"
            catname = "Harold"
         }else if (Num === 7){
            Cat = "hidden8"
            catname = "Destroyer of Dreams"
         }
            document.getElementById("currentcat").src = document.getElementById(Cat).src
            document.getElementById("catname").textContent = catname
    }

    function iconSelector(){
        let Cat = ""
        if ( document.getElementById("collection1").alt === ""){
            Cat = "collection1"
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else if ( document.getElementById("collection2").alt === ""){
            Cat = "collection2"
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else if ( document.getElementById("collection3").alt === ""){
            Cat = "collection3"
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else if ( document.getElementById("collection4").alt === ""){
            Cat = "collection4" 
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else if ( document.getElementById("collection5").alt === ""){
            Cat = "collection5"
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else if ( document.getElementById("collection6").alt === ""){
            Cat = "collection6"
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else if ( document.getElementById("collection7").alt === ""){
            Cat = "collection7"
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else if ( document.getElementById("collection8").alt === ""){
            Cat = "collection8"
            document.getElementById("toomanycats").style.visibility = "visible";
            document.getElementById(Cat).src = document.getElementById("currentcat").src
            document.getElementById(Cat).alt = "CAT"
         }else{
            document.getElementById("toomanycats").style.visibility = "visible";
         }
    }
    
}