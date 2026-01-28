'use client'

import CommonServiceContactSection from "@/components/common-services-contact-section";
import SectionEndDesign from "@/components/design.component";
import { company_location, company_name, properties_cleaned, satisfied_customers } from "@/data/about";
import { address, mobile, service_area, telephone } from "@/data/contact";
import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import restaurantCleaningServices from "@/data/restaurant_cleaning_services.list";
import windowCleaningServices from "@/data/window_cleaning_services.list";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsSendFill } from "react-icons/bs";
import { FaBuilding, FaCertificate, FaCheck, FaClipboardCheck, FaClock, FaConciergeBell, FaEnvelope, FaEuroSign, FaGift, FaHotel, FaInfoCircle, FaLeaf, FaLock, FaMobileAlt, FaMoon, FaPhoneAlt, FaShieldAlt, FaShieldVirus, FaSprayCan, FaStar, FaTools, FaUserLock, FaVirusSlash } from "react-icons/fa";
import { FaListCheck, FaLocationDot, FaUserGear } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { RiCupFill, RiRestaurantFill } from "react-icons/ri";

const RestaurantCleaningServicePage = () => {

    return (
        <>
        {/* hero section */}
        <Box as={"section"} overflowX={"hidden"} bg={"blue.100/30"}>

            <Flex gap={12} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} gap={2}> <RiRestaurantFill /> Reinigungsfirma München</Badge>
                        <Heading as={"h1"} color={"blue.600"} my={3} fontSize={{ base: "3xl", md: "4xl" }} lineHeight={1.25} fontWeight={"bolder"}
                        >Gastronomie-Reinigung München</Heading>

                        <Text fontWeight={"bolder"}>Hygiene, die überzeugt</Text>

                        <Text opacity={0.55} my={3}>
                            Saubere Küchen und Gastbereiche sind Pflicht. Arisma Gebäudedienste ist Ihre zuverlässige Reinigungsfirma für professionelle Gastronomie-Reinigung in München – HACCP-konform, hygienisch und gründlich.
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
                                    <Text>HACCP-konform</Text>
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
                                    <Text>Flexible Zeiten</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaVirusSlash /></Text>
                                    </Center>
                                    <Text>Höchste Hygiene</Text>
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

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} right={"-5%"} bottom={"-10%"} translateY={"-50%"} zIndex={-1}></Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>{properties_cleaned}+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Objekte gereinigt</Text>
                    </Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>100%</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Zuverlässigkeit</Text>
                    </Box>

                    <Image alt="" src="/assets/restaurant-cleaning-page-hero-section.jpg" w={"90%"} mx="auto" h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>

        </Box>

        {/* advantages section */}
        <Box as={"section"}>

            <VStack w={"full"}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"} textWrap={"wrap"} gap={{ base: 2, md: 1 }}><Text as={"span"} scale={0.9} mr={0.5}><FaInfoCircle /></Text>    ÜBER UNSERE GASTRONOMIE-REINIGUNG</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Professionelle Küchenreinigung München  
                    <Text as={"span"} color={"blue.600"}> nach HACCP-Standard</Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    {company_name} ist Ihr Partner für professionelle Gastronomie-Reinigung in München. Wir reinigen Küchen, Gasträume und Kantinen nach den strengen HACCP-Richtlinien – gründlich, planbar und zuverlässig. Von Restaurants über Hotels bis zu Großküchen und Kantinen: Wir sorgen für einwandfreie Hygiene in Ihrem Gastronomiebetrieb.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><RiRestaurantFill /></Center>
                            <Heading as={"h5"}>Für Gastronomie & Hotels</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Professionelle Restaurantreinigung München für Restaurants, Hotels, Cafés und Bars – mit Erfahrung in der Gastronomiebranche.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaClipboardCheck /></Center>
                            <Heading as={"h5"}>HACCP-konform</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>HACCP Reinigung München nach den strengsten Hygienestandards – dokumentiert und nachweisbar für Gesundheitsämter und Kontrollen.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaBuilding /></Center>
                            <Heading as={"h5"}>Großküchen & Kantinen</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Spezialisiert auf die Küchenreinigung München von Großküchen, Betriebskantinen und Catering-Unternehmen mit hohen Anforderungen.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <Flex rounded={"md"} py={{ base: 4, md: 10 }} className="gradient_dark_background" w="full" gap={6} gapY={14} mt={4} px={{ base: 4, md: 8 }} flexDir={{ base: "column", lg: "row" }}>

                    <Box color={"bg"} w={{ base: "full", lg: "50%" }}>

                        <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Warum HACCP-Reinigung so wichtig ist</Heading>

                        <VStack gap={6} mt={10} align={"start"}>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Gesundheitsschutz</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Verhindert Lebensmittelkontaminationen und schützt Gäste vor gesundheitlichen Risiken
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Gesetzliche Vorgaben</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Erfüllt alle behördlichen Anforderungen und Hygienevorschriften für Gastronomiebetriebe
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Reputation & Vertrauen</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Saubere Küchen und Gasträume schaffen Vertrauen bei Gästen und verbessern Ihren Ruf
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Dokumentation</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Lückenlose Dokumentation aller Reinigungsmaßnahmen für Kontrollen und Audits
                                    </Text>
                                </Box>

                            </HStack>

                        </VStack>

                    </Box>

                    <Center w={{ base: "full", lg: "50%" }}>

                        <VStack gap={5} bg={"bg"} w={"full"} rounded={"md"} p={8} shadow={"md"} textAlign={"center"}>

                            <Heading as={"h6"} fontSize={"4xl"} fontWeight={"bolder"} color={"blue.500"}>HACCP</Heading>

                            <Text fontSize={"sm"} lineHeight={1.45}>Hazard Analysis and Critical Control Points</Text>

                            <Separator w={"full"} />

                            <Text as={"h6"} fontSize={"3xl"} fontWeight={"bolder"} color={"blue.500"}>100%</Text>

                            <Text fontSize={"sm"} lineHeight={1.45}>Hygienestandards garantiert</Text>

                        </VStack>

                    </Center>

                </Flex>

            </VStack>

        </Box>

        {/* range of services section */}
        <Box as="section" bg={"blue.100/20"}>
            <VStack w="full">
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaListCheck /></Text>  UNSERE LEISTUNGEN</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4}>
                    Gastronomie-Reinigung München –  
                    <Text as={"span"} color={"blue.600"}> Unser Service-Spektrum </Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Von der Großküchen-Reinigung bis zum Gastraum – wir bieten alle Leistungen für perfekte Hygiene in der Gastronomie.
                </Text>

                <Grid
                    gap={6}
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        xl: "repeat(4, 1fr)"
                    }}
                    my={10}
                >

                    {
                        restaurantCleaningServices.map((service, i) => {
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

                <VStack gap={6} w={"full"} color={"bg"} rounded={"md"} className="gradient_dark_background" py={12} px={6}>
                    
                    <Text fontSize={"5xl"} color={"blue.200"}><FaShieldVirus /></Text>

                    <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Spezielle Desinfektions- & Hygienemaßnahmen</Heading>

                    <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                        Neben der regulären Reinigung bieten wir spezielle Desinfektionsmaßnahmen für höchste Hygienestandards: Kontaktflächendesinfektion, Tiefenreinigung, Geruchsneutralisation und vieles mehr. Perfekt für Gastronomiebetriebe mit besonderen Anforderungen.
                    </Text>

                    <HStack justify={"center"} flexWrap={"wrap"} gapX={8} gapY={3}>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><FaSprayCan /></Text>
                            <Text fontSize={"sm"}>Professionelle Desinfektion</Text>
                        </HStack>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><FaClipboardCheck /></Text>
                            <Text fontSize={"sm"}>Dokumentiert & nachweisbar</Text>
                        </HStack>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><FaCertificate /></Text>
                            <Text fontSize={"sm"}>HACCP-konform</Text>
                        </HStack>

                    </HStack>

                </VStack>

            </VStack>
        </Box>

        <Box as={"section"}>

            <Box w={"full"}>
                
            <VStack w={"full"} my={8}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaStar /></Text> IHRE VORTEILE</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={{ base: "2xl", sm: "3xl" }} lineHeight={1.4} fontWeight={"bolder"}>
                    Warum {company_name} für <Text color={"blue.600"} > Gastronomie-Reinigung?</Text>
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Vertrauen Sie auf Erfahrung, Zuverlässigkeit und HACCP-Kompetenz bei Ihrer Küchenreinigung München.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaClipboardCheck /></Center>
                            <Heading as={"h5"} textAlign={"center"}>HACCP-konform</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>HACCP Reinigung München nach strengsten Standards – dokumentiert und gesetzeskonform für alle Kontrollen.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaMoon /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Nacht- & Wochenende</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Flexible Reinigungszeiten außerhalb der Betriebszeiten – keine Störung Ihres Gastronomiebetriebs.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaUserLock /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Diskret & terminsicher</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Zuverlässige Termine, diskretes Auftreten und professionelle Arbeitsweise in Ihrem Betrieb</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaCertificate /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Zertifiziertes Personal</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Speziell geschulte Reinigungskräfte mit HACCP-Zertifizierung und Gastronomie-Erfahrung.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

            </VStack>

            <Box shadow={"lg"} className="gradient_dark_background" color={"bg"} p={12} rounded={"xl"} my={8}>
                <Heading as={"h6"} fontWeight={"bolder"} fontSize={"2xl"} mb={4} textAlign={"center"}>Weitere Qualitätsmerkmale unserer Gastronomie-Reinigung München</Heading>

                <Grid 
                    gap={6}
                    gapY={12}
                    mt={16}
                    textAlign={"center"}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                >

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <IoDocumentText />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Lückenlose Dokumentation</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Alle Reinigungsschritte dokumentiert für Audits</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaLeaf />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Umweltfreundlich</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Ökologische Reinigungsmittel wo möglich</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaTools />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Professionelle Ausrüstung</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Modernste Geräte und Reinigungstechnik</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaEuroSign />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Faire Preise</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Transparente Kalkulation ohne Überraschungen</Text>
                    </VStack>

                </Grid>
            </Box>

            <Grid
                gap={8}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(5, 1fr)" }}
                my={3}
            >

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><RiRestaurantFill /></Center>
                        <Heading as={"h5"} fontSize={"xl"} textAlign={"center"}>Restaurants</Heading>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaHotel /></Center>
                        <Heading as={"h5"} fontSize={"xl"} textAlign={"center"}>Hotels</Heading>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaBuilding /></Center>
                        <Heading as={"h5"} fontSize={"xl"} textAlign={"center"}>Kantinen</Heading>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><RiCupFill /></Center>
                        <Heading as={"h5"} fontSize={"xl"} textAlign={"center"}>Cafés & Bars</Heading>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaConciergeBell /></Center>
                        <Heading as={"h5"} fontSize={"xl"} textAlign={"center"}>Catering</Heading>
                    </VStack>
                </GridItem>

            </Grid>

            </Box>

        </Box>

        <Box as="section" pos={"relative"} className="gradient_dark_background" overflow={"hidden"}>

            <SectionEndDesign />


            <VStack w={"full"} pos={"relative"} zIndex={1} color={"bg"} gap={5}>

                <Badge bg={"bg"} color={"blue.600"} fontWeight={"bolder"} textTransform={"uppercase"} py={2} px={3} rounded={"full"}>
                    <FaPhoneAlt />
                     JETZT KONTAKT AUFNEHMEN
                </Badge>

                <Heading textAlign={"center"} as={"h4"} my={2} lineHeight={1.4} fontSize={"3xl"} fontWeight={"bolder"}>
                    Höchste Hygiene für Ihre 
                    <Text as={"span"} color={"cyan.400"}> Gastronomie in München</Text>
                </Heading>

                <Text textAlign={"center"} maxW={"600px"}>
                    Jetzt kostenlosen Hygienecheck buchen oder direkt Angebot für professionelle Gastronomie-Reinigung anfordern.
                </Text>

                <HStack mt={7} gap={4} justify={"center"} flexWrap={"wrap"}>
                    
                    <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={"/#contact"}>
                                <Text scale={0.75}><FaClipboardCheck /></Text>
                                 Jetzt Hygienecheck buchen
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
                        <Heading as={"h6"} fontWeight={"bolder"}>Reinigungszeiten</Heading>
                        <Text>
                            Nacht & Wochenende
                            <br />
                            Flexibel nach Bedarf
                            <br />
                            24/7 Notdienst
                        </Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <HStack mt={9} flexWrap={"wrap"} justify={"center"} gap={12}>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaClipboardCheck />
                        </Center>
                        <Text fontWeight={"bolder"}>HACCP</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaCertificate />
                        </Center>
                        <Text fontWeight={"bolder"}>Zertifiziert</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} fontSize={"xl"} color={"blue.800"}>
                            <FaMoon />
                        </Center>
                        <Text fontWeight={"bolder"}>Nachtreinigung</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <IoDocumentText />
                        </Center>
                        <Text fontWeight={"bolder"}>Dokumentiert</Text>
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
                    
                    <Heading as={"h5"} mb={4} fontSize={"xl"} fontWeight={"bolder"}>Professionelle Gastronomie-Reinigung & Küchenreinigung München</Heading>

                    <Text maxW={"800px"}>
                        {company_name} ist Ihr Experte für <b>Gastronomie Reinigung München</b> und <b>Küchenreinigung München</b>. Als professioneller Partner für <b>HACCP Reinigung München</b> sorgen wir für perfekte Hygiene in Restaurants, Hotels, Kantinen und Großküchen.
                        <br /><br />
                        Von der täglichen Küchenpflege über <b>Restaurantreinigung München</b> bis zur kompletten Grundreinigung nach HACCP-Standard – unser zertifiziertes Team garantiert höchste Hygienestandards für Ihren Gastronomiebetrieb. Vertrauen Sie auf jahrelange Erfahrung in der professionellen Gastronomie-Reinigung München.

                    </Text>

                </VStack>

            </VStack>

        </Box>

        {/* contact sectin */}
        <CommonServiceContactSection />
        </>
    )

}

export default RestaurantCleaningServicePage;