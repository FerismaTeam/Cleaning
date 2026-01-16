import { FaChampagneGlasses, FaFireBurner } from "react-icons/fa6";
import { ServiceType } from "./services.list";
import { FaToilet, FaWind } from "react-icons/fa";

const restaurantCleaningServices: ServiceType[] = [
    {
        icon: FaFireBurner,
        name: "Küchen- & Gerätereinigung",
        des: "Professionelle Küchenreinigung in München inklusive aller Geräte, Arbeitsflächen und Küchenmaschinen nach HACCP.",
        features: [
            "Herde & Öfen",
            "Arbeitsflächen",
            "Küchenmaschinen",
            "Kühlräume",
        ],
    },
    {
        icon: FaWind,
        name: "Fettabscheider & Dunstabzug",
        des: "Gründliche Reinigung von Dunstabzugshauben und Fettabscheidern – für Brandschutz und optimale Funktion.",
        features: [
            "Dunstabzugshauben",
            "Fettabscheider",
            "Lüftungskanäle",
            "Filter",
        ],
    },
    {
        icon: FaChampagneGlasses,
        name: "Gastraum & Thekenbereich",
        des: "Professionelle Restaurantreinigung in München für Gasträume, Theken, Bars und Empfangsbereiche – für einen perfekten ersten Eindruck.",
        features: [
            "Tische & Stühle",
            "Theken & Bars",
            "Böden",
            "Fenster",
        ],
    },
    {
        icon: FaToilet,
        name: "Sanitär & Mitarbeiterbereiche",
        des: "Hygienische Reinigung aller Sanitär- und Sozialräume – für Mitarbeiter und Gäste gleichermaßen wichtig.",
        features: [
            "Gäste-WCs",
            "Personalräume",
            "Umkleidekabinen",
            "Pausenräume",
        ],
    },
];

export default restaurantCleaningServices;
