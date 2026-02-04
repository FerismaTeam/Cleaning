import { owner_name } from "./about";
import { operational_region } from "./contact";

interface LegalType {
    title: string,
    content: string[]
}

// add [point] with space in the beginning of content items to create a point in UI inplace of regular text

// add [check] with space in the beginning of content items to create a check point in UI inplace of regular text

// add [link](url) with space in the beginning of the content items to create a link in UI

// wrap text inside ** ** to bold it

const legal: LegalType[] = [
    {
        title: "Rechtsform und Register",
        content: [
            `**Rechtsform**: Gesellschaft mit beschränkter Haftung (GmbH)`,
            `**Sitz der Gesellschaft**: ${operational_region}`,
            `**Registergericht**: Amtsgericht Nürnberg`,
            `**Handelsregister-Nr.**: HRB 185255`,
            `**Geschäftsführer**: ${owner_name}`
        ]
    },
    {
        title: "Steuerliche Angaben",
        content: [
          /*  `**Betriebsnummer**: 12996953`,*/
            `**Steuernummer**: 143/115/11093`,
           /* `**USt-IdNr.**: DE270955840`,*/
           /* `gemäß § 27a Umsatzsteuergesetz`,*/
        ]
    },
   /* {
        title: "Berufshaftpflichtversicherung",
        content: [
            `**Versicherer**: Signal Iduna Versicherung AG`,
            `Joseph-Scherer-Str. 3`,
            `80809 München`,
            `**Räumlicher Geltungsbereich**: Deutschland`,
        ]
    },
    {
        title: "Mitgliedschaften",
        content: [
            `Mitglied der **Handwerkskammer München und Oberbayern**`,
            `Eingetragen in die Handwerksrolle gemäß § 7 HwO`,
        ]
    },*/
    {
        title: "Berufsrechtliche Regelungen",
        content: [
            `Es gelten die Vorschriften der **Handwerksordnung (HwO).**`,
        ]
    },
    {
        title: "Online-Streitbeilegung / Verbraucherstreitbeilegung",
        content: [
            `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:`,
            `[link](https://ec.europa.eu/consumers/odr) https://ec.europa.eu/consumers/odr`,
            `Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`
        ]
    },
    {
        title: "Datenschutz",
        content: [
            `Im Rahmen der Interaktion mit Popp Dienstleistungen können personenbezogene Daten verarbeitet werden. Weitere Informationen hierzu finden Sie in unserer`,
            `[link](#privacy) Datenschutzerklärung`
        ]
    },
    {
        title: "E-Mail-Haftungshinweis",
        content: [
            `Informationen in E-Mails und ihren Anhängen sind vertraulich und ausschließlich für den vorgesehenen Empfänger bestimmt. Sollten Sie eine E-Mail irrtümlich erhalten haben, ist jede Offenlegung, Weitergabe oder Nutzung des Inhalts untersagt. Bitte löschen Sie die E-Mail einschließlich aller Anhänge und informieren Sie den Absender über den Irrtum.`
        ]
    },
    {
        title: "Haftungsausschluss",
        content: [
            `**Haftung für Inhalte**`,
            `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.`, // empty line
            ``,
            `**Haftung für Links**`,
            `Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.`,
            ``, // empty line
            `**Urheberrecht**`,
            `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`
        ]
    },
]

export default legal;