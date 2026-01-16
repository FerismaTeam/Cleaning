import { contactSelectionOptionType } from "./home";

const practiceTypeList: contactSelectionOptionType[] = [
    { value: "", label: "Bitte wählen" },
    { value: "hausarzt", label: "Hausarztpraxis" },
    { value: "zahnarzt", label: "Zahnarztpraxis" },
    { value: "facharzt", label: "Facharztpraxis" },
    { value: "psychotherapie", label: "Psychotherapie" },
    { value: "mvz", label: "MVZ" },
    { value: "heilpraktiker", label: "Heilpraktiker" },
    { value: "sonstige", label: "Sonstige" },
];

const praticeCleaninServicesList: string[] = [ 
    "Tägliche Praxisreinigung",
    "Wöchentliche Grundreinigung",
    "Professionelle Desinfektion",
    "Sanitäranlagen-Reinigung"
]

export { practiceTypeList, praticeCleaninServicesList }

