'use client'

import Counter from "@/components/counter.component";
import SectionEndDesign from "@/components/design.component";
import Faq from "@/components/faq.component";
import Loader from "@/components/loader.component";
import { awards_won, company_name, medical_facilites, years_of_experiense } from "@/data/about";
import { address, mobile, official_mail, telephone } from "@/data/contact";
import hospitalCleaningFAQs from "@/data/hospital_cleaning_faqs.list";
import hospitalCleaningServices from "@/data/hospital_cleaning_services.list";
import { establishmentsList, hospitalCleaninServicesList, locationsList } from "@/data/hospital_contact_form_datalist";
import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { FaAmbulance, FaAward, FaCheck, FaClock, FaFirstAid, FaLock, FaMobileAlt, FaPhoneAlt, FaProcedures, FaQuestionCircle, FaShieldAlt, FaStar, FaStethoscope } from "react-icons/fa";
import { FaCalendarCheck, FaCertificate, FaCheckDouble, FaClipboardCheck, FaClipboardList, FaDoorOpen, FaEnvelope, FaFlask, FaHandshake, FaHospital, FaLocationDot, FaMedal, FaMessage, FaShieldVirus, FaUserDoctor, FaUserGraduate } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

const HospitalCleaningServicePage = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!formRef.current){ return }

        const formData = new FormData(formRef.current)

        if(!formRef.current.establishment.value.length){ return alert("Select establishment") }
        if(!formRef.current.location.value.length){ return alert("Select location") }
        
        try {
            setLoading(true);
            const res = await fetch("https://formspree.io/f/mkorlynk", {
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
            {loading && <Loader />}

            {/* hero section */}
            <Box as={"section"} pos={"relative"} className="gradient_mix_three md:py-32!">
    
                <Flex gap={12} gapY={24} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>
    
                    <Box  w={{ base: "full", lg: "50%" }} color={"bg"}>
                        <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>
    
                            <Badge color={"bg"} bg={"bg/15"} className="backdrop_blur" rounded={"full"} px={4} py={2} fontSize={"14px"} gap={2}> <Text color={"green.500"}><FaCertificate /></Text> RKI & HACCP ZERTIFIZIERT</Badge>
                            <Heading as={"h1"} color={"bg"} my={3} fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }} lineHeight={1.25} fontWeight={"bolder"}
                            ><Text as={"span"} color={"green.400"}>Krankenhausreinigung</Text>  Nürnberg, Fürth & Umgebung</Heading>
    
                            <Text my={3}>
                                Professionelle medizinische Reinigung nach höchsten Hygienestandards für Kliniken, Praxen und Pflegeeinrichtungen in  Nürnberg, Fürth & Umgebung & Umgebung
                            </Text>
    
                            <Grid
                                gapX={6}
                                gapY={3}
                                templateColumns={{ base: "1fr", md:"repeat(2, 1fr)" }}
                                fontSize={"sm"}
                            >
                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"green.500"}>
                                            <Text><FaShieldAlt /></Text>
                                        </Center>
                                        <Text>RKI-konforme Desinfektion</Text>
                                    </HStack>
                                </GridItem>
    
                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"green.500"}>
                                            <Text><FaProcedures /></Text>
                                        </Center>
                                        <Text>OP-Reinigung Expertise</Text>
                                    </HStack>
                                </GridItem>
    
                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"green.500"}>
                                            <Text><FaClock /></Text>
                                        </Center>
                                        <Text>24/7 Notfallreinigung</Text>
                                    </HStack>
                                </GridItem>
    
                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"green.500"}>
                                            <Text><FaUserGraduate /></Text>
                                        </Center>
                                        <Text>Geschultes Fachpersonal</Text>
                                    </HStack>
                                </GridItem>
    
                            </Grid>
                            
                            <HStack gap={2} gapY={3} mt={5} flexWrap={"wrap"}>
    
                                <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                    <Link href={"#contact"}>
                                        <Text scale={0.75}><FaCalendarCheck /></Text>
                                        Kostenlose Hygienebesichtigung
                                    </Link>
                                </Button>
                                
                                <Button asChild bg={"bg/15"} className="backdrop_blur" color={"bg"} border={"1px solid"} borderColor={"bg"} rounded={"lg"}>
                                    <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                        <Text scale={0.75}><FaPhoneAlt /></Text>
                                        {telephone}
                                    </Link>
                                </Button>
    
                            </HStack>

                            <Separator w={"full"} my={3} />
    
                            <HStack gap={3} flexWrap={"wrap"} mt={1} fontSize={"13px"}>
    
                                <HStack gap={2} align={"start"}>
                                    <Text color={"yellow.200"} mt={1}><FaAward /></Text>
                                    <Text fontWeight={"medium"}>{awards_won}+  Auszeichnungen</Text>
                                </HStack>
    
                                <HStack gap={2} align={"start"}>
                                    <Text color={"yellow.200"} mt={1}><FaHospital /></Text>
                                    <Text fontWeight={"medium"}>{years_of_experiense}+ Jahre Erfahrung</Text>
                                </HStack>

                                <HStack gap={2} align={"start"}>
                                    <Text color={"yellow.200"} mt={1}><FaHandshake /></Text>
                                    <Text fontWeight={"medium"}>{medical_facilites}+ medizinische Einrichtungen</Text>
                                </HStack>
    
                            </HStack>
    
                        </VStack>
                    </Box>
    
                    <Box w={{ base: "full", lg: "50%" }} pos={"relative"}>
    
                        <Box pos={"absolute"} bg={"blue.300"} zIndex={1} p={3} bottom={-10} left={-3} rounded={"md"} color={"blue.700"} shadow={"sm"} rotate={"5deg"}>
                            <Text fontWeight={"bolder"} fontSize={"lg"}>{years_of_experiense}+</Text>
                            <Text fontSize={"sm"}>Jahre Erfahrung</Text>
                        </Box>

                        <VStack rounded={"lg"} p={4} bg={"bg/15"} className="backdrop_blur" shadow={"sm"} gap={3}>
                            
                            <VStack w={"full"} bg={"blue.50"} rounded={"md"} p={3.5} color={"green.600"}>

                                <Text fontSize={"4xl"}><FaHospital /></Text>

                                <Text textAlign={"center"} fontWeight={"medium"} fontSize={"sm"}>Krankenhausreinigung <br /> nach höchsten Standards</Text>

                            </VStack>

                            <Grid
                                templateColumns={"repeat(2, 1fr)"}
                                gap={3}
                                w={"full"}
                            >

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaCertificate /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>HACCP</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>Zertifiziert</Text>

                                </VStack>

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaShieldVirus /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>RKI</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>Standard</Text>

                                </VStack>

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaUserDoctor /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>DIN EN 1500</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>konform</Text>

                                </VStack>

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaMedal /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>ISO 9001</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>Qualität</Text>

                                </VStack>

                            </Grid>

                        </VStack>

                    </Box>
    
                </Flex>

            </Box>

            {/* range of services section */}
            <Box as="section">
                <VStack w="full">
                    <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaStethoscope /></Text>  Spezialisierte Medizinische Reinigung</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} lineHeight={1.4}>
                        Unsere  
                        <Text as={"span"} color={"blue.600"}> Krankenhausreinigung  Nürnberg, Fürth & Umgebung </Text> 
                         Leistungen
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                        Von der <b>OP-Reinigung  Nürnberg, Fürth & Umgebung</b> bis zur <b>Praxisreinigung  Nürnberg, Fürth & Umgebung</b> – {company_name} bietet maßgeschneiderte Reinigungslösungen für alle Bereiche des Gesundheitswesens in  Nürnberg, Fürth & Umgebung, Schwabing, Sendling, Giesing und dem gesamten Münchner Umland.
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
                            hospitalCleaningServices.map((service, i) => {
                                return <GridItem key={i}>
    
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
                                </GridItem>
                            })
                        }
                        
                    </Grid>
    
                    <VStack gap={6} w={"full"} color={"bg"} rounded={"md"} className="gradient_dark_background" py={12} px={6}>
    
                        <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Maßgeschneiderte Lösung für Ihre medizinische Einrichtung?</Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                            Unsere <b>Reinigungsfirma Klinik</b> Expertise umfasst alle Bereiche der medizinischen Reinigung. Kontaktieren Sie uns für eine individuelle Beratung und kostenlose Hygienebesichtigung.
                        </Text>
    
                        <HStack gap={4} justify={"center"} gapY={3} mt={5} flexWrap={"wrap"}>
    
                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={"#contact"}>
                                    <Text scale={0.75}><FaCalendarCheck /></Text>
                                    Kostenlose Hygienebesichtigung
                                </Link>
                            </Button>
                            
                            <Button asChild bg={"bg/15"} colorPalette={"blue"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                    {telephone}
                                </Link>
                            </Button>

                        </HStack>
    
                    </VStack>
    
                </VStack>
            </Box>

            {/* details section */}
            <Box as="section" overflowX={"hidden"} bg={"blue.100/30"}>
                <VStack w="full">
                    <Badge mb={3} shadow={"lg"} color={"bg"} className="gradient_dark_background" rounded={"full"} px={3} py={1} size={"lg"} textWrap={"wrap"} gap={2}><Text as={"span"} scale={0.9} mr={0.5}><FaClipboardCheck /></Text>   Spezialisiert auf medizinische Einrichtungen</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md:"3xl" }} lineHeight={1.4}>
                        Praxisreinigung – Hygienische Sauberkeit & Dokumentation 
                    </Heading>
                    <Text maxW={"500px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                        Mit speziell geschultem Personal garantieren wir die Einhaltung aller hygienischen Standards.
                    </Text>
                    
                    <Flex mt={20} gap={12} gapY={20} w={"full"} align={"center"} flexDir={{ base: "column-reverse", xl: "row" }}>
    
                    <Box  w={{ base: "full", xl: "50%" }}>
                        <VStack gap={5} align={"start"} w={"full"} mx={"auto"}>
    
                            <VStack w={"full"} align={"start"} gap={6}>
    
                                <HStack gap={4}>
                                    <Center bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                        <FaDoorOpen />
                                    </Center>
                                    <Text>
                                        Reinigung aller Praxisbereiche – Behandlungsräume, Empfang, Wartezimmer und Sanitärbereiche
                                    </Text>
                                </HStack>
    
                                <HStack gap={4}>
                                    <Center bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                        <FaShieldVirus />
                                    </Center>
                                    <Text>
                                        RKI-konforme Desinfektion von Kontaktflächen und Medizingeräten
                                    </Text>
                                </HStack>
    
                                <HStack gap={4}>
                                    <Center bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                        <FaCalendarCheck />
                                    </Center>
                                    <Text>
                                        Einsatz strukturierter Reinigungs- und Desinfektionspläne
                                    </Text>
                                </HStack>
    
                                <HStack gap={4}>
                                    <Center bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                        <IoDocumentTextOutline />
                                    </Center>
                                    <Text>
                                        Lückenlose Dokumentation aller Prozesse zur Nachverfolgbarkeit
                                    </Text>
                                </HStack>
    
                            </VStack>
    
                            <HStack className="gradient_dark_background" boxShadow={"3.5px 3.5px 0 0 #608aff, -3.5px -3.5px 0 0 #41d7f9"} color={"bg"} w={"full"} rounded={"md"} p={6} align={"start"} gap={6} mt={8}>
    
                                <Text color={"blue.300"} fontSize={"4xl"}><FaCheckDouble /></Text>
    
                                <VStack align={"start"} w={"full"}>
                                    
                                    <Heading as={"h5"}>Ihre Hygiene-Nachweispflicht erfüllt</Heading>
                                    <Text fontSize={"sm"}>Damit erfüllen Sie Ihre Hygiene-Nachweispflicht ohne eigenen Aufwand.</Text>
    
                                </VStack>
    
                            </HStack>

                            <HStack gap={4} w={"full"} justify={{ base: "center", xl: "start" }} gapY={3} mt={5} flexWrap={"wrap"}>
    
                                <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                    <Link href={"#contact"}>
                                        <Text scale={0.75}><FaCalendarCheck /></Text>
                                        Beratungstermin vereinbaren
                                    </Link>
                                </Button>
                                
                                <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                    <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                        <Text scale={0.75}><FaPhoneAlt /></Text>
                                        {telephone}
                                    </Link>
                                </Button>

                            </HStack>
    
                        </VStack>
                    </Box>
    
                    <Box w={{ base: "full", xl: "50%" }} pos={"relative"}>
    
                        <HStack zIndex={1} pos={"absolute"} bg={"bg"} p={3} px={5} bottom={{ base: 80, md: 32, xl: 36 }} left={-3} rounded={"md"} gap={4} shadow={"sm"}>
                            <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"3xl"}><FaHospital /></Text>
                            <Text fontSize={"sm"}>
                                <Text as={"span"} display={"block"} fontWeight={"bolder"} fontSize={"2xl"}>100%</Text>
                                RKI-konform
                            </Text>
                        </HStack>
    
                        <HStack zIndex={1} pos={"absolute"} bg={"bg"} p={3} px={5} top={-5} right={-3} rounded={"md"} gap={4} shadow={"sm"}>
                            <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"3xl"}><FaClipboardList /></Text>
                            <Text fontSize={"sm"}>
                                <Text as={"span"} display={"block"} fontWeight={"bolder"} fontSize={"2xl"}>24/7</Text>
                                Dokumentiert
                            </Text>
                        </HStack>
    
                        <Box w={"90%"} mx="auto" pos={"relative"}>
                            <Image alt="" src="./assets/hospital-banner.png" w={"full"}  h={{base: "auto", xl: "500px"}} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />

                            <Grid
                                gap={5}
                                w={"full"}
                                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                                mt={5}
                            >

                                <VStack bg={"bg"} rounded={"md"} shadow={"sm"} p={5}>
                                    <Text fontSize={"xl"} color={"blue.700"}><FaUserDoctor /></Text>
                                    <Text textAlign={"center"} fontWeight={"bolder"} fontSize={"sm"}>Geschultes Personal</Text>
                                </VStack>

                                <VStack bg={"bg"} rounded={"md"} shadow={"sm"} p={5}>
                                    <Text fontSize={"xl"} color={"blue.700"}><FaFlask /></Text>
                                    <Text textAlign={"center"} fontWeight={"bolder"} fontSize={"sm"}>Zertifizierte Mittel</Text>
                                </VStack>

                                <VStack bg={"bg"} rounded={"md"} shadow={"sm"} p={5}>
                                    <Text fontSize={"xl"} color={"blue.700"}><FaCertificate /></Text>
                                    <Text textAlign={"center"} fontWeight={"bolder"} fontSize={"sm"}>ISO-Standards</Text>
                                </VStack>

                            </Grid>

                        </Box>
                    </Box>
    
                </Flex>
                </VStack>
            </Box>

            <Box as={"section"} pos="relative" overflow={"hidden"} className="gradient_dark_background" color={"bg"}>

                <SectionEndDesign />
                
                <Box w={"full"} pos={"relative"} zIndex={1}>
                    <VStack textAlign={"center"} gap={10} w="100%">

                        <Badge bg={"bg"} color={"blue.600"} fontWeight={"bolder"} textTransform={"uppercase"} py={2} px={3} rounded={"full"}>
                            <FaShieldAlt />
                            VERTRAUEN & EXPERTISE IN  Nürnberg, Fürth & Umgebung
                        </Badge>
                        
                        <Heading as={"h4"} fontSize={{ base: "3xl", md: "4xl" }} lineHeight={1.5} fontWeight={"bolder"}>Warum <Text as={"span"} color={"cyan.400"}>medizinische Einrichtungen </Text> in  Nürnberg, Fürth & Umgebung uns wählen</Heading>

                        <Text>Seit über 15 Jahren vertrauen Krankenhäuser, Kliniken und Praxen in  Nürnberg, Fürth & Umgebung, Schwabing, Sendling, Giesing, Maxvorstadt und dem gesamten Münchner Umland auf unsere professionelle <b>Krankenhausreinigung  Nürnberg, Fürth & Umgebung</b>.</Text>
    
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
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={medical_facilites}  suffix="+"/></Text>
                                <Text fontSize={"sm"} textAlign={"center"}>Medizinische Einrichtungen</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>in  Nürnberg, Fürth & Umgebung betreut</Text>
                            </GridItem>
    
                            <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}>24/7</Text>
                                <Text fontSize={"sm"} textAlign={"center"}>Notfallservice</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>rund um die Uhr</Text>
                            </GridItem>

                            <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}>100%</Text>
                                <Text fontSize={"sm"} textAlign={"center"}>RKI-konform</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>zertifizierte Verfahren</Text>
                            </GridItem>

                            <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={years_of_experiense} suffix="+" /></Text>
                                <Text fontSize={"sm"} textAlign={"center"}>Jahre Erfahrung</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>im Gesundheitswesen</Text>
                            </GridItem>

                        </Grid>
    
                        <Grid
                            w={"full"}
                            gap={5}
                            templateColumns={{
                                base: "1fr",
                                md: "repeat(2, 1fr)",
                                lg: "repeat(3, 1fr)"
                            }}
                        >
                            <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <VStack gap={4} align={"start"}>
                                    <Center w={10} rounded={"md"} aspectRatio={"square"} color={"bg"} shadow={"lg"} bg={"blue.800"}>
                                        <FaCertificate />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"xl"} fontWeight={"bolder"} as={"h6"}>RKI & HACCP Zertifiziert</Heading>
                                    <Text fontSize={"sm"} lineHeight={1.65}>
                                    Alle unsere Reinigungsverfahren entsprechen den strengsten Standards des Robert Koch-Instituts und sind HACCP-zertifiziert.
                                    </Text>
                                    
                                </VStack>
                            </GridItem>

                            <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <VStack gap={4} align={"start"}>
                                    <Center w={10} rounded={"md"} aspectRatio={"square"} color={"bg"} shadow={"lg"} bg={"blue.800"}>
                                        <FaUserDoctor />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"xl"} fontWeight={"bolder"} as={"h6"}>Geschultes Fachpersonal</Heading>
                                    <Text fontSize={"sm"} lineHeight={1.65}>
                                    Unser Team ist speziell für medizinische Reinigung geschult und regelmäßig in Hygieneverfahren und Sicherheitsprotokollen fortgebildet.
                                    </Text>
                                    
                                </VStack>
                            </GridItem>

                            <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }}  textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <VStack gap={4} align={"start"}>
                                    <Center w={10} rounded={"md"} aspectRatio={"square"} color={"bg"} shadow={"lg"} bg={"blue.800"}>
                                        <FaClock />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"xl"} fontWeight={"bolder"} as={"h6"}>24/7 Notfallreinigung</Heading>
                                    <Text fontSize={"sm"} lineHeight={1.65}>
                                    Bei medizinischen Notfällen oder Kontaminationen sind wir rund um die Uhr erreichbar und binnen kürzester Zeit vor Ort.
                                    </Text>
                                    
                                </VStack>
                            </GridItem>
                            
                        </Grid>

                        <VStack textAlign={"center"} _hover={{ bg: "bg/8" }} w={"full"} h={"full"} bg={"bg/5"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                            
                            <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl"}} display={"flex"} gap={2} mt={4}>
                                <Text color={"blue.400"}><FaLocationDot /></Text>
                                 Unser Einzugsgebiet in  Nürnberg, Fürth & Umgebung
                            </Heading>

                            <Text fontSize={"sm"} mt={4} mb={-2}>Wir betreuen medizinische Einrichtungen in ganz  Nürnberg, Fürth & Umgebung und Umgebung</Text>


                            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} w={"full"} mt={9} gap={5}>

                                <VStack gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                                    <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                        <FaHospital />
                                    </Center>
                                    <Text fontWeight={"bolder"}> Nürnberg, Fürth & Umgebung Innenstadt</Text>
                                    <Text fontSize={"sm"}>Maxvorstadt, Altstadt</Text>
                                </VStack>
                            
                                <VStack gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                                    <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                        <FaStethoscope />
                                    </Center>
                                    <Text fontWeight={"bolder"}> Nürnberg, Fürth & Umgebung Nord</Text>
                                    <Text fontSize={"sm"}>Schwabing, Milbertshofen</Text>
                                </VStack>
            
                                <VStack minW={"200px"} gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                                    <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                        <FaAmbulance />
                                    </Center>
                                    <Text fontWeight={"bolder"}> Nürnberg, Fürth & Umgebung Süd</Text>
                                    <Text fontSize={"sm"}>Sendling, Giesing</Text>
                                </VStack>
            
                                <VStack gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                                    <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                        <FaFirstAid />
                                    </Center>
                                    <Text fontWeight={"bolder"}> Nürnberg, Fürth & Umgebung Umland</Text>
                                    <Text fontSize={"sm"}>Garching, Unterschleißheim</Text>
                                </VStack>
            
                            </Grid>
                            
                        </VStack>
    
                        {/* <Box textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                            <VStack align={"center"} w={"full"} gap={3}>
                                <HStack mb={2} gap={0.5} color={"yellow.300"}>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => {
                                            return <FaStar key={i} />
                                        })
                                    }
                                </HStack>
                                
                                <Text fontStyle={"italic"} textAlign={"center"} maxW={"600px"} fontWeight={"medium"} opacity={0.8} fontSize={"sm"}>
                                    Als Klinikleitung sind wir auf höchste Hygienestandards angewiesen. Popp Dienstleistungen Gebäudedienste übertrifft unsere Erwartungen kontinuierlich mit ihrer professionellen Krankenhausreinigung  Nürnberg, Fürth & Umgebung. Die RKI-konforme Arbeitsweise und die schnelle Reaktionszeit bei Notfällen machen sie zu unserem vertrauensvollen Partner.
                                </Text>
                                <Text fontStyle={"italic"} opacity={0.8} textAlign={"center"} fontSize={"sm"}> - Dr. Schmidt, Klinikleitung  Nürnberg, Fürth & Umgebung</Text>
                            </VStack>
                        </Box> */}

                        <VStack gap={3} w={"full"} color={"bg"} rounded={"xl"} _hover={{ bg: "bg/7.5" }} py={6} bg={"bg/5"} border={"1px solid"} borderColor={"bg/40"} shadow={"xl"} px={6}>
    
                            <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Bereit für höchste Hygienestandards?</Heading>
        
                            <Text maxW={"500px"} textAlign={"center"} lineHeight={1.7} my={3}>
                                Vereinbaren Sie noch heute eine kostenlose Hygienebesichtigung für Ihre medizinische Einrichtung in  Nürnberg, Fürth & Umgebung.
                            </Text>
        
                            <HStack gap={4} justify={"center"} gapY={3} mt={5} flexWrap={"wrap"}>
        
                                <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                    <Link href={"#contact"}>
                                        <Text scale={0.75}><FaCalendarCheck /></Text>
                                        Kostenlose Hygienebesichtigung
                                    </Link>
                                </Button>
                                
                                <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                    <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                        <Text scale={0.75}><FaPhoneAlt /></Text>
                                        {telephone}
                                    </Link>
                                </Button>

                            </HStack>
        
                        </VStack>
    
                    </VStack>
                </Box>
            </Box>

            {/* faqs */}
            <Box as={"section"}>

                <VStack w="full">
                    
                    <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaQuestionCircle /></Text>  Häufig gestellte Fragen</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} lineHeight={1.4}>
                        FAQ zur  
                        <Text as={"span"} color={"blue.600"}> Krankenhausreinigung  Nürnberg, Fürth & Umgebung </Text> 
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                       Antworten auf die wichtigsten Fragen zu unseren medizinischen Reinigungsdienstleistungen, Hygienestandards und <b>OP-Reinigung  Nürnberg, Fürth & Umgebung</b> Services.
                    </Text>

                    {/* faqs */}

                    {
                        hospitalCleaningFAQs.map((faq, i) => {
                            return <Faq key={i} question={faq} bg={i%2 !== 0 ? "bg" : "blue.100/25"} />
                        })
                    }

                    <VStack gap={6} w={"full"} color={"bg"} rounded={"xl"} className="gradient_dark_background" py={12} px={6}>
    
                        <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Weitere Fragen zur Krankenhausreinigung  Nürnberg, Fürth & Umgebung?</Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                            Unser Expertenteam beantwortet gerne alle Ihre Fragen zu medizinischer Reinigung, Hygienestandards und individuellen Lösungen für Ihre Einrichtung.
                        </Text>
    
                        <HStack gap={4} justify={"center"} gapY={3} mt={5} flexWrap={"wrap"}>
    
                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={"#contact"}>
                                    <Text scale={0.75}><FaMessage /></Text>
                                     Kostenlose Beratung anfragen
                                </Link>
                            </Button>
                            
                            <Button asChild bg={"bg/15"} colorPalette={"blue"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                    {telephone}
                                </Link>
                            </Button>

                        </HStack>
    
                    </VStack>

                </VStack>

            </Box>

            {/* contact section */}
            <Box as={"section"} className="gradient_mix_four" color={"bg"} id="contact">

                <VStack w="full">
                    
                    <Badge mb={5} shadow={"lg"} color={"bg"} bg={"bg/5"} border={"1px solid"} borderColor={"bg"} rounded={"full"} px={4} py={2} size={"lg"}><Text as={"span"} color={"green.400"} scale={0.9} mr={0.5}><FaCalendarCheck /></Text>  JETZT KONTAKT AUFNEHMEN</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md: "4xl" }} lineHeight={1.4}>
                        Kostenlose  
                        <Text as={"span"} color={"green.400"}> Hygienebesichtigung </Text> für Ihre medizinische Einrichtung
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                       Professionelle <b>Krankenhausreinigung  Nürnberg, Fürth & Umgebung, OP-Reinigung  Nürnberg, Fürth & Umgebung</b> und <b>Praxisreinigung  Nürnberg, Fürth & Umgebung</b> nach höchsten Standards. Vereinbaren Sie noch heute einen kostenlosen Beratungstermin.
                    </Text>

                    <Flex gap={12} gapY={24} align={"start"} flexDir={{ base: "column", xl: "row" }} w={"full"}>
    
                    <Box w={{ base: "full", xl: "60%" }} p={{ base: 0, md: 8 }} md={{ bg: "bg/5", border: "1px solid", shadow: "2xl" }} borderColor={"bg/20"} color={"bg"} pos={"relative"} rounded={"xl"}>

                        <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={2.5} fontSize={{ base: "lg", md: "xl" }} mb={9}>
                            <Text color={"green.400"}><FaClipboardCheck /></Text>
                            Hygienebesichtigung anfragen
                        </Heading>
                        
                        {/* contact form */}
                        <form ref={formRef} onSubmit={handleContact}>

                            <Grid
                                gap={6}
                                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                            >
                                
                                <GridItem asChild>
                                    <VStack gap={2} align={"start"}>
                                        <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Vorname *</Text>
                                        <Input type="text" name="firstname" required placeholder="Ihr Vorname" className="form_input" />
                                    </VStack>
                                </GridItem>

                                <GridItem asChild>
                                    <VStack gap={2} align={"start"}>
                                        <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Nachname *</Text>
                                        <Input type="text" name="lastname" required placeholder="Ihr Nachname" className="form_input" />
                                    </VStack>
                                </GridItem>

                            </Grid>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>E-Mail Adresse *</Text>
                                <Input type="email" name="email" required placeholder="Ihre@email.de" className="form_input" />
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Telefon *</Text>
                                <Input type="tel" name="phone" required placeholder="Ihre Telefonnummer" className="form_input" />
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Art der Einrichtung *</Text>
                                <select required name="establishment" className=" w-full border! rounded-md py-1.5! border-black/10! text-sm! px-2.5! outline-black/30! h-10! form_input">
                                    {
                                        establishmentsList.map((opt, i) => {
                                            return <option key={i} value={opt.value}>{opt.label}</option>
                                        })
                                    }
                                </select>
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Gewünschte Services</Text>
                                <Grid
                                    w={"full"}
                                    gap={4}
                                    mt={2}
                                    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                                >
                                    {
                                        hospitalCleaninServicesList.map((service, i) => {
                                            const id = `service-${service.toLowerCase().replaceAll(" ", "-")}`;
                                            return <GridItem key={i}>
                                                <HStack w={"full"} align={"start"}>
                                                    <input name="service" className="mt-1.5!" type="checkbox" id={id} value={service.toLowerCase()} />
                                                    <label htmlFor={id}>{service}</label>
                                                </HStack>
                                            </GridItem>
                                        })
                                    }
                                </Grid>
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Standort in  Nürnberg, Fürth & Umgebung</Text>
                                <select required name="location" className=" w-full border! rounded-md py-1.5! border-black/10! text-sm! px-2.5! outline-black/30! h-10! form_input">
                                    {
                                        locationsList.map((opt, i) => {
                                            return <option key={i} value={opt.value}>{opt.label}</option>
                                        })
                                    }
                                </select>
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Nachricht</Text>
                                <Textarea
                                    resize={"none"}
                                    h={"200px"}
                                    placeholder="Teilen Sie uns weitere Details zu Ihrer Einrichtung und Ihren Anforderungen mit..."
                                    name="message"
                                    required
                                    className="form_input"
                                >
                                    
                                </Textarea>
                            </VStack>
                            
                            <Button type="submit" color={"blue.800"} fontSize={"16px"} fontWeight={"bolder"} textWrap={"wrap"} bg={"blue.100"} py={{ base: 8, md: 6 }} w="full" rounded={"lg"}>
                                <HStack align={"start"} gap={1}>
                                    <Text scale={0.75}><FaCalendarCheck /></Text>
                                    <Text>Kostenlose Hygienebesichtigung anfragen</Text>
                                </HStack>
                            </Button>

                        </form>

                    </Box>
    
                    <VStack gap={6} w={{ base: "full", xl: "40%" }} color={"bg"} pos={"relative"}>

                        <Grid
                            w="full"
                            gap={6}
                            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)", xl: "1fr" }}
                        >

                        <VStack rounded={"xl"} p={{ base: 3, md: 6 }} bg={"bg/5"} border={"1px solid"} gap={4} borderColor={"bg/20"} shadow={"2xl"}>

                            <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={4} fontSize={"lg"} mb={1}>
                                <Text color={"blue.400"}><FaPhoneAlt /></Text>
                                Direkter Kontakt
                            </Heading>

                            <HStack w={"full"} gap={4}>
                                <Center minW={10} aspectRatio={"square"} rounded={"full"} bg={"blue.900"} color={"blue.400"}>
                                    <Text><FaPhoneAlt /></Text>
                                </Center>
                                <VStack align={"start"}>
                                    <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Telefon Zentrale</Text>
                                    <Link className="-mt-1.5! font-bold! hover:underline!" href={`tel:${telephone.replaceAll(" ", "")}`}>{telephone}</Link>
                                </VStack>
                            </HStack>

                            <HStack w={"full"} gap={4}>
                                <Center minW={10} aspectRatio={"square"} rounded={"full"} bg={"blue.900"} color={"blue.400"}>
                                    <Text><FaMobileAlt /></Text>
                                </Center>
                                <VStack align={"start"}>
                                    <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>24/7 Notfall-Hotline</Text>
                                    <Link className="-mt-1.5! font-bold! hover:underline!" href={`tel:${mobile.replaceAll(" ", "")}`}>{mobile}</Link>
                                </VStack>
                            </HStack>

                            <HStack w={"full"} gap={4}>
                                <Center minW={10} aspectRatio={"square"} rounded={"full"} bg={"blue.900"} color={"blue.400"}>
                                    <Text><FaEnvelope /></Text>
                                </Center>
                                <VStack align={"start"}>
                                    <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>E-mail</Text>
                                    <Link className="-mt-1.5! font-bold! hover:underline!" href={`mailto:${official_mail}`}>{official_mail}</Link>
                                </VStack>
                            </HStack>

                            <HStack w={"full"} gap={4} align={"start"}>
                                <Center minW={10} aspectRatio={"square"} rounded={"full"} bg={"blue.900"} color={"blue.400"}>
                                    <Text><FaLocationDot /></Text>
                                </Center>
                                <VStack align={"start"}>
                                    <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Standort  Nürnberg, Fürth & Umgebung</Text>
                                    <Text className="-mt-1.5! font-bold! whitespace-pre-wrap">{address}</Text>
                                </VStack>
                            </HStack>

                        </VStack>

                        <VStack rounded={"xl"} p={{ base: 3, md: 6 }} bg={"bg/5"} border={"1px solid"} w={"100%"} gap={4} borderColor={"bg/20"} shadow={"2xl"}>

                            <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={4} fontSize={"lg"} mb={1}>
                                <Text color={"yellow.400"}><FaShieldAlt /></Text>
                                Vertrauen & Qualität
                            </Heading>

                            <Grid
                                templateColumns={"repeat(2, 1fr)"}
                                gap={4}
                                w={"full"}
                            >

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaCertificate /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>RKI & HACCP</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Zertifiziert</Text>

                                </VStack>

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaAward /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>{awards_won}+</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Auszeichnungen</Text>

                                </VStack>

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaHospital /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>{medical_facilites}+</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Med. Einrichtungen</Text>

                                </VStack>

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaClock /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>{years_of_experiense}+</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Jahre Erfahrung</Text>

                                </VStack>

                            </Grid>

                            <Separator w={"full"} opacity={0.3} />

                            <VStack w={"full"}>

                                <HStack gap={1} align={"center"} color={"yellow.300"}>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => {
                                            return <Text key={i}><FaStar /></Text>
                                        })
                                    }
                                </HStack>

                                <Text fontSize={"sm"}>Höchste Qualität in der medizinischen Reinigung</Text>

                            </VStack>

                        </VStack>

                        </Grid>

                        <VStack rounded={"xl"} p={5} py={7} color={"green.800"} bg={"green.400"} w={"100%"} shadow={"2xl"} gap={4}>
                        
                            <Text fontSize={"3xl"}><FaClock /></Text>
                            <Text fontWeight={"bolder"}>Schnelle Reaktionszeit</Text>
                            <Text fontSize={"sm"}>Angebot innerhalb von <b>24 Stunden</b> <br />
                            Notfallreinigung in <b>30-60 Minuten</b></Text>

                            <Text fontWeight={"bolder"}>24/7</Text>

                        </VStack>

                    </VStack>
    
                </Flex>

                </VStack>

            </Box>

        </>
    )
}

export default HospitalCleaningServicePage;