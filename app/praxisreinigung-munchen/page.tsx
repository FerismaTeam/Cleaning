'use client'

import Counter from "@/components/counter.component";
import SectionEndDesign from "@/components/design.component";
import Faq from "@/components/faq.component";
import Loader from "@/components/loader.component";
import { awards_won, satisfied_customers } from "@/data/about";
import { mobile, official_mail, telephone } from "@/data/contact";
import practiceCleaningFAQs from "@/data/practice_cleaning_faqs.list";
import { otherServicesList } from "@/data/practice_cleaning_other_services.list";
import practiceCleaningServices from "@/data/practice_cleaning_services.list";
import { practiceTypeList, praticeCleaninServicesList } from "@/data/practice_contact_form_datalist";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Input, List, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { FaArrowRight, FaAward, FaCertificate, FaCheck, FaClock, FaHeartbeat, FaMobileAlt, FaPhoneAlt, FaQuestionCircle, FaShieldAlt, FaStethoscope } from "react-icons/fa";
import { FaBrain, FaCalendarCheck, FaChartLine, FaCircleCheck, FaEnvelope, FaHospital, FaKitMedical, FaLink, FaLocationDot, FaMessage, FaShieldVirus, FaTooth, FaUserCheck, FaUserDoctor } from "react-icons/fa6";
import { IoShieldCheckmark, IoWarning } from "react-icons/io5";

const MedicalPracticeServicePage = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!formRef.current){ return }

        const formData = new FormData(formRef.current)

        if(!formRef.current.praticetype.value.length){ return alert("Select practice type") }
        
        try {
            setLoading(true);
            const res = await fetch("https://formspree.io/f/mlgbyakn", {
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

            <Box as="section" overflow={"hidden"} className="gradient_mix_two" py={24} pb={36}>

                <SectionEndDesign />

                <VStack w="full" gap={6} color={"bg.success"}>
                    
                    <Badge gap={2} mb={3} shadow={"lg"} color={"bg"} bg={"bg/5"} border={"1px solid"} borderColor={"bg/40"} rounded={"full"} px={4} fontWeight={"bold"} py={2} size={"lg"} textWrap={"wrap"}><Text as={"span"} scale={0.9} mr={0.5}><FaUserDoctor /></Text>  
MEDIZINISCHE REINIGUNG MÜNCHEN</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "3xl", md: "5xl" }} lineHeight={1.4} fontWeight={"bolder"}>
                        <Text as={"span"} color={"green.400"}> Praxisreinigung </Text> <br />
                            München
                    </Heading>
                    <Text maxW={"500px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"lg"} fontWeight={"semibold"}>
                        Zertifizierte Hygiene-Standards für Ihre Arztpraxis, Zahnarztpraxis und medizinische Einrichtung
                    </Text>

                    <HStack gap={4} justify={"center"} gapY={4} flexWrap={"wrap"}>
                        <HStack gap={3} p={3} rounded={"full"} border={"1px solid"} borderColor={"bg/20"} px={5}>
                            <Text color={"green.400"}><FaShieldVirus /></Text>
                            <Text fontWeight={"semibold"}> RKI-konforme Desinfektion</Text>
                        </HStack>

                        <HStack gap={3} p={3} rounded={"full"} border={"1px solid"} borderColor={"bg/20"} px={5}>
                            <Text color={"green.400"}><FaCertificate /></Text>
                            <Text fontWeight={"semibold"}> Zertifizierte Hygienekräfte</Text>
                        </HStack>

                        <HStack gap={3} p={3} rounded={"full"} border={"1px solid"} borderColor={"bg/20"} px={5}>
                            <Text color={"green.400"}><FaClock /></Text>
                            <Text fontWeight={"semibold"}>  Flexible Einsatzzeiten</Text>
                        </HStack>
                    </HStack>

                    <HStack gap={6} justify={"center"} gapY={6} mt={12} flexWrap={"wrap"}>
    
                        <Button asChild colorPalette={"blue"} textWrap={"wrap"} py={6} px={5} rounded={"lg"} fontSize={"16px"}>
                            <Link href={"#contact"}>
                                <Text scale={0.75}><FaStethoscope /></Text>
                                Kostenlose Hygienebesichtigung
                            </Link>
                        </Button>
                        
                        <Button asChild bg={"bg/15"} py={6} px={5} border={"1px solid"} borderColor={"bg/40"} rounded={"lg"} fontSize={"16px"}>
                            <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                <Text scale={0.75}><FaPhoneAlt /></Text>
                                {telephone}
                            </Link>
                        </Button>

                    </HStack>

                    <HStack gap={8} justify={"center"} gapY={12} mt={12} flexWrap={"wrap"}>
                        <VStack gap={1}>
                            <Heading color={"cyan.300"} as={"h6"} fontSize={"4xl"} mb={2}><Counter end={awards_won} suffix="+" /></Heading>
                            <Text fontWeight={"bold"}>Auszeichnungen</Text>
                            <Text fontSize={"sm"}>ür Qualität & Service</Text>
                        </VStack>

                        <VStack gap={1}>
                            <Heading color={"cyan.300"} as={"h6"} fontSize={"4xl"} mb={2}><Counter end={satisfied_customers} suffix="+" /></Heading>
                            <Text fontWeight={"bold"}>Zufriedene Praxen</Text>
                            <Text fontSize={"sm"}>erfolgreich betreut</Text>
                        </VStack>

                        <VStack gap={1}>
                            <Heading color={"cyan.300"} as={"h6"} fontSize={"4xl"} mb={2}>100%</Heading>
                            <Text fontWeight={"bold"}>Geld-zurück</Text>
                            <Text fontSize={"sm"}>Garantie</Text>
                        </VStack>

                        <VStack gap={1}>
                            <Heading color={"cyan.300"} as={"h6"} fontSize={"4xl"} mb={2}>24/7</Heading>
                            <Text fontWeight={"bold"}>Notfall-Service</Text>
                            <Text fontSize={"sm"}>bei Bedarf</Text>
                        </VStack>
                    </HStack>

                </VStack>

            </Box>

            {/* range of services */}
            <Box as="section">
                <VStack w="full">
                    <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"} textWrap={"wrap"}><Text as={"span"} scale={0.9} mr={0.5}><FaKitMedical /></Text>  SPEZIALISIERTE PRAXISREINIGUNG</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                        Unser  
                        <Text as={"span"} color={"blue.600"}> Leistungsumfang </Text> 
                            Leistungsumfang
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                        Als zertifizierte <b>Reinigungsfirma für Arztpraxen</b> bieten wir umfassende Hygienelösungen mit dokumentierten Desinfektionsprozessen nach RKI-Standards.
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
                            practiceCleaningServices.map((service, i) => {
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
    
                    <VStack gap={6} w={"full"} color={"bg"} rounded={"xl"} className="gradient_mix_three" shadow={"2xl"} py={{ base: 5, md: 12 }} px={{ base: 5, md: 6 }}>
    
                        <Heading as={"h6"} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>

                            <HStack gap={2} align={"start"}>
                                <Text color={"green.500"} mt={1}><FaAward /></Text>
                                <Text>Warum Arztpraxen auf uns vertrauen</Text>
                            </HStack>

                        </Heading>
                        
                        <Grid
                            gapY={4}
                            w={"full"}
                            gapX={5}
                            mt={6}
                            px={{ base: 1, md: 4 }}
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
                        >

                            <VStack bg={"bg/5"} p={5} rounded={"md"} gap={2} textAlign={"center"}>
                                <Heading as={"h5"} fontWeight={"bolder"} color={"green.400"}>
                                    Diskretion
                                </Heading>
                                <Text fontSize={"sm"}>
                                    Vertraulicher Umgang mit sensiblen Patientendaten und Praxisabläufen
                                </Text>
                            </VStack>

                            <VStack bg={"bg/5"} p={5} rounded={"md"} gap={2} textAlign={"center"}>
                                <Heading as={"h5"} fontWeight={"bolder"} color={"green.400"}>
                                    Zuverlässigkeit
                                </Heading>
                                <Text fontSize={"sm"}>
                                    Pünktliche Einsätze ohne Störung des Praxisbetriebs
                                </Text>
                            </VStack>

                            <GridItem colSpan={{ base: "auto", md: 2, xl: "auto" }}>

                                <VStack bg={"bg/5"} p={5} rounded={"md"} gap={2} textAlign={"center"}>
                                    <Heading as={"h5"} fontWeight={"bolder"} color={"green.400"}>
                                        Fachkompetenz
                                    </Heading>
                                    <Text fontSize={"sm"}> 
                                        Geschultes Personal mit medizinischen Hygiene-Kenntnissen
                                    </Text>
                                </VStack>

                            </GridItem>

                        </Grid>
    
                    </VStack>
    
                </VStack>
            </Box>

            <Box as={"section"} bg={"blue.100/20"}>

                <VStack w="full">
                    
                    <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"} textWrap={"wrap"}><Text as={"span"} scale={0.9} mr={0.5}><FaLocationDot /></Text>    MÜNCHEN & UMGEBUNG</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                        <Text as={"span"} color={"blue.600"}> Praxisreinigung München </Text>
                        in allen Stadtbezirken 
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                        Wir betreuen medizinische Einrichtungen, Arztpraxen und Zahnarztpraxen in ganz München und den angrenzenden Gemeinden - mit verlässlichen Hygiene-Standards.
                    </Text>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} w={"full"} gap={5} mb={12}>
                    
                        <VStack gap={2} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"xl"} _hover={{ borderColor: "blue.500/80", shadow: "xl" }} p={3} py={6} textAlign={"center"}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                <FaHospital />
                            </Center>
                            <Text fontWeight={"bolder"}>München Zentrum</Text>
                            <Text fontSize={"sm"}>Maxvorstadt, Altstadt-Lehel</Text>
                        </VStack>
                    
                        <VStack gap={2} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"xl"} _hover={{ borderColor: "blue.500/80", shadow: "xl" }} p={3} py={6} textAlign={"center"}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                <FaHospital />
                            </Center>
                            <Text fontWeight={"bolder"}>München Nord</Text>
                            <Text fontSize={"sm"}>Schwabing, Milbertshofen</Text>
                        </VStack>
    
                        <VStack minW={"200px"} gap={2} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"xl"} _hover={{ borderColor: "blue.500/80", shadow: "xl" }} p={3} py={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                <FaUserDoctor />
                            </Center>
                            <Text fontWeight={"bolder"}>München Süd</Text>
                            <Text fontSize={"sm"}>Haidhausen, Giesing</Text>
                        </VStack>
    
                        <VStack gap={2} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"xl"} _hover={{ borderColor: "blue.500/80", shadow: "xl" }} p={3} py={6} textAlign={"center"}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                <FaTooth />
                            </Center>
                            <Text fontWeight={"bolder"}>München Umland</Text>
                            <Text fontSize={"sm"}>Garching, Unterschleißheim</Text>
                        </VStack>
    
                    </Grid>

                    <Grid
                        w={"full"}
                        templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
                        gap={8}
                        my={12}
                        gapY={14}
                    >

                        <GridItem>
                            <VStack align={"start"} gap={5}>

                                <HStack gap={3} align={"start"}>
                                    <Text mt={1} fontSize={"2xl"} color={"blue.600"}><FaCertificate /></Text>
                                    <Text fontSize={"2xl"} fontWeight={"bolder"}>Vertrauen & Zertifizierungen</Text>
                                </HStack>

                                <HStack align={"start"} gap={5} p={5} rounded={"md"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/20"} w={"full"} _hover={{ borderColor: "blue.700/50" }}>

                                    <Center mt={1} minW={12} aspectRatio={"square"} className="gradient_dark_background" fontSize={"xl"} rounded={"md"} color={"bg"}>
                                        <FaAward />
                                    </Center>

                                    <VStack gap={0.5} align={"start"} w={"ful"}>
                                        <Text fontSize={"lg"} fontWeight={"bold"}>
                                            {awards_won}+ Auszeichnungen für Qualität
                                        </Text>
                                        <Text opacity={0.75}>Zertifizierte Reinigungsqualität für medizinische Einrichtungen in München</Text>
                                    </VStack>

                                </HStack>

                                <HStack align={"start"} gap={5} p={5} rounded={"md"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/20"} w={"full"} _hover={{ borderColor: "blue.700/50" }}>

                                    <Center mt={1} minW={12} aspectRatio={"square"} className="gradient_dark_background" fontSize={"xl"} rounded={"md"} color={"bg"}>
                                        <FaUserCheck />
                                    </Center>

                                    <VStack gap={0.5} align={"start"} w={"ful"}>
                                        <Text fontSize={"lg"} fontWeight={"bold"}>
                                            Zertifizierte Hygienekräfte
                                        </Text>
                                        <Text opacity={0.75}>Geschultes Personal mit medizinischen Hygiene-Kenntnissen und Diskretion</Text>
                                    </VStack>

                                </HStack>

                                <HStack align={"start"} gap={5} p={5} rounded={"md"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/20"} w={"full"} _hover={{ borderColor: "blue.700/50" }}>

                                    <Center mt={1} minW={12} aspectRatio={"square"} className="gradient_dark_background" fontSize={"xl"} rounded={"md"} color={"bg"}>
                                        <IoShieldCheckmark />
                                    </Center>

                                    <VStack gap={0.5} align={"start"} w={"ful"}>
                                        <Text fontSize={"lg"} fontWeight={"bold"}>
                                            ALEGRIA-Zertifizierung
                                        </Text>
                                        <Text opacity={0.75}>Qualitätssiegel für professionelle Gebäudereinigung und Hygiene-Management</Text>
                                    </VStack>

                                </HStack>

                            </VStack>
                        </GridItem>

                        <GridItem>
                            <VStack align={"start"} gap={5}>

                                <HStack gap={3} align={"start"}>
                                    <Text mt={1} fontSize={"2xl"} color={"blue.600"}><FaChartLine /></Text>
                                    <Text fontSize={"2xl"} fontWeight={"bolder"}> Erfolgreiche Praxisbetreuung</Text>
                                </HStack>
                                
                                <Grid
                                    w={"full"}
                                    templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                                    gap={5}
                                >

                                    <GridItem>
                                        <VStack w={"full"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"md"} py={5} px={4} className="gradient_light_background_three">
                                            <Text fontSize={"3xl"} fontWeight={"bold"} color={"blue.500"}><Counter end={satisfied_customers} suffix="+"/></Text>
                                            <Text fontWeight={"bold"}>Zufriedene Praxen</Text>
                                            <Text mt={-2} fontSize={"sm"} opacity={0.85}>erfolgreich betreut</Text>
                                        </VStack>
                                    </GridItem>

                                    <GridItem>
                                        <VStack w={"full"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"md"} py={5} px={4} className="gradient_light_background_three">
                                            <Text fontSize={"3xl"} fontWeight={"bold"} color={"blue.500"}>100%</Text>
                                            <Text fontWeight={"bold"}>Geld-zurück</Text>
                                            <Text mt={-2} fontSize={"sm"} opacity={0.85}>Garantie</Text>
                                        </VStack>
                                    </GridItem>

                                </Grid>

                                <Text fontSize={"lg"} fontWeight={"bold"} mt={3}>Betreute Praxistypen:</Text>

                                <Grid
                                    w={"full"}
                                    gap={5}
                                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                                >

                                    <GridItem>
                                        <HStack w={"full"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"md"} p={5} gap={4}>

                                            <Text color={"blue.600"}><FaUserDoctor /></Text>
                                        
                                            <Text fontWeight={"bolder"}>Hausarztpraxen</Text>

                                        </HStack>
                                    </GridItem>

                                    <GridItem>
                                        <HStack w={"full"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"md"} p={5} gap={4}>

                                            <Text color={"blue.600"}><FaTooth /></Text>
                                        
                                            <Text fontWeight={"bolder"}>Zahnarztpraxen</Text>

                                        </HStack>
                                    </GridItem>

                                    <GridItem>
                                        <HStack w={"full"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"md"} p={5} gap={4}>

                                            <Text color={"blue.600"}><FaBrain /></Text>
                                        
                                            <Text fontWeight={"bolder"}>Psychotherapie</Text>

                                        </HStack>
                                    </GridItem>

                                    <GridItem>
                                        <HStack w={"full"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"md"} p={5} gap={4}>

                                            <Text color={"blue.600"}><FaHeartbeat /></Text>
                                        
                                            <Text fontWeight={"bolder"}>Fachpraxen</Text>

                                        </HStack>
                                    </GridItem>

                                </Grid>
                                
                            </VStack>
                        </GridItem>
                        
                    </Grid>

                    <VStack mt={8} gap={6} w={"full"} color={"bg"} rounded={"xl"} className="gradient_light_background_one" py={12} px={6}>
    
                        <Heading display={"flex"} gap={2} gapY={5} as={"h6"} flexWrap={"wrap"} justifyContent={"center"} mt={5} textAlign={"center"} alignItems={"center"} fontWeight={"bolder"} fontSize={"2xl"}>
                            <Text color={"blue.300"} fontSize={"4xl"}><FaShieldAlt /></Text>
                            100% Geld-zurück-Garantie auch für Praxisreinigung
                        </Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                            Ihre Zufriedenheit ist unser Anspruch. Falls Sie mit unserer Praxisreinigung München nicht vollständig zufrieden sind, erhalten Sie Ihr Geld zurück - ohne Wenn und Aber.
                        </Text>
    
                        <HStack gap={4} justify={"center"} gapY={3} mt={5} flexWrap={"wrap"}>
    
                            <Button asChild bg={"bg"} color={"bg.inverted"} rounded={"lg"}>
                                <Link href={"#contact"}>
                                    <Text scale={0.75}><FaCalendarCheck /></Text>
                                           Angebot für Ihre Praxis sichern
                                </Link>
                            </Button>
                            
                            <Button asChild bg={"bg"} color={"bg.inverted"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                     {telephone}
                                </Link>
                            </Button>

                        </HStack>
    
                    </VStack>

                </VStack>

            </Box>
        
            {/* faqs */}
            <Box as={"section"} >
            
                <VStack w="full">
                    
                    <Badge gap={2} mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"} textWrap={"wrap"}><Text as={"span"} scale={0.9} mr={0.5}><FaQuestionCircle /></Text>   HÄUFIGE FRAGEN ZUR PRAXISREINIGUNG</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                        FAQ zur  
                        <Text as={"span"} color={"blue.600"}> Praxisreinigung München </Text> 
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                        Antworten auf die wichtigsten Fragen zu Desinfektionsabläufen, Einsatzzeiten und Hygiene-Standards für medizinische Einrichtungen.
                    </Text>

                    {/* faqs */}

                    {
                        practiceCleaningFAQs.map((faq, i) => {
                            return <Faq key={i} question={faq} bg={i%2 !== 0 ? "bg" : "blue.100/25"} />
                        })
                    }

                    <VStack gap={6} w={"full"} color={"bg"} rounded={"xl"} className="gradient_dark_background" py={12} px={6}>
    
                        <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Haben Sie weitere Fragen zur Praxisreinigung?</Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                            Unsere Hygiene-Experten beraten Sie gerne zu individuellen Lösungen für Ihre medizinische Einrichtung in München.
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
                                     Sofort anrufen
                                </Link>
                            </Button>

                        </HStack>
    
                    </VStack>

                </VStack>

            </Box>

            {/* different services */}
            <Box as="section" bg={"blue.100/20"}>
                <VStack w="full">
                    <Badge gap={2} mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"} textWrap={"wrap"}><Text as={"span"} scale={0.9} mr={0.5}><FaLink /></Text>  WEITERE REINIGUNGSDIENSTLEISTUNGEN</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                        Unser komplettes 
                        <Text as={"span"} color={"blue.600"}> Leistungsspektrum </Text> 
                        für München & Umgebung
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                        Als zertifizierte <b>Reinigungsfirma für Arztpraxen</b> bieten wir umfassende Hygienelösungen mit dokumentierten Desinfektionsprozessen nach RKI-Standards.
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
                            otherServicesList.map((service, i) => {
                                const isLast = i == otherServicesList.length - 1;
                                return <GridItem asChild key={i}>
    
                                       <Link href={service.link} className="group relative">
                                            <VStack className=" group-hover:-translate-y-2! group-hover:shadow-xl! duration-150" bg={ isLast ? "blue.400/10" : "bg"} rounded={"lg"} border={"1px solid"} 
                                            borderWidth={isLast ? "2px" : "1px" } borderColor={isLast ? "blue.600" : "blue.500/30"} gap={4} align={"start"} _hover={{ bg: "blue.700", color: "bg" }} h="full" p={7}>
        
                                                <Center w={10} aspectRatio={"square"} rounded={"md"} bg={"blue.700"} color={"bg"} fontSize={"xl"} className="duration-150 group-hover:text-3xl!">
                                                    <service.icon />
                                                </Center>
        
                                                <Heading as={"h4"} fontWeight={"bolder"} fontSize={"lg"}>{service.name}</Heading>
        
                                                <Text opacity={0.65} fontSize={"sm"} lineHeight={1.4}>{service.des}</Text>
        
                                                <Text _hover={{ textDecor: "underline" }} fontSize={"sm"} fontWeight={"bold"} color={"blue.600"} display={"flex"} gap={2} className="group-hover:text-white!" alignItems={"start"}>
                                                    
                                                    {service.redirect_label}
                                                    <Text as={"span"} mt={1} className="duration-150 group-hover:ml-1!"><FaArrowRight /></Text>

                                                </Text>
        
                                            </VStack>
                                       </Link>
                                    
                                </GridItem>
                            })
                        }
                        
                    </Grid>
    
                    <VStack gap={6} w={"full"} color={"bg"} rounded={"xl"} className="gradient_mix_four" py={12} px={6}>
    
                        <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Bereit für professionelle Praxisreinigung in München?</Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                            Kontaktieren Sie uns für eine <b>kostenlose Hygienebesichtigung</b> und ein maßgeschneidertes Angebot für Ihre medizinische Einrichtung.
                        </Text>
    
                        <HStack gap={4} justify={"center"} gapY={3} mt={5} flexWrap={"wrap"}>
    
                            <Button asChild colorPalette={"yellow"} rounded={"lg"}>
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

            {/* contact section */}
            <Box as={"section"} className="gradient_mix_three" color={"bg"} id="contact">
            
                <VStack w="full">
                    
                    <Badge mb={5} shadow={"lg"} color={"bg"} bg={"bg/5"} border={"1px solid"} borderColor={"bg"} rounded={"full"} px={4} py={2} size={"lg"} textWrap={"wrap"}><Text as={"span"} color={"green.400"} scale={0.9} mr={0.5}><FaUserDoctor /></Text>   KONTAKT PRAXISREINIGUNG</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md: "4xl" }} lineHeight={1.4}>
                         Jetzt  
                        <Text as={"span"} color={"green.400"}> kostenlose </Text> Hygienebesichtigung anfragen
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                        Lassen Sie sich von unseren Hygiene-Experten beraten und erhalten Sie ein individuelles Angebot für Ihre <b>Praxisreinigung München</b>.
                    </Text>

                    <Flex gap={12} gapY={24} align={"start"} flexDir={{ base: "column", xl: "row" }} w={"full"}>
    
                    <Box w={{ base: "full", xl: "60%" }} p={{ base: 0, md: 8 }} md={{ bg: "bg/5", border: "1px solid", shadow: "2xl" }} borderColor={"bg/20"} color={"bg"} pos={"relative"} rounded={"xl"}>

                        <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={2.5} fontSize={"xl"} mb={9}>
                            <Text color={"green.400"}><FaEnvelope /></Text>
                            Angebot anfordern
                        </Heading>
                        
                        {/* contact form */}
                        <form ref={formRef} onSubmit={handleContact}>

                            <Grid
                                gap={6}
                                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                            >
                                
                                <GridItem asChild>
                                    <VStack gap={2} align={"start"}>
                                        <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Praxisname *</Text>
                                        <Input aria-required type="text" name="practicename" required placeholder="Dr. Mustermann Praxis" className="form_input" />
                                    </VStack>
                                </GridItem>

                                <GridItem asChild>
                                    <VStack gap={2} align={"start"}>
                                        <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Praxistyp *</Text>
                                        <select required name="praticetype" className=" w-full border! rounded-md py-1.5! border-black/10! text-sm! px-2.5! outline-black/30! h-10! form_input">
                                            {
                                                practiceTypeList.map((opt, i) => {
                                                    return <option key={i} value={opt.value}>{opt.label}</option>
                                                })
                                            }
                                        </select>
                                    </VStack>
                                </GridItem>

                            </Grid>


                            <Grid
                                gap={6}
                                my={6}
                                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                            >
                                
                                <GridItem asChild>
                                    <VStack gap={2} align={"start"}>
                                        <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Ansprechpartner *</Text>
                                        <Input aria-required type="text" name="name" required placeholder="Dr. Max Mustermann" className="form_input" />
                                    </VStack>
                                </GridItem>

                                <GridItem asChild>
                                    <VStack gap={2} align={"start"}>
                                        <Text aria-required fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>E-Mail Adresse *</Text>
                                        <Input type="email" name="email" required placeholder="praxis@beispiel.de" className="form_input" />
                                    </VStack>
                                </GridItem>

                            </Grid>

                            <Grid
                                gap={6}
                                my={6}
                                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                            >

                                <VStack gap={2} align={"start"}>
                                    <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Telefon *</Text>
                                    <Input aria-required type="tel" name="phone" required placeholder="089 12345678" className="form_input" />
                                </VStack>

                                <VStack gap={2} align={"start"}>
                                    <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Praxisgröße (m²) *</Text>
                                    <Input aria-required type="number" name="practicesize" required placeholder="150" className="form_input" />
                                </VStack>

                            </Grid>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Praxisadresse</Text>
                                <Textarea
                                    resize={"none"}
                                    h={"120px"}
                                    placeholder="Musterstraße 123, 80331 München"
                                    name="address"
                                    className="form_input"
                                    required 
                                >
                                    
                                </Textarea>
                            </VStack>


                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Gewünschte Leistungen</Text>
                                <Grid
                                    w={"full"}
                                    gap={4}
                                    mt={2}
                                    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                                >
                                    {
                                        praticeCleaninServicesList.map((service, i) => {
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
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Zusätzliche Informationen</Text>
                                <Textarea
                                    resize={"none"}
                                    h={"200px"}
                                    placeholder="Besondere Anforderungen, gewünschte Einsatzzeiten, Anzahl Behandlungsräume..."
                                    name="message"
                                    className="form_input"
                                    required
                                >
                                    
                                </Textarea>
                            </VStack>
                            
                            <Button type="submit" color={"blue.800"} fontSize={"16px"} fontWeight={"bolder"} textWrap={"wrap"} bg={"blue.100"} py={{ base: 8, md: 6 }} w="full" rounded={"lg"}>
                                <HStack align={"start"} gap={1}>
                                    <Text scale={0.75}><BsSendFill /></Text>
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

                            <VStack rounded={"xl"} p={6} bg={"bg/5"} border={"1px solid"} w={"100%"} gap={4} borderColor={"bg/20"} shadow={"2xl"}>

                            <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={4} fontSize={"lg"} mb={1}>
                                <Text color={"blue.400"}><FaPhoneAlt /></Text>
                                 Sofortiger Kontakt
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

                        </VStack>

                        <VStack rounded={"xl"} p={6} bg={"bg/5"} border={"1px solid"} w={"100%"} gap={4} borderColor={"bg/20"} shadow={"2xl"}>

                            <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={4} fontSize={"lg"} mb={1}>
                                <Text color={"yellow.400"}><IoShieldCheckmark /></Text>
                                 Ihre Vorteile
                            </Heading>

                            <HStack gap={2} align={"start"} w={"full"} mb={3}>  
                                
                                <Text mt={1.5} scale={0.85}><FaCircleCheck /></Text>
                                <Text>Kostenlose Hygienebesichtigung vor Ort</Text>

                            </HStack>

                            <HStack gap={2} align={"start"} w={"full"} mb={3}>  
                                
                                <Text mt={1.5} scale={0.85}><FaCircleCheck /></Text>
                                <Text>Individuelle Beratung zu Hygiene-Standards</Text>

                            </HStack>

                            <HStack gap={2} align={"start"} w={"full"} mb={3}>  
                                
                                <Text mt={1.5} scale={0.85}><FaCircleCheck /></Text>
                                <Text>Maßgeschneidertes Angebot innerhalb 24h</Text>

                            </HStack>

                            <HStack gap={2} align={"start"} w={"full"} mb={3}>  
                                
                                <Text mt={1.5} scale={0.85}><FaCircleCheck /></Text>
                                <Text>100% Geld-zurück-Garantie</Text>

                            </HStack>

                            <HStack gap={2} align={"start"} w={"full"} mb={3}>  
                                
                                <Text mt={1.5} scale={0.85}><FaCircleCheck /></Text>
                                <Text>24h-Notfall-Service verfügbar</Text>

                            </HStack>

                        </VStack>

                        </Grid>

                        <VStack align={"start"} rounded={"xl"} p={5} color={"bg"} bg={"red.600/90"} w={"100%"} shadow={"2xl"} gap={4}>
                        
                            <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={2} fontSize={"lg"}>
                                <Text color={"yellow.300"}><IoWarning /></Text>
                                 24h-Notfall-Service
                            </Heading>

                            <Text>Bei hygienekritischen Situationen oder Kontaminationen sind wir rund um die Uhr für Ihre Praxis erreichbar.</Text>

                            <Button asChild bg={"bg"} color={"red.600"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                     Notfall-Hotline
                                </Link>
                            </Button>

                        </VStack>

                    </VStack>
    
                </Flex>

                </VStack>

            </Box>

        </>
    )
}

export default MedicalPracticeServicePage;