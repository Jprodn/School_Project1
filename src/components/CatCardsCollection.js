import QuestionMark from "../images/icon_QuestionMark.png"
function CatCardsPanel() {
    return (
        <div className="catCardsCollection">
        <img src={QuestionMark} id="collection1" alt="" />
        <img src={QuestionMark} id="collection2" alt="" />
        <img src={QuestionMark} id="collection3" alt="" />
        <img src={QuestionMark} id="collection4" alt="" />
        <img src={QuestionMark} id="collection5" alt="" />
        <img src={QuestionMark} id="collection6" alt="" />
        <img src={QuestionMark} id="collection7" alt="" />
        <img src={QuestionMark} id="collection8" alt="" />
        <h1 id="toomanycats">You own too many cats. Weirdo.</h1>
    </div>
    )

}


export default function CatCardsCollection(){
    return (CatCardsPanel())
}