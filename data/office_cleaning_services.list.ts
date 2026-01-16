import { FaBroom, FaDesktop, FaToilet, FaWind } from "react-icons/fa6";
import { ServiceType } from "./services.list";
import { BsFillCupFill } from "react-icons/bs";
import { LuGrid2X2 } from "react-icons/lu";

const officeCleaningServices: ServiceType[] = [
    {
        icon: FaDesktop,
        name: "Arbeitsplatzreinigung",
        des: "Schreibtische, Monitore, Tastaturen und Telefone – wir halten Arbeitsplätze sauber und hygienisch für produktives Arbeiten.",
        features: [
            "Schreibtischreinigung",
            "Monitor & Tastatur-Pflege",
            "Staubfreie Oberflächen",
            "Papierkorb-Entleerung",
        ],
    },
    {
        icon: FaToilet,
        name: "Sanitärpflege",
        des: "Hygienische Reinigung und Desinfektion aller Sanitärbereiche – WCs, Waschbecken und Armaturen für höchste Hygienestandards.",
        features: [
            "WC-Reinigung & Desinfektion",
            "Waschbecken & Armaturen",
            "Spiegel & Fliesen",
            "Verbrauchsmaterial auffüllen",
        ],
    },
    {
        icon: BsFillCupFill,
        name: "Küchen & Pausenräume",
        des: "Saubere Gemeinschaftsräume für angenehme Pausen – Küchen, Kaffeebereiche und Pausenräume hygienisch gereinigt.",
        features: [
            "Küchenreinigung",
            "Kaffeemaschinen-Pflege",
            "Kühlschrank-Reinigung",
            "Tische & Stühle",
        ],
    },
    {
        icon: LuGrid2X2,
        name: "Teppichpflege",
        des: "Professionelle Teppichreinigung für gepflegte Büroböden – Saugen, Fleckentfernung und Tiefenreinigung nach Bedarf.",
        features: ["Regelmäßiges Saugen", "Fleckentfernung", "Tiefenreinigung"],
    },
    {
        icon: FaWind,
        name: "Staubfreie Oberflächen",
        des: "Gründliche Entstaubung aller Oberflächen – Regale, Schränke, Fensterbretter und Heizkörper für ein gepflegtes Büro.",
        features: [
            "Regale & Schränke",
            "Fensterbretter",
            "Heizkörper",
            "Dekoration",
        ],
    },
    {
        icon: FaBroom,
        name: "Bodenreinigung",
        des: "Alle Bodenbeläge professionell gereinigt – Fliesen, Parkett, Laminat und Vinyl mit passenden Pflegemitteln behandelt.",
        features: [
            "Fliesen wischen",
            "Parkett-Pflege",
            "Laminat-Reinigung",
            "Vinyl-Behandlung",
        ],
    },
];

export default officeCleaningServices;
