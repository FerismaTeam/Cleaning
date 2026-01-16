import { FaBusAlt, FaCalendarAlt, FaCarSide, FaCertificate, FaCouch, FaSprayCan, FaUserGraduate, FaWind } from "react-icons/fa";
import { ServiceType } from "./services.list";
import { IconType } from "react-icons";
import { FaDiamond, FaPuzzlePiece } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";

interface whyData { icon: IconType, title: string, text: string }
interface stepsData { title: string, text: string }

const carCleaningServices: ServiceType[] = [
    {
        icon: FaSprayCan,
        name: "Außenreinigung & Politur",
        des: "Lackschonende Handwäsche, professionelle Politur und langanhaltende Versiegelung für perfekten Glanz und optimalen Schutz Ihres Fahrzeugs in München.",
        features: [
            "Handwäsche & Trocknung",
            "Hochglanzpolitur",
            "Lackversiegelung",
            "Felgenreinigung",
        ],
    },
    {
        icon: FaCouch,
        name: "Innenraumreinigung München",
        des: "Tiefenreinigung von Polstern, Teppichen und Armaturen. Professionelle Autoaufbereitung München für ein sauberes und hygienisches Fahrzeuginterieur.",
        features: [
            "Polsterreinigung & Saugen",
            "Teppich-Tiefenreinigung",
            "Armaturenpflege",
            "Scheibenreinigung innen",
        ],
    },
    {
        icon: FaCarSide,
        name: "Lackaufbereitung München",
        des: "Entfernung von Kratzern, Hologrammen und Oxidationen. Professionelle Lackaufbereitung in München für ein makelloses Erscheinungsbild.",
        features: [
            "Kratzerentfernung",
            "Hologramm-Beseitigung",
            "Oxidations-Behandlung",
            "Nano-Versiegelung",
        ],
    },
    {
        icon: FaWind,
        name: "Geruchsbeseitigung & Pflege",
        des: "Professionelle Geruchsentfernung und Oberflächenpflege für ein frisches, angenehmes Fahrzeugklima. Ideal nach Raucherfahrzeugen oder Tiertransport.",
        features: [
            "Ozon-Behandlung",
            "Klimaanlagen-Desinfektion",
            "Geruchsneutralisation",
            "Innenraumpflege",
        ],
    },
    {
        icon: FaBusAlt,
        name: "Fuhrparkservice München",
        des: "Aufbereitung und Pflege kompletter Fahrzeugflotten für Unternehmen in München. Regelmäßige Wartung und professionelle Pflege Ihrer Dienstwagen.",
        features: [
            "Flottenaufbereitung",
            "Regelmäßige Pflege",
            "Firmenrabatte",
            "Flexible Termine",
        ],
    },
    {
        icon: FaCertificate,
        name: "Komplettaufbereitung",
        des: "Rundum-Service für Ihr Fahrzeug: Innen- und Außenreinigung, Lackpflege und Geruchsbeseitigung – alles aus einer Hand für maximalen Werterhalt.",
        features: [
            "Innen & Außen komplett",
            "Lackpflege inklusive",
            "Alle Services kombiniert",
            "Bestes Preis-Leistungs-Verhältnis",
        ],
    },
];

const whyCarCleaning: whyData[] = [
    {
        icon: IoDiamond,
        title: "Hochwertige Produkte",
        text: "Fachgerechte Pflege mit hochwertigen Produkten für langanhaltenden Schutz und Glanz Ihres Fahrzeugs."
    },
    {
        icon: FaUserGraduate,
        title: "Geschultes Personal",
        text: "Geschultes und zertifiziertes Personal mit jahrelanger Erfahrung in der professionellen Fahrzeugpflege."
    },
    {
        icon: FaCalendarAlt,
        title: "Flexible Termine",
        text: "Flexible Terminvergabe für Privat & Gewerbe – passend zu Ihrem Zeitplan in München."
    },
    {
        icon: FaPuzzlePiece,
        title: "Kombinierbar",
        text: "Auf Wunsch kombinierbar mit anderen Reinigungsleistungen wie Büro- oder Hallenreinigung."
    },
]

const stepsList: stepsData[] = [
    {
        title: "Termin anfragen",
        text: "Kontaktieren Sie uns telefonisch oder über unser Kontaktformular für Ihre Autoaufbereitung München"
    },
    {
        title: "Beratung & Angebot",
        text: "Wir besprechen Ihre Wünsche und erstellen ein individuelles Angebot für Ihre Fahrzeugaufbereitung"
    },
    {
        title: "Terminvereinbarung",
        text: "Wir vereinbaren einen passenden Termin für die Durchführung der Aufbereitung"
    },
    {
        title: "Professionelle Aufbereitung",
        text: "Unsere Spezialisten führen die Fahrzeugaufbereitung München fachgerecht durch"
    },
]

export default carCleaningServices;

export { whyCarCleaning, stepsList }
