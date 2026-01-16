import { IconType } from "react-icons";
import { BiJoystick } from "react-icons/bi";
import { FaCarAlt } from "react-icons/fa";
import { FaBuilding, FaHospital, FaScrewdriverWrench, FaUserDoctor, FaWindowMaximize } from "react-icons/fa6";
import { IoIosBrush } from "react-icons/io";
import { LuGrid2X2 } from "react-icons/lu";
import { MdRestaurant } from "react-icons/md";

export interface ServiceType {
    icon: IconType,
    name: string,
    des: string,
    features: string[]
}

const services: ServiceType[] = [
    {
        icon: FaBuilding,
        name: "Büroreinigung München",
        des: "Professionelle Büroreinigung in München – täglich, wöchentlich oder nach Bedarf. Saubere Arbeitsplätze für mehr Produktivität.",
        features: [
            "Arbeitsplatz-Reinigung",
            "Böden & Teppiche",
            "Sanitäranlagen",
            "Küchen & Pausenräume",
        ],
    },
    {
        icon: FaCarAlt,
        name: "Fahrzeugaufbereitung München",
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
        name: "Unterhaltsreinigung München",
        des: "Regelmäßige Unterhaltsreinigung München für Bürogebäude und Gewerbeobjekte. Kontinuierliche Sauberkeit für Ihr Unternehmen.",
        features: [
            "Tägliche Reinigung",
            "Wöchentliche Pflege",
            "Monatliche Grundreinigung",
            "Individuelle Intervalle",
        ],
    },
    {
        icon: FaWindowMaximize,
        name: "Fensterreinigung München",
        des: "Streifenfreie Fensterreinigung München für Glasfronten, Bürofenster und Fassaden. Perfekte Durchsicht garantiert.",
        features: [
            "Innen & Außenreinigung",
            "Glasfronten",
            "Rahmen & Fensterbänke",
            "Hochhausreinigung",
        ],
    },
    {
        icon: LuGrid2X2,
        name: "Teppichreinigung München",
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
        name: "Praxisreinigung München",
        des: "Professionelle Reinigung für Arzt- und Zahnarztpraxen in München. Hygienisch, diskret und zuverlässig – für einwandfreie Behandlungsräume.",
        features: [
            "Desinfektion aller Kontaktflächen",
            "Wartezimmer & Sanitärbereiche",
            "Behandlungsräume",
            "Hygienemanagement",
        ],
    },
    {
        icon: FaHospital,
        name: "Krankenhausreinigung München",
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
        name: "Gastronomie-Reinigung München",
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
        name: "Sonderreinigung München",
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
