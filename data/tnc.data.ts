import { company_name } from "./about";
import { official_mail, telephone } from "./contact";

interface TNCType {
    title: string,
    content: string[]
}

// add [check] with space in the beginning of content items to create a point in UI inplace of regular text

// add [check] with space in the beginning of content items to create a check point in UI inplace of regular text

// add [link](url) with space in the beginning of the content items to create a link in UI

const tnc: TNCType[] = [
    {
        title: "Geltungsbereich",
        content: [
            `
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Verträge, Angebote, Dienstleistungen und Lieferungen zwischen der ${company_name} (nachfolgend „Auftragnehmer") und dem jeweiligen Kunden (nachfolgend „Auftraggeber"), soweit nicht ausdrücklich schriftlich etwas anderes vereinbart wurde.
            `,
            `
            Abweichende, entgegenstehende oder ergänzende Bedingungen des Auftraggebers werden nur Vertragsbestandteil, wenn sie vom Auftragnehmer ausdrücklich schriftlich anerkannt wurden.
            `
        ]
    },
    {
        title: "Leistungsumfang",
        content: [
            `Der Leistungsumfang ergibt sich aus dem individuell geschlossenen Vertrag, Angebot oder der Auftragsbestätigung.`,
            `Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Zustimmung beider Parteien.`,
            `Die ${company_name} erbringt alle Leistungen fachgerecht, sorgfältig und unter Einhaltung der geltenden gesetzlichen und behördlichen Vorschriften.`
        ]
    },
    {
        title: "Angebot und Vertragsabschluss",
        content: [
            `Angebote sind freibleibend und unverbindlich.`,
            `Ein Vertrag kommt zustande durch:`,
            `[check] schriftliche Bestätigung des Angebots (per E-Mail, WhatsApp oder unterschriebenem Dokument), oder`,
            `[check] tatsächliche Inanspruchnahme der Leistung durch den Auftraggeber.`,
            `Mündliche Nebenabreden haben nur Gültigkeit, wenn sie schriftlich bestätigt wurden.`
        ]
    },
    {
        title: "Preise und Zahlungsbedingungen",
        content: [
            `Sämtliche Preise verstehen sich in Euro (€) zzgl. der jeweils geltenden gesetzlichen Mehrwertsteuer, sofern nicht ausdrücklich anders angegeben.`,
            `Zahlungen sind, sofern nichts anderes vereinbart wurde, innerhalb von 7 Tagen nach Rechnungsstellung ohne Abzug fällig.`,
            `Bei längerfristigen oder umfangreichen Aufträgen kann eine Anzahlung oder Teilzahlung verlangt werden.`,
            `Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 9 % über dem Basiszinssatz zu berechnen (§ 288 BGB).`,
            `Der Auftraggeber ist zur Aufrechnung oder Zurückbehaltung nur berechtigt, wenn seine Gegenansprüche rechtskräftig festgestellt oder unbestritten sind.`
        ]
    },
    {
        title: "Ausführungsbedingungen",
        content: [
            `Der Auftraggeber stellt sicher, dass die zu reinigenden Räumlichkeiten zum vereinbarten Zeitpunkt zugänglich und nutzungsbereit sind.`,
            `Für Verzögerungen, die der Auftraggeber zu vertreten hat (z. B. verschlossene Räume, fehlende Zugänge, falsche Angaben), haftet dieser.`,
            `Der Auftragnehmer ist berechtigt, sich zur Vertragserfüllung geeigneter Subunternehmer zu bedienen.`
        ]
    },
    {
        title: "Haftung",
        content: [
            `Die ${company_name} haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.`,
            `Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den vertragstypischen, vorhersehbaren Schaden.`,
            `Für Schäden an empfindlichen oder wertvollen Gegenständen (z. B. Kunstobjekte, Antiquitäten, technische Geräte), die nicht ausdrücklich vor Beginn der Arbeiten gemeldet wurden, wird keine Haftung übernommen.`,
            `Die Haftung für Folgeschäden, entgangenen Gewinn oder Betriebsunterbrechung ist ausgeschlossen.`,
            `Der Auftragnehmer verfügt über eine Betriebs- und Berufshaftpflichtversicherung, die im Schadensfall eintritt, soweit die gesetzlichen Voraussetzungen vorliegen.`
        ]
    },
    {
        title: "Gewährleistung und Reklamation",
        content: [
            `Offensichtliche Mängel sind unverzüglich, spätestens jedoch innerhalb von 24 Stunden nach Leistungserbringung, schriftlich anzuzeigen.`,
            `Der Auftragnehmer hat das Recht zur Nachbesserung.`,
            `Erfolgt innerhalb einer angemessenen Frist keine Nachbesserung, kann der Auftraggeber eine Minderung verlangen.`
        ]
    },
    {
        title: "Vertragsdauer und Kündigung",
        content: [
            `Laufende Reinigungsverträge werden – sofern nichts anderes vereinbart – auf unbestimmte Zeit geschlossen und können mit einer Frist von 4 Wochen zum Monatsende schriftlich gekündigt werden.`,
            `Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.`,
            `Bei einmaligen Reinigungsaufträgen endet der Vertrag automatisch mit vollständiger Leistungserbringung.`
        ]
    },
    {
        title: "Stornierung und Terminabsage",
        content: [
            `Terminabsagen müssen spätestens 24 Stunden vor dem vereinbarten Reinigungstermin erfolgen.`,
            `Bei kurzfristigeren Absagen oder Nichterscheinen ohne Absage kann der Auftragnehmer 50 % des vereinbarten Entgelts berechnen.`
        ]
    },
    {
        title: "Datenschutz",
        content: [
            `Die ${company_name} verarbeitet personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzgesetze.`,
            `Die vollständige Datenschutzerklärung finden Sie unter:`,
            `[link](#privacy) datenschutz`
        ]
    },
    {
        title: "Eigentumsvorbehalt",
        content: [
            `Bis zur vollständigen Zahlung bleiben gelieferte Materialien oder Hilfsmittel Eigentum der ${company_name}.`,
        ]
    },
    {
        title: "Schlussbestimmungen",
        content: [
            `Es gilt das Recht der Bundesrepublik Deutschland.`,
            `Gerichtsstand ist – soweit gesetzlich zulässig – München.`,
            `Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.`
        ]
    },
    {
        title: "Kontakt",
        content: [
            `**${company_name}**`,
            `[link](tel:${telephone.replaceAll(" ", "")}) Tel: ${telephone}`,
            `[link](mailto:${official_mail}) ${official_mail}`,
        ]
    }
]

export default tnc;