import { FaProcedures, FaStethoscope } from "react-icons/fa";
import { ServiceType } from "./services.list";
import { FaBed, FaBiohazard, FaClipboardCheck, FaShieldVirus } from "react-icons/fa6";

const hospitalCleaningServices: ServiceType[] = [
     {
        icon: FaProcedures,
        name: "OP-Reinigung München",
        des: "Sterile Reinigung von Operationssälen nach strengsten RKI-Richtlinien mit speziellen Desinfektionsmitteln und geschultem Fachpersonal.",
        features: [
            "RKI-konforme Desinfektion",
            "Sterile Arbeitsweise",
            "Spezial-Desinfektionsmittel",
            "Dokumentierte Protokolle",
        ],
    },
    {
        icon: FaBed,
        name: "Patientenzimmer-Reinigung",
        des: "Hygienische Reinigung von Patientenzimmern mit Fokus auf Infektionsprävention und Patientenkomfort.",
        features: [
            "Tägliche Zwischenreinigung",
            "Enddesinfektion bei Entlassung",
            "Kontaktflächendesinfektion",
            "Hygienische Bettwäsche",
        ],
    },
    {
        icon: FaStethoscope,
        name: "Praxisreinigung München",
        des: "Professionelle Reinigung für Arzt- und Zahnarztpraxen mit höchsten Hygieneansprüchen.",
        features: [
            "Behandlungsräume",
            "Wartezimmer",
            "Sanitärbereiche",
            "Instrumentenaufbereitung",
        ],
    },
    {
        icon: FaShieldVirus,
        name: "Flächendesinfektion",
        des: "Professionelle Desinfektion aller Oberflächen nach DIN EN 1500 mit geprüften Wirkstoffen.",
        features: [
            "Viruzide Wirkung",
            "Bakterizide Desinfektion",
            "Sporozide Reinigung",
            "Umweltschonend",
        ],
    },
    {
        icon: FaBiohazard,
        name: "Sondermüll-Entsorgung",
        des: "Fachgerechte Entsorgung von medizinischem Sondermüll nach gesetzlichen Bestimmungen.",
        features: [
            "Gesetzeskonforme Entsorgung",
            "Dokumentation",
            "Sichere Behälter",
            "Regelmäßige Abholung",
        ],
    },
    {
        icon: FaClipboardCheck,
        name: "Hygiene-Monitoring",
        des: "Kontinuierliche Überwachung und Dokumentation der Hygienestandards mit regelmäßigen Kontrollen.",
        features: [
            "Regelmäßige Kontrollen",
            "Protokoll-Führung",
            "Qualitätssicherung",
            "Behördenkonforme Dokumentation",
        ],
    },
];

export default hospitalCleaningServices;
