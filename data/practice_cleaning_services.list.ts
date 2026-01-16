import { FaBroom, FaCalendarDay } from "react-icons/fa6";
import { ServiceType } from "./services.list";
import { FaClipboardCheck, FaFlask, FaShieldVirus, FaSink } from "react-icons/fa";

const practiceCleaningServices: ServiceType[] = [
     {
        icon: FaCalendarDay,
        name: "Tägliche Praxisreinigung",
        des: "Regelmäßige professionelle Reinigung aller Praxisbereiche nach individuellen Einsatzplänen - täglich, wöchentlich oder nach Bedarf.",
        features: [
            "Behandlungsräume & Empfangsbereiche",
            "Wartezimmer & Patientenbereiche",
        ],
    },
     {
        icon: FaShieldVirus,
        name: "Professionelle Desinfektion",
        des: "RKI-konforme Desinfektion aller kritischen Kontaktflächen, Behandlungsgeräte und Patientenkontaktbereiche.",
        features: [
            "Behandlungsstühle & Medizingeräte",
            "Türklinken, Arbeitsflächen, Schalter",
        ],
    },
    {
        icon: FaSink,
        name: "Sanitär & Hygienebereiche",
        des: "Spezialreinigung aller Sanitäranlagen, Waschbecken und Hygienebereiche mit antimikrobiellen Reinigungsmitteln.",
        features: [
            "Patientenwaschbecken & WC-Anlagen",
            "Desinfektionsspender & Armaturen",
        ],
    },
    {
        icon: FaBroom,
        name: "Bodenreinigung & -pflege",
        des: "Professionelle Pflege aller Bodenbeläge – von Fliesen über Linoleum bis zu Teppichböden mit geeigneten Desinfektionsmitteln.",
        features: [
            "Feuchtwischung mit Desinfektionsmitteln",
            "Teppichreinigung & Grundreinigung",
        ],
    },
    {
        icon: FaFlask,
        name: "Geprüfte Desinfektionsmittel",
        des: "Ausschließlich HACCP-konforme und vom RKI gelistete Reinigungs- und Desinfektionsmittel für medizinische Bereiche.",
        features: [
            "VAH-gelistete Desinfektionsmittel",
            "Umweltschonende Reinigungschemie",
        ],
    },
    {
        icon: FaClipboardCheck,
        name: "Dokumentierte Hygieneprozesse",
        des: "Vollständige Dokumentation aller Reinigungs- und Desinfektionsmaßnahmen für Ihre Qualitätssicherung und Nachweispflicht.",
        features: [
            "Digital dokumentierte Reinigungsprotokolle",
            "Regelmäßige Qualitätskontrollen",
        ],
    },
];

export default practiceCleaningServices;
