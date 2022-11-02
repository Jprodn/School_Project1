import Cat from "../images/img_CatIcon.png"
export default function Header() {
    return (
        <header>
            <h1>Cat Cards</h1>
            <img src={Cat} alt="cat" />

        </header>
    )
}