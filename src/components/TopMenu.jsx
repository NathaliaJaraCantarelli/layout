import { TiUpload } from "react-icons/ti";

const namesMenu = ["Análise de Arquivo", "Código de Barras", "Cálculo de Tinta", ""];

function TopMenu() {
    return (
        <menu className="top-menu">
            {namesMenu.map((name, index) => {
                return (
                    <div key={index} className={`card-top-menu card-${index}`}>
                        <h3 className="name-top-menu">{name}</h3>
                        <div className="upload-top-menu">
                            <TiUpload />
                            <p className="p-upload">upload</p>
                        </div>
                    </div>
                )
            })}
        </menu>
    )
}

export default TopMenu;
