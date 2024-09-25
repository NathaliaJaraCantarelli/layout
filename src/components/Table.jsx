import { FaFileCirclePlus } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import dataTable from "../data/DataTable";

function Table() {
    return (
        <div className="all-table">
            <header className="header-table">
                <h2>Jonathan</h2>
                <div className="icons-table">
                    <FaFileCirclePlus />
                    <FaRegCompass />
                    <FaTruckFast />
                    <BsSearch />
                </div>
            </header>
            <table>
                <thead>
                    <td className="td-head">{<MdCheckBoxOutlineBlank />} OS</td>
                    <td className="td-head">Entrega</td>
                    <td className="td-head">Cliente</td>
                    <td className="td-head">Título</td>
                    <td className="td-head">Fluxo</td>
                    <td className="td-head">Transporte {<IoIosArrowDown />}</td>
                    <td className="td-status-head">Status {<IoIosArrowDown />}</td>
                </thead>
                <tbody>
                    {dataTable.map((element) => {
                        return (
                            <tr key={element.id} className={element.cor}>
                                <td><MdCheckBoxOutlineBlank />{element.id}</td>
                                <td>{element.entrega}</td>
                                <td>{element.cliente}</td>
                                <td>
                                    <img src={element.foto} alt="Photo User" className="img-table" />
                                    {element.titulo}
                                    {element.comentario && <FaRegComment className="comment-icon-table" />}
                                </td>
                                <td>{element.fluxo}</td>
                                <td>{element.transporte}</td>
                                <td>{element.status}</td>
                            </tr>)
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Table;
