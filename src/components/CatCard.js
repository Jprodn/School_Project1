import Cat_1 from "../images/img_Cat_1.jpg"
import Cat_2 from "../images/img_Cat_2.jpg"
import Cat_3 from "../images/img_Cat_3.jpg"
import Cat_4 from "../images/img_Cat_4.jpg"
import Cat_5 from "../images/img_Cat_5.jpg"
import Cat_6 from "../images/img_Cat_6.jpg"
import Cat_7 from "../images/img_Cat_7.jpg"
import Cat_8 from "../images/img_Cat_8.jpg"
 let Cat = "";
 let catname = "";
function getRandomImg() {
    let Num = Math.floor(Math.random() * 8)
Cat_1 = Cat_1
     if (Num === 0){
        Cat = Cat_1
        catname = "Boppo"
     }else if (Num === 1){
        Cat = Cat_2
        catname = "Unknown Assailant"
     }else if (Num === 2){
        Cat = Cat_3
        catname = "Idol of Misery"
     }else if (Num === 3){
        Cat = Cat_4
        catname = "Wendy's Baked Potato"
     }else if (Num === 4){
        Cat = Cat_5
        catname = "Garubguhuklunshwak"
     }else if (Num === 5){
        Cat = Cat_6
        catname = "The Visitor"
     }else if (Num === 6){
        Cat = Cat_7
        catname = "Harold"
     }else if (Num === 7){
        Cat = Cat_8
        catname = "Destroyer of Dreams"
     }else{
        Cat = ""
        catname = "???"
     }
 return ( 
    <div className="cat-card">
      <h1 id="catname">{catname}</h1>
        <img src={Cat} id="currentcat" alt="Cat" />
    </div>
)
}
export default function CatCard(){
    return (getRandomImg())
}