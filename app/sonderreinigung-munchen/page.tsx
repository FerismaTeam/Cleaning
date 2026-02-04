'use client'

import Counter from "@/components/counter.component";
import SectionEndDesign from "@/components/design.component";
import Faq from "@/components/faq.component";
import Loader from "@/components/loader.component";
import { awards_won, company_name, properties_cleaned, satisfied_customers } from "@/data/about";
import { address, mobile, official_mail, telephone } from "@/data/contact";
import specialCleaningServicesInDetail from "@/data/special_cleaning_data";
import specialCleaningFAQs from "@/data/special_cleaning_faqs.list";
import { additionalServicesList, specialServiceList } from "@/data/special_contact_form_datalist";
import boldMarkdownToHtml from "@/utils/boldMarkdown.utils";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaAward, FaBoxes, FaCheck, FaClipboardCheck, FaClock, FaHome, FaMobileAlt, FaPhoneAlt, FaQuestionCircle, FaShieldAlt, FaStar, FaTools } from "react-icons/fa";
import { FaBox, FaBroom, FaBuilding, FaCalendarCheck, FaCircleCheck, FaDroplet, FaEnvelope, FaFire, FaHandshake, FaHelmetSafety, FaHospital, FaIndustry, FaLocationDot, FaMessage, FaSprayCan, FaStethoscope, FaStopwatch, FaWater } from "react-icons/fa6";
import { IoShieldCheckmark, IoWarning } from "react-icons/io5";

const SpecialServicePage = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);
    
    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!formRef.current){ return }

        const formData = new FormData(formRef.current)

        if(!formRef.current.establishment.value.length){ return alert("Select establishment") }
        
        try {
            setLoading(true);
            const res = await fetch("https://formspree.io/f/mdagrbaq", {
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
            <Box as={"section"} overflowX={"hidden"} pos={"relative"} className="gradient_mix_one md:py-32!">

                <Flex gap={20} w={"full"} gapY={24} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                    <Box  w={{ base: "full", lg: "50%" }} color={"bg"}>
                        <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                            <Badge color={"bg"} bg={"bg/15"} className="backdrop_blur" rounded={"full"} px={4} py={2} fontSize={"14px"} gap={2} textWrap={"wrap"}> <Text color={"red.500"}><FaClock /></Text> 24H NOTFALL-SERVICE VERFÜGBAR</Badge>
                            <Heading as={"h1"} color={"bg"} my={3} fontSize={{ base: "3xl", md: "5xl" }} lineHeight={1.25} fontWeight={"bolder"}
                            ><Text as={"span"} color={"green.400"}>Sonderreinigung</Text>  Nürnberg, Fürth & Umgebung</Heading>

                            <Text my={3}>
                                Professionelle <b>Spezialreinigung  Nürnberg, Fürth & Umgebung</b> für komplexe Fälle: Baureinigung, Grundreinigung, Graffitientfernung, Entrümpelung nach Brand, Umzug oder Sanierung
                            </Text>

                            <Grid
                                gapX={6}
                                gapY={3}
                                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                                fontSize={"sm"}
                            >
                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"green.500"}>
                                            <Text><FaHelmetSafety /></Text>
                                        </Center>
                                        <Text>Baureinigung  Nürnberg, Fürth & Umgebung</Text>
                                    </HStack>
                                </GridItem>

                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"green.500"}>
                                            <Text><FaTools /></Text>
                                        </Center>
                                        <Text>Grundreinigung  Nürnberg, Fürth & Umgebung</Text>
                                    </HStack>
                                </GridItem>

                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"green.500"}>
                                            <Text><FaSprayCan /></Text>
                                        </Center>
                                        <Text>Graffitientfernung</Text>
                                    </HStack>
                                </GridItem>

                                <GridItem asChild>
                                    <HStack gap={2}>
                                        <Center color={"bg"} minW={8} aspectRatio={"square"} rounded={"full"} bg={"red.500"}>
                                            <Text><FaFire /></Text>
                                        </Center>
                                        <Text>Brand-/Wasserschäden</Text>
                                    </HStack>
                                </GridItem>

                            </Grid>
                            
                            <HStack gap={2} gapY={3} mt={5} flexWrap={"wrap"}>

                                <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                    <Link href={"#contact"}>
                                        <Text scale={0.75}><FaCalendarCheck /></Text>
                                        Jetzt Sonderreinigung anfragen
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
                                    <Text color={"yellow.200"} mt={1}><FaShieldAlt /></Text>
                                    <Text fontWeight={"medium"}>Geld-zurück-Garantie</Text>
                                </HStack>

                                <HStack gap={2} align={"start"}>
                                    <Text color={"yellow.200"} mt={1}><FaHandshake /></Text>
                                    <Text fontWeight={"medium"}>{satisfied_customers}+ medizinische Einrichtungen</Text>
                                </HStack>

                            </HStack>

                        </VStack>
                    </Box>

                    <Box w={{ base: "full", lg: "50%" }} pos={"relative"}>

                        <Box pos={"absolute"} bg={"red.500"} zIndex={1} p={3} bottom={-10} left={-3} rounded={"md"} color={"bg"} shadow={"sm"} rotate={"5deg"}>
                            <Text fontWeight={"bolder"} fontSize={"lg"}>24/7</Text>
                            <Text fontSize={"sm"}>Notfall-Service</Text>
                        </Box>

                        <Box pos={"absolute"} bg={"green.600"} zIndex={1} p={3} top={-10} right={-3} rounded={"md"} color={"bg"} shadow={"sm"} rotate={"-5deg"}>
                            <Text fontWeight={"bolder"} fontSize={"lg"}>{properties_cleaned}+</Text>
                            <Text fontSize={"sm"}>Projekte</Text>
                        </Box>

                        <VStack rounded={"lg"} p={4} bg={"bg/15"} className="backdrop_blur" shadow={"sm"} gap={3}>
                            
                            <VStack w={"full"} bg={"green.50/90"} rounded={"md"} p={3.5} color={"green.600"}>

                                <Text fontSize={"4xl"}><FaHospital /></Text>

                                <Text textAlign={"center"} fontWeight={"medium"} fontSize={"sm"}>Sonderreinigung <br /> für komplexe Fälle</Text>

                            </VStack>

                            <Grid
                                templateColumns={"repeat(2, 1fr)"}
                                gap={3}
                                w={"full"}
                            >

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"green.300"}><FaHelmetSafety /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>Baureinigung</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>Expertise</Text>

                                </VStack>

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"red.500"}><FaClock /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>24h</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>Notfall-Service</Text>

                                </VStack>

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"green.300"}><FaSprayCan /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>Graffiti</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>Entfernung</Text>

                                </VStack>

                                <VStack rounded={"md"} p={3.5} bg={"bg/15"} className="backdrop_blur" w="full" color={"bg"}>

                                    <Text fontSize={"xl"} color={"green.300"}><IoShieldCheckmark /></Text>

                                    <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"sm"}>Geld-zurück</Text>

                                    <Text textAlign={"center"} mt={-2} fontWeight={"semibold"} fontSize={"sm"}>Garantie</Text>

                                </VStack>

                            </Grid>

                        </VStack>

                    </Box>

                </Flex>

            </Box>

            <Box as={"section"}>

                <VStack w="full">
                    
                    <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"} textWrap={"wrap"} gap={2}><Text as={"span"} scale={0.9} mr={0.5}><FaTools /></Text>   Spezialisierte Reinigungsdienstleistungen</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md:"3xl" }} lineHeight={1.4}>
                        Unsere 
                        <Text as={"span"} color={"blue.600"}> Sonderreinigung  Nürnberg, Fürth & Umgebung </Text> Leistungen
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                        Von der <b>Baureinigung  Nürnberg, Fürth & Umgebung</b> bis zur <b>Grundreinigung  Nürnberg, Fürth & Umgebung</b> – {company_name} löst komplexe Reinigungsherausforderungen in  Nürnberg, Fürth & Umgebung, Schwabing, Haidhausen, Obersendling und dem gesamten Münchner Umland.
                    </Text>

                    <Grid
                        w="full"
                        gap={6}
                        templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
                        mb={12}
                    > 

                        {
                            specialCleaningServicesInDetail.map((service, i) => {
                                const isFirst = i == 0;
                                const isLast = i == specialCleaningServicesInDetail.length - 1;
                                return <GridItem asChild key={i}>
                                    <Box className="group">
                                        <VStack w={"full"} h={"full"} className="group-hover:-translate-y-[10px]! duration-150 group-hover:shadow-lg" rounded={"lg"} bg={ isFirst || isLast ? "blue.100/30" : "bg"} border={"1px solid"} align={"start"} borderColor={"blue.500/10"} borderTop={"6px solid"} borderTopColor={"blue.500"} p={{ base: 2, md: 6 }}>

                                            <HStack gap={6} w="full" align={"start"}>

                                                <Center minW={14} aspectRatio={"square"} rounded={"md"} color={"bg"} shadow={"5px 5px 10px 0px rgba(0, 0, 0, 0.15)"} fontSize={"3xl"} bg={"blue.700"}>
                                                    <service.icon />
                                                </Center>

                                                <VStack gap={1} align={"start"} w={"full"}>
                                                    <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>{service.name}</Heading>
                                                    <HStack align={"start"} justify={"start"} w={"full"} gap={2} color={"blue.600"}>
                                                        <Text mt={1}><service.selling_point.icon /></Text>
                                                        <Text>{service.selling_point.point}</Text>
                                                    </HStack>
                                                </VStack>

                                            </HStack>

                                            <Separator w="full" my={3} opacity={0.5} />

                                            <Text opacity={0.75} dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(service.des)}}></Text>

                                            <VStack align={"start"} w={"full"} gap={6} mt={5} mb={3} >
                                                {
                                                    service.content.map((content, j) => {

                                                        if(content.type == "applications"){
                                                            return <VStack align={"start"} w={"full"} key={j}>
                                                                <Text fontWeight={"semibold"}>{content.content.title}</Text>
                                                                <HStack mt={2} color={"blue.500"} fontWeight={"semibold"} gap={4} flexWrap={"wrap"}>
                                                                    {
                                                                        content.content.examples.map((example, k) => {
                                                                            return <Text key={k} fontSize={"sm"}>{example}</Text>
                                                                        })
                                                                    }
                                                                </HStack>
                                                            </VStack>
                                                        } 
                                                        else if (content.type == "grid"){
                                                            return <Grid key={j}
                                                                w="full"
                                                                gap={6}
                                                                templateColumns={{
                                                                    base: "1fr",
                                                                    md: content.content.length == 1 ? "1fr" : "repeat(2, 1fr)"
                                                                }}
                                                            >

                                                                {
                                                                    content.content.map((point, k) => {
                                                                        return <GridItem asChild key={k}>
                                                                            <VStack w="full" align={"start"}> 

                                                                                <Text fontWeight={"semibold"}>{point.title}</Text>

                                                                                <List.Root gap={2} variant="plain" align="center" color={"bg.inverted/80"} w={"full"} mt={1}>
                                            
                                                                                    <Grid
                                                                                        w={"full"}
                                                                                        gapX={6}
                                                                                        templateColumns={{
                                                                                            base: "1fr",
                                                                                            md: content.content.length != 1 ? "1fr" : "repeat(2, 1fr)"
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            point.points.map((p, l) => {
                                                                                                return <List.Item key={l}>
                                                                                                            <List.Indicator asChild color="green.500" scale={0.8}>
                                                                                                                <FaCheck />
                                                                                                            </List.Indicator>
                                                                                                        <Text fontSize={"sm"}>  
                                                                                                            {p}
                                                                                                        </Text>
                                                                                                    </List.Item>
                                                                                            })
                                                                                        }
                                                                                    </Grid>
                                                                                
                                                                                </List.Root>

                                                                            </VStack>
                                                                        </GridItem>
                                                                    })
                                                                }

                                                            </Grid>
                                                        }

                                                    })
                                                }
                                            </VStack>

                                            <VStack my={2} mt={8}>
                                                <HStack align={"start"} justify={"start"} w={"full"} gap={2} >
                                                    <Text mt={1} color={"blue.600"}><service.end_note.icon /></Text>
                                                    <Text fontWeight={"semibold"}>{service.end_note.title}</Text>
                                                </HStack>
                                                <Text mt={2} fontSize={"sm"} opacity={0.75} dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(service.end_note.des)}}></Text>
                                            </VStack>

                                        </VStack>
                                    </Box>
                                </GridItem>
                            })
                        }
        
                    </Grid>

                    <VStack gap={6} w={"full"} mb={12} className="gradient_mix_five" rounded={"xl"} p={6}>

                        <Badge py={2} px={4} rounded={"full"} bg={"red.600"} color={"bg"} size={"lg"} gap={2} shadow={"2xl"}>
                            <FaFire />NOTFALL-REINIGUNG
                        </Badge>
    
                        <Heading as={"h6"} lineHeight={1.65} textAlign={"center"} fontWeight={"bolder"} fontSize={{ base: "xl", md: "2xl" }}>Reinigung nach Umzug, Sanierung oder Brand-/Wasserschäden</Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} mt={-3} opacity={0.75}>
                            Professionelle Sofort-Hilfe bei Brand- und Wasserschäden mit 24h-Notfall-Service
                        </Text>
    
                        <Grid
                            w={"full"}
                            gap={4}
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                            mt={5}
                        >

                            <GridItem asChild>
                                <VStack bg={"bg"} rounded={"md"} shadow={"lg"} align={"start"} p={6} gap={5}>
                                    <Center w={12} aspectRatio={"square"} rounded={"md"} bg={"red.50"} fontSize={"xl"} color={"red.500"}>
                                        <FaFire />
                                    </Center>
                                    <Text fontWeight={"bolder"}>
                                        Brandschäden
                                    </Text>
                                    <List.Root gap={2} variant="plain" align="center" color={"bg.inverted/80"}>
                                                                   
                                            <List.Item>
                                                    <List.Indicator asChild color="red.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                    Ruß-Entfernung
                                                </Text>
                                            </List.Item>

                                            <List.Item>
                                                    <List.Indicator asChild color="red.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                   Geruchsneutralisation
                                                </Text>
                                            </List.Item>

                                            <List.Item>
                                                    <List.Indicator asChild color="red.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                    Schadstoff-Beseitigung
                                                </Text>
                                            </List.Item>
                                        
                                    </List.Root>
                                </VStack>
                            </GridItem>

                            <GridItem asChild>
                                <VStack bg={"bg"} rounded={"md"} shadow={"lg"} align={"start"} p={6} gap={5}>
                                    <Center w={12} aspectRatio={"square"} rounded={"md"} bg={"blue.50"} fontSize={"xl"} color={"blue.500"}>
                                        <FaDroplet />
                                    </Center>
                                    <Text fontWeight={"bolder"}>
                                        Wasserschäden
                                    </Text>
                                    <List.Root gap={2} variant="plain" align="center" color={"bg.inverted/80"}>
                                                                   
                                            <List.Item>
                                                    <List.Indicator asChild color="blue.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                    Trocknung & Entfeuchtung
                                                </Text>
                                            </List.Item>

                                            <List.Item>
                                                    <List.Indicator asChild color="blue.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                   Schimmel-Prophylaxe
                                                </Text>
                                            </List.Item>

                                            <List.Item>
                                                    <List.Indicator asChild color="blue.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                    Desinfektion
                                                </Text>
                                            </List.Item>
                                        
                                    </List.Root>
                                </VStack>
                            </GridItem>

                            <GridItem asChild colSpan={{ base: "auto", md: 2, lg: "auto" }}>
                                <VStack bg={"bg"} rounded={"md"} shadow={"lg"} align={"start"} p={6} gap={5}>
                                    <Center w={12} aspectRatio={"square"} rounded={"md"} bg={"green.50"} fontSize={"xl"} color={"green.500"}>
                                        <FaBoxes />
                                    </Center>
                                    <Text fontWeight={"bolder"}>
                                        Nach Umzug/Sanierung
                                    </Text>
                                    <List.Root gap={2} variant="plain" align="center" color={"bg.inverted/80"}>
                                                                   
                                            <List.Item>
                                                    <List.Indicator asChild color="green.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                    Grundreinigung
                                                </Text>
                                            </List.Item>

                                            <List.Item>
                                                    <List.Indicator asChild color="green.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                   Einzugsfertige Übergabe
                                                </Text>
                                            </List.Item>

                                            <List.Item>
                                                    <List.Indicator asChild color="green.500" scale={0.75}>
                                                        <FaCheck />
                                                    </List.Indicator>
                                                <Text fontSize={"sm"}>  
                                                    Abnahme-Unterstützung
                                                </Text>
                                            </List.Item>
                                        
                                    </List.Root>
                                </VStack>
                            </GridItem>

                        </Grid>
    
                    </VStack>

                    <VStack gap={6} w={"full"} color={"bg"} rounded={"xl"} className="gradient_light_background_one" py={{ base: 6, md: 12 }} px={{ base: 4, md: 6 }}>
    
                        <Heading as={"h6"} mt={5} textWrap={"wrap"} textAlign={"center"} fontWeight={"bolder"} fontSize={{ base: "xl", md:"2xl" }}>Komplexe Reinigungsherausforderung?</Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                            Unsere <b>Spezialreinigung  Nürnberg, Fürth & Umgebung</b> Expertise löst auch schwierigste Fälle. Kontaktieren Sie uns für eine kostenlose Objektbesichtigung und ein individuelles Angebot.
                        </Text>
    
                        <HStack gap={4} justify={"center"} gapY={3} mt={5} flexWrap={"wrap"}>
    
                            <Button asChild  bg={"yellow.500"} gap={3} p={{ base: 8, md: 3 }} color={"bg.inverted"} rounded={"lg"}>
                                <Link href={"#contact"}>
                                    <Text scale={0.75}><FaMessage /></Text>
                                     Kostenlose <br className="md:hidden" /> Objektbesichtigung sichern
                                </Link>
                            </Button>
                            
                            <Button asChild bg={"bg"} color={"bg.inverted"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                      {telephone}
                                </Link>
                            </Button>

                        </HStack>

                        <Badge py={{ base: 4, md: 2 }} px={{ base: 10, md: 4 }} rounded={"full"} bg={"red.600"} color={"bg"} size={"lg"} gap={{ base: 4, md: 2 }} shadow={"2xl"} className="fade_animation">
                            <IoWarning />
                            Notfall? <br className="md:hidden" /> 24h-Service <br className="md:hidden" /> unter: 0176 6767 9634
                        </Badge>
    
                    </VStack>
                    
                </VStack>

            </Box>

            <Box as={"section"} pos="relative" overflow={"hidden"} className="gradient_dark_background" color={"bg"}>

                <SectionEndDesign />
                
                <Box w={"full"} pos={"relative"} zIndex={1}>
                    <VStack textAlign={"center"} gap={10} w="100%">

                        <Badge bg={"bg"} color={"blue.600"} fontWeight={"bolder"} textTransform={"uppercase"} py={2} px={3} rounded={"full"}>
                            <FaAward />
                            VERTRAUEN & EXPERTISE IN  Nürnberg, Fürth & Umgebung
                        </Badge>
                        
                        <Heading as={"h4"} fontSize={{ base: "3xl", md: "4xl" }} lineHeight={1.4} fontWeight={"bolder"}>Warum <Text as={"span"} color={"cyan.400"}>Unternehmen in  Nürnberg, Fürth & Umgebung </Text> uns wählen</Heading>

                        <Text>Seit Jahren vertrauen Bauunternehmen, Hausverwaltungen und Gewerbeimmobilienbesitzer in  Nürnberg, Fürth & Umgebung, Schwabing, Haidhausen, Obersendling und dem gesamten Münchner Umland auf unsere professionelle <b>Sonderreinigung  Nürnberg, Fürth & Umgebung</b>.</Text>
    
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
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={awards_won} suffix="+" /></Text>
                                <Text fontSize={"sm"} textAlign={"center"}>Auszeichnungen</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>für Qualität & Service</Text>
                            </GridItem>
    
                            <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}><Counter end={satisfied_customers} suffix="+" /></Text>
                                <Text fontSize={"sm"} textAlign={"center"}>Zufriedene Kunden</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>erfolgreich betreut</Text>
                            </GridItem>

                            <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}>24/7</Text>
                                <Text fontSize={"sm"} textAlign={"center"}>Notfall-Service</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>bei Brand & Wasserschäden</Text>
                            </GridItem>

                            <GridItem _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <Text fontSize={"3xl"} textAlign={"center"} color={"cyan.400"} fontWeight={"semibold"}>100%</Text>
                                <Text fontSize={"sm"} textAlign={"center"}>Geld-zurück-Garantie</Text>
                                <Text fontSize={"xs"} opacity={0.75} textAlign={"center"}>bei Unzufriedenheit</Text>
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
                                        <IoShieldCheckmark />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"xl"} fontWeight={"bolder"} as={"h6"}>Geld-zurück-Garantie</Heading>
                                    <Text fontSize={"sm"} lineHeight={1.65}>
                                   Auch für unsere Spezialreinigungen bieten wir eine vollumfängliche Geld-zurück-Garantie. Ihre Zufriedenheit ist unser Anspruch.
                                    </Text>
                                    
                                </VStack>
                            </GridItem>

                            <GridItem textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <VStack gap={4} align={"start"}>
                                    <Center w={10} rounded={"md"} aspectRatio={"square"} color={"bg"} shadow={"lg"} bg={"red.600"}>
                                        <FaClock />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"xl"} fontWeight={"bolder"} as={"h6"}>24h-Notfall-Service</Heading>
                                    <Text fontSize={"sm"} lineHeight={1.65}>
                                    Bei dringenden Einsätzen wie Brand- oder Wasserschäden sind wir rund um die Uhr erreichbar und binnen kürzester Zeit vor Ort in  Nürnberg, Fürth & Umgebung.
                                    </Text>
                                    
                                </VStack>
                            </GridItem>

                            <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }}  textAlign={"left"} _hover={{ bg: "bg/25" }} w={"full"} h={"full"} bg={"bg/15"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                <VStack gap={4} align={"start"}>
                                    <Center w={10} rounded={"md"} aspectRatio={"square"} color={"bg"} shadow={"lg"} bg={"blue.800"}>
                                        <FaTools />
                                    </Center>
                                    <Heading lineHeight={1.3} fontSize={"xl"} fontWeight={"bolder"} as={"h6"}>Spezialisierte Ausrüstung</Heading>
                                    <Text fontSize={"sm"} lineHeight={1.65}>
                                    Modernste Geräte für Hochdruckreinigung, Trockeneisstrahlen, Dampfreinigung und andere anspruchsvolle Reinigungsverfahren.
                                    </Text>
                                    
                                </VStack>
                            </GridItem>
                            
                        </Grid>

                        <VStack textAlign={"center"} _hover={{ bg: "bg/8" }} w={"full"} h={"full"} bg={"bg/5"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                            
                            <Heading as={"h3"} fontSize={"2xl"} display={"flex"} gap={2} mt={4}>
                                <Text color={"blue.400"}><FaLocationDot /></Text>
                                 Sonderreinigung  Nürnberg, Fürth & Umgebung & Umgebung
                            </Heading>

                            <Text fontSize={"sm"} mt={4} mb={-2}>Wir betreuen Unternehmen, Bauvorhaben und Gewerbeimmobilien in ganz  Nürnberg, Fürth & Umgebung</Text>


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
                                        <FaHelmetSafety />
                                    </Center>
                                    <Text fontWeight={"bolder"}> Nürnberg, Fürth & Umgebung Nord</Text>
                                    <Text fontSize={"sm"}>Schwabing, Milbertshofen</Text>
                                </VStack>
            
                                <VStack minW={"200px"} gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                                    <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                        <FaIndustry />
                                    </Center>
                                    <Text fontWeight={"bolder"}> Nürnberg, Fürth & Umgebung Süd</Text>
                                    <Text fontSize={"sm"}>Haidhausen, Obersendling</Text>
                                </VStack>
            
                                <VStack gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                                    <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                                        <FaTools />
                                    </Center>
                                    <Text fontWeight={"bolder"}> Nürnberg, Fürth & Umgebung Umland</Text>
                                    <Text fontSize={"sm"}>Freising, Erding</Text>
                                </VStack>
            
                            </Grid>
                            
                        </VStack>

                        <Grid 
                            gap={6}
                            w="full"
                            templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
                        >

                            <GridItem asChild>
                                <VStack _hover={{ bg: "bg/15" }} w={"full"} h={"full"} bg={"bg/5"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5} gap={4}>
                                    <HStack gap={3} w={"full"}>
                                        <Text fontSize={"xl"} color={"blue.500"}><FaCircleCheck /></Text>
                                        <Heading as={"h5"} fontWeight={"bolder"} fontSize={"xl"}>Erfolgreiche Projekte</Heading>
                                    </HStack>
                                    <Separator w={"full"} mb={2} opacity={0.1} />
                                    <VStack textAlign={"left"} w={"full"} align={"start"} borderLeft={"5px solid"} borderColor={"blue.500"} p={3} py={1} gap={0}>
                                        <Text fontWeight={"medium"}>Bürogebäude  Nürnberg, Fürth & Umgebung-Schwabing</Text>
                                        <Text fontSize={"sm"} opacity={0.85}>Komplette Bauendreinigung nach Sanierung - 2.500 m²</Text>
                                    </VStack>

                                    <VStack textAlign={"left"} w={"full"} align={"start"} borderLeft={"5px solid"} borderColor={"blue.600"} p={3} py={1} gap={0}>
                                        <Text fontWeight={"medium"}>Industriehalle Obersendling</Text>
                                        <Text fontSize={"sm"} opacity={0.85}>Grundreinigung mit Spezialverfahren - 5.000 m²</Text>
                                    </VStack>

                                    <VStack textAlign={"left"} w={"full"} align={"start"} borderLeft={"5px solid"} borderColor={"blue.700"} p={3} py={1} gap={0}>
                                        <Text fontWeight={"medium"}>Gewerbekomplex Haidhausen</Text>
                                        <Text fontSize={"sm"} opacity={0.85}>Graffitientfernung komplette Fassade - 800 m</Text>
                                    </VStack>
                                </VStack>
                            </GridItem>

                            <GridItem asChild>
                                <VStack _hover={{ bg: "bg/15" }} w={"full"} h={"full"} bg={"bg/5"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={5}>
                                    <HStack gap={3} w={"full"}>
                                        <Text fontSize={"xl"} color={"blue.500"}><FaHandshake /></Text>
                                        <Heading as={"h5"} fontWeight={"bolder"} fontSize={"xl"}> Unsere Kunden</Heading>
                                    </HStack>

                                    <Grid px={5}  mt={8} mb={5} w={"full"} gap={4} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(2, 1fr)" }}>
                                        <VStack p={2}>
                                            <Center w={10} aspectRatio={"square"} rounded={"md"} bg={"blue.300"} color={"blue.700"} fontSize={"xl"}>
                                                <FaHelmetSafety />
                                            </Center> 
                                            <Text fontWeight={"medium"}>Bauunternehmen</Text>
                                        </VStack>

                                        <VStack p={2}>
                                            <Center w={10} aspectRatio={"square"} rounded={"md"} bg={"blue.300"} color={"blue.700"} fontSize={"xl"}>
                                                <FaBuilding />
                                            </Center> 
                                            <Text fontWeight={"medium"}>Hausverwaltungen</Text>
                                        </VStack>

                                        <VStack p={2}>
                                            <Center w={10} aspectRatio={"square"} rounded={"md"} bg={"blue.300"} color={"blue.700"} fontSize={"xl"}>
                                                <FaIndustry />
                                            </Center> 
                                            <Text fontWeight={"medium"}>Gewerbeimmobilien</Text>
                                        </VStack>

                                        <VStack p={2}>
                                            <Center w={10} aspectRatio={"square"} rounded={"md"} bg={"blue.300"} color={"blue.700"} fontSize={"xl"}>
                                                <FaStethoscope />
                                            </Center> 
                                            <Text fontWeight={"medium"}>Arztpraxen</Text>
                                        </VStack>
                                    </Grid>
                                </VStack>
                            </GridItem>

                        </Grid>
    
                        <VStack textAlign={"center"} w={"full"} h={"full"} className="gradient_light_background_one" border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"xl"} p={{ base: 2.5, md: 5 }}>
                            
                            <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }} mt={4}>
                                 Weitere Reinigungsdienstleistungen
                            </Heading>

                            <Text fontSize={"sm"} mt={2} mb={-2}>Entdecken Sie unser komplettes Leistungsspektrum für  Nürnberg, Fürth & Umgebung & Umgebung</Text>


                            <Grid templateColumns={{ base: "1fr", xl: "repeat(3, 1fr)" }} w={"full"} mt={9} gap={5}>

                                <HStack asChild gap={3} align={"start"} bg={"bg/5"} rounded={"md"} p={4} _hover={{ bg: "bg/10" }}>
                                    <Link href={'/unterhaltsreinigung-munchen'}>
                                        <Center w={14} mt={0.5} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"green.400"} fontSize={"3xl"}>
                                            <FaBroom />
                                        </Center>
                                        <VStack w={"full"} align={"start"} gap={0.5}>
                                            <Text fontWeight={"bolder"}>Unterhaltsreinigung</Text>
                                            <Text fontSize={"sm"}>Regelmäßige Gebäudereinigung</Text>
                                        </VStack>
                                    </Link>
                                </HStack>

                                <HStack asChild gap={3} align={"start"} bg={"bg/5"} rounded={"md"} p={4} _hover={{ bg: "bg/10" }}>
                                    <Link href={'/unterhaltsreinigung-munchen'}>
                                        <Center w={14} mt={0.5} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"green.400"} fontSize={"3xl"}>
                                            <FaHospital />
                                        </Center>
                                        <VStack w={"full"} align={"start"} gap={0.5}>
                                            <Text fontWeight={"bolder"}>Krankenhausreinigung</Text>
                                            <Text fontSize={"sm"}>Medizinische Hygiene-Standards</Text>
                                        </VStack>
                                    </Link>
                                </HStack>

                                <HStack asChild gap={3} align={"start"} bg={"bg/5"} rounded={"md"} p={4} _hover={{ bg: "bg/10" }}>
                                    <Link href={'/'}>
                                        <Center w={14} mt={0.5} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"green.400"} fontSize={"3xl"}>
                                            <FaHome />
                                        </Center>
                                        <VStack w={"full"} align={"start"} gap={0.5}>
                                            <Text fontWeight={"bolder"}>Alle Services</Text>
                                            <Text fontSize={"sm"}>Komplette Übersicht</Text>
                                        </VStack>
                                    </Link>
                                </HStack>
            
                            </Grid>
                            
                        </VStack>

                        <VStack gap={3} w={"full"} color={"bg"} rounded={"xl"} _hover={{ bg: "bg/7.5" }} py={6} bg={"bg/5"} border={"1px solid"} borderColor={"bg/40"} shadow={"xl"} px={6}>
    
                            <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Bereit für Ihre Sonderreinigung?</Heading>
        
                            <Text maxW={"500px"} textAlign={"center"} lineHeight={1.7} my={3}>
                                Kontaktieren Sie uns für eine kostenlose Objektbesichtigung und professionelle Beratung zu Ihrer <b>Spezialreinigung  Nürnberg, Fürth & Umgebung</b>.
                            </Text>
        
                            <HStack gap={4} justify={"center"} gapY={3} mt={5} flexWrap={"wrap"}>
        
                                <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                    <Link href={"#contact"}>
                                        <Text scale={0.75}><FaCalendarCheck /></Text>
                                         Kostenlose Objektbesichtigung
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
            <Box as={"section"} >
            
                <VStack w="full">
                    
                    <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaQuestionCircle /></Text>   Häufige Sonderfälle</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                        FAQ zur  
                        <Text as={"span"} color={"blue.600"}> Sonderreinigung  Nürnberg, Fürth & Umgebung </Text> 
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                        Antworten auf die wichtigsten Fragen zu unseren Spezialreinigungsdienstleistungen, <b>Baureinigung  Nürnberg, Fürth & Umgebung, Grundreinigung  Nürnberg, Fürth & Umgebung</b> und Notfall-Services.
                    </Text>

                    {/* faqs */}

                    {
                        specialCleaningFAQs.map((faq, i) => {
                            return <Faq key={i} question={faq} bg={i%2 !== 0 ? "bg" : "blue.100/25"} />
                        })
                    }

                    <VStack gap={6} w={"full"} color={"bg"} rounded={"xl"} className="gradient_mix_two" py={12} px={6}>
    
                        <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Weitere Fragen zur Sonderreinigung  Nürnberg, Fürth & Umgebung?</Heading>
    
                        <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                            Unser Expertenteam berät Sie gerne zu individuellen Lösungen für Ihre spezifischen Reinigungsherausforderungen und erstellt ein maßgeschneidertes Angebot.
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
            <Box as={"section"} overflowX={"hidden"} className="gradient_mix_four" color={"bg"} id="contact">

                <VStack w="full">
                    
                    <Badge mb={5} shadow={"lg"} color={"bg"} bg={"bg/5"} border={"1px solid"} borderColor={"bg"} rounded={"full"} px={4} py={2} size={"lg"}><Text as={"span"} color={"green.400"} scale={0.9} mr={0.5}><FaCalendarCheck /></Text>  JETZT SONDERREINIGUNG ANFRAGEN</Badge>
                    
                    <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={1.4}>
                        Kostenlose  
                        <Text as={"span"} color={"green.400"}> Objektbesichtigung </Text> <br className="md:hidden" /> für Ihre Reinigungsherausforderung
                    </Heading>
                    <Text maxW={"800px"} textAlign={"center"} mt={3} mb={14} lineHeight={1.75} w={"full"} >
                        Professionelle <b>Sonderreinigung  Nürnberg, Fürth & Umgebung, Baureinigung  Nürnberg, Fürth & Umgebung</b> und <b>Grundreinigung  Nürnberg, Fürth & Umgebung</b> mit 24h-Notfall-Service. Vereinbaren Sie noch heute einen kostenlosen Beratungstermin.
                    </Text>

                    <Flex gap={12} gapY={16} align={"start"} flexDir={{ base: "column", xl: "row" }} w={"full"}>
    
                    <Box w={{ base: "full", xl: "60%" }} p={{ base: 0, md: 8 }} md={{ bg: "bg/5", border: "1px solid", shadow: "2xl" }} borderColor={"bg/20"} color={"bg"} pos={"relative"} rounded={"xl"}>

                        <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={2.5} fontSize={{ base: "lg", md: "xl" }} mb={9}>
                            <Text color={"green.400"}><FaClipboardCheck /></Text>
                            Objektbesichtigung anfragen
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
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Unternehmen/Organisation</Text>
                                <Input type="text" name="company" placeholder="Firmenname (optional)" className="form_input" />
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>E-Mail Adresse *</Text>
                                <Input type="email" name="email" required placeholder="Ihre@email.de" className="form_input" />
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Telefon *</Text>
                                <Input type="tel" name="phone" required placeholder="Ihre Telefonnummer" className="form_input" />
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Art der Sonderreinigung *</Text>
                                <select required name="establishment" className=" w-full border! rounded-md py-1.5! border-black/10! text-sm! px-2.5! outline-black/30! h-10! form_input">
                                    {
                                        specialServiceList.map((opt, i) => {
                                            return <option key={i} value={opt.value}>{opt.label}</option>
                                        })
                                    }
                                </select>
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Dringlichkeit *</Text>
                                <Grid
                                    gap={3}
                                    w={"full"}
                                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                                >

                                    <GridItem>
                                        <input checked type="radio" name="time" value={"Normal (1-2 Wochen)"} id="normal" />
                                        <label className="ml-1!" htmlFor="normal">Normal (1-2 Wochen)</label>
                                    </GridItem>

                                    <GridItem>
                                        <input type="radio" name="time" value={"Eilig (2-3 Tage)"} id="urgent" />
                                        <label className="ml-1!" htmlFor="urgent">Eilig (2-3 Tage)</label>
                                    </GridItem>

                                    <GridItem>
                                        <input type="radio" name="time" value={"Notfall (sofort)"} id="emergency" />
                                        <label className="ml-1! text-red-300!" htmlFor="emergency">Notfall (sofort)</label>
                                    </GridItem>

                                </Grid>
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Objektadresse in  Nürnberg, Fürth & Umgebung</Text>
                                <Textarea
                                    resize={"none"}
                                    h={"100px"}
                                    placeholder="Straße, Hausnummer, Stadtteil..."
                                    name="address"
                                    className="form_input"
                                    required
                                >
                                    
                                </Textarea>
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Objektbeschreibung & Herausforderungen</Text>
                                <Textarea
                                    resize={"none"}
                                    h={"200px"}
                                    placeholder="Beschreiben Sie die Räumlichkeiten, Art der Verschmutzung, besondere Herausforderungen, Quadratmeter (falls bekannt)..."
                                    name="description"
                                    className="form_input"
                                    required
                                >
                                    
                                </Textarea>
                            </VStack>

                            <VStack gap={2} align={"start"} my={6}>
                                <Text fontSize={"sm"} fontWeight={"bolder"} opacity={0.75}>Zusätzliche Services</Text>
                                <Grid
                                    w={"full"}
                                    gap={4}
                                    mt={2}
                                    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                                >
                                    {
                                        additionalServicesList.map((service, i) => {
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
                            
                            <Button type="submit" color={"blue.800"} fontSize={"16px"} fontWeight={"bolder"} textWrap={"wrap"} bg={"blue.100"} py={{ base: 8, md: 6 }} w="full" rounded={"lg"}>
                                <HStack align={"start"} gap={1}>
                                    <Text scale={0.75}><FaCalendarCheck /></Text>
                                    <Text>Kostenlose Objektbesichtigung anfragen</Text>
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

                        <VStack rounded={"xl"} p={{ base: 3, md: 6 }} bg={"bg/5"} border={"1px solid"} w={"100%"} gap={4} borderColor={"bg/20"} shadow={"2xl"}>

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

                        <VStack rounded={"xl"}  p={{ base: 3, md: 6 }}  color={"bg"} bg={"red.600/90"} w={"100%"} shadow={"2xl"} gap={4}>

                            <Text fontSize={"3xl"}><FaFire /></Text>
                                                
                            <Heading textAlign={"center"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={2} fontSize={"lg"}>
                                    24h Notfall-Service
                            </Heading>

                            <Text>Brand- oder Wasserschäden? Kontaminationen?<br />
                            Wir sind <b>rund um die</b> Uhr für Sie da!</Text>
                            
                            <Grid w={"full"}
                                gap={3}
                                templateColumns={"repeat(2, 1fr)"}
                            >
                                <GridItem>
                                    <VStack gap={0.5} w={"full"} p={3} rounded={"md"} my={3} bg={"bg/10"}>
                                        <Text fontSize={"lg"} fontWeight={"bolder"}>30-90 Min</Text>
                                        <Text opacity={0.75}>Anfahrtszeit</Text>
                                    </VStack>
                                </GridItem>
                                <GridItem>
                                    <VStack gap={0.5} w={"full"} p={3} rounded={"md"} my={3} bg={"bg/10"}>
                                        <Text fontSize={"lg"} fontWeight={"bolder"}>365 Tage</Text>
                                        <Text opacity={0.75}>im Jahr</Text>
                                    </VStack>
                                </GridItem>
                            </Grid>

                            <Button asChild bg={"bg"} color={"red.600"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                        {telephone}
                                </Link>
                            </Button>

                        </VStack>

                        <VStack rounded={"xl"}  p={{ base: 3, md: 6 }}  bg={"bg/5"} border={"1px solid"} w={"100%"} gap={4} borderColor={"bg/20"} shadow={"2xl"}>

                            <Heading w={"full"} as={"h3"} display={"flex"} alignItems={"center"} fontWeight={"bolder"} gap={4} fontSize={"lg"} mb={1}>
                                <Text color={"yellow.400"}><FaShieldAlt /></Text>
                                 Qualität & Garantie
                            </Heading>

                            <Grid
                                templateColumns={"repeat(2, 1fr)"}
                                gap={4}
                                w={"full"}
                            >

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaAward /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>{awards_won}+</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Auszeichnungen</Text>

                                </VStack>

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"yellow.300"}><FaHandshake /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>{satisfied_customers}+</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Zufriedene Kunden</Text>

                                </VStack>

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"yellow.300"}><IoShieldCheckmark /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>100%</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Geld-zurück</Text>

                                </VStack>

                                <VStack textAlign={"center"} rounded={"md"} p={5} bg={"bg/5"} className="backdrop_blur" w="full" >

                                    <Text fontSize={"xl"} color={"red.500"}><FaClock /></Text>

                                    <Text fontWeight={"semibold"} fontSize={"sm"}>24/7</Text>

                                    <Text mt={-2} fontWeight={"bolder"} opacity={0.75} fontSize={"xs"}>Service</Text>

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

                                <Text fontSize={"sm"}> Nürnberg, Fürth & Umgebung&apos;s führende Sonderreinigung</Text>

                            </VStack>

                        </VStack>

                        <Center h={"full"} rounded={"xl"}  p={{ base: 3, md: 6 }}  py={7} color={"green.800"} bg={"green.400"} shadow={"2xl"} >
                            <VStack  w={"100%"} gap={4}>
                            
                                <Text fontSize={"3xl"}><FaStopwatch /></Text>
                                <Text fontWeight={"bolder"}>Schnelle Reaktionszeit</Text>
                                <Text fontSize={"sm"}>Angebot innerhalb von <b>24 Stunden</b> <br />
                                Objektbesichtigung binnen <b>48 Stunden</b> <br />
                                Notfall-Einsatz in <b>30-90 Minuten</b>
                                </Text>

                                <Text fontWeight={"bolder"} fontSize={"lg"}>GARANTIERT</Text>

                            </VStack>
                        </Center>

                        </Grid>

                    </VStack>
    
                </Flex>

                </VStack>

            </Box>

        </>
    )
}

export default SpecialServicePage;