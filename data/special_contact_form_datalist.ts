import { contactSelectionOptionType } from "./home";

const specialServiceList: contactSelectionOptionType[] = [
    { value: "", label: "Bitte auswählen..." },
    { value: "baureinigung", label: "Baureinigung / Bauendreinigung" },
    { value: "grundreinigung", label: "Grundreinigung Böden & Flächen" },
    { value: "graffitientfernung", label: "Graffitientfernung" },
    { value: "entruempelung", label: "Entrümpelung & Sonderflächenpflege" },
    { value: "brandschaden", label: "Reinigung nach Brandschaden" },
    { value: "wasserschaden", label: "Reinigung nach Wasserschaden" },
    { value: "nach-umzug", label: "Reinigung nach Umzug" },
    { value: "nach-sanierung", label: "Reinigung nach Sanierung" },
    { value: "industriereinigung", label: "Industrieanlagen-Reinigung" },
    { value: "sonstiges", label: "Sonstige Sonderreinigung" },
];

const additionalServicesList: string[] = [ 
    "Abfall-Entsorgung",
    "Desinfektion",
    "Geruchsneutralisation",
    "Unterhaltsreinigung Folgeauftrag"
]

export { specialServiceList, additionalServicesList }

