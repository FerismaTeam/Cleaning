import { FaBroom, FaDesktop, FaToilet, FaWind } from "react-icons/fa6";
import { ServiceType } from "./services.list";
import { BsFillCupFill } from "react-icons/bs";
import { LuGrid2X2 } from "react-icons/lu";

const regularCleaningServices: ServiceType[] = [
    {
        icon: FaBroom,
        name: "Tägliche Basisreinigung",
        des: "Papierkorb-Entleerung, Oberflächen abwischen und Böden saugen – die grundlegende Pflege für jeden Tag.",
        features: [
            "Papierkorb-Entleerung",
            "Oberflächen abwischen",
            "Böden saugen",
            "Schreibtisch-Pflege",
            "Sanitärbereich-Pflege",
        ],
    },
    {
        icon: FaToilet,
        name: "Sanitärbereich-Pflege",
        des: "WCs, Waschbecken und Armaturen reinigen und desinfizieren – für höchste Hygienestandards.",
        features: [
            "WC-Reinigung",
            "Waschbecken & Armaturen",
            "Desinfektion",
            "Auffüllen von Verbrauchsmaterial",
        ],
    },
    {
        icon: BsFillCupFill,
        name: "Küchen & Pausenräume",
        des: "Gemeinschaftsräume sauber und einladend halten – für angenehme und hygienische Pausen.",
        features: [
            "Küchenreinigung",
            "Kaffeemaschinenpflege",
            "Kühlschrankreinigung",
            "Tische & Stühle",
            "Bodenreinigung",
        ],
    },
    {
        icon: LuGrid2X2,
        name: "Bodenreinigung",
        des: "Alle Bodenbeläge fachgerecht gereinigt und gepflegt – für langanhaltende Sauberkeit.",
        features: [
            "Saugen",
            "Wischen",
            "Teppichpflege",
            "Parkett-Behandlung",
        ],
    },
    {
        icon: FaWind,
        name: "Staubentfernung",
        des: "Regale, Schränke und Fensterbretter staubfrei – für ein gepflegtes Erscheinungsbild.",
        features: [
            "Regale & Schränke",
            "Fensterbretter",
            "Heizkörper",
            "Dekoration",
        ],
    },
    {
        icon: FaDesktop,
        name: "Arbeitsplatz-Pflege",
        des: "Schreibtische, Monitore und Eingabegeräte hygienisch gereinigt – für produktives Arbeiten.",
        features: [
            "Schreibtische",
            "Monitore",
            "Tastaturen",
            "Telefone",
        ],
    }
];

export default regularCleaningServices;
