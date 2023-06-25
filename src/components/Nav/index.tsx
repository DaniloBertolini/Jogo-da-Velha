import './navbar.css'
import { Moon, Sun, House } from "@phosphor-icons/react";

type Type = {
    onClick: () => void,
    dark: boolean,
}

function Nav({ onClick, dark }: Type) {

    return (
        <nav className="navbar">
            <a href="https://danilobertolini.github.io/DB-Games/" className='navbarA'>
                <House size={32} color="#025DB9" />
            </a>
            <button
            className='navbarMode'
            onClick={ onClick }
            >
            {dark
              ? <Sun size={32} color="#fff" />
              : <Moon size={32} />
            }
            </button>
        </ nav>
    )
}

export default Nav;