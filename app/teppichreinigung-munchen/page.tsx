'use client';

import CommonServiceContactSection from "@/components/common-services-contact-section";
import SectionEndDesign from "@/components/design.component";
import { company_location, company_name, properties_cleaned, satisfied_customers } from "@/data/about";
import carpetCleaningServices from "@/data/carpet_cleaning_services.list";
import { address, mobile, service_area, telephone } from "@/data/contact";
import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsSendFill } from "react-icons/bs";
import { FaCalendarAlt, FaCog, FaHome, FaInfoCircle, FaMobileAlt, FaPhoneAlt, FaShieldAlt, FaTools } from "react-icons/fa";
import { FaBuilding, FaCamera, FaCertificate, FaCheck, FaClipboardCheck, FaClock, FaEnvelope, FaEuroSign, FaGift, FaHospital, FaHotel, FaLeaf, FaListCheck, FaLocationDot, FaLock, FaLungs, FaSprayCan, FaStar, FaUserGroup } from "react-icons/fa6";
import { HiMiniSparkles } from "react-icons/hi2";
import { LuGrid2X2 } from "react-icons/lu";

const CarpetCleaningPage = () => {
    return (
        <>
        {/* hero section */}
        <Box as={"section"} overflowX={"hidden"} bg={"blue.100/30"}>

            <Flex gap={12} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} gap={2}> <LuGrid2X2 /> Reinigungsfirma München</Badge>
                        <Heading as={"h1"} color={"blue.600"} my={3} fontSize={{ base: "3xl", md: "4xl" }} lineHeight={1.25} fontWeight={"bolder"}
                        >Teppichreinigung München</Heading>

                        <Text fontWeight={"bolder"}>Frische Teppiche, wie neu</Text>

                        <Text opacity={0.55} my={3}>
                            Saubere Teppiche verbessern die Raumluft. Arisma Gebäudedienste ist Ihre zuverlässige Reinigungsfirma für professionelle Teppichreinigung in München – schonend, gründlich und schnell trocknend.
                        </Text>

                        <Grid
                            gapX={6}
                            gapY={2}
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                            fontSize={"sm"}
                        >
                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaCheck /></Text>
                                    </Center>
                                    <Text>Tiefenreinigung</Text>
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
                                    <Text>Schnelle Trocknung</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><FaLeaf /></Text>
                                    </Center>
                                    <Text>Schonende Reinigung</Text>
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
                                <Text color={"blue.600"}><FaUserGroup /></Text>
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

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} left={"50%"} bottom={"-15%"} translateY={"-50%"} zIndex={-1}></Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>{properties_cleaned}+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Objekte gereinigt</Text>
                    </Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>100%</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Zuverlässigkeit</Text>
                    </Box>

                    <Image alt="" src="./assets/carpet-cleaning-page-hero-section.jpg" w={"90%"} mx="auto" h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>

        </Box>

        {/* advantages section */}
        <Box as={"section"}>

            <VStack w={"full"}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaInfoCircle /></Text>    ÜBER UNSERE TEPPICHREINIGUNG</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Professionelle Teppichpflege München 
                    <Text as={"span"} color={"blue.600"}> mit modernsten Verfahren </Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    {company_name} ist Ihr Partner für professionelle Teppichreinigung in München. Mit modernsten Verfahren entfernen wir Flecken, Schmutz und Gerüche – schonend & effektiv. Von Büroteppichen über Hotelböden bis zu privaten Teppichen: Wir sorgen für tiefenreine Sauberkeit und langanhaltende Frische.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaBuilding /></Center>
                            <Heading as={"h5"}>Für Büros & Hotels</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Professionelle Büroteppich reinigen München – für saubere, gepflegte Böden in Bürogebäuden, Hotels, Praxen und Gewerbeflächen.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><HiMiniSparkles /></Center>
                            <Heading as={"h5"}>Tiefenreine Ergebnisse</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Teppichreinigung München mit Nass- und Trockenshampoonierung – für hygienisch saubere Teppiche und Teppichböden ohne Rückstände.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaHome /></Center>
                            <Heading as={"h5"}>Privat & Gewerbe</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Teppichpflege München für Privathaushalte und Gewerbeobjekte – individuell auf Ihre Bedürfnisse abgestimmt.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <Flex rounded={"md"} py={{ base: 4, md: 10 }} className="gradient_dark_background" w="full" gap={6} gapY={14} mt={4} px={{ base: 4, md: 8 }} flexDir={{ base: "column", lg: "row" }}>

                    <Box color={"bg"} w={{ base: "full", lg: "50%" }}>

                        <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Warum regelmäßige Teppichreinigung wichtig ist</Heading>

                        <VStack gap={6} mt={10} align={"start"}>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Gesünderes Raumklima</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Entfernt Staub, Milben und Allergene für bessere Luftqualität und weniger Allergieauslöser
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Längere Lebensdauer</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Professionelle Teppichpflege verlängert die Haltbarkeit und spart langfristig Kosten
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Gepflegter Eindruck</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Saubere Teppiche vermitteln Professionalität und Wertschätzung bei Kunden und Gästen
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Geruchsneutralisation</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Beseitigt unangenehme Gerüche und sorgt für angenehmen Raumduft
                                    </Text>
                                </Box>

                            </HStack>

                        </VStack>

                    </Box>

                    <Center w={{ base: "full", lg: "50%" }}>

                        <VStack gap={5} bg={"bg"} w={"full"} rounded={"md"} p={8} shadow={"md"} textAlign={"center"}>

                            <Heading as={"h6"} fontSize={"4xl"} fontWeight={"bolder"} color={"blue.500"}>2-4h</Heading>

                            <Text fontSize={"sm"} lineHeight={1.45}>Überlassen Sie die Schnelle Trocknungszeit bei unseren modernen Verfahren</Text>

                            <Separator w={"full"} />

                            <Text as={"h6"} fontSize={"3xl"} fontWeight={"bolder"} color={"blue.500"}>100%</Text>

                            <Text fontSize={"sm"} lineHeight={1.45}>Fleckenentfernung bei professioneller Behandlung</Text>

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
                    Teppichreinigung München –  
                    <Text as={"span"} color={"blue.600"}> Unser Leistungsspektrum </Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Von der Nassreinigung bis zur Imprägnierung – wir bieten alle Leistungen für perfekt gepflegte Teppiche.
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
                        carpetCleaningServices.map((service, i) => {
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

                <VStack gap={6} w={"full"} color={"bg"} rounded={"md"} className="gradient_dark_background" py={12} px={6}>
                    
                    <Text fontSize={"4xl"} color={"blue.200"}><FaCog /></Text>

                    <Heading as={"h6"} mt={5} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"}>Moderne Reinigungsverfahren</Heading>

                    <Text maxW={"700px"} textAlign={"center"} lineHeight={1.7} my={3}>
                       Wir setzen auf modernste Reinigungstechnik und umweltfreundliche Reinigungsmittel. Unsere Verfahren sind materialschonend, effektiv und sorgen für kurze Trocknungszeiten – ideal für Büros und Gewerbeflächen mit hoher Frequentierung.
                    </Text>

                    <HStack justify={"center"} flexWrap={"wrap"} gapX={8} gapY={3}>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><FaClock /></Text>
                            <Text fontSize={"sm"}>Kurze Trocknungszeit</Text>
                        </HStack>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><FaLeaf /></Text>
                            <Text fontSize={"sm"}>Umweltfreundlich</Text>
                        </HStack>

                        <HStack gap={2}>
                            <Text fontSize={"lg"} color={"blue.300"}><HiMiniSparkles /></Text>
                            <Text fontSize={"sm"}>Tiefenrein</Text>
                        </HStack>

                    </HStack>

                </VStack>

            </VStack>
        </Box>

        <Box as={"section"}>

            <Box w={"full"} mb={10} mt={6}>
                <Heading as={"h4"} fontSize={"3xl"} fontWeight={"bolder"} lineHeight={1.35} textAlign={"center"}>Teppichreinigung – 
                    <Text as={"span"} color={"blue.600"}> Tiefenreinigung & Dokumentation</Text>
                </Heading>
                <Text my={6} textAlign={"center"} opacity={0.75}>Modernste Verfahren entfernen Schmutz, Staub und Flecken schonend und effektiv.</Text>

                <VStack rounded={"md"} p={{ base: 4, md: 8 }} gap={5} bg={"blue.100/30"} mt={14} maxW={"800px"} mx={"auto"} align={"start"} shadow={"md"}>

                    <HStack gap={4} w={"full"}>
                        <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaSprayCan />
                        </Center>
                        <Text>Materialschonende Tiefenreinigung für Teppiche und Teppichböden</Text>
                    </HStack>

                    <HStack gap={4} w={"full"}>
                        <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaTools />
                        </Center>
                        <Text>Einsatz professioneller Geräte und geprüfter Reinigungsmittel</Text>
                    </HStack>

                    <HStack gap={4} w={"full"}>
                        <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaCamera />
                        </Center>
                        <Text>Dokumentation des Teppichzustands vor und nach der Reinigung</Text>
                    </HStack>

                    <HStack gap={4} w={"full"}>
                        <Center bg={"blue.800"} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaClipboardCheck />
                        </Center>
                        <Text>Aufzeichnung aller Arbeitsschritte für volle Transparenz</Text>
                    </HStack>

                    <Separator w={"full"} my={3} opacity={0.5} />

                    <Text fontWeight={"semibold"} w={"full"} textAlign={"center"} bg={"bg"} color={"blue.600"} fontStyle={"italic"} p={3} rounded={"md"}>Aufzeichnung aller Arbeitsschritte für volle Transparenz</Text>

                </VStack>

            </Box>
            
        </Box>

        <Box as={"section"} mt={-10}>

            <Box w={"full"}>
                
            <VStack w={"full"} my={8}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaStar /></Text> IHRE VORTEILE</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Warum {company_name} für <Text color={"blue.600"} > Teppichreinigung München?</Text>
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Vertrauen Sie auf sanfte Methoden, kurze Trocknungszeiten und professionelle Teppichpflege München.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaLeaf /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Materialschonende Methoden</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Sanfte, materialschonende Reinigungsverfahren schützen Ihre Teppichfasern und verlängern die Lebensdauer.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaClock /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Kurze Trocknungszeiten</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Moderne Verfahren ermöglichen schnelle Trocknung – Ihre Räume sind zeitnah wieder nutzbar.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaLungs /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Ideal für Allergiker</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Entfernt Milben, Staub und Allergene gründlich – für gesundes Raumklima und weniger Allergieauslöser.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaCalendarAlt /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Flexible Termine</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Terminvereinbarung nach Ihren Wünschen – auch außerhalb der Betriebszeiten für minimale Störung.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

            </VStack>

            <Box shadow={"lg"} className="gradient_dark_background" color={"bg"} p={12} rounded={"xl"} my={8}>
                <Heading as={"h6"} fontWeight={"bolder"} fontSize={"2xl"} mb={4} textAlign={"center"}>Weitere Qualitätsmerkmale unserer Teppichreinigung München</Heading>

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
                        <Text mt={2} fontWeight={"bolder"}>Professionelle Geräte</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Moderne Reinigungsmaschinen und -technik</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaLeaf />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Umweltschonend</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Ökologische Reinigungsmittel wo möglich</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaEuroSign />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Faire Preise</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Transparente Kalkulation nach Quadratmetern</Text>
                    </VStack>

                </Grid>
            </Box>

            <Heading as={"h6"} textAlign={"center"} fontWeight={"bolder"} fontSize={"2xl"} mt={20} mb={10}>
                Für wen wir Teppiche reinigen
            </Heading>

            <Grid
                gap={8}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                my={3}
            >

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaBuilding /></Center>
                        <Heading as={"h5"} fontSize={"lg"} textAlign={"center"}>Büros & Verwaltung</Heading>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaHotel /></Center>
                        <Heading as={"h5"} fontSize={"lg"} textAlign={"center"}>Hotels & Gastronomie</Heading>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaHospital /></Center>
                        <Heading as={"h5"} fontSize={"lg"} textAlign={"center"}>Praxen & Kliniken</Heading>
                    </VStack>
                </GridItem>

                <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} p={5} py={8}>
                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"lg"} color={"blue.600"} className="group-hover:text-white!" fontSize={"3xl"}><FaHome /></Center>
                        <Heading as={"h5"} fontSize={"lg"} textAlign={"center"}>Privathaushalte</Heading>
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
                    Tiefenreine Teppiche für  
                    <Text as={"span"} color={"cyan.400"}> Ihr Zuhause oder Büro</Text>
                </Heading>

                <Text textAlign={"center"} maxW={"600px"}>
                    Jetzt Termin vereinbaren für professionelle Teppichreinigung München oder direkt kostenloses Angebot anfordern.
                </Text>

                <HStack mt={7} gap={4} justify={"center"} flexWrap={"wrap"}>
                    
                    <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={"/#contact"}>
                                <Text scale={0.75}><HiMiniSparkles /></Text>
                                    Jetzt Teppich reinigen lassen
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
                        <Heading as={"h6"} fontWeight={"bolder"}>Trocknungszeit</Heading>
                        <Text>
                            2-4 Stunden
                            <br />
                            Schnelle Verfahren
                            <br />
                            Rasch nutzbar
                        </Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <HStack mt={9} flexWrap={"wrap"} justify={"center"} gap={12}>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <HiMiniSparkles />
                        </Center>
                        <Text fontWeight={"bolder"}>Tiefenrein</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaLeaf />
                        </Center>
                        <Text fontWeight={"bolder"}>Schonend</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} fontSize={"xl"} color={"blue.800"}>
                            <FaClock />
                        </Center>
                        <Text fontWeight={"bolder"}>Schnell trocken</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"} fontSize={"xl"}>
                            <FaLungs />
                        </Center>
                        <Text fontWeight={"bolder"}>Allergikerfreundlich</Text>
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
                    
                    <Heading as={"h5"} mb={4} fontSize={"xl"} fontWeight={"bolder"}>Professionelle Teppichreinigung & Teppichpflege München</Heading>

                    <Text maxW={"800px"}>
                        {company_name}  ist Ihr Experte für <b>Teppichreinigung München</b> und <b>Teppichpflege München</b>. Wir bieten professionelles <b>Büroteppich reinigen</b> für Unternehmen sowie Teppichreinigung für Privathaushalte in München und Umgebung.
                        <br /><br />
                        Mit modernsten Verfahren wie Nass- und Trockenshampoonierung sorgen wir für tiefenreine, hygienische Teppiche – ideal für Allergiker. Von der Fleckentfernung über Geruchsneutralisation bis zur schützenden Imprägnierung: Vertrauen Sie auf unsere Expertise bei der Teppichreinigung München.
                    </Text>

                </VStack>

            </VStack>

        </Box>

        {/* contact sectin */}
        <CommonServiceContactSection />
        </>
    )
}

export default CarpetCleaningPage;