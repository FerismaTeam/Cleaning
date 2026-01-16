// this file contains information required by home page. Multiple pages may be using the same info from this file.

// Only change the text within double quotes otherwise the project will not work.

const reviews: reviewType[] = [
    {
        review: "Ich kenn die Firma seit fast 15 Jahren, so lange hat sie bei meinem Arbeitgeber die Reinigungen durchgeführt. Die Leistungen sind absolut top, mehr als man sich wünschen kann. Individueller Service wird angeboten wann immer es möglich ist. Der Inhaber packt auch selber mal mit an wenn es nötig ist. Ich würde die Firma absolut weiterempfehlen.",
        by: "F.A"
    },
    {
        review: "Sehr zuverlässig, saubere und pünktliche Arbeitsweise. Freundlichkeit und Kundenservice zu unserer vollsten Zufriedenheit. Auf unsere Wünsche wurde immer eingegangen.Telefonische Erreichbarkeit top. Jederzeit wieder. Wir können dieses Unternehmen zu 100% weiterempfehlen.",
        by: "Nana Mohamad"
    },
    {
        review: "Wir waren mit der Leistung von Arisma äußerst zufrieden. Alle besprochenen Bereiche unseres Großauftrags wurden gründlich und fachgerecht ausgeführt. Vom ersten Kontakt bis zum Abschluss verlief die Zusammenarbeit sehr höflich und professionell. Die beste Reinigungsfirma, mit der wir je zusammengearbeitet haben – wir können dieses Unternehmen uneingeschränkt weiterempfehlen!",
        by: "Malermeisterbetrieb Schwarz"
    },]

// contact serivces list

const contactServiceOptions: contactSelectionOptionType[] = [
    { value: "", label: "Leistung auswählen" },
    { value: "büroreinigung", label: "Büroreinigung" },
    { value: "praxisreinigung", label: "Praxisreinigung" },
    { value: "krankenhausreinigung", label: "Krankenhausreinigung" },
    { value: "fensterreinigung", label: "Fensterreinigung" },
    { value: "gastronomiereinigung", label: "Gastronomie-Reinigung" },
    { value: "unterhaltsreinigung", label: "Unterhaltsreinigung" },
    { value: "teppichreinigung", label: "Teppichreinigung" },
    { value: "sonderreinigung", label: "Sonderreinigung" },
    { value: "fahrzeugaufbereitung", label: "Fahrzeugaufbereitung" },
    { value: "grundreinigung", label: "Grundreinigung" },
    { value: "gebäudereinigung", label: "Gebäudereinigung" }
];

export { reviews, contactServiceOptions }

interface reviewType { review: string, by: string }
export interface contactSelectionOptionType { value: string, label: string }