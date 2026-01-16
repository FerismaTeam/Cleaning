import { Provider } from "@/components/ui/provider";
import "./globals.css";
import Navbar from "@/components/navbar.component";
import Footer from "@/components/footer.component";
import ContactInfo from "@/components/contact.component";
import AutoScrollToTop from "@/components/auto-scroll-to-top.component";
import { Metadata } from "next";
import { company_name } from "@/data/about";
import { service_area } from "@/data/contact";

export const metadata: Metadata = {
    title: company_name + " " + service_area,
    description: "" // default website description
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Provider>
                    <AutoScrollToTop />
                    <ContactInfo />
                    <Navbar />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}

export default RootLayout;