'use client'

import Counter from "@/components/counter.component";
import ReviewCard from "@/components/review.component";
import Stars from "@/components/stars.component";
import { awards_won, company_name, hours_worked, owner_name, properties_cleaned, satisfied_customers } from "@/data/about";
import { mobile, official_mail, service_area, telephone } from "@/data/contact";
import { whatsAppContact } from "@/data/footer";
import { contactServiceOptions, reviews } from "@/data/home";
import services from "@/data/services.list";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Loader from "@/components/loader.component";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { FaArrowRight, FaCheckCircle, FaClock, FaCrown, FaEnvelope, FaGift, FaHandshake, FaHeart, FaInfoCircle, FaMobile, FaPhoneAlt, FaQuoteLeft, FaShieldAlt, FaShieldVirus, FaStar, FaSuitcase } from "react-icons/fa";
import { FaAward, FaBuilding, FaCar, FaCertificate, FaCheck, FaClipboardCheck, FaDiamond, FaEuroSign, FaLocationPin, FaUserGroup, FaWhatsapp } from "react-icons/fa6";
import { BsBuildingFill } from "react-icons/bs";
import { ImBubbles } from "react-icons/im";
import { PiOfficeChairFill } from "react-icons/pi";
import { MdRestaurant, MdSchool } from "react-icons/md";

const Page = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const handleContact = async (e: React.FormEvent) => {

        e.preventDefault();

        if(!formRef.current){ return }

        const formData = new FormData(formRef.current)

        if(!formRef.current.service.value.length){ return alert("Select service") }
        
        try {
            setLoading(true);
            const res = await fetch("https://formspree.io/f/mvzadgro", {
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

        {/* hero section */}
        <Box as={"section"} overflowX={"hidden"}>

            <Flex gap={12} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1}>Professionelle Gebäudereinigung Nürnberg, Fürth & Umgebung</Badge>
                        <Heading as={"h1"} fontSize={"2xl"} fontWeight={"bolder"}
                        >Ihr Profi für Gebäudereinigung in Nürnberg, Fürth & Umgebung</Heading>

                        <Text opacity={0.55} my={3}>
                            Sauberkeit mit Garantie – 
                            <b>verlässlich, transparent, maßgeschneidert.</b>
                        </Text>

                        <Grid
                            gapX={6}
                            gapY={1.5}
                            templateColumns={"repeat(2, 1fr)"}
                            fontSize={"sm"}
                        >
                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaCheck /></Text>
                                    </Center>
                                    <Text>Geld-zurück-Garantie</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaClock /></Text>
                                    </Center>
                                    <Text>100% Zuverlässigkeit</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaStar /></Text>
                                    </Center>
                                    <Text>Langjährige Erfahrung</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaHeart /></Text>
                                    </Center>
                                    <Text>Freundlicher Service</Text>
                                </HStack>
                            </GridItem>
                        </Grid>
                        
                        <HStack gap={2} mt={5} flexWrap={"wrap"}>

                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={"/#contact"}>
                                    <Text scale={0.75}><FaGift /></Text>
                                    Kostenloses Angebot sichern
                                </Link>
                            </Button>
                            
                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                    {telephone}
                                </Link>
                            </Button>

                        </HStack>

                        <HStack gap={3} flexWrap={"wrap"} mt={{ base: 2, md: 0 }} fontSize={"13px"}>

                            <HStack gap={2}>
                                <Text color={"blue.600"}><FaUserGroup /></Text>
                                <Text fontWeight={"medium"} opacity={0.4}>Über {satisfied_customers} zufriedene Kunden</Text>
                            </HStack>

                            <HStack gap={2}>
                                <Text color={"blue.600"}><FaLocationPin /></Text>
                                <Text fontWeight={"medium"} opacity={0.4}>{service_area}</Text>
                            </HStack>

                        </HStack>

                    </VStack>
                </Box>

                <Box w={{ base: "full", lg: "50%" }} pos={"relative"}>

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} left={-8} top={"25%"} translateY={"-50%"} zIndex={-1}></Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>{properties_cleaned}+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Gebäude gereinigt</Text>
                    </Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>100%</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Erfolgsquote</Text>
                    </Box>

                    <Image alt="" src="./assets/home-hero-section-banner.jpg" w={"90%"} mx="auto" h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>

        </Box>

        {/* top 2 services section */}
        <Box as={"section"} id="services">

            <Box pos="relative">

                <Box pos={"absolute"} w={5} aspectRatio={"square"} rounded={"full"}bg={"blue.100/50"} left={-20} top={20} zIndex={-1}>
                </Box>

                <Box pos={"absolute"} w={40} aspectRatio={"square"} rounded={"full"} bg={"blue.100/30"} left={-20} top={32} zIndex={-1}></Box>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                    Spezialist für 
                    <Text as={"span"} color={"green.600"}> Büroreinigung</Text> 
                    &
                    <Text as={"span"} color={"blue.500"}> Gebäudereinigung Nürnberg, Fürth & Umgebung </Text> 
                </Heading>
                <Text textAlign={"center"} mt={3} mb={6} lineHeight={1.65} w={"full"} fontSize={"sm"} opacity={0.65}>
                    Mit über 15 Jahren Erfahrung sind wir Ihr vertrauensvoller Partner für maßgeschneiderte Reinigungslösungen in Nürnberg, Fürth & Umgebung
                </Text>

                {/* service info */}

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                    my={{ base: 12, lg: 24 }}
                >

                    <GridItem _hover={{ bg: "green.100/50" }} shadow={"sm"} rounded={"sm"} bg={"bg"} p={{ base: 3, sm: 5 }}>
                        
                        <VStack align={"start"} gap={5}>

                            <HStack gap={3} mb={2}>
                            
                                <Center w={10} color={"bg"} fontSize={"xl"} aspectRatio={"square"} rounded={"lg"} bg={"green.600"}>
                                    <PiOfficeChariFill />
                                </Center>

                                <Box>
                                    <Heading as="h3" mb={-2} fontSize={"lg"} fontWeight={"semibold"}>Büroreinigung Nürnberg, Fürth & Umgebung</Heading>
                                    <Text as={"span"} fontSize={"xs"} fontWeight={"bolder"} color={"green.600"} >Premium-Service</Text>
                                </Box>

                            </HStack>

                            <Text fontSize={"sm"} opacity={0.80} lineHeight={1.45}>
                                Professionelle Büroreinigung für Unternehmen, Praxen und Gewerbeflächen in Nürnberg, Fürth & Umgebung. Zuverlässig, diskret und nach höchsten Qualitätsstandards.
                            </Text>

                            {/* points */}

                            <List.Root gap={2} variant="plain" align="center" color={"bg.inverted/80"}>
                                
                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Flexible Reinigungszeiten nach Ihrem Bedarf
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Geschultes Personal mit Sicherheitsüberprüfung
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Umweltfreundliche Reinigungsmittel
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Individuelle Reinigungspläne für Ihr Büro
                                    </Text>
                                </List.Item>
                                
                            </List.Root>

                            {/* rating */}

                            <HStack bg={"green.100"} p={3} color={"green.600"} justify={"space-between"} w="full" rounded={"lg"} fontSize={"sm"}>

                            <HStack gap={2}>
                                <FaHandshake />
                                <Text fontWeight={"semibold"}>200+ zufriedene Bürokunden</Text>
                            </HStack>

                                <HStack gap={0.5}>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => {
                                            return (
                                                <FaStar key={i} />
                                            )
                                        })
                                    }
                                </HStack>

                            </HStack>

                            <Button asChild colorPalette={"green"} w="99%" mx={"auto"} shadow={"md"}>
                                <Link href={"/buroreinigung-nuernberg"}>
                                    <Text scale={0.75}><FaArrowRight /></Text>
                                    Mehr zur Büroreinigung
                                </Link>
                            </Button>

                        </VStack>

                    </GridItem>

                    <GridItem _hover={{ bg: "blue.100/50" }} shadow={"sm"} rounded={"sm"} bg={"bg"} p={{ base: 3, sm: 5 }}>
                        
                        <VStack align={"start"} gap={5}>

                            <HStack gap={3} mb={2}>
                            
                                <Center w={10} color={"bg"} fontSize={"xl"} aspectRatio={"square"} rounded={"lg"} bg={"blue.600"}>
                                    <BsBuildingFill />
                                </Center>

                                <Box>
                                    <Heading as="h3" mb={-2} fontSize={"lg"} fontWeight={"semibold"}>Gebäudereinigung Nürnberg, Fürth & Umgebung</Heading>
                                    <Text as={"span"} fontSize={"xs"} fontWeight={"bolder"} color={"blue.600"} >Premium Reinigung</Text>
                                </Box>

                            </HStack>

                            <Text fontSize={"sm"} opacity={0.80} lineHeight={1.45}>
                                Professionelle Gebäudereinigung inkl. Treppenhaus, Dachboden, Keller & Garten. Für Hausmeister, Eigentümer und anspruchsvolle Privatkunden.
                            </Text>

                            {/* points */}

                            <List.Root gap={2} variant="plain" align="center" color={"bg.inverted/80"}>
                                
                                <List.Item>
                                    <List.Indicator asChild color="blue.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Professionelle Innen- & Außenreinigung
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="blue.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Spezielle Behandlung Keller & Dachboden
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="blue.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Färbung & Pflege
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="blue.500">
                                        <FaCheckCircle />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Schnelle Aufbereitung 
                                    </Text>
                                </List.Item>
                                
                            </List.Root>

                            {/* rating */}

                            <HStack bg={"blue.100"} p={3} color={"blue.500"}  w="99%" mx={"auto"}  rounded={"lg"} fontSize={"sm"}>

                                <HStack gap={0.5}>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => {
                                            return (
                                                <FaStar key={i} />
                                            )
                                        })
                                    }
                                </HStack>

                            </HStack>

                            <Button asChild colorPalette={"blue"} w="full" shadow={"md"}>
                                <Link href={"/Gebaudereinigung-nuernberg"}>
                                    <Text scale={0.75}><FaArrowRight /></Text>
                                    Mehr zur Gebäudereinigung
                                </Link>
                            </Button>

                        </VStack>

                    </GridItem>

                </Grid>

                {/* combine both offer banner */}

                <VStack rounded={"md"} className="gradient_dark_background" color={"bg"} gap={5} py={10} px={6} align={"center"}>
                    
                    <Heading textAlign={"center"} as={"h4"} fontSize={"xl"} fontWeight={"semibold"}>Kombinieren Sie beide Leistungen und sparen Sie!</Heading>
                    
                    <Text textAlign={"center"} fontSize={"sm"}>Nutzen Sie unsere Kombi-Angebote für Büroreinigung und Gebäudereinigung. Ideal für Unternehmen mit Gewerbeflächen.</Text>
                    
                    <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                        <Link href={"/#contact"}>
                            <Text scale={0.75}><FaEnvelope /></Text>
                            Kostenlose Beratung
                        </Link>
                    </Button>

                </VStack>
            </Box>

        </Box>

        {/* why customers trust us ? section */}
        <Box as={"section"} className="gradient_dark_background" color={"bg"}>
            <Box py={6} w={"full"}>
                <VStack textAlign={"center"} gap={10} w="100%">
                    
                    <Heading as={"h4"} fontSize={"3xl"} fontWeight={"bolder"}>Warum unsere Kunden uns <Text as={"span"} color={"cyan.400"}>vertrauen</Text></Heading>
                    <VStack gap={1} fontSize={"sm"}>
                        <Text><b>Geld‑zurück‑Garantie</b> – Weil wir wissen, was wir leisten.</Text>
                        <Text><b>100 % Zuverlässigkeit</b> – Pünktlich. Sorgfältig. Ohne Wenn und Aber.</Text>
                        <Text><b>Langjährige Erfahrung</b> – Über 15 Jahre Dienstleister in Nürnberg, Fürth & Umgebung & Umgebung.</Text>
                        <Text><b>Freundlicher Service</b> – Menschen, die mitdenken und Ihre Räume wertschätzen.</Text>
                    </VStack>
                    <Button asChild bg={"bg/15"} border={"2px solid"} borderColor={"bg/40"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                        <Link href={"/ueber-uns"}>
                            <Text scale={0.75}><FaUserGroup /></Text>
                             Mehr über uns erfahren
                        </Link>
                    </Button>

                    <Grid
                        w={"full"}
                        gap={5}
                        templateColumns={{
                            base: "1fr",
                            sm: "repeat(2, 1fr)",
                            lg: "repeat(4, 1fr)"
                        }}
                    >
                        <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                            <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={hours_worked} /></Text>
                            <Text fontSize={"xs"} textAlign={"center"}>Arbeitsstunden<br/> geleistete Arbeitszeit</Text>
                        </GridItem>

                        <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                            <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={satisfied_customers}/></Text>
                            <Text fontSize={"xs"} textAlign={"center"}>Happy Customers<br />
zufriedene Kunden</Text>
                        </GridItem>

                        <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                            <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={awards_won} /></Text>
                            <Text fontSize={"xs"} textAlign={"center"}>Awards <br />
Auszeichnungen</Text>
                        </GridItem>

                        <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                            <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={properties_cleaned} /></Text>
                            <Text fontSize={"xs"} textAlign={"center"}>Gebäude gereinigt<br />
erfolgreich abgeschlossen</Text>
                        </GridItem>
                    </Grid>

                    <Grid
                        w={"full"}
                        gap={5}
                        templateColumns={{
                            base: "1fr",
                            md: "repeat(2, 1fr)"
                        }}
                    >
                        <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                             <VStack gap={1} align={"start"}>
                                <HStack mb={3} gap={3}>
                                    <Center w={10} rounded={"md"} aspectRatio={"square"} color={"bg"} shadow={"lg"} bg={"blue.800"}>
                                        <FaBuilding />
                                    </Center>
                                    <Box>
                                        <Heading lineHeight={1.3} fontSize={"16px"} as={"h6"}>Büroreinigung Nürnberg, Fürth & Umgebung</Heading>
                                        <Text display={"flex"} alignItems={"center"} gap={2} fontSize={"xs"} fontWeight={"semibold"} mt={0.5}>
                                            <FaCrown />
                                            Schwerpunktleistung
                                        </Text>
                                    </Box>
                                </HStack>

                                <Grid
                                    w="full"
                                    gap={3}
                                    templateColumns={"repeat(2, 1fr)"}
                                    py={4}
                                >
                                    <GridItem>
                                        <VStack gap={0}>
                                            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"cyan.400"}>200+</Text>
                                            <Text fontSize={"sm"}>Bürokunden betreut</Text>
                                        </VStack>
                                    </GridItem>
                                    <GridItem>
                                        <VStack gap={0}>
                                            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"cyan.400"}>5.000+</Text>
                                            <Text fontSize={"sm"}>m² täglich gereinigt</Text>
                                        </VStack>
                                    </GridItem>
                                </Grid>
                                
                                <HStack mt={1} gap={1} color={"bg"} justify={"space-between"} fontSize={"xs"} w="full" pt={3} borderTop={"1px solid"} borderColor={"bg/20"}>
                                    <Text fontWeight={"medium"}>Kundenzufriedenheit</Text>
                                    <HStack gap={0.5} color={"yellow.300"}>
                                        {
                                            Array.from({ length: 5 }).map((_, i) => {
                                                return <FaStar key={i} />
                                            })
                                        }
                                    </HStack>
                                </HStack>
                            </VStack>
                        </GridItem>

                        <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                             <VStack gap={1} align={"start"}>
                                <HStack mb={3} gap={3}>
                                    <Center w={10} rounded={"md"} aspectRatio={"square"} color={"bg"} shadow={"lg"} bg={"blue.800"}>
                                        <BsBuildingFill />
                                    </Center>
                                    <Box>
                                        <Heading lineHeight={1.3} fontSize={"16px"} as={"h6"}>Gebäudereinigung Nürnberg, Fürth & Umgebung</Heading>
                                        <Text display={"flex"} alignItems={"center"} gap={2} fontSize={"xs"} fontWeight={"semibold"} mt={0.5}>
                                            <FaDiamond />
                                            Schwerpunktleistung
                                        </Text>
                                    </Box>
                                </HStack>

                                <Grid
                                    w="full"
                                    gap={3}
                                    templateColumns={"repeat(2, 1fr)"}
                                    py={4}
                                >
                                    <GridItem>
                                        <VStack gap={0}>
                                            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"cyan.400"}>500+</Text>
                                            <Text fontSize={"sm"}>Gebäude pro Jahr</Text>
                                        </VStack>
                                    </GridItem>
                                    <GridItem>
                                        <VStack gap={0}>
                                            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"cyan.400"}>1.200+</Text>
                                            <Text fontSize={"sm"}>Premium-Pflege</Text>
                                        </VStack>
                                    </GridItem>
                                </Grid>
                                
                                <HStack mt={1} gap={1} color={"bg"} justify={"space-between"} fontSize={"xs"} w="full" pt={3} borderTop={"1px solid"} borderColor={"bg/20"}>
                                    <Text fontWeight={"medium"}>Marktführer-Qualität</Text>
                                    <HStack gap={0.5} color={"yellow.300"}>
                                        {
                                            Array.from({ length: 5 }).map((_, i) => {
                                                return <FaStar key={i} />
                                            })
                                        }
                                    </HStack>
                                </HStack>
                            </VStack>
                        </GridItem>
                        
                    </Grid>

                    <Grid
                        w={"full"}
                        gap={5}
                        templateColumns={{
                            base: "1fr",
                            md: "repeat(2, 1fr)",
                            xl: "repeat(4, 1fr)"
                        }}
                    >
                        <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                             <VStack align={"start"} gap={3}>
                                <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaShieldAlt /></Center>
                                <Heading as={"h5"}>Geld-zurück-Garantie</Heading>
                                <Text opacity={0.7} fontSize={"sm"}>100% Zufriedenheitsgarantie – sollten Sie nicht vollständig zufrieden sein, erstatten wir Ihr Geld zurück.</Text>
                            </VStack>
                        </GridItem>

                        <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                             <VStack align={"start"} gap={3}>
                                <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaClock /></Center>
                                <Heading as={"h5"}>100% Zuverlässigkeit</Heading>
                                <Text opacity={0.7} fontSize={"sm"}>Pünktlichkeit und Verlässlichkeit sind unsere Stärken – wir halten immer unsere Termine ein.</Text>
                            </VStack>
                        </GridItem>

                        <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                             <VStack align={"start"} gap={3}>
                                <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaStar /></Center>
                                <Heading as={"h5"}>Langjährige Erfahrung</Heading>
                                <Text opacity={0.7} fontSize={"sm"}>Jahrelange Expertise in der professionellen Gebäudereinigung Nürnberg, Fürth & Umgebung – Qualität, die Sie spüren.</Text>
                            </VStack>
                        </GridItem>

                        <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                             <VStack align={"start"} gap={3}>
                                <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaHandshake /></Center>
                                <Heading as={"h5"}>Freundlicher Service</Heading>
                                <Text opacity={0.7} fontSize={"sm"}>Kundenorientierter Service mit einem Lächeln – freundliche Mitarbeiter, die Ihre Wünsche verstehen.</Text>
                            </VStack>
                        </GridItem>
                        
                    </Grid>

                    {/* {
                        reviews.length ?
                        <Grid
                            w={"full"}
                            gap={5}
                            templateColumns={{
                                base: "1fr",
                                md: "repeat(2, 1fr)",
                                xl: "repeat(3, 1fr)"
                            }}
                        >
                            {
                                reviews.map((item, i) => {
                                    return <GridItem key={i} textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                    <VStack align={"start"} gap={3}>
                                        <HStack mb={2} gap={0.5} color={"yellow.300"}>
                                            {
                                                Array.from({ length: 5 }).map((_, i) => {
                                                    return <FaStar key={i} />
                                                })
                                            }
                                        </HStack>
                                        
                                        <Text fontStyle={"italic"} fontWeight={"medium"} opacity={0.8} fontSize={"sm"}>
                                            {item.review}
                                        </Text>
                                        <Text fontStyle={"italic"} opacity={0.8} fontSize={"sm"}> - {item.by}</Text>
                                    </VStack>
                                </GridItem>
                                })
                            }
                        </Grid>
                        : ""
                    } */}

                    <VStack gap={2} p={8} px={6} rounded={"md"} w={"full"} className="gradient_light_background_one" color={"bg"}>

                        <Heading as={"h6"} fontSize={"xl"} fontWeight={"bolder"}>Überzeugt? Dann kontaktieren Sie uns jetzt!</Heading>

                        <Text opacity={0.75} fontSize={"sm"} lineHeight={1.5}>Fordern Sie noch heute Ihr kostenloses und unverbindliches Angebot für Gebäudereinigung Nürnberg, Fürth & Umgebung an.</Text>

                        <HStack w={"full"} gap={4} mt={5} flexWrap={"wrap"} justify={"center"}>

                            <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                    {telephone}
                                </Link>
                            </Button>

                            <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                                <Link href={`tel:${mobile.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaMobile /></Text>
                                    {mobile}
                                </Link>
                            </Button>

                            <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                                <Link href={`/#contact`}>
                                    <Text scale={0.75}><FaEnvelope /></Text>
                                     Rückruf anfordern
                                </Link>
                            </Button>

                        </HStack>

                    </VStack>

                </VStack>
            </Box>
        </Box>

        {/* all services section */}
        <Box as="section" bg={"blue.100/20"}>
            <VStack w="full">
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaSuitcase /></Text> UNSERE LEISTUNGEN IN Nürnberg, Fürth & Umgebung</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                    Professionelle 
                    <Text as={"span"} color={"blue.600"}> Gebäudereinigung Nürnberg, Fürth & Umgebung </Text> 
                    für jeden Bedarf
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.65} w={"full"} fontSize={"sm"} opacity={0.65}>
                    Von der Büroreinigung Nürnberg, Fürth & Umgebung bis zur Unterhaltsreinigung – {company_name} bietet maßgeschneiderte Reinigungslösungen mit Garantie.
                </Text>

                <Grid
                    gap={6}
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        xl: "repeat(3, 1fr)"
                    }}
                    my={10}
                >

                    {
                        services.map((service, i) => {
                            return <GridItem asChild key={i}>
                                <Link href={`/${service.name.replaceAll("ü", "u").replaceAll(" ", "-").toLowerCase()}`}>

                                    <VStack _hover={{ bg: "blue.800", color: "bg" }} className="duration-150 group" bg={"bg"} rounded={"lg"} shadow={"md"} gap={3} align={"start"} h="full" p={5}>

                                        <Center w={10} aspectRatio={"square"} className="group-hover:bg-white! group-hover:text-blue-800!" rounded={"md"} bg={"blue.700"} color={"bg"} fontSize={"xl"}>
                                            <service.icon />
                                        </Center>

                                        <Heading as={"h4"} fontWeight={"bolder"} fontSize={"lg"}>{service.name}</Heading>

                                        <Text opacity={0.65} fontSize={"sm"} lineHeight={1.4}>{service.des}</Text>

                                        <List.Root gap={2} variant="plain" align="center" className="group-hover:text-white!" color={"bg.inverted/80"}>
                                    
                                            {
                                                service.features.map((feature, i) => {
                                                    return <List.Item key={i}>
                                                                <List.Indicator asChild color="green.500" className="group-hover:text-white!" scale={0.8}>
                                                                    <FaCheck />
                                                                </List.Indicator>
                                                            <Text fontSize={"sm"}>  
                                                                {feature}
                                                            </Text>
                                                        </List.Item>
                                                })
                                            }
                                        
                                        </List.Root>

                                    </VStack>
                                
                                </Link>
                            </GridItem>
                        })
                    }
                    
                </Grid>
                
                <VStack w={"full"} rounded={"lg"} gap={4} color={"bg"} p={8} className="gradient_dark_background">
                    <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Individuelle Reinigungslösung benötigt?</Heading>
                    <Text opacity={0.75} fontSize={"sm"} lineHeight={1.55} textAlign={"center"}>
                            {company_name} erstellt Ihnen gerne ein maßgeschneidertes Angebot für Ihre spezifischen Reinigungsanforderungen in Nürnberg, Fürth & Umgebung.
                    </Text>

                    <Grid
                        my={4}
                        gap={4}
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        w={"full"}
                    >
                        <GridItem w="full" p={3} px={5} rounded={"md"} bg={"bg"} color={"bg.inverted"}>
                            <VStack gap={1} align={"start"}>
                                <HStack mb={3} gap={3}>
                                    <Center w={5} aspectRatio={"square"} color={"blue.800"}>
                                        <FaBuilding />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"16px"} as={"h6"}>Büroreinigung Nürnberg, Fürth & Umgebung</Heading>
                                </HStack>
                                <Text fontSize={"xs"} opacity={0.65}>Spezialisiert auf Unternehmen, Praxen & Gewerbeflächen</Text>
                                <HStack mt={1} gap={1} color={"blue.700"} fontSize={"xs"}>
                                    <FaCheckCircle />
                                    <Text fontWeight={"medium"}>200+ zufriedene Bürokunden</Text>
                                </HStack>
                            </VStack>
                        </GridItem>

                        <GridItem w="full" p={3} px={5} rounded={"md"} bg={"bg"} color={"bg.inverted"}>
                            <VStack gap={1} align={"start"}>
                                <HStack mb={3} gap={3} gapY={1} flexWrap={"wrap"}>
                                    <Center w={5} aspectRatio={"square"} color={"green.600"}>
                                        <BsBuildingFill />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"16px"} as={"h6"}>Gebäudereinigung Nürnberg, Fürth & Umgebung</Heading>
                                </HStack>
                                <Text fontSize={"xs"} opacity={0.65}>Mit 1.200+ K2 Premium-Produkten für beste Ergebnisse</Text>
                                <HStack mt={1} gap={1} color={"green.600"} fontSize={"xs"}>
                                    <FaCheckCircle />
                                    <Text fontWeight={"medium"}>200+ zufriedene Bürokunden</Text>
                                </HStack>
                            </VStack>
                        </GridItem>
                    </Grid>
                    
                    <HStack gap={4} justify={"center"} w={"full"} flexWrap={"wrap"}>

                        <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={"/#contact"}>
                                <Text scale={0.75}><FaGift /></Text>
                                 Jetzt Angebot sichern
                            </Link>
                        </Button>

                        <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                <Text scale={0.75}><FaPhoneAlt /></Text>
                                {telephone}
                            </Link>
                        </Button>

                    </HStack>

                    <Badge mb={3} shadow={"lg"} color={"bg"} rounded={"full"} px={3} py={1} size={"sm"} className="gradient_light_background_one" textWrap={"wrap !important"} gap={2} mt={2}><Text as={"span"} scale={0.9} mr={0.5}><FaStar /></Text> Kombi-Angebote für Büroreinigung + Gebäudereinigung verfügbar</Badge>

                </VStack>

            </VStack>
        </Box>

        {/* references section */}
        <Box as={"section"} id="references" bg={"blue.100"}>

            <Box>

                <VStack gap={2} textAlign={"center"}>
                    <Badge bg="blue.700" color={"bg"} p={2} px={4} rounded={"full"} gap={2} fontWeight={"bolder"}>
                        <FaCertificate />
                         REFERENZEN & ZERTIFIKATE
                    </Badge>
                    <Heading as={"h5"} fontSize={"3xl"} lineHeight={1.2} my={4}>
                        Vertrauen durch Qualität – 
                        <Text as={"span"} color={"blue.600"}>Unsere Referenzen & Zertifikate</Text>
                    </Heading>
                    <Text opacity={0.75}>Überzeugen Sie sich von unserer Qualität durch die Stimmen unserer Kunden und unsere offiziellen Zertifizierungen</Text>
                </VStack>

                <Grid my={10}
                    w={"full"}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={6}
                >

                    <GridItem asChild h={"full"} p={6} shadow={"md"} rounded={"md"} bg={"bg"}>
                        <VStack gap={5} textAlign={"center"}>
                            <Center w={14} fontSize={"xl"} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"}>
                                <FaBuilding />
                            </Center>
                            <Heading as={"h6"} lineHeight={1.35} fontSize={"lg"} fontWeight={"bolder"}>CBRE GWS IFM Industrie GmbH</Heading>
                            <Text mt={-3.5} fontSize={"sm"} opacity={0.75}>Essen</Text>

                            <Box textAlign={"left"} p={4} rounded={"md"} fontSize={"15px"} pos="relative" className="gradient_light_background_two">
                                <Text color={"blue.600"} fontSize={"2xl"} pos={"absolute"} left={-3} top={-3}><FaQuoteLeft /></Text>
                                <Text>
                                    Die Popp Dienstleistungen Gebäudedienste GmbH hat sich durch Fachkompetenz, Engagement und Flexibilität ausgezeichnet.
                                </Text>
                                <HStack gap={1} fontSize={"sm"} color={"blue.600"} mt={2}>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => {
                                            return <FaStar key={i} />
                                        })
                                    }
                                </HStack>
                            </Box>

                        </VStack>
                    </GridItem>

                    <GridItem asChild h={"full"} p={6} shadow={"md"} rounded={"md"} bg={"bg"}>
                        <VStack gap={5} textAlign={"center"}>
                            <Center w={14} fontSize={"xl"} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"}>
                                <MdRestaurant />
                            </Center>
                            <Heading as={"h6"} lineHeight={1.35} fontSize={"lg"} fontWeight={"bolder"}>GenussZeit Catering & Services GmbH</Heading>
                            <Text mt={-3.5} fontSize={"sm"} opacity={0.75}>Nürnberg, Fürth & Umgebung</Text>

                            <Box textAlign={"left"} p={4} rounded={"md"} fontSize={"15px"} pos="relative" className="gradient_light_background_two">
                                <Text color={"blue.600"} fontSize={"2xl"} pos={"absolute"} left={-3} top={-3}><FaQuoteLeft /></Text>
                                <Text>
                                    Mit voller Überzeugung sprechen wir eine uneingeschränkte Weiterempfehlung aus.
                                </Text>
                                <HStack gap={1} fontSize={"sm"} color={"blue.600"} mt={2}>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => {
                                            return <FaStar key={i} />
                                        })
                                    }
                                </HStack>
                            </Box>

                        </VStack>
                    </GridItem>

                    <GridItem asChild h={"full"} p={6} shadow={"md"} rounded={"md"} className="gradient_dark_background" color={"bg"}>
                        <VStack gap={5} textAlign={"center"}>
                            <Center w={14} fontSize={"xl"} aspectRatio={"square"} rounded={"full"} bg={"bg"} color={"blue.600"}>
                                <FaBuilding />
                            </Center>
                            <Heading as={"h6"} lineHeight={1.35} fontSize={"lg"} fontWeight={"bolder"}>ALEGRIA-Zertifikat</Heading>
                            <Text mt={-3.5} fontSize={"sm"} opacity={0.75}>Offiziell zertifiziert</Text>

                            <Box textAlign={"left"} p={4} rounded={"md"} fontSize={"15px"} pos="relative" className="gradient_light_background_one">
                                <Text color={"bg"} fontSize={"2xl"} pos={"absolute"} left={-3} top={-3}><FaQuoteLeft /></Text>
                                <Text>
                                    {owner_name}, Geschäftsführer der {company_name}, ist offiziell ALEGRIA-zertifizierter Vorarbeiter für professionelle Gebäudereinigung.
                                </Text>
                                <HStack gap={1} fontSize={"sm"} color={"bg"} mt={2}>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => {
                                            return <FaStar key={i} />
                                        })
                                    }
                                </HStack>
                            </Box>

                            <Badge gap={2} rounded={"full"} bg={"bg/15"} color={"bg"} fontWeight={"semibold"} px={3} py={2}> <FaCheckCircle /> Zertifizierte Qualität</Badge>

                        </VStack>
                    </GridItem>

                </Grid>

                <Box shadow={"md"} bg={"bg"} p={12} rounded={"md"} my={6}>
                    <Heading as={"h6"} fontSize={"2xl"} mb={4} textAlign={"center"}>Unsere Qualitätsversprechen</Heading>

                    <Grid 
                        gap={6}
                        gapY={12}
                        mt={16}
                        textAlign={"center"}
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                    >

                        <VStack gap={1.5}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                                <MdSchool />
                            </Center>
                            <Text mt={2} fontWeight={"bolder"}>Zertifizierte Fachkompetenz</Text>
                            <Text opacity={0.65} fontSize={"sm"}>Ausgebildete und geprüfte Reinigungsprofis</Text>
                        </VStack>

                        <VStack gap={1.5}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                                <FaHandshake />
                            </Center>
                            <Text mt={2} fontWeight={"bolder"}>Langjährige Partnerschaften</Text>
                            <Text opacity={0.65} fontSize={"sm"}>Vertrauen durch jahrelange Zusammenarbeit</Text>
                        </VStack>

                        <VStack gap={1.5}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                                <FaShieldVirus />
                            </Center>
                            <Text mt={2} fontWeight={"bolder"}>Geprüfte Hygiene- & Sicherheitsstandards</Text>
                            <Text opacity={0.65} fontSize={"sm"}>Nach HACCP und allen relevanten Normen</Text>
                        </VStack>

                        <VStack gap={1.5}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                                <ImBubbles />
                            </Center>
                            <Text mt={2} fontWeight={"bolder"}>Transparente Kommunikation & Servicequalität</Text>
                            <Text opacity={0.65} fontSize={"sm"}>Klare Absprachen und verlässliche Leistung</Text>
                        </VStack>

                    </Grid>
                </Box>

                <HStack align={"start"} w={"full"} justify={"center"} gap={2} color={"bg.inverted/65"}>
                    <Text color={"blue.500"} mt={1}><FaCheckCircle /></Text>
                    <Text fontSize={"sm"}>Über {satisfied_customers} zufriedene Kunden vertrauen auf unsere Qualität</Text>
                </HStack>

                <HStack mt={5} flexWrap={"wrap"} gapY={5} align={"start"} w={"full"} justify={"center"} gap={2}>
                    <HStack align={"start"} justify={"center"} gap={2} color={"bg.inverted/65"}>
                        <Text color={"blue.500"} mt={1}><FaAward /></Text>
                        <Text fontSize={"sm"}>Zertifizierte Gebäudereinigung Nürnberg, Fürth & Umgebung</Text>
                    </HStack>

                    <HStack align={"start"} justify={"center"} gap={2} color={"bg.inverted/65"}>
                        <Text color={"yellow.500"} mt={1}><FaStar /></Text>
                        <Text fontSize={"sm"}>Top-bewertete Reinigungsfirma Nürnberg, Fürth & Umgebung</Text>
                    </HStack>

                    <HStack align={"start"} justify={"center"} gap={2} color={"bg.inverted/65"}>
                        <Text color={"blue.500"} mt={1}><FaClipboardCheck /></Text>
                        <Text fontSize={"sm"}>Geprüfte Referenzen</Text>
                    </HStack>
                </HStack>

            </Box>

        </Box>

        {/* reviews */}
        <Box as={"section"} py={24}>
            <VStack gap={2} w={"full"}>
                <Heading fontSize={"3xl"}>Was unsere Kunden sagen</Heading>
                <HStack mt={2} gap={3}>
                    <Stars size="2xl" />
                    <Text mt={1}>( {reviews?.length} Bewertungen )</Text>
                </HStack>

                <Grid
                    mt={14}
                    gap={5}
                    w={"full"}
                    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                >
                    
                    {
                        reviews?.length ? reviews.map((review, i) => {
                            return <GridItem key={i} asChild><ReviewCard review={review} /></GridItem>
                        })
                        : ""
                    }

                </Grid>
            </VStack>                
        </Box>

        {/* your advantages section */}
        <Box as={"section"}>

            <Box>
                <Flex gap={12} align={"center"} flexDir={{ base: "column", lg: "row" }}>

                <Box w={{ base: "full", lg: "50%" }} pos={"relative"}>

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} right={0} top={{ base: "80%", lg: "25%" }} translateY={"-50%"} zIndex={-1}></Box>

                    <Image alt="" src="./assets/home-advantages-section-banner.jpg" w={"90%"} mx={{ base: "auto", lg: "none" }} h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1}>
                            <FaAward />
                            IHRE VORTEILE
                        </Badge>
                        <Heading as={"h1"} fontSize={"2xl"} fontWeight={"bolder"}
                        >Wir reinigen Nürnberg, Fürth & Umgebung – professionell, persönlich, präzise.</Heading>

                        <Text opacity={0.55} my={3}>
                            Mit Popp Dienstleistungen Gebäudedienste setzen Sie auf Qualität, Verlässlichkeit und moderne Reinigungslösungen für jede Herausforderung.
                        </Text>

                        <Grid
                            gapX={6}
                            gapY={4}
                            templateColumns={{ base: "1fr", "2xl": "repeat(2, 1fr)" }}
                            fontSize={"sm"}
                        >
                            <GridItem asChild>
                                <HStack w="full" gap={2} align={"start"}>
                                    <Center color={"bg"} minW={7} aspectRatio={"square"} rounded={"md"} bg={"green.700"}>
                                        <FaCertificate />
                                    </Center>
                                    <VStack align={"start"} w={"full"}>
                                        <Text fontWeight={"bolder"}>Geschulte Mitarbeiter</Text>
                                        <Text opacity={0.55}>
                                            Alle unsere Reinigungskräfte sind professionell ausgebildet und regelmäßig geschult für beste Ergebnisse.
                                        </Text>
                                    </VStack>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack w="full" gap={2} align={"start"}>
                                    <Center color={"bg"} minW={7} aspectRatio={"square"} rounded={"md"} bg={"green.700"}>
                                        <FaShieldAlt />
                                    </Center>
                                    <VStack align={"start"} w={"full"}>
                                        <Text fontWeight={"bolder"}>Vollversichert</Text>
                                        <Text opacity={0.55}>
                                            Haftpflicht- und Betriebshaftpflichtversicherung für Ihre Sicherheit und unsere Verantwortung.
                                        </Text>
                                    </VStack>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack w="full" gap={2} align={"start"}>
                                    <Center color={"bg"} minW={7} aspectRatio={"square"} rounded={"md"} bg={"green.700"}>
                                        <FaEuroSign />
                                    </Center>
                                    <VStack align={"start"} w={"full"}>
                                        <Text fontWeight={"bolder"}>Transparente Preise</Text>
                                        <Text opacity={0.55}>
                                            Faire und transparente Preisgestaltung ohne versteckte Kosten – Sie wissen immer, was Sie bezahlen.
                                        </Text>
                                    </VStack>
                                </HStack>
                            </GridItem>
                        </Grid>
                        
                        <HStack gap={2} mt={5} flexWrap={"wrap"}>

                            <Button asChild colorPalette={"blue"} className="p-2! h-9!" rounded={"lg"}>
                                <Link href={"/uber-uns"}>
                                    <Text scale={0.75}><FaInfoCircle /></Text>
                                     Mehr über uns erfahren
                                </Link>
                            </Button>
                            
                            <Button asChild color={"blue.600"} bg={"bg"} border={"1px solid"} borderColor={"blue.600"} className="p-2! h-9!" rounded={"lg"}>
                                <Link href={`/#contact`}>
                                    <Text scale={0.75}><FaHandshake /></Text>
                                     Termin vereinbaren
                                </Link>
                            </Button>

                        </HStack>

                        <Separator w={"full"} my={3} borderColor={"bg.inverted/5"} />

                        <HStack gap={3} fontSize={"13px"}>

                            <HStack gap={3} align={"start"} border={"1px solid"} borderColor={"bg.inverted/5"} p={2} rounded={"md"}>
                                <Text color={"blue.600"} mt={1} ml={1}><FaStar /></Text>
                                <VStack align={"start"} gap={0.5}>
                                    <Text fontWeight={"medium"}>Nürnberg, Fürth & Umgebung</Text>
                                    <Text fontWeight={"medium"} opacity={0.4}>Regional tätig</Text>
                                </VStack>
                            </HStack>

                            <HStack gap={3} align={"start"} border={"1px solid"} borderColor={"bg.inverted/5"} p={2} rounded={"md"}>
                                <Text color={"blue.600"} mt={1} ml={1}><FaShieldAlt /></Text>
                                <VStack align={"start"} gap={0.5}>
                                    <Text fontWeight={"medium"}>Versichert</Text>
                                    <Text fontWeight={"medium"} opacity={0.4}>Vollhaftung</Text>
                                </VStack>
                            </HStack>

                        </HStack>

                    </VStack>
                </Box>

            </Flex>

            <Heading as="h5" textAlign={"center"} mt={12} fontWeight={"bolder"} fontSize={"2xl"} mb={14}>So einfach geht&apos;s</Heading>

            <Grid
                gap={12}
                templateColumns={{
                    base: "1fr",
                    xl: "repeat(2, 1fr)"
                }}
            >

                <GridItem asChild>
                    <VStack gap={2}>
                        <Center w={10} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"} fontWeight={"bolder"}>
                            <Text>1</Text>
                        </Center>

                        <Text fontWeight={"bolder"}>Anfrage</Text>

                        <Text opacity={0.65} textAlign={"center"}>Kontaktieren Sie uns per Telefon, E-Mail oder über unser Kontaktformular</Text>
                    </VStack>
                </GridItem>

                <GridItem asChild>
                    <VStack gap={2}>
                        <Center w={10} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"} fontWeight={"bolder"}>
                            <Text>2</Text>
                        </Center>

                        <Text fontWeight={"bolder"}>Beratung</Text>

                        <Text opacity={0.65} textAlign={"center"}>Kostenlose Beratung und Besichtigung vor Ort für ein maßgeschneidertes Angebot</Text>
                    </VStack>
                </GridItem>

                <GridItem asChild>
                    <VStack gap={2}>
                        <Center w={10} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"} fontWeight={"bolder"}>
                            <Text>3</Text>
                        </Center>

                        <Text fontWeight={"bolder"}>Angebot</Text>

                        <Text opacity={0.65} textAlign={"center"}>Sie erhalten Ihr transparentes Angebot innerhalb von 24 Stunden</Text>
                    </VStack>
                </GridItem>

                <GridItem asChild>
                    <VStack gap={2}>
                        <Center w={10} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"} fontWeight={"bolder"}>
                            <Text>4</Text>
                        </Center>

                        <Text fontWeight={"bolder"}>Reinigung</Text>

                        <Text opacity={0.65} textAlign={"center"}>Professionelle Durchführung der Reinigung zum vereinbarten Termin</Text>
                    </VStack>
                </GridItem>

            </Grid>
            </Box>

        </Box>

        {/* contact sectin */}

        <Box as={"section"} className="gradient_light_background_one" id="contact">
            <VStack>

                <Badge color={"bg"} bg={"bg/15"} fontWeight={"semibold"} gap={2} p={2} rounded={"full"}>
                    <FaPhoneAlt/>
                     JETZT KONTAKT AUFNEHMEN
                </Badge>
                
                <Heading as={"h2"} fontSize={"3xl"} color={"bg"} fontWeight={"bolder"} textAlign={"center"} my={3}>Bereit für perfekte Sauberkeit?</Heading>

                <Text textAlign={"center"} color={"bg"} maxW={"700px"}>
                    Lassen Sie uns Ihnen zeigen, wie professionelle Reinigung aussieht. Kontaktieren Sie uns noch heute für Ihr kostenloses Angebot!
                </Text>

                <Grid
                    my={10}
                    gap={6}
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    w={"full"}
                >

                    <GridItem asChild>
                        <Box w="full" bg={"bg"} rounded={"md"} shadow={"md"} p={4}>
                            <Center w={10} aspectRatio={"square"} rounded={"full"} bg={"blue.700"} color={"bg"}>
                                <FaPhoneAlt />
                            </Center>

                            <Text fontWeight={"bolder"} mt={4}>Anrufen</Text>
                            <Text my={2} fontSize={"sm"} opacity={0.65}>Direkter Kontakt für schnelle Beratung</Text>

                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={`tel:${mobile.replaceAll(" ", "")}`}>
                                    {mobile}
                                </Link>
                            </Button>

                        </Box>
                    </GridItem>

                     <GridItem asChild>
                        <Box w="full" bg={"bg"} rounded={"md"} shadow={"md"} p={4}>
                            <Center w={10} aspectRatio={"square"} rounded={"full"} bg={"blue.700"} color={"bg"}>
                                <FaEnvelope />
                            </Center>

                            <Text fontWeight={"bolder"} mt={4}>E-mail</Text>
                            <Text my={2} fontSize={"sm"} opacity={0.65}>Schriftliche Anfrage mit Details</Text>

                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={`mailto:${official_mail}`}>
                                    Kontaktformular
                                </Link>
                            </Button>

                        </Box>
                    </GridItem>

                     <GridItem asChild colSpan={{ base: "auto", md: 2, lg: "auto" }}>
                        <Box w="full" bg={"bg"} rounded={"md"} shadow={"md"} p={4}>
                            <Center w={10} aspectRatio={"square"} rounded={"full"} bg={"blue.700"} color={"bg"}>
                                <FaWhatsapp />
                            </Center>

                            <Text fontWeight={"bolder"} mt={4}>Whatsapp</Text>
                            <Text my={2} fontSize={"sm"} opacity={0.65}>Einfach und unkompliziert</Text>

                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={`https://wa.me/${whatsAppContact}`} target="_blank">
                                    Whatsapp chat
                                </Link>
                            </Button>

                        </Box>
                    </GridItem>

                </Grid>

                {/* contact form */}

                <Box asChild w={"full"} p={{ base: 3, md: 5 }} rounded={"md"} bg={"bg"}>
                    <form onSubmit={handleContact} ref={formRef}>

                        <Heading as={"h5"} mb={5}>Schnellanfrage stellen</Heading>

                        <Grid
                            gap={3}
                            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                        >
                            
                            <GridItem asChild>
                                <Input aria-required type="text" name="name" required placeholder="Ihr Name" />
                            </GridItem>

                            <GridItem asChild>
                                <Input aria-required type="email" name="email" required placeholder="Ihre E-Mail" />
                            </GridItem>

                        </Grid>

                        <Grid
                            mt={3}
                            gap={3}
                            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                        >
                            
                            <GridItem asChild>
                                <Input aria-required type="tel" name="phone" required placeholder="Telefonnummer" />
                            </GridItem>

                            <GridItem asChild>
                                <select aria-required name="service" className=" w-full border! rounded-md py-1.5! border-black/10! text-sm! px-2.5! outline-black/30! h-10!">
                                    {
                                        contactServiceOptions.map((service, i) => {
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
                            placeholder="Ihre Nachricht / Besondere Wünsche"
                            name="message"
                            required
                        >
                            
                        </Textarea>
                        
                        <Button type="submit" colorPalette={"blue"} w="full" rounded={"lg"}>
                            <Text scale={0.75}><BsSendFill /></Text>
                            Kostenlose Beratung anfordern
                        </Button>

                    </form>
                </Box>

                <HStack mt={8} flexWrap={"wrap"} gap={8} justify={"center"}>

                    <VStack gap={2} color={"bg"}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"}>
                            <FaClock />
                        </Center>
                        <Text fontSize={"sm"} fontWeight={"bolder"}>24h Antwort</Text>
                    </VStack>

                    <VStack gap={2} color={"bg"}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"}>
                            <FaEuroSign />
                        </Center>
                        <Text fontSize={"sm"} fontWeight={"bolder"}>Kostenlos</Text>
                    </VStack>

                    <VStack gap={2} color={"bg"}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"}>
                            <FaHandshake />
                        </Center>
                        <Text fontSize={"sm"} fontWeight={"bolder"}>Unverbindlich</Text>
                    </VStack>

                    <VStack gap={2} color={"bg"}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.800"} color={"bg"}>
                            <FaLocationPin />
                        </Center>
                        <Text fontSize={"sm"} fontWeight={"bolder"}>Nürnberg, Fürth & Umgebung</Text>
                    </VStack>

                </HStack>

            </VStack>
        </Box>

        </>
    );
};

export default Page;
