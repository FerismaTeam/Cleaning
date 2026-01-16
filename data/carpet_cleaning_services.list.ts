import { LuGrid2X2, LuWaves } from "react-icons/lu";
import { ServiceType } from "./services.list";
import { FaSprayCan } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

const carpetCleaningServices: ServiceType[] = [
    {
        icon: LuWaves,
        name: "Nass- & Trockenshampoonierung",
        des: "Professionelle Teppichreinigung in München mit Nass- oder Trockenshampoo – für tiefenreine Sauberkeit ohne Beschädigung.",
        features: [
            "Nassreinigung",
            "Trockenshampoo",
            "Schonend & effektiv",
        ],
    },
    {
        icon: FaSprayCan,
        name: "Fleckentfernung & Geruchsneutralisation",
        des: "Hartnäckige Flecken und unangenehme Gerüche professionell entfernt – für frische, saubere Teppiche.",
        features: [
            "Fleckenentfernung",
            "Geruchsbeseitigung",
            "Spezialreiniger",
        ],
    },
    {
        icon: FaShieldAlt,
        name: "Imprägnierung & Faserschutz",
        des: "Schützende Imprägnierung für längere Haltbarkeit – verhindert schnelle Verschmutzung und erleichtert künftige Reinigung.",
        features: [
            "Imprägnierung",
            "Faserschutz",
            "Langzeitschutz",
        ],
    },
    {
        icon: LuGrid2X2,
        name: "Teppichboden & Teppichläufer",
        des: "Professionelle Büroteppichreinigung in München – von großflächigen Teppichböden bis zu einzelnen Teppichläufern.",
        features: [
            "Teppichböden",
            "Teppichläufer",
            "Einzelteppiche",
        ],
    },
];

export default carpetCleaningServices;
