import { FaBuilding, FaStore, FaWindowMaximize } from "react-icons/fa6";
import { ServiceType } from "./services.list";
import { FaHome } from "react-icons/fa";
import { RxRulerSquare } from "react-icons/rx";

const windowCleaningServices: ServiceType[] = [
    {
        icon: FaHome,
        name: "Innen- & Außenreinigung",
        des: "Komplette Fensterreinigung in München von beiden Seiten – für perfekt saubere Fenster innen und außen.",
        features: [
            "Innenseite gründlich gereinigt",
            "Außenseite streifenfrei",
            "Rahmen inklusive",
        ],
    },
    {
        icon: FaStore,
        name: "Glasfassaden & Schaufenster",
        des: "Professionelle Schaufenster- und Glasfassadenreinigung für Geschäfte, Showrooms und Bürogebäude.",
        features: [
            "Große Glasfronten",
            "Schaufenster",
            "Eingangsbereiche",
        ],
    },
    {
        icon: RxRulerSquare,
        name: "Komplettservice",
        des: "Umfassende Reinigung aller Fensterbestandteile – alles aus einer Hand für perfekte Ergebnisse.",
        features: [
            "Fensterrahmen",
            "Fensterbänke",
            "Dichtungen",
        ],
    },
    {
        icon: FaBuilding,
        name: "Hochhaus & Osmose-Reinigung",
        des: "Hochhausreinigung mit professioneller Ausrüstung und moderner Osmose-Technik – streifenfrei und ohne Chemie.",
        features: [
            "Hochhausfenster",
            "Osmose-Technik",
            "Sicherheitsausrüstung",
        ],
    },
];

export default windowCleaningServices;
