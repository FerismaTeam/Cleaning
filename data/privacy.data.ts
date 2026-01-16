import { company_name } from "./about";
import { official_mail, telephone } from "./contact";

interface PrivacyType {
    title: string,
    content: string[]
}

// add [point] with space in the beginning of content items to create a point in UI inplace of regular text

// add [check] with space in the beginning of content items to create a check point in UI inplace of regular text

// add [link](url) with space in the beginning of the content items to create a link in UI

const privacy: PrivacyType[] = [
    {
        title: "Allgemeines zur Datenverarbeitung",
        content: [
            `
            Wir verarbeiten personenbezogene Daten ausschließlich im Einklang mit den Bestimmungen der **Datenschutz-Grundverordnung (DSGVO)** und des **Bundesdatenschutzgesetzes (BDSG)**.
            `,
            `
            Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen – z. B. Name, Adresse, Telefonnummer, E-Mail-Adresse oder Kommunikationsinhalte.
            `
        ]
    },
    {
        title: "Erhebung und Speicherung personenbezogener Daten",
        content: [
            `
            **a) Beim Besuch unserer Website**
            `,
            `Beim Aufruf unserer Website werden automatisch technische Daten erfasst (z. B. IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit). Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.`,
            `
            **Rechtsgrundlage**: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler und sicherer Bereitstellung der Website)
            `,
            ``, // empty line
            `**b) Bei Kontaktaufnahme per Formular, E-Mail oder Telefon**`,
            `Wenn Sie uns über ein Kontaktformular, per E-Mail oder telefonisch kontaktieren, speichern wir die von Ihnen übermittelten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Anliegen).`,
            `**Zweck**: Bearbeitung Ihrer Anfrage, Angebotserstellung, Kundenkommunikation`,
            `**Rechtsgrundlage**: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen)`,
            ``,
        ]
    },
    {
        title: "Speicherdauer",
        content: [
            `
            Personenbezogene Daten werden gelöscht, sobald der Zweck ihrer Verarbeitung entfällt oder Sie der Verarbeitung widersprechen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            `,
            `
            Im Rahmen von Kundenkommunikation und Angebotsunterlagen speichern wir Daten **maximal 5 Jahre**, um Angebots- und Vertragsverläufe nachweisen zu können (§ 147 AO, § 257 HGB).
            `
        ]
    },
    {
        title: "Weitergabe von Daten",
        content: [
            `Eine Weitergabe Ihrer Daten an Dritte erfolgt ausschließlich:`,
            `[point] zur Vertragserfüllung (z. B. Subunternehmer, Rechnungsstellung)`,
            `[point] auf Grundlage gesetzlicher Verpflichtungen oder behördlicher Anforderungen,`,
            `[point] oder mit Ihrer ausdrücklichen Einwilligung.`,
        ]
    },
    {
        title: "Ihre Rechte",
        content: [
            `Sie haben jederzeit das Recht auf:`,
            `[check] **Auskunft** über die gespeicherten Daten (Art. 15 DSGVO)`,
            `[check] **Berichtigung** unrichtiger Daten (Art. 16 DSGVO)`,
            `[check] **Berichtigung**  („Recht auf Vergessenwerden", Art. 17 DSGVO)`,
            `[check] **Einschränkung der Verarbeitung** (Art. 18 DSGVO)`,
            `[check] **Datenübertragbarkeit** (Art. 20 DSGVO)`,
            `[check] **Widerspruch** gegen Datenverarbeitung (Art. 21 DSGVO)`,
            `Anfragen hierzu richten Sie bitte an:`,
            `[link](mailto:${official_mail}) ${official_mail}`
        ]
    },
    {
        title: "Sicherheit",
        content: [
            `Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, unbefugten Zugriff oder Missbrauch zu schützen. Unsere Systeme werden regelmäßig aktualisiert und überprüft.`
        ]
    },
    {
        title: "Änderungen dieser Datenschutzerklärung",
        content: [
            `Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen oder technische Änderungen anzupassen.`
        ]
    }
]

export default privacy;