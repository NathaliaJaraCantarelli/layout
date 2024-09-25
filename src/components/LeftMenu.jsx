import { IoIosArrowDown } from "react-icons/io";
import data from "../data/DataLeftMenu";

function LeftMenu() {
    return (
        <menu className="menu-left">
            {data.map((element) => {
                return (
                    <div key={element.title}  className="all-left-menu">
                            {element.icon}
                        <div className="text-left-menu">
                            <h3>{element.title}</h3>
                        {element.subtitles.map((subtitle) => <p key={subtitle}>{subtitle}</p>)}
                        </div>
                            <IoIosArrowDown />
                    </div>
                )
            })}
        </menu>
    )
}

export default LeftMenu;
