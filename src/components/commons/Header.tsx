import { Button } from "../ui/button";

export default function Header() {
    return (
        <header>
            <div>
                <img src="" alt="" />
                <h1>NextBite Food</h1>
            </div>

            <nav>
                <ul>
                    <li>
                        <a href="#Hero">Home</a>
                    </li>
                    <li>
                        <a href="#about">Sobre nos</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div>
                <div>
                    <img src="" alt="" />
                    <span>Minha conta</span>
                </div>

                <div>
                    <img src="" alt="" />
                    <span>Meu carrinho</span>
                </div>

                <Button>signup</Button>
            </div>
        </header>
    );
}
