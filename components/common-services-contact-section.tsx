import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import { Badge, Box, Button, Grid, GridItem, Heading, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import Loader from "./loader.component";

const CommonServiceContactSection = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!formRef.current){ return }

        const formData = new FormData(formRef.current)

        if(!formRef.current.service.value.length){ return alert("Select service") }

        if(!formRef.current.tnc.checked){ return alert("Check our Terms and conditions to proceed") }
        
        try {
            setLoading(true);
            const res = await fetch("https://formspree.io/f/xvzajdwn", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            })
            if(!res.ok){ throw new Error("error"); }
            setLoading(false);
            alert("Nachricht gesendet.");
            formRef.current?.reset();

        } catch(err) {
            console.log(err);
            setLoading(false);
            alert("Ihre Anfrage konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut.")
        }
    }

    return (
        <>
        { loading && <Loader /> }
        <Box as={"section"}>
            <VStack>

                <Badge bg={"blue.100"} color={"blue.600"} fontWeight={"semibold"} gap={2} p={2} px={3} rounded={"full"}>
                    <FaEnvelope/>
                    KONTAKTFORMULAR
                </Badge>
                
                <Heading as={"h2"} fontSize={"4xl"} fontWeight={"bolder"} my={4} textAlign={"center"} lineHeight={1.2}>Jetzt <Text as={"span"} color={"blue.600"}>unverbindlich anfragen</Text></Heading>

                <Text textAlign={"center"} maxW={"700px"}>
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
                </Text>

                {/* contact form */}

                <Box asChild w={"full"} p={{ base: 0, md: 5 }} mt={6} rounded={"md"} bg={"bg"}>
                    <form ref={formRef} onSubmit={handleContact}>

                        <Grid
                            gap={3}
                            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                        >
                            
                            <GridItem asChild>
                                <Input aria-required type="text" name="name" required placeholder="Ihr Name" />
                            </GridItem>

                            <GridItem asChild>
                                <Input aria-required type="email" name="email" required placeholder="Ihre@email.de" />
                            </GridItem>

                        </Grid>

                        <Grid
                            mt={3}
                            gap={3}
                            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                        >
                            
                            <GridItem asChild>
                                <Input aria-required type="tel" name="phone" required placeholder="Ihre Telefonnummer" />
                            </GridItem>

                            <GridItem asChild>
                                <select required name="service" className=" w-full border! rounded-md py-1.5! border-black/10! text-sm! px-2.5! outline-black/30! h-10!">
                                    {
                                        officeCleaningContactServiceOptions.map((service, i) => {
                                            return <option key={i} value={service.value}>{service.label}</option>
                                        })
                                    }
                                </select>
                            </GridItem>

                        </Grid>

                        <Textarea
                            my={3}
                            resize={"none"}
                            h={"200px"}
                            placeholder="Beschreiben Sie Ihr Anliegen..."
                            name="message"
                            required
                        >
                            
                        </Textarea>

                        <HStack my={2} gap={3} mb={6}>
                            <input type="checkbox" name="tnc" id="tnc" />
                            <Text asChild fontSize={"sm"} color={"bg.inverted/65"}>
                                <label htmlFor="tnc">Ich habe die 
                                    <Link className="text-blue-600! underline! mx-1!" href={"/rechtliches#privacy"}>Datenschutzerklärung</Link>
                                     zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zu. *
                                </label>
                            </Text>
                        </HStack>
                        
                        <Button type="submit" colorPalette={"blue"} h={"45px !important"} w="full" rounded={"lg"}>
                            <Text scale={0.75}><BsSendFill /></Text>
                            Nachricht senden
                        </Button>

                        <HStack gap={3} fontSize={"sm"} my={3} opacity={0.65} justify={"center"} mt={5}>
                            <FaLock />
                            <Text>
                                Ihre Daten werden verschlüsselt übertragen und vertraulich behandelt.
                            </Text>
                        </HStack>

                    </form>
                </Box>

            </VStack>
        </Box>
        </>
    )

}

export default CommonServiceContactSection;