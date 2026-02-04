interface FaqGridContent { title: string, points: string[] }

interface FaqTextAnswer {
  type: "text" | "point";
  content: string;
}

interface FaqGridAnswer {
  type: "grid";
  content: FaqGridContent[];
}

interface FaqTextBlock {
    type: "block",
    title: string
    content: string,
}

type FaqAnswer = FaqTextAnswer | FaqGridAnswer | FaqTextBlock;

export interface Faq { question: string, answer: FaqAnswer[] }

const hospitalCleaningFAQs: Faq[] = [
    {
        question: "Welche Hygienestandards befolgen Sie bei der Krankenhausreinigung  Nürnberg, Fürth & Umgebung?",
        answer: [
            {
                type: "text",
                content: "Wir befolgen die strengsten Hygienestandards gemäß:"
            },
            {
                type: "point",
                content: "**RKI-Richtlinien** (Robert Koch-Institut) für Krankenhaushygiene"
            },
            {
                type: "point",
                content: "**HACCP-Standards** für Lebensmittelhygiene in Krankenhausküchen"
            },
            {
                type: "point",
                content: "**DIN EN 1500** für hygienische Händedesinfektion"
            },
            {
                type: "point",
                content: "**ISO 9001** Qualitätsmanagement-Standards"
            },
            {
                type: "point",
                content: "**DGUV-Vorschriften** für Arbeitssicherheit"
            },
            {
                type: "text",
                content: "Alle unsere Mitarbeiter sind in diesen Standards geschult und führen regelmäßige Weiterbildungen durch."
            },
        ]
    },
    {
        question: "Wie unterscheidet sich die OP-Reinigung  Nürnberg, Fürth & Umgebung von der normalen Gebäudereinigung?",
        answer: [
            {
                type: "text",
                content: "Die **OP-Reinigung  Nürnberg, Fürth & Umgebung** erfordert spezielle Verfahren und ist wesentlich anspruchsvoller:"
            },
            {
                type: "point",
                content: "**Sterile Arbeitsweise**: Komplett sterile Umgebung für Operationssäle"
            },
            {
                type: "point",
                content: "**Spezial-Desinfektionsmittel**: Viruzide, bakterizide und sporozide Mittel"
            },
            {
                type: "point",
                content: "**Geschultes Personal**: Speziell für OP-Bereiche ausgebildete Reinigungskräfte"
            },
            {
                type: "point",
                content: "**Strikte Protokolle**: Dokumentierte Reinigungsabläufe nach RKI-Standards"
            },
            {
                type: "point",
                content: "**Zeitfenster**: Reinigung zwischen OP-Terminen oder nachts"
            },
            {
                type: "point",
                content: "**Qualitätskontrolle**: Regelmäßige mikrobiologische Kontrollen"
            },
            {
                type: "text",
                content: "Jeder OP-Saal wird nach einem individuellen, mit der Klinikleitung abgestimmten Reinigungsplan gereinigt."
            },
        ]
    },
    {
        question: "Sind Sie auch außerhalb der regulären Zeiten für Notfallreinigungen verfügbar?",
        answer: [
            {
                type: "text",
                content: "Ja, wir bieten **24/7 Notfallreinigung** für medizinische Einrichtungen in  Nürnberg, Fürth & Umgebung:"
            },
            {
                type: "point",
                content: "**Kontaminations-Notfälle**: Sofortige Desinfektion bei Infektionsausbrüchen"
            },
            {
                type: "point",
                content: "**OP-Notfälle**: Schnelle Reinigung zwischen Notoperationen"
            },
            {
                type: "point",
                content: "**Unfälle**: Reinigung nach Körperflüssigkeits-Kontaminationen"
            },
            {
                type: "point",
                content: "**Unfälle**: Reinigung nach Körperflüssigkeits-Kontaminationen"
            },
            {
                type: "point",
                content: "**Hotline**: 24/7 erreichbare Notfall-Hotline"
            },
            {
                type: "text",
                content: "Unsere Notfallteams sind speziell geschult und führen komplette Desinfektionsausrüstung mit sich."
            },
        ]
    },
    {
        question: "Wie erfolgt die Sondermüll-Entsorgung in medizinischen Einrichtungen?",
        answer: [
            {
                type: "text",
                content: "Die Sondermüll-Entsorgung erfolgt nach strengsten gesetzlichen Vorgaben:"
            },
            {
                type: "point",
                content: "**Kategorisierung**: Trennung nach Abfallschlüsselnummern (ASN)"
            },
            {
                type: "point",
                content: "**Sichere Behälter**: Spezielle, durchstichsichere Sammelbehälter"
            },
            {
                type: "point",
                content: "**Regelmäßige Abholung**: Terminierte Abholung durch zertifizierte Entsorger"
            },
            {
                type: "point",
                content: "**Dokumentation**: Lückenlose Nachweisführung mit Entsorgungsnachweisen"
            },
            {
                type: "point",
                content: "**Schulung**: Personal-Schulungen für korrekte Mülltrennung"
            },
            {
                type: "point",
                content: "**Rechtssicherheit**: Einhaltung aller Bestimmungen des Kreislaufwirtschaftsgesetzes"
            },
            {
                type: "text",
                content: "Wir übernehmen die komplette Organisation und Dokumentation der gesetzeskonformen Entsorgung."
            },
        ]
    },
    {
        question: "Welche Stadtteile in  Nürnberg, Fürth & Umgebung decken Sie für die Praxisreinigung  Nürnberg, Fürth & Umgebung ab?",
        answer: [
            {
                type: "text",
                content: "Unsere **Praxisreinigung  Nürnberg, Fürth & Umgebung** Services decken das gesamte Münchner Stadtgebiet ab:"
            },
            {
                type: "grid",
                content: [
                    {
                        title: " Nürnberg, Fürth & Umgebung Innenstadt:",
                        points: [
                            "Altstadt-Lehel",
                            "Ludwigsvorstadt-Isarvorstadt",
                            "Maxvorstadt"
                        ]
                    },
                    {
                        title: " Nürnberg, Fürth & Umgebung Nord:",
                        points: [
                            "Schwabing-West & Schwabing-Freimann",
                            "Milbertshofen-Am Hart",
                            "Moosach"
                        ]
                    },
                    {
                        title: " Nürnberg, Fürth & Umgebung Süd:",
                        points: [
                            "Sendling-Westpark & Sendling",
                            "Untergiesing-Harlaching",
                            "Obergiesing-Fasangarten"
                        ]
                    },
                    {
                        title: " Nürnberg, Fürth & Umgebung Umland:",
                        points: [
                            "Garching, Unterschleißheim",
                            "Planegg, Gräfelfing",
                            "Haar, Vaterstetten"
                        ]
                    },
                ]
            },
            {
                type: "text",
                content: "Für spezielle Anfragen außerhalb dieses Gebiets kontaktieren Sie uns gerne persönlich."
            },
        ]
    },
    {
        question: "Wie läuft eine kostenlose Hygienebesichtigung ab?",
        answer: [
            {
                type: "text",
                content: "Unsere kostenlose Hygienebesichtigung erfolgt in mehreren Schritten:"
            },
            {
                type: "point",
                content: "**Terminvereinbarung**: Flexible Terminabsprache nach Ihren Bedürfnissen"
            },
            {
                type: "point",
                content: "**Vor-Ort-Analyse**: Begehung aller zu reinigenden Bereiche (ca. 45-60 Min.)"
            },
            {
                type: "point",
                content: "**Hygiene-Assessment**: Bewertung der aktuellen Hygienestandards"
            },
            {
                type: "point",
                content: "**Bedarfsermittlung**: Analyse Ihrer spezifischen Anforderungen"
            },
            {
                type: "point",
                content: "**Lösungsvorschlag**: Individueller Reinigungsplan mit Zeitfenstern"
            },
            {
                type: "point",
                content: "**Kostentransparenz**: Detailliertes, unverbindliches Angebot"
            },
            {
                type: "point",
                content: "**Zertifikate**: Vorlage unserer Qualifikationen und Zertifizierungen"
            },
            {
                type: "text",
                content: "Die Besichtigung ist völlig kostenlos und unverbindlich. Sie erhalten innerhalb von 24 Stunden ein detailliertes Angebot."
            },
        ]
    }
]

export default hospitalCleaningFAQs;