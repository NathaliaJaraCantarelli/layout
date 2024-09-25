import { FaRegUser } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LiaCoinsSolid } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import { HiMiniSquaresPlus } from "react-icons/hi2";

const data = [{
    icon: <FaRegUser />,
    title: "Perfil",
    subtitles: ["Impressoras", "Usuários"]
}, {
    icon: <RiBankLine />,
    title: "Administrativo",
    subtitles: ["Cadastro", "Cadastro 3º", "Estoque", "Financeiro", "Relatório"]
}, {
    icon: <LiaClipboardListSolid />,
    title: "Ordem de Serviço",
    subtitles: ["Aprovação", "Histórico", "Produção", "PCP", "Sistema Antigo"]
}, {
    icon: <HiMiniSquaresPlus />,
    title: "Gravação",
    subtitles: ["Estoque", "Medidas"]
}, {
    icon: <LiaCoinsSolid />,
    title: "Comercial",
    subtitles: []
}, {
    icon: <FiSettings />,
    title: "Configurações",
    subtitles: ["Permissões", "Transportes"]
}]

export default data;
