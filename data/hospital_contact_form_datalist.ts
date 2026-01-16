import { contactSelectionOptionType } from "./home";

const establishmentsList: contactSelectionOptionType[] = [
    { value: "", label: "Bitte auswählen..." },
    { value: "krankenhaus", label: "Krankenhaus / Klinik" },
    { value: "arztpraxis", label: "Arztpraxis" },
    { value: "zahnarztpraxis", label: "Zahnarztpraxis" },
    { value: "pflegeheim", label: "Pflegeheim / Seniorenheim" },
    { value: "ambulant", label: "Ambulante Pflege" },
    { value: "labor", label: "Medizinisches Labor" },
    { value: "sonstiges", label: "Sonstige medizinische Einrichtung" },
];

const locationsList: contactSelectionOptionType[] = [
    { value: "", label: "Stadtteil auswählen..." },
    { value: "innenstadt", label: "Innenstadt (Altstadt, Maxvorstadt)" },
    { value: "schwabing", label: "Schwabing / Schwabing-Freimann" },
    { value: "sendling", label: "Sendling / Sendling-Westpark" },
    { value: "giesing", label: "Giesing / Harlaching" },
    { value: "bogenhausen", label: "Bogenhausen / Berg am Laim" },
    { value: "moosach", label: "Moosach / Milbertshofen" },
    { value: "umland", label: "München Umland" },
];

const hospitalCleaninServicesList: string[] = [ 
    "OP-Reinigung München",
    "Patientenzimmer-Reinigung",
    "Flächendesinfektion",
    "Sondermüll-Entsorgung",
    "24/7 Notfallreinigung",
    "Hygiene-Monitoring"
]

export { establishmentsList, locationsList, hospitalCleaninServicesList }

