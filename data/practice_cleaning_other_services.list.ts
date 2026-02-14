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
    // {
    //     icon: FaHospital,
    //     name: "Krankenhausreinigung",
    //     des: "Spezialisierte Hygienereinigung für Kliniken, Krankenhäuser und medizinische Zentren mit höchsten Sterilitätsanforderungen.",
    //     link: "/krankenhausreinigung-nuernberg",
    //     redirect_label: "Mehr erfahren"
    // },
    {
        icon: FaBroom,
        name: "Unterhaltsreinigung",
        des: "Regelmäßige professionelle Gebäudereinigung für Büros, Praxisgebäude und Gewerbeimmobilien in Nürnberg, Fürth & Umgebung.",
        link: "/unterhaltsreinigung-nuernberg",
        redirect_label: "Mehr erfahren"
    },
    {
        icon: FaTools,
        name: "Sonderreinigung",
        des: "Spezialisierte Reinigungsverfahren für komplexe Anforderungen wie Bauend-, Grund- und Notfallreinigung.",
        link: "/sonderreinigung-nuernberg",
        redirect_label: "Mehr erfahren"
    },
    {
        icon: FaBuilding,
        name: "Büroreinigung",
        des: "Professionelle Reinigung von Bürogebäuden, Verwaltungen und Geschäftsräumen mit flexiblen Einsatzzeiten.",
        link: "/buroreinigung-nuernberg",
        redirect_label: "Mehr erfahren"
    },
    // {
    //     icon: FaWindowMaximize,
    //     name: "Fensterreinigung",
    //     des: "Streifenfreie Glasreinigung für Praxisfenster, Bürogebäude und Gewerbeobjekte in Nürnberg, Fürth & Umgebung .",
    //     link: "/fensterreinigung-nuernberg",
    //     redirect_label: "Mehr erfahren"
    // },
    {
        icon: FaHome,
        name: "Alle Services ansehen",
        des: "Entdecken Sie unser komplettes Leistungsangebot für professionelle Gebäudereinigung in Nürnberg, Fürth & Umgebung.",
        link: "/",
        redirect_label: "Zur Startseite"
    },
]

export { otherServicesList }