import { CiMenuBurger } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";

function Header() {
    return (
        <header className="header">
            <div className="div-header">
                <CiMenuBurger className="icon-header" />
                <img src="https://flexoelabelsexpo.com.br/wp-content/uploads/2023/08/Flexo-Grav.png" className="img-header"></img>
            </div>
            <div className="div-header">
                <FaRegUser className="icon-header" />
                <FaPowerOff className="icon-header" />
            </div>
        </header>

    )
}

export default Header