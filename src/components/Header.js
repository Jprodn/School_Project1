import Cat from "../images/cat-icon.png"
export default function Header() {
    return (
        <header>
            <h1>Cat Cards</h1>
            <img src={Cat} alt="cat" />
        </header>
    )
}