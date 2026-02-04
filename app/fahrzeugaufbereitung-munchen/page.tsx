'use client'

import CommonServiceContactSection from "@/components/common-services-contact-section";
import SectionEndDesign from "@/components/design.component";
import { company_location, company_name, properties_cleaned, satisfied_customers } from "@/data/about";
import carCleaningServices, { stepsList, whyCarCleaning } from "@/data/car_cleaning_services.list";
import { address, mobile, opening_hours, service_area, telephone } from "@/data/contact";
import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsSendFill } from "react-icons/bs";
import { FaAward, FaCalendarCheck, FaCar, FaCertificate, FaCheck, FaCircle, FaClipboardCheck, FaClock, FaCouch, FaEnvelope, FaEuroSign, FaGift, FaHandshake, FaIndustry, FaLeaf, FaLock, FaMicroscope, FaMobileAlt, FaPhoneAlt, FaShieldAlt, FaStar, FaTruck, FaWind } from "react-icons/fa";
import { FaCrown, FaListCheck, FaLocationDot, FaMedal, FaUserGear } from "react-icons/fa6";
import { IoDocumentText, IoShieldCheckmark } from "react-icons/io5";

const CarCleaningServicePage = () => {
    return (
        <>
        {/* hero section */}
        <Box as={"section"} overflowX={"hidden"} bg={"blue.100/30"}>

            <Flex gap={12} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} gap={2}> <FaCar /> Reinigungsfirma München</Badge>
                        <Heading as={"h1"} color={"blue.600"} my={3} fontSize={{ base: "2xl", md: "4xl" }} lineHeight={1.25} fontWeight={"bolder"}
                        >Fahrzeugaufbereitung München</Heading>

                        <Text fontWeight={"bolder"}>Ihr Auto wie neu</Text>

                        <Text opacity={0.55} my={3}>
                            Saubere Fahrzeuge erhalten ihren Wert. Arisma Gebäudedienste ist Ihre zuverlässige Reinigungsfirma für professionelle Fahrzeugaufbereitung in München – gründlich, schonend und mit Premium-Produkten.
                        </Text>

                        <Grid
                            gapX={6}
                            gapY={3}
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                            fontSize={"sm"}
                        >
                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaCheck /></Text>
                                    </Center>
                                    <Text>Außen & Innen</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaShieldAlt /></Text>
                                    </Center>
                                    <Text>Zertifizierte Mitarbeiter</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaClock /></Text>
                                    </Center>
                                    <Text>Schnelle Aufbereitung</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaAward /></Text>
                                    </Center>
                                    <Text>Premium-Produkte</Text>
                                </HStack>
                            </GridItem>

                        </Grid>
                        
                        <HStack gap={2} mt={5} flexWrap={"wrap"}>

                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={"/#contact"}>
                                    <Text scale={0.75}><FaGift /></Text>
                                    Jetzt Angebot anfordern
                                </Link>
                            </Button>
                            
                            <Button asChild colorPalette={"blue"} rounded={"lg"}>
                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                    <Text scale={0.75}><FaPhoneAlt /></Text>
                                    {telephone}
                                </Link>
                            </Button>

                        </HStack>

                        <HStack gap={3} flexWrap={"wrap"} mt={{ base: 3, md: 1 }} fontSize={"13px"}>

                            <HStack gap={1}>
                                <Text color={"blue.600"}><FaUserGear /></Text>
                                <Text fontWeight={"medium"} opacity={0.4}>Über {satisfied_customers} zufriedene Kunden</Text>
                            </HStack>

                            <HStack gap={1}>
                                <Text color={"blue.600"}><FaLocationDot /></Text>
                                <Text fontWeight={"medium"} opacity={0.4}>{service_area}</Text>
                            </HStack>

                        </HStack>

                    </VStack>
                </Box>

                <Box w={{ base: "full", lg: "50%" }} pos={"relative"}>

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} left={"50%"} top={"-25%"} translateY={"-50%"} zIndex={-1}></Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>{properties_cleaned}+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Objekte gereinigt</Text>
                    </Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>100%</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Zuverlässigkeit</Text>
                    </Box>

                    <Image alt="" src="./assets/car-cleaning-page-hero-section.jpg" w={"90%"} mx="auto" h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>

        </Box>

        {/* range of services section */}
        <Box as="section">
            <VStack w="full">
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaListCheck /></Text>   UNSERE LEISTUNGEN</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} lineHeight={1.4}>
                    Fahrzeugaufbereitung München – 
                    <Text as={"span"} color={"blue.600"}> Unsere Services</Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Unsere geschulten Spezialisten sorgen für makellose Sauberkeit, langanhaltenden Glanz und professionelle Pflege – innen wie außen. Ob Fuhrpark, Dienstwagen oder Privatauto – wir bringen jedes Fahrzeug in Bestform.
                </Text>

                <Grid
                    gap={6}
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    my={10}
                >

                    {
                        carCleaningServices.map((service, i) => {
                            return <GridItem asChild key={i}>
                                <Box>

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
                                
                                </Box>
                            </GridItem>
                        })
                    }
                    
                </Grid>

            </VStack>
        </Box>

        {/* details section */}
        <Box as="section" overflowX={"hidden"} bg={"blue.100/30"}>
            <VStack w="full">
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaCertificate /></Text>   Qualitätsnachweis Inklusive</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} lineHeight={1.4}>
                    Autoaufbereitung – Innen & Außen mit Qualitätsnachweis 
                </Heading>
                <Text maxW={"500px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Unsere professionelle Fahrzeugaufbereitung umfasst Innenreinigung und Außenpflege, Politur und Lackaufbereitung.
                </Text>
                
                <Flex mt={8} gap={12} align={"center"} flexDir={{ base: "column-reverse", xl: "row" }}>

                <Box  w={{ base: "full", xl: "50%" }}>
                    <VStack gap={5} align={"start"} w={"full"} mx={"auto"}>

                        <VStack bg={"bg"} w={"full"} rounded={"md"} shadow={"sm"} p={6} align={"start"} gap={6}>

                            <HStack align={{ base: "start", md: "center" }} gap={4}>
                                <Text mt={{ base: 2, md: 0 }}><FaListCheck /></Text>
                                <Heading as={"h5"} fontSize={"lg"}>Unsere Leistungen im Detail</Heading>
                            </HStack>

                            <Separator w="full" opacity={0.75} />

                            <HStack align={{ base: "start", md: "center" }} gap={3}>
                                <Center  mt={{ base: 1, md: 0 }} bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                    <FaCar />
                                </Center>
                                <Text>
                                    <b>Außenpflege : </b>
                                    Handwäsche, Felgenreinigung, Politur und Lackversiegelung
                                </Text>
                            </HStack>

                            <HStack align={{ base: "start", md: "center" }} gap={3}>
                                <Center  mt={{ base: 1, md: 0 }} bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                    <FaCouch />
                                </Center>
                                <Text>
                                    <b>Innenreinigung : </b>
                                     Polster- und Teppich-Tiefenreinigung, Armaturenpflege und Scheibenreinigung
                                </Text>
                            </HStack>

                            <HStack align={{ base: "start", md: "center" }} gap={3}>
                                <Center  mt={{ base: 1, md: 0 }} bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                    <FaWind />
                                </Center>
                                <Text>
                                    <b>Geruchsbeseitigung : </b>
                                    Ozon-Behandlung und Klimaanlagen-Desinfektion
                                </Text>
                            </HStack>

                            <HStack align={{ base: "start", md: "center" }} gap={3}>
                                <Center  mt={{ base: 1, md: 0 }} bg={"blue.700"} color={"bg"} rounded={"sm"} minW={10} aspectRatio={"square"} >
                                    <FaClipboardCheck />
                                </Center>
                                <Text>
                                    <b>Detaillierte Dokumentation </b>
                                     jedes Arbeitsschritts – inklusive Vorher-/Nachher-Check
                                </Text>
                            </HStack>

                        </VStack>

                        <HStack bg={"bg"} w={"full"} rounded={"md"} shadow={"sm"} p={6} align={"start"} gap={6}>

                            <Text color={"blue.500"} fontSize={"4xl"}><FaStar /></Text>

                            <VStack align={"start"} w={"full"}>
                                
                                <Heading as={"h5"}>Ihr Vorteil</Heading>
                                <Text fontSize={"sm"}>So bleibt Ihr Fahrzeug wie neu und Sie haben alle Leistungen schwarz auf weiß.</Text>

                            </VStack>

                        </HStack>

                    </VStack>
                </Box>

                <Box w={{ base: "full", xl: "50%" }} pos={"relative"}>

                    <HStack pos={"absolute"} bg={"bg"} p={3} px={5} bottom={-5} left={-3} rounded={"md"} gap={4} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"3xl"}><IoShieldCheckmark /></Text>
                        <Text fontSize={"sm"}>Qualität
                            <Text as={"span"} display={"block"} fontWeight={"bolder"} fontSize={"2xl"}>100%</Text>
                        </Text>
                    </HStack>

                    <VStack pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"4xl"}><IoDocumentText /></Text>
                        <Text fontSize={"sm"}>Dokumentiert</Text>
                    </VStack>

                    <Image alt="" src="./assets/car-detail-banner.png" w={"90%"} mx="auto" h={{base: "auto", xl: "500px"}} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>
            </VStack>
        </Box>

        <Box as="section">
            <VStack w="full">
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><IoShieldCheckmark /></Text>   QUALITÄTSVERSPRECHEN</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} lineHeight={1.4}>
                    Warum {company_name} Gebäudedienste für 
                    <Text as={"span"} color={"blue.600"}> Fahrzeugaufbereitung München?</Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Vertrauen Sie auf jahrelange Erfahrung, professionelle Ausbildung und höchste Qualitätsstandards bei der Autoaufbereitung in München.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        xl: "repeat(4, 1fr)"
                    }}
                    my={10}
                >

                    {
                        whyCarCleaning.map((why, i) => {
                            return <GridItem asChild key={i}>
                                <Box>

                                    <VStack _hover={{ bg: "blue.800", color: "bg" }} className="duration-150 group" bg={"blue.100/10"} rounded={"lg"} shadow={"sm"} gap={8} h="full" p={5} py={8}>

                                        <Center minW={14} aspectRatio={"square"} className="group-hover:bg-white! group-hover:text-blue-800!" rounded={"md"} bg={"blue.700"} color={"bg"} fontSize={"xl"}>
                                            <why.icon />
                                        </Center>

                                        <Heading as={"h4"} textAlign={"center"} fontWeight={"bolder"} fontSize={"lg"}>{why.title}</Heading>

                                        <Text textAlign={"center"} mt={-3} maxW={"90%"} opacity={0.65} fontSize={"sm"} lineHeight={1.4}>{why.text}</Text>

                                    </VStack>
                                
                                </Box>
                            </GridItem>
                        })
                    }
                    
                </Grid>

                <Heading as="h6" textAlign={"center"} fontSize={"2xl"} fontWeight={"bolder"} my={5}>So läuft Ihre Fahrzeugaufbereitung in München ab</Heading>

                <Grid
                    gap={8}
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        xl: "repeat(4, 1fr)"
                    }}
                    my={10}
                >

                    {
                        stepsList.map((step, i) => {
                            return <GridItem asChild key={i}>
                                <Box>

                                    <VStack gap={6} h="full" p={5} py={8}>

                                        <Center minW={14} aspectRatio={"square"} rounded={"full"} fontWeight={"bolder"} bg={"blue.700"} color={"bg"} fontSize={"xl"}>
                                            <Text>{i+1}</Text>
                                        </Center>

                                        <Heading as={"h4"} textAlign={"center"} fontWeight={"bolder"} fontSize={"lg"}>{step.title}</Heading>

                                        <Text textAlign={"center"} mt={-3} maxW={"90%"} opacity={0.65} fontSize={"sm"} lineHeight={1.4}>{step.text}</Text>

                                    </VStack>
                                
                                </Box>
                            </GridItem>
                        })
                    }
                    
                </Grid>

            </VStack>
        </Box>

        <Box as={"section"} overflowX={"hidden"}>

            <VStack w="full">
                <Badge mb={3} shadow={"lg"} color={"bg"} className="gradient_mix_two" rounded={"full"} px={4} py={2} size={"lg"}><Text as={"span"} color={"yellow.400"} scale={1} mr={0.5}><FaCrown /></Text>   PREMIUM PARTNER</Badge>
                
                <Heading as={"h2"} textAlign={"center"} color={"blue.700"} fontSize={"3xl"} lineHeight={1.4}>
                    K2 Premium Produkte 
                </Heading>
                <Text maxW={"600px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Als exklusiver Partner von K2 setzen wir auf die weltweit führenden Pflegeprodukte für höchste Qualität und langanhaltende Ergebnisse.
                </Text>
            </VStack>

            <Flex gap={12} gapY={20} my={12} flexDir={{ base: "column", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    
                    <Center pos={"relative"} w={"full"} p={8} overflow={"hidden"} rounded={"md"}>

                        <Image src={"./assets/k2-premium.png"} w={"full"} h={"full"} alt="" pos="absolute" />

                        <VStack pos={"relative"} w={"full"} className="backdrop_blur" p={4} bg={"bg/70"} rounded={"sm"}>

                            <HStack w={"full"} mb={3} gap={4}>
                                <Center minW={12} aspectRatio={"square"} className="gradient_mix_one" rounded={"md"}>
                                    <Text fontSize={"xl"} color={"bg"}><FaIndustry /></Text>
                                </Center>
                                <VStack align={"start"} gap={0}>
                                    <Heading as={"h5"} fontSize={"lg"} fontWeight={"bolder"}>Über 1.200 Pflegeprodukte</Heading>
                                    <Text fontSize={"sm"} opacity={0.6}>Komplettes K2 Sortiment verfügbar</Text>
                                </VStack>
                            </HStack>

                            <Text fontSize={"sm"}>
                                Mit über 1.200 verschiedenen K2 Pflegeprodukten bieten wir für jeden Fahrzeugtyp und jede Oberflächenart die optimale Lösung. Von der Grundreinigung bis zur Spezialversiegelung.
                            </Text>

                        </VStack>

                    </Center>

                    <Grid gap={5} mt={8} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "1fr", xl: "repeat(2, 1fr)" }}>

                        <GridItem p={5} rounded={"md"} bg={"purple.100"}>
                            
                            <HStack>
                                <Text color={"purple.700"}><FaMedal /></Text>
                                <Text as="h6" fontWeight={"bolder"}>Marktführer</Text>
                            </HStack>

                            <Text mt={3} fontSize={"sm"} lineHeight={1.7}>
                                K2 ist europäischer Marktführer für professionelle Fahrzeugpflege
                            </Text>

                        </GridItem>

                        <GridItem p={5} rounded={"md"} bg={"green.100"}>
                            
                            <HStack>
                                <Text color={"green.700"}><FaLeaf /></Text>
                                <Text as="h6" fontWeight={"bolder"}>Umweltfreundlich</Text>
                            </HStack>

                            <Text mt={3} fontSize={"sm"} lineHeight={1.7}>
                               Biologisch abbaubare Formeln für nachhaltigen Umweltschutz
                            </Text>

                        </GridItem>

                        <GridItem p={5} rounded={"md"} bg={"orange.100"}>
                            
                            <HStack>
                                <Text color={"orange.700"}><FaMicroscope /></Text>
                                <Text as="h6" fontWeight={"bolder"}>
Labor-geprüft</Text>
                            </HStack>

                            <Text mt={3} fontSize={"sm"} lineHeight={1.7}>
                               Jedes Produkt durchläuft strenge Qualitätstests
                            </Text>

                        </GridItem>

                        <GridItem p={5} rounded={"md"} bg={"red.100"}>
                            
                            <HStack>
                                <Text color={"red.700"}><FaShieldAlt /></Text>
                                <Text as="h6" fontWeight={"bolder"}>Lackschutz</Text>
                            </HStack>

                            <Text mt={3} fontSize={"sm"} lineHeight={1.7}>
                                Schonende Formeln für optimalen Materialschutz
                            </Text>

                        </GridItem>

                    </Grid>

                </Box>

                <Box w={{ base: "full", lg: "50%" }} pos={"relative"}>

                    <Badge pos={"absolute"} top={3} left={8} px={3} py={2} rounded={"full"} gap={2}>
                        <Text scale={0.75} color={"green.600"}><FaCircle /></Text>
                        <Text>Premium Partner</Text>
                    </Badge>

                    <Box pos={"absolute"} bg={"bg"} p={3} px={5} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>1.200+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Produkte</Text>
                    </Box>

                    <VStack gap={0} pos={"absolute"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"} className="gradient_mix_two" color={"bg"}>
                        <Text fontWeight={"bolder"} fontSize={"lg"}>K2</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Premium</Text>
                    </VStack>

                    <Image alt="" src="./assets/k2-premium-banner.png" w={"90%"} mx="auto" h={"100%"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>
            
            <Grid mt={14} w={"full"} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }} rounded={"lg"} gapY={12} p={6} className="gradient_mix_one" py={12}>
                
                <VStack textAlign={"center"} color={"bg"}>
                    <Text fontSize={"3xl"} color={"green.300"} mb={3}><FaTruck /></Text>
                    <Text as={"h5"} fontWeight={"bolder"}>Schnelle Lieferung</Text>
                    <Text mt={-1} fontSize={"sm"}>K2 Produkte immer vorrätig</Text>
                </VStack>

                <VStack textAlign={"center"} color={"bg"}>
                        <Text fontSize={"3xl"} color={"yellow.300"} mb={3}><FaCertificate /></Text>
                        <Text as={"h5"} fontWeight={"bolder"}>Zertifizierte Qualität</Text>
                        <Text mt={-1} fontSize={"sm"}>ISO-geprüfte Produkte</Text>
                    </VStack>

                <VStack textAlign={"center"} color={"bg"}>
                        <Text fontSize={"3xl"} color={"red.300"} mb={3}><FaHandshake /></Text>
                        <Text as={"h5"} fontWeight={"bolder"}>Exklusiv-Partner</Text>
                        <Text mt={-1} fontSize={"sm"}>Direkter K2 Vertriebspartner</Text>
                    </VStack>

                <VStack textAlign={"center"} color={"bg"}>
                        <Text fontSize={"3xl"} color={"cyan.300"} mb={3}><FaAward /></Text>
                        <Text as={"h5"} fontWeight={"bolder"}>Profi-Anwendung</Text>
                        <Text mt={-1} fontSize={"sm"}>Geschultes Fachpersonal</Text>
                </VStack>

            </Grid>

        </Box>

        <Box as="section" pos={"relative"} className="gradient_dark_background" overflow={"hidden"}>

            <SectionEndDesign />


            <VStack w={"full"} pos={"relative"} zIndex={1} color={"bg"} gap={5}>

                <Badge bg={"bg"} color={"blue.600"} fontWeight={"bolder"} textTransform={"uppercase"} py={2} px={3} rounded={"full"}>
                    <FaPhoneAlt />
                     JETZT KONTAKT AUFNEHMEN
                </Badge>

                <Heading textAlign={"center"} as={"h4"} my={2} lineHeight={1.2} fontSize={"3xl"} fontWeight={"bolder"}>
                    Lassen Sie Ihr Fahrzeug wieder in  
                    <Text as={"span"} color={"cyan.400"}> neuem Glanz erstrahlen</Text>
                </Heading>

                <Text textAlign={"center"} maxW={"600px"}>
                    Jetzt kostenloses Angebot für Ihre Fahrzeugaufbereitung in München anfordern oder direkt telefonisch Kontakt aufnehmen.
                </Text>

                <HStack mt={7} gap={4} justify={"center"} flexWrap={"wrap"}>
                    
                    <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={"/#contact"}>
                                <Text scale={0.75}><FaCalendarCheck /></Text>
                                 Jetzt Termin buchen
                            </Link>
                        </Button>

                        <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                <Text scale={0.75}><FaPhoneAlt /></Text>
                                {telephone}
                            </Link>
                        </Button>

                        <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={`tel:${mobile.replaceAll(" ", "")}`}>
                                <Text scale={0.75}><FaMobileAlt /></Text>
                                {mobile}
                            </Link>
                        </Button>

                </HStack>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={8}
                    w={"full"}
                    mt={10}
                >

                    <GridItem rounded={"md"} bg={"bg/10"} color={"bg"} border={"1px solid"} borderColor={"bg/50"} py={8} px={4} asChild>
                        <VStack gap={3} textAlign={"center"}>
                            <Center w={20} fontSize={"3xl"} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                                <FaLocationDot />
                            </Center>
                        <Heading as={"h6"} fontWeight={"bolder"}>Unser Standort</Heading>
                        <Text whiteSpace={"pre-wrap"}>{company_name}
                            <br />
                            {address}</Text>
                        </VStack>
                    </GridItem>

                    <GridItem rounded={"md"} bg={"bg/10"} color={"bg"} border={"1px solid"} borderColor={"bg/50"} py={8} px={4} asChild>
                        <VStack gap={3} textAlign={"center"}>
                            <Center w={20} fontSize={"3xl"} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                                <FaPhoneAlt />
                            </Center>
                        <Heading as={"h6"} fontWeight={"bolder"}>Telefon</Heading>
                        <Link href={`tel:${telephone.replaceAll(" ", "")}`}>{telephone}</Link>
                        <Link className="-mt-2!" href={`tel:${mobile.replaceAll(" ", "")}`}>{mobile}</Link>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} rounded={"md"} bg={"bg/10"} color={"bg"} border={"1px solid"} borderColor={"bg/50"} py={8} px={4} asChild>
                        <VStack gap={3} textAlign={"center"}>
                            <Center w={20} fontSize={"3xl"} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                                <FaClock />
                            </Center>
                        <Heading as={"h6"} fontWeight={"bolder"}>Öffnungszeiten</Heading>
                        <Text>
                            {opening_hours}
                        </Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <HStack mt={9} flexWrap={"wrap"} justify={"center"} gap={12}>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaShieldAlt />
                        </Center>
                        <Text fontWeight={"bolder"}>100% Garantie</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaEuroSign />
                        </Center>
                        <Text fontWeight={"bolder"}>Faire Preise</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} fontSize={"xl"} color={"blue.800"}>
                            <FaStar />
                        </Center>
                        <Text fontWeight={"bolder"}>Top Qualität</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaLocationDot />
                        </Center>
                        <Text fontWeight={"bolder"}>{company_location}</Text>
                    </VStack>

                </HStack>

                <Separator w={"full"} opacity={0.15} my={12} />

                <VStack mt={2} gap={3} w={"full"} bg={"bg/15"} rounded={"md"} p={6} border={"1px solid"} borderColor={"bg"} textAlign={"center"}>
                    
                    <Heading as={"h5"} mb={4} fontSize={"xl"} fontWeight={"bolder"}>Ihre Experten für Fahrzeugaufbereitung in München</Heading>

                    <Text maxW={"800px"}>
                        {company_name} ist Ihr professioneller Partner für <b>Fahrzeugaufbereitung München, Autoaufbereitung München, Innenraumreinigung Auto München und Lackaufbereitung München.</b>
                        <br /><br />
                        Wir bieten professionelle Fahrzeugpflege für Privatkunden und Unternehmen in ganz München und Umgebung. Von der einfachen Handwäsche bis zur Komplettaufbereitung – vertrauen Sie auf unsere jahrelange Erfahrung und höchste Qualitätsstandards.

                    </Text>

                </VStack>

            </VStack>

        </Box>

        {/* contact sectin */}
        <CommonServiceContactSection />
        </>
    )
}

export default CarCleaningServicePage;