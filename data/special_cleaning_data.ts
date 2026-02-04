import { IconType } from "react-icons";
import { FaBoxes, FaShieldAlt } from "react-icons/fa";
import { FaBroom, FaCertificate, FaClock, FaHelmetSafety, FaIndustry, FaLeaf, FaPencil, FaRecycle, FaSprayCan, FaStar } from "react-icons/fa6";

interface SpecialServicePointsContent {
    type: "grid",
    content: {
        title: string,
        points: string[]
    }[]
}

interface SpecialServiceExamplesContent {
    type: "applications",
    content: {
        title: string,
        examples: string[]
    }
}

type SpecialServiceContent =
  | SpecialServicePointsContent
  | SpecialServiceExamplesContent;

interface SpecialServiceType {

    icon: IconType,
    name: string,
    selling_point: {
        icon: IconType,
        point: string
    },
    des: string,
    content: SpecialServiceContent[]
    end_note: {
        icon: IconType,
        title: string,
        des: string
    }

}

const specialCleaningServicesInDetail: SpecialServiceType[] = [
    {
        icon: FaHelmetSafety,
        name: "Baureinigung Nürnberg, Fürth & Umgebung",
        selling_point: {
            icon: FaStar,
            point: "Spezialisiert auf Baustellenreinigung"
        },
        des: "Professionelle **Bauendreinigung** und **Baureinigung Nürnberg, Fürth & Umgebung** für Neubauten, Sanierungen und Renovierungsprojekte. Nach Abschluss von Bauarbeiten sorgen wir für eine gründliche Endreinigung aller Baustellen, Gewerbeimmobilien und Wohngebäude.",
        content: [
            {
                type: "grid",
                content: [
                    {
                        title: "Innenbereich:",
                        points: [
                            "Baustaub-Entfernung",
                            "Fenster- & Rahmenreinigung",
                            "Sanitäranlagen-Ersteinigung",
                            "Bodenbeläge-Grundreinigung"
                        ]
                    },
                    {
                        title: "Außenbereich:",
                        points: [
                            "Fassadenreinigung",
                            "Bauschutt-Beseitigung",
                            "Gehweg-Reinigung",
                            "Abschlussreinigung"
                        ]
                    }
                ]
            }
        ],
        end_note: {
            icon: FaClock,
            title: "Projektbeispiele:",
            des: "Bürogebäude, Wohnkomplexe, Gewerbeimmobilien, Industrieanlagen, Praxen nach Umbau, Hotels nach Renovierung"
        }
    },
    {
        icon: FaBroom,
        name: "Grundreinigung Nürnberg, Fürth & Umgebung",
        selling_point: {
            icon: FaCertificate,
            point: "Industrieanlagen & Gewerbeflächen"
        },
        des: "Intensive **Grundreinigung Nürnberg, Fürth & Umgebung** für stark verschmutzte Böden, Flächen und Industrieanlagen. Diese tiefgreifende Reinigung entfernt hartnäckige Verschmutzungen, die bei der regulären Unterhaltsreinigung nicht erfasst werden.",
        content: [
            {
                type: "grid",
                content: [
                    {
                        title: "Spezialverfahren:",
                        points: [
                            "Hochdruckreinigung",
                            "Dampfreinigung",
                            "Maschinelle Bodenreinigung",
                            "Spezial-Chemikalien"
                        ]
                    }
                ]
            },
            {
                type: "applications",
                content: {
                    title: "Anwendungsbereiche:",
                    examples: [
                        "Produktionshallen",
                        "Lagerhallen",
                        "Tiefgaragen",
                        "Werkstätten"
                    ]
                }
            }
        ],
        end_note: {
            icon: FaIndustry,
            title: "Besonders geeignet für:",
            des: "Stark frequentierte Bereiche, öl- und fettverscmutzte Böden, alte Versiegelungen, Flecken und Verfärbungen"
        }
    },
    {
        icon: FaSprayCan,
        name: "Graffitientfernung",
        selling_point: {
            icon: FaPencil,
            point: "Schonende & effektive Verfahren"
        },
        des: "Professionelle **Graffitientfernung** für Fassaden, Wände, Türen und andere Oberflächen in Nürnberg, Fürth & Umgebung. Wir verwenden materialschonende Verfahren, die das Graffiti vollständig entfernen, ohne die Originaloberfläche zu beschädigen.",
        content: [
            {
                type: "grid",
                content: [
                    {
                        title: "Oberflächen:",
                        points: [
                            "Beton & Mauerwerk",
                            "Metall & Aluminium",
                            "Glas & Kunststoff",
                            "Naturstein & Ziegel"
                        ]
                    },
                    {
                        title: "Verfahren:",
                        points: [
                            "Heißwasser-Hochdruck",
                            "Trockeneisstrahlen",
                            "Chemische Entfernung",
                            "Nachbehandlung & Schutz"
                        ]
                    }
                ]
            }
        ],
        end_note: {
            icon: FaShieldAlt,
            title: "Anti-Graffiti-Schutz:",
            des: "Optional: Auftrag von Anti-Graffiti-Beschichtungen zum Schutz vor künftigen Vandalismus-Schäden"
        }
    },
    {
        icon: FaBoxes,
        name: "Entrümpelung & Sonderflächenpflege",
        selling_point: {
            icon: FaRecycle,
            point: "Komplettlösungen für jeden Bedarf"
        },
        des: "Umfassende **Entrümpelung** und **Sonderflächenpflege** für Gewerbeimmobilien, Büros und Sonderflächen. Von der vollständigen Räumung bis zur spezialisierten Reinigung schwer zugänglicher oder problematischer Bereiche.",
        content: [
            {
                type: "grid",
                content: [
                    {
                        title: "Entrümpelung:",
                        points: [                 
                            "Büroauflösungen",
                            "Lager-Räumungen",
                            "Keller & Dachböden",
                            "Fachgerechte Entsorgung"
                        ]
                    }
                ]
            },
            {
                type: "applications",
                content: {
                    title: "Sonderflächenpflege:",
                    examples: [
                        "Schwer zugängliche Bereiche",
                        "Höhenarbeiten",
                        "Spezialoberflächen"
                    ]
                }
            }
        ],
        end_note: {
            icon: FaLeaf,
            title: "Nachhaltigkeit:",
            des: "Umweltgerechte Entsorgung, Recycling von wiederverwertbaren Materialien, Dokumentation für Behörden"
        }
    }
]

export default specialCleaningServicesInDetail;