import { telephone } from "./contact";
import { Faq } from "./hospital_cleaning_faqs.list";

const specialCleaningFAQs: Faq[] = [
    {
        question: "Was unterscheidet die Baureinigung Nürnberg, Fürth & Umgebung von der normalen Gebäudereinigung?",
        answer: [
            {
                type: "text",
                content: "Die **Baureinigung Nürnberg, Fürth & Umgebung** ist wesentlich intensiver und erfordert spezielle Verfahren:"
            },
            {
                type: "point",
                content: "**Baustaub-Entfernung**: Komplette Beseitigung von Zement-, Gips- und Holzstaub"
            },
            {
                type: "point",
                content: "**Spezialreiniger**: Chemikalien zur Entfernung von Klebstoff-, Farb- und Mörtelresten"
            },
            {
                type: "point",
                content: "**Schutzausrüstung**: Atemschutz und Schutzkleidung für unsere Mitarbeiter"
            },
            {
                type: "point",
                content: "**Abfallentsorgung**: Fachgerechte Entsorgung von Baumaterialresten"
            },
            {
                type: "point",
                content: "**Mehrfach-Durchgänge**: Grob-, Zwischen- und Feinreinigung"
            },
            {
                type: "text",
                content: "Das Ergebnis: Ein einzugsfertiges, perfekt gereinigtes Objekt nach Bauabschluss."
            }
        ]
    },
    {
        question: "Wie schnell können Sie bei einem Notfall (Brand/Wasserschaden) vor Ort sein?",
        answer: [
            {
                type: "text",
                content: "Unser **24h-Notfall-Service** garantiert schnelle Hilfe bei dringenden Einsätzen:"
            },
            {
                type: "point",
                content: `**Sofort-Hilfe**: 24/7 erreichbare Notfall-Hotline unter ${telephone}`
            },
            {
                type: "point",
                content: "**Anfahrtszeit**: Binnen 30-90 Minuten vor Ort (je nach Standort in Nürnberg, Fürth & Umgebung)"
            },
            {
                type: "point",
                content: "**Erste Maßnahmen**: Sofortige Schadensbegrenzung und Notfall-Reinigung"
            },
            {
                type: "point",
                content: "**Dokumentation**: Foto-Dokumentation für Versicherung bereits vor Ort"
            },
            {
                type: "point",
                content: "**Equipment**: Vollausgestattete Notfall-Fahrzeuge mit Spezialgeräten"
            },
            {
                type: "text",
                content: "Je schneller wir eingreifen, desto geringer fallen meist die Folgeschäden aus. Deshalb ist Schnelligkeit bei Notfällen unsere oberste Priorität."
            }
        ]
    },
    {
        question: "Welche Verfahren nutzen Sie für die Graffitientfernung an verschiedenen Oberflächen?",
        answer: [
            {
                type: "text",
                content: "Wir wählen das Verfahren je nach Oberfläche und Graffiti-Art:"
            },
            {
                type: "grid",
                content: [
                    {
                        title: "Heißwasser-Hochdruck:",
                        points: [
                            "Beton und Mauerwerk",
                            "Robuste Steinoberflächen",
                            "Wenig sensitive Bereiche"
                        ]
                    },
                    {
                        title: "Trockeneisstrahlen:",
                        points: [
                            "Historische Fassaden",
                            "Empfindliche Natursteine",
                            "Denkmalgeschützte Gebäude"
                        ]
                    },
                    {
                        title: "Chemische Entfernung:",
                        points: [
                            "Metall und Aluminium",
                            "Lackierte Oberflächen",
                            "Kunststoff-Elemente"
                        ]
                    },
                    {
                        title: "Laser-Verfahren:",
                        points: [
                            "Sehr empfindliche Oberflächen",
                            "Präzise Teilentfernung",
                            "Hochwertige Materialien"
                        ]
                    }
                ]
            },
            {
                type: "text",
                content: "Vor jedem Einsatz testen wir das Verfahren an einer unauffälligen Stelle, um Schäden an der Originaloberfläche zu vermeiden."
            }
        ]
    },
    {
        question: "Was ist bei der Grundreinigung Nürnberg, Fürth & Umgebung in Industrieanlagen besonders zu beachten?",
        answer: [
            {
                type: "text",
                content: "Die **Grundreinigung Nürnberg, Fürth & Umgebung** in Industrieanlagen erfordert besondere Expertise:"
            },
            {
                type: "point",
                content: "**Sicherheitskonzept**: Detaillierte Gefährdungsbeurteilung vor Reinigungsbeginn"
            },
            {
                type: "point",
                content: "**Spezialchemikalien**: Industriegerechte Reiniger für Öl, Fett und Produktionsrückstände"
            },
            {
                type: "point",
                content: "**Maschineneinsatz**: Scheuersaugmaschinen, Hochdruckgeräte für große Flächen"
            },
            {
                type: "point",
                content: "**Arbeitsschutz**: Vollschutzausrüstung bei gefährlichen Substanzen"
            },
            {
                type: "point",
                content: "**Entsorgungskonzept**: Fachgerechte Trennung und Entsorgung kontaminierter Materialien"
            },
            {
                type: "point",
                content: "**Zeitfenster**: Reinigung während Produktionsstillständen oder Wartungsfenstern"
            },
            {
                type: "text",
                content: "Unser Team ist speziell für Industriereinigung geschult und verfügt über alle erforderlichen Zertifizierungen für den Umgang mit Gefahrstoffen."
            }
        ]
    },
    {
        question: "Wie läuft eine Entrümpelung mit anschließender Reinigung ab?",
        answer: [
            {
                type: "text",
                content: "Unsere **Entrümpelung** erfolgt in strukturierten Phasen:"
            },
            {
                type: "block",
                title: "Phase 1: Bestandsaufnahme",
                content: "Objektbesichtigung, Mengenermittlung, Entsorgungskonzept"
            },
            {
                type: "block",
                title: "Phase 2: Sortierung",
                content: "Trennung nach Wertstoffen, Sondermüll, Restmüll, Sperrmüll"
            },
            {
                type: "block",
                title: "Phase 3: Abtransport",
                content: "Fachgerechte Entsorgung, Verwertung, Dokumentation"
            },
            {
                type: "block",
                title: "Phase 4: Reinigung",
                content: "Grundreinigung, Desinfektion, einzugsfertige Übergabe"
            },
            {
                type: "text",
                content: "Alle Arbeiten werden vollständig dokumentiert. Sie erhalten Entsorgungsnachweise für alle entfernten Materialien."
            }
        ]
    },
    {
        question: "Gilt die Geld-zurück-Garantie auch für aufwendige Sonderreinigungen?",
        answer: [
            {
                type: "text",
                content: "Ja, unsere **Geld-zurück-Garantie** gilt für alle unsere Dienstleistungen:"
            },
            {
                type: "point",
                content: "**Vollumfänglicher Schutz**: Gilt für alle Sonderreinigungen ohne Ausnahme"
            },
            {
                type: "point",
                content: "**Vollumfänglicher Schutz**: Gilt für alle Sonderreinigungen ohne Ausnahme"
            },
            {
                type: "point",
                content: "**Unkomplizierte Abwicklung**: Keine bürokratischen Hürden oder Kleingedrucktes"
            },
            {
                type: "point",
                content: "**Nachbesserungsrecht**: Zunächst bieten wir kostenlose Nachbesserung an"
            },
            {
                type: "point",
                content: "**Transparenz**: Alle Garantiebedingungen werden vor Auftragsbeginn erklärt"
            },
            {
                type: "text",
                content: "Diese Garantie unterstreicht unser Vertrauen in die Qualität unserer Arbeit. In über 15 Jahren mussten wir diese Garantie nur in Einzelfällen einlösen."
            }
        ]
    },
    {
        question: "Welche Stadtteile in Nürnberg, Fürth & Umgebung decken Sie für Sonderreinigungen ab?",
        answer: [
            {
                type: "text",
                content: "Unsere **Sonderreinigung Nürnberg, Fürth & Umgebung** Services decken das komplette Stadtgebiet ab:"
            },
            {
                type: "grid",
                content: [
                    {
                        title: "Nürnberg, Fürth & Umgebung Zentrum:",
                        points: [
                            "Altstadt-Lehel",
                            "Ludwigsvorstadt-Isarvorstadt",
                            "Maxvorstadt",
                            "Au-Haidhausen"
                        ]
                    },
                    {
                        title: "Nürnberg, Fürth & Umgebung Nord/West::",
                        points: [
                            "Schwabing-West & Schwabing-Freimann",
                            "Milbertshofen-Am Hart",
                            "Moosach",
                            "Neuhausen-Nymphenburg"
                        ]
                    },
                    {
                        title: "Nürnberg, Fürth & Umgebung Süd/Ost:",
                        points: [
                            "Sendling-Westpark & Sendling",
                            "Untergiesing-Harlaching",
                            "Obergiesing-Fasangarten",
                            "Berg am Laim, Trudering-Riem"
                        ]
                    },
                ]
            },
            {
                type: "block",
                title: "Nürnberg, Fürth & Umgebung Umland:",
                content: "Garching, Unterschleißheim, Planegg, Gräfelfing, Haar, Vaterstetten, Freising, Erding, Dachau und weitere Gemeinden im Münchner Umland."
            }
        ]
    },
]

export default specialCleaningFAQs;