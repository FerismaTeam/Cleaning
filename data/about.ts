// this file contains information regarding about page. Multiple pages may be using the same info from this file.

// Only change the text within double quotes otherwise the project will not work.

// company details

const company_name: string = "Popp Dienstleistungen";
const established_year: number = 2008;
const company_location: string = " Nürnberg, Fürth & Umgebung";
const hours_worked: number = 9000; // shown on home page
const awards_won: number = 100; // shown on home page
const medical_facilites: number = 50; // shown on hospital cleaning service page

// about page realted info 

// keep it short under 2 lines. This text is visible on about us page quick info section ( the very first section )
const company_ideology_or_goal: string = "Qualität, Zuverlässigkeit und Vertrauen – seit über 20 Jahren Ihr Partner für professionelle Gebäudereinigung in  Nürnberg, Fürth & Umgebung"; 

// few numbers, multiple pages maybe be using these information apart form about us page.
const satisfied_customers: number = 500;
const properties_cleaned: number = 1800;
const years_of_experiense: number = 15;

// detailed information about the company

const about_us_in_detail: string = `
Bei modern web verstehen wir professionelle Gebäudereinigung als weit mehr als nur das Entfernen von Schmutz. Es geht um Werterhalt, Hygiene, Wohlbefinden und ein gepflegtes Erscheinungsbild – für Ihre Mitarbeiter, Kunden und Gäste.
 
Seit unserer Gründung, haben wir uns kontinuierlich weiterentwickelt und zählen heute über 500 Kunden sowie mehr als 1500 betreute Objekte in  Nürnberg, Fürth & Umgebung und Umgebung zu unserem Portfolio.

Was uns auszeichnet? Eine Kombination aus langjähriger Erfahrung, modernen Reinigungstechnologien, geschultem Personal und einer Unternehmenskultur, die auf Zuverlässigkeit und persönlichem Service basiert.
`;

// timeline

const short_timeline_description: string = "Über zwei Jahrzehnte Erfahrung in der professionellen Gebäudereinigung"

const timeline: timelineDataStructure[] = [
    {
        yearish: "2008",
        title: "Gründung in  Nürnberg, Fürth & Umgebung",
        detail: "Modern web wird in  Nürnberg, Fürth & Umgebung gegründet. Mit einer klaren Vision: höchste Qualität in der Gebäudereinigung und persönlicher Service für jeden Kunden.",
    },
    {
        yearish: "2010er",
        title: "Wachstum & Spezialisierung",
        detail: "Expansion in Spezialbereiche: Praxis- und Krankenhausreinigung, Gastronomie-Reinigung nach HACCP-Standards und Fahrzeugaufbereitung als K2-Partner.",
    },
    {
        yearish: "Qualität",
        title: "ALEGRIA-Zertifizierung",
        detail: "Als zertifizierter ALEGRIA-Partner garantieren wir höchste Standards in Service, Schulung und Qualitätskontrolle. Ein Meilenstein für unser Qualitätsversprechen.",
    },
    {
        yearish: "Heute",
        title: "Etabliert in  Nürnberg, Fürth & Umgebung",
        detail: "Mit über 529 Kunden, 1600 betreuten Objekten und langjährigen Partnerschaften mit Unternehmen wie CBRE und GenussZeit Catering haben wir uns als zuverlässiger Partner für Gebäudereinigung in  Nürnberg, Fürth & Umgebung etabliert.",
    },
] 

// customer satifaciton and review

const companies_worked_with: companiesWorkedWithDataStructure[] = [
    {
        name: 'CBRE',
        type: "Immobilien"
    },
    {
        name: 'GenussZeit',
        type: "Catering"
    },
    {
        name: 'K2',
        type: "Fahrzeugaufbereitung"
    },
    {
        name: 'ALEGRIA',
        type: "Zertifizierung"
    },
]

const singleReview = {
    review: "Seit Jahren arbeiten wir mit Arisma zusammen und sind durchweg begeistert. Die Qualität ist konstant hervorragend, die Kommunikation einwandfrei und die Flexibilität bei Sonderwünschen bemerkenswert. Ein Partner, auf den man sich verlassen kann.",
    review_by: "Langjähriger Kunde",
    from: " Nürnberg, Fürth & Umgebung"
}

// director note

const owner_name = "Modernweb";
const director_note = `
Seit der Gründung von Arisma Gebäudedienste GmbH im Jahr 2004 habe ich mit meinem Team kontinuierlich daran gearbeitet, nicht nur Gebäude zu reinigen, sondern langfristige Partnerschaften aufzubauen, die auf Vertrauen und Qualität basieren.

Mit über 20 Jahren Erfahrung in der Branche weiß ich, worauf es ankommt: Zuverlässigkeit, sorgfältige Arbeit und ein persönlicher Service. Diese Werte setzen wir täglich um – in jedem Objekt, bei jedem Kunden.

Unser Erfolg basiert auf dem Engagement unseres Teams und dem Vertrauen unserer Kunden. Über 529 zufriedene Kunden und mehr als 1600 betreute Objekte in  Nürnberg, Fürth & Umgebung sind der beste Beweis dafür.
`;

export { company_name, established_year, company_location, company_ideology_or_goal, satisfied_customers, properties_cleaned, years_of_experiense, companies_worked_with, about_us_in_detail, short_timeline_description, timeline, singleReview, owner_name, director_note, hours_worked, awards_won, medical_facilites } 

// Do not change anything below.

interface timelineDataStructure { yearish: string, title: string, detail: string };
interface companiesWorkedWithDataStructure { name: string, type: string };