'use client'

import SectionEndDesign from "@/components/design.component";
import { company_location, company_name, properties_cleaned, satisfied_customers } from "@/data/about";
import { address, mobile, service_area, telephone } from "@/data/contact";
import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import windowCleaningServices from "@/data/window_cleaning_services.list";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsSendFill } from "react-icons/bs";
import { FaCalendarAlt, FaHardHat, FaInfoCircle, FaMobileAlt, FaPhoneAlt, FaShieldAlt, FaTools } from "react-icons/fa";
import { FaBuilding, FaCamera, FaCertificate, FaCheck, FaCheckDouble, FaClock, FaEnvelope, FaEuroSign, FaGift, FaHotel, FaLeaf, FaListCheck, FaLocationDot, FaLock, FaMap, FaMicroscope, FaSliders, FaStar, FaStore, FaUserGear, FaWandMagic, FaWindowMaximize, FaWindowRestore } from "react-icons/fa6";
import { HiMiniSparkles } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";

const WindowCleainingPage = () => {
    return (
        <>
        {/* hero section */}
        <Box as={"section"} bg={"blue.100/30"}>

            <Flex gap={12} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} gap={2}> <FaWindowMaximize /> Reinigungsfirma München</Badge>
                        <Heading as={"h1"} color={"blue.600"} my={3} fontSize={"4xl"} lineHeight={1.25} fontWeight={"bolder"}
                        >Fensterreinigung München</Heading>

                        <Text fontWeight={"bolder"}>Klarer Durchblick</Text>

                        <Text opacity={0.55} my={3}>
                           Saubere Fenster sorgen für mehr Licht. Arisma Gebäudedienste ist Ihre zuverlässige Reinigungsfirma für professionelle Fensterreinigung in München – streifenfrei, sicher und gründlich.
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
                                    <Text>Streifenfreie Reinigung</Text>
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
                                    <Text>Flexible Termine</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaHardHat /></Text>
                                    </Center>
                                    <Text>Sichere Arbeit</Text>
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

                        <HStack gap={3} mt={1} fontSize={"13px"}>

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

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} right={"-5%"} bottom={"-15%"} translateY={"-50%"} zIndex={-1}></Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>{properties_cleaned}+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Objekte gereinigt</Text>
                    </Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>100%</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Zuverlässigkeit</Text>
                    </Box>

                    <Image alt="" src="/assets/window-cleaning-page-hero-section.jpg" w={"90%"} mx="auto" h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>

        </Box>

        {/* advantages section */}
        <Box as={"section"}>

            <VStack w={"full"}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaInfoCircle /></Text>    ÜBER UNSERE FENSTERREINIGUNG</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Professionelle Fenster- und  
                    <Text as={"span"} color={"blue.600"}> Glasreinigung München </Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    {company_name} bietet professionelle Fenster- und Glasreinigung in München – innen und außen, für Büros, Praxen, Hotels und Gewerbeobjekte. Unsere Spezialisten sorgen für glasklare Ergebnisse, auch an schwer zugänglichen Flächen. Mit moderner Osmose-Technik garantieren wir streifenfreie Sauberkeit und langanhaltenden Glanz.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaBuilding /></Center>
                            <Heading as={"h5"}>Für Büros & Gewerbe</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Professionelle Fensterreinigung München für Bürogebäude, Praxen, Hotels und gewerbliche Immobilien – innen wie außen perfekt gereinigt.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><HiMiniSparkles /></Center>
                            <Heading as={"h5"}>Glasklare Ergebnisse</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Streifenfreie Glasreinigung München durch erfahrene Fensterputzer und moderne Osmose-Technik – für perfekte Durchsicht und gepflegte Fassaden.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><IoShieldCheckmark /></Center>
                            <Heading as={"h5"}>Sicher & Zuverlässig</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Sicherheitsgeschultes Personal mit professioneller Ausrüstung für Hochhausreinigung und schwer zugängliche Glasflächen – sicher und termingerecht.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <Flex rounded={"md"} py={10} className="gradient_dark_background" w="full" gap={6} gapY={14} mt={4} px={8} flexDir={{ base: "column", lg: "row" }}>

                    <Box color={"bg"} w={{ base: "full", lg: "50%" }}>

                        <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Warum professionelle Fensterreinigung?</Heading>

                        <VStack gap={6} mt={10} align={"start"}>

                            <HStack gap={5} alignItems={"start"}>

                                <Center w={10} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Professioneller Eindruck</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Saubere Fenster und Glasfronten vermitteln Professionalität und Qualität an Kunden und Geschäftspartner
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center w={10} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Mehr Lichteinfall</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Streifenfreie Scheiben lassen mehr Tageslicht herein – für hellere Räume und besseres Arbeitsklima
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center w={10} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Werterhalt</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Regelmäßige Glasreinigung schützt Fenster vor Kalkablagerungen und verlängert die Lebensdauer
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center w={10} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Zeitersparnis</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Überlassen Sie die Fensterreinigung den Profis und konzentrieren Sie sich auf Ihr Kerngeschäft
                                    </Text>
                                </Box>

                            </HStack>

                        </VStack>

                    </Box>

                    <Center w={{ base: "full", lg: "50%" }}>

                        <VStack gap={5} bg={"bg"} w={"full"} rounded={"md"} p={8} shadow={"md"} textAlign={"center"}>

                            <Heading as={"h6"} fontSize={"4xl"} fontWeight={"bolder"} color={"blue.500"}>100%</Heading>

                            <Text fontSize={"sm"} lineHeight={1.45}>Überlassen Sie die Fensterreinigung den Profis und konzentrieren Sie sich auf Ihr Kerngeschäft</Text>

                            <Separator w={"full"} />

                            <Text as={"h6"} fontSize={"3xl"} color={"blue.500"}><FaShieldAlt /></Text>

                            <Text fontSize={"sm"} lineHeight={1.45}>Sicherheitsgeschultes Personal für alle Höhen</Text>

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
                    Fensterreinigung München –  
                    <Text as={"span"} color={"blue.600"}> Unser Leistungsspektrum </Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Von der einfachen Bürofensterreinigung bis zur Hochhaus-Glasfassade – wir bieten professionelle Lösungen für jede Anforderung.
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
                        windowCleaningServices.map((service, i) => {
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
                    
                    <Text fontSize={"4xl"} color={"blue.200"}><FaWandMagic /></Text>

                    <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Osmose-Technik für perfekte Ergebnisse</Heading>

                    <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                        Mit der modernen Osmose-Technik reinigen wir Ihre Fenster ohne aggressive Chemikalien – nur mit reinem, entmineralisiertem Wasser. Das Ergebnis: streifenfreie Sauberkeit, umweltfreundlich und langanhaltend. Perfekt für große Glasflächen und Fassaden.
                    </Text>

                    <HStack justify={"center"} flexWrap={"wrap"} gapX={8} gapY={3}>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><FaLeaf /></Text>
                            <Text fontSize={"sm"}>100% umweltfreundlich</Text>
                        </HStack>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><HiMiniSparkles /></Text>
                            <Text fontSize={"sm"}>Streifenfrei & langanhaltend</Text>
                        </HStack>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><FaSliders /></Text>
                            <Text fontSize={"sm"}>Ohne Chemie</Text>
                        </HStack>

                    </HStack>

                </VStack>

            </VStack>
        </Box>

        <Box as={"section"}> 
            
            <Box mb={2} mt={8}>

                <Center mx={"auto"} mb={8} bg={"blue.800"} color={"bg"} w={14} aspectRatio={"square"} fontSize={"2xl"} rounded={"md"}>
                    <FaMicroscope />
                </Center>

                <Heading as={"h4"} fontSize={"3xl"}  lineHeight={1.35} fontWeight={"bolder"} textAlign={"center"}>Fenster‑ & Glasreinigung – Technik & Nachweis</Heading>
                <Text my={6} textAlign={"center"} opacity={0.75}>Unsere Spezialisten reinigen Fenster, Glasflächen, Wintergärten und Fassadenelemente streifenfrei und fachgerecht.</Text>

                <Grid
                    mt={14}
                    gap={5}
                    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                >

                    <GridItem asChild>
                        <HStack bg={"blue.100/20"} p={6} shadow={"md"} rounded={"md"} gap={4} w={"full"}>
                            <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                                <FaTools />
                            </Center>
                            <Text>Einsatz von Teleskopstangen, Osmoseanlagen oder klassischer Handreinigung – je nach Objekt</Text>
                        </HStack>
                    </GridItem>

                    <GridItem asChild>
                        <HStack bg={"blue.100/20"} p={6} shadow={"md"} rounded={"md"} gap={4} w={"full"}>
                            <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                                <FaWindowRestore />
                            </Center>
                            <Text>Reinigung von Fenstern, Glasfronten, Wintergärten und Fassadenelementen</Text>
                        </HStack>
                    </GridItem>

                    <GridItem asChild>
                        <HStack bg={"blue.100/20"} p={6} shadow={"md"} rounded={"md"} gap={4} w={"full"}>
                            <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                                <FaCheckDouble />
                            </Center>
                            <Text>Innen‑ und Außenflächen inklusive Rahmen und Fensterbänke</Text>
                        </HStack>
                    </GridItem>

                    <GridItem asChild>
                        <HStack bg={"blue.100/20"} p={6} shadow={"md"} rounded={"md"} gap={4} w={"full"}>
                            <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                                <FaCamera />
                            </Center>
                            <Text>Dokumentation des Zustands nach Abschluss, auf Wunsch mit Fotoprotokoll</Text>
                        </HStack>
                    </GridItem>

                </Grid>

                <VStack gap={5} p={8} rounded={"lg"} w={"full"} className="gradient_dark_background" mt={12}>
                    <Center w={14} fontSize={"2xl"} aspectRatio={"square"} bg={"bg/15"} rounded={"full"} color={"bg"}>
                        <Text><FaCertificate /></Text>
                    </Center>
                    <Heading color={"bg"} textAlign={"center"}>Damit erhalten Sie glasklare Ergebnisse und transparente Nachweise.</Heading>
                </VStack>

            </Box>

        </Box>

        <Box as={"section"} mt={-10}>

            <Box w={"full"}>
                
            <VStack w={"full"} my={8}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaStar /></Text> IHRE VORTEILE</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Warum {company_name} als <Text color={"blue.600"} > Fensterputzer München?</Text>
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Vertrauen Sie auf Qualität, Zuverlässigkeit und Sicherheit bei Ihrer Glasreinigung München.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><HiMiniSparkles /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Streifenfreie Ergebnisse</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Durch Osmose-Technik und professionelle Fensterputzer München garantieren wir perfekt saubere Fenster ohne Streifen.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaShieldAlt /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Sicherheitsgeschult</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Unser Personal ist speziell für Höhenarbeiten geschult und verfügt über professionelle Sicherheitsausrüstung.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaLeaf /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Nachhaltige Reinigung</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Nachhaltige Reinigung.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaCalendarAlt /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Flexible Termine</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Wir passen uns Ihren Betriebszeiten an – auch außerhalb der regulären Arbeitszeiten für minimale Störungen.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

            </VStack>

            <Box shadow={"lg"} className="gradient_dark_background" color={"bg"} p={12} rounded={"xl"} my={8}>
                <Heading as={"h6"} fontWeight={"bolder"} fontSize={"2xl"} mb={4} textAlign={"center"}>Weitere Qualitätsmerkmale unserer Fensterreinigung München</Heading>

                <Grid 
                    gap={6}
                    gapY={12}
                    mt={16}
                    textAlign={"center"}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                >

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaCertificate />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Zertifizierte Mitarbeiter</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Ausgebildete Fachkräfte mit langjähriger Erfahrung</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaTools />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Moderne Ausrüstung</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Professionelle Teleskopstangen und Osmose-Anlagen</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaClock />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Pünktlichkeit</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Pünktlichkeit</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaEuroSign />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Faire Preise</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Transparente Kalkulation ohne versteckte Kosten</Text>
                    </VStack>

                </Grid>
            </Box>

            <Grid
                gap={8}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                my={3}
            >

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={4}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaBuilding /></Center>
                        <Heading as={"h5"} textAlign={"center"}>Bürogebäude</Heading>
                        <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Professionelle Fensterreinigung für Bürokomplexe und Verwaltungsgebäude.</Text>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={4}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaHotel /></Center>
                        <Heading as={"h5"} textAlign={"center"}>Hotels & Gastronomie</Heading>
                        <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Glasklare Fenster für perfekten ersten Eindruck bei Ihren Gästen.</Text>
                    </VStack>
                </GridItem>

                <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={4}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaStore /></Center>
                        <Heading as={"h5"} textAlign={"center"}>Einzelhandel & Praxen</Heading>
                        <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Schaufensterreinigung München für Geschäfte und medizinische Praxen.</Text>
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

                <Heading textAlign={"center"} as={"h4"} my={2} fontSize={"3xl"} fontWeight={"bolder"}>
                    Glasklare Fenster für Ihr 
                    <Text as={"span"} color={"cyan.400"}> Unternehmen in München</Text>
                </Heading>

                <Text textAlign={"center"} maxW={"600px"}>
                    Jetzt kostenlose Besichtigung für professionelle Fenster- und Glasreinigung München buchen oder direkt Angebot anfordern.
                </Text>

                <HStack mt={7} gap={4} justify={"center"} flexWrap={"wrap"}>
                    
                    <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={"/#contact"}>
                                <Text scale={0.75}><FaGift /></Text>
                                 Kostenlose Besichtigung buchen
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
                                <FaMap />
                            </Center>
                        <Heading as={"h6"} fontWeight={"bolder"}>Einsatzgebiet</Heading>
                        <Text>{service_area}</Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <HStack mt={9} flexWrap={"wrap"} justify={"center"} gap={12}>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaShieldAlt />
                        </Center>
                        <Text fontWeight={"bolder"}>100% Sicher</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <HiMiniSparkles />
                        </Center>
                        <Text fontWeight={"bolder"}>Streifenfrei</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} fontSize={"xl"} color={"blue.800"}>
                            <FaLeaf />
                        </Center>
                        <Text fontWeight={"bolder"}>Nachhaltig</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
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
                    
                    <Heading as={"h5"} mb={4} fontSize={"xl"} fontWeight={"bolder"}>Professionelle Fensterreinigung München & Glasreinigung</Heading>

                    <Text maxW={"800px"}>
                        {company_name}  ist Ihr Experte für <b>Fensterreinigung München</b> und <b>Glasreinigung München</b>. Als professioneller Fensterputzer München sorgen wir für streifenfreie Sauberkeit an Ihren Fenstern, Glasfassaden und Schaufenstern.
                        <br /><br />
                        Von der einfachen Bürofensterreinigung über <b>Schaufensterreinigung München</b> bis zur Hochhaus-Glasfassade – unser sicherheitsgeschultes Team setzt modernste Osmose-Technik ein für perfekte Ergebnisse. Vertrauen Sie auf jahrelange Erfahrung in der professionellen Fenster- und Glasreinigung in München und Umgebung.

                    </Text>

                </VStack>

            </VStack>

        </Box>

        {/* contact sectin */}
        <Box as={"section"}>
            <VStack>

                <Badge bg={"blue.100"} color={"blue.600"} fontWeight={"semibold"} gap={2} p={2} px={3} rounded={"full"}>
                    <FaEnvelope/>
                    KONTAKTFORMULAR
                </Badge>
                
                <Heading as={"h2"} fontSize={"4xl"} fontWeight={"bolder"} my={4}>Jetzt <Text as={"span"} color={"blue.600"}>unverbindlich anfragen</Text></Heading>

                <Text textAlign={"center"} maxW={"700px"}>
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
                </Text>

                {/* contact form */}

                <Box asChild w={"full"} p={5} mt={6} rounded={"md"} bg={"bg"}>
                    <form onSubmit={(e) => e.preventDefault()}>

                        <Grid
                            gap={3}
                            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                        >
                            
                            <GridItem asChild>
                                <Input type="text" name="name" required placeholder="Ihr Name" />
                            </GridItem>

                            <GridItem asChild>
                                <Input type="email" name="email" required placeholder="Ihre@email.de" />
                            </GridItem>

                        </Grid>

                        <Grid
                            mt={3}
                            gap={3}
                            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                        >
                            
                            <GridItem asChild>
                                <Input type="tel" name="phone" required placeholder="Ihre Telefonnummer" />
                            </GridItem>

                            <GridItem asChild>
                                <select name="service" className=" w-full border! rounded-md py-1.5! border-black/10! text-sm! px-2.5! outline-black/30! h-10!">
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
                        >
                            
                        </Textarea>

                        <HStack my={2} mb={6}>
                            <input type="checkbox" name="tnc" id="tnc" />
                            <Text asChild fontSize={"sm"} color={"bg.inverted/65"}>
                                <label htmlFor="tnc">Ich habe die 
                                    <Link className="text-blue-600! underline! mx-1!" href={"/rechtliches#data-privacy"}>Datenschutzerklärung</Link>
                                     zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zu. *
                                </label>
                            </Text>
                        </HStack>
                        
                        <Button type="submit" colorPalette={"blue"} h={"45px !important"} w="full" rounded={"lg"}>
                            <Text scale={0.75}><BsSendFill /></Text>
                            Nachricht senden
                        </Button>

                        <HStack gap={1} fontSize={"sm"} my={3} opacity={0.65} justify={"center"} mt={5}>
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

export default WindowCleainingPage;