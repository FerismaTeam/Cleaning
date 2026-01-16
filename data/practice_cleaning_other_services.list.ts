import { IconType } from "react-icons"
import { FaBuilding, FaHome, FaTools, FaWindowMaximize } from "react-icons/fa"
import { FaBroom, FaHospital } from "react-icons/fa6"

interface ServiceType {
    icon: IconType,
    name: string,
    des: string,
    link: string,
    redirect_label?: string
}

const otherServicesList: ServiceType[] = [
    {
        icon: FaHospital,
        name: "Krankenhausreinigung",
        des: "Spezialisierte Hygienereinigung für Kliniken, Krankenhäuser und medizinische Zentren mit höchsten Sterilitätsanforderungen.",
        link: "/krankenhausreinigung-munchen",
        redirect_label: "Mehr erfahren"
    },
    {
        icon: FaBroom,
        name: "Unterhaltsreinigung",
        des: "Regelmäßige professionelle Gebäudereinigung für Büros, Praxisgebäude und Gewerbeimmobilien in München.",
        link: "/unterhaltsreinigung-munchen",
        redirect_label: "Mehr erfahren"
    },
    {
        icon: FaTools,
        name: "Sonderreinigung",
        des: "Spezialisierte Reinigungsverfahren für komplexe Anforderungen wie Bauend-, Grund- und Notfallreinigung.",
        link: "/sonderreinigung-munchen",
        redirect_label: "Mehr erfahren"
    },
    {
        icon: FaBuilding,
        name: "Büroreinigung",
        des: "Professionelle Reinigung von Bürogebäuden, Verwaltungen und Geschäftsräumen mit flexiblen Einsatzzeiten.",
        link: "/buroreinigung-munchen",
        redirect_label: "Mehr erfahren"
    },
    {
        icon: FaWindowMaximize,
        name: "Fensterreinigung",
        des: "Streifenfreie Glasreinigung für Praxisfenster, Bürogebäude und Gewerbeobjekte in München und Umgebung.",
        link: "/fensterreinigung-munchen",
        redirect_label: "Mehr erfahren"
    },
    {
        icon: FaHome,
        name: "Alle Services ansehen",
        des: "Entdecken Sie unser komplettes Leistungsangebot für professionelle Gebäudereinigung in München.",
        link: "/",
        redirect_label: "Zur Startseite"
    },
]

export { otherServicesList }