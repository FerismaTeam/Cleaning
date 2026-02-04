import { IconType } from "react-icons";
import { BiJoystick } from "react-icons/bi";
import { FaCarAlt } from "react-icons/fa";
import { FaBuilding, FaHospital, FaScrewdriverWrench, FaUserDoctor, FaWindowMaximize } from "react-icons/fa6";
import { IoIosBrush } from "react-icons/io";
import { LuGrid2X2 } from "react-icons/lu";
import { MdRestaurant } from "react-icons/md";

export interface ServiceType {
    icon: IconType,
    link?: string,
    name: string,
    des: string,
    features: string[]
}

const services: ServiceType[] = [
    {
        icon: FaBuilding,
        name: "Büroreinigung Nürnberg, Fürth & Umgebung",
        link: "buroreinigung-nuernberg",
        des: "Professionelle Büroreinigung in Nürnberg, Fürth & Umgebung – täglich, wöchentlich oder nach Bedarf. Saubere Arbeitsplätze für mehr Produktivität.",
        features: [
            "Arbeitsplatz-Reinigung",
            "Böden & Teppiche",
            "Sanitäranlagen",
            "Küchen & Pausenräume",
        ],
    },
    {
        icon: FaCarAlt,
        name: "Fahrzeugaufbereitung Nürnberg, Fürth & Umgebung",
        link: "fahrzeugaufbereitung-nuernberg",
        des: "Professionelle Fahrzeugaufbereitung für PKW und Firmenfahrzeuge. Von der Außenreinigung bis zur kompletten Innenraumpflege.",
        features: [
            "Außenreinigung & Politur",
            "Innenraumreinigung",
            "Lackaufbereitung",
            "Geruchsentfernung & Pflegepakete",
        ],
    },
    {
        icon: IoIosBrush,
        name: "Unterhaltsreinigung Nürnberg, Fürth & Umgebung",
        link: "unterhaltsreinigung-nuernberg",
        des: "Regelmäßige Unterhaltsreinigung Nürnberg, Fürth & Umgebung für Bürogebäude und Gewerbeobjekte. Kontinuierliche Sauberkeit für Ihr Unternehmen.",
        features: [
            "Tägliche Reinigung",
            "Wöchentliche Pflege",
            "Monatliche Grundreinigung",
            "Individuelle Intervalle",
        ],
    },
    {
        icon: FaWindowMaximize,
        name: "Fensterreinigung Nürnberg, Fürth & Umgebung",
        link: "fensterreinigung-nuernberg",
        des: "Streifenfreie Fensterreinigung Nürnberg, Fürth & Umgebung für Glasfronten, Bürofenster und Fassaden. Perfekte Durchsicht garantiert.",
        features: [
            "Innen & Außenreinigung",
            "Glasfronten",
            "Rahmen & Fensterbänke",
            "Hochhausreinigung",
        ],
    },
    {
        icon: LuGrid2X2,
        name: "Teppichreinigung Nürnberg, Fürth & Umgebung",
        link: "Teppichreinigung-nuernberg",
        des: "Professionelle Teppichreinigung mit modernen Verfahren. Tiefenreine Sauberkeit und langanhaltende Frische für Ihre Räumlichkeiten.",
        features: [
            "Nassreinigung",
            "Fleckentfernung",
            "Geruchsneutralisation",
            "Imprägnierung",
        ],
    },
    {
        icon: FaUserDoctor,
        name: "Praxisreinigung Nürnberg, Fürth & Umgebung",
        link: "Praxisreinigung-nuernberg",
        des: "Professionelle Reinigung für Arzt- und Zahnarztpraxen in Nürnberg, Fürth & Umgebung. Hygienisch, diskret und zuverlässig – für einwandfreie Behandlungsräume.",
        features: [
            "Desinfektion aller Kontaktflächen",
            "Wartezimmer & Sanitärbereiche",
            "Behandlungsräume",
            "Hygienemanagement",
        ],
    },
    {
        icon: FaHospital,
        name: "Krankenhausreinigung Nürnberg, Fürth & Umgebung",
        link: "Krankenhausreinigung-nuernberg",
        des: "Spezielle Krankenhaus- und Praxisreinigung mit Desinfektion. Höchste Hygienestandards für medizinische Einrichtungen.",
        features: [
            "Desinfektion",
            "OP-Bereiche",
            "Patientenzimmer",
            "Sondermüll",
        ],
    },
    {
        icon: MdRestaurant,
        name: "Gastronomie-Reinigung Nürnberg, Fürth & Umgebung",
        link: "Gastronomie-Reinigung-nuernberg",
        des: "Hygienische Gastronomie-Reinigung nach HACCP-Standards. Küchen, Restaurants und Kantinen professionell gereinigt.",
        features: [
            "Küchenhygiene",
            "HACCP-konform",
            "Gastraum-Reinigung",
            "Fettabscheider",
        ],
    },
    {
        icon: FaScrewdriverWrench,
        name: "Sonderreinigung Nürnberg, Fürth & Umgebung",
        link: "Sonderreinigung-nuernberg",
        des: "Gründliche Spezial- und Grundreinigungen für jede Situation. Ideal nach Bauarbeiten, Sanierungen oder Umzügen.",
        features: [
            "Bauendreinigung",
            "Grundreinigung Böden & Flächen",
            "Graffitientfernung",
            "Sonderflächenpflege",
        ],
    },
];


export default services;
