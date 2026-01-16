'use client'

import SectionEndDesign from "@/components/design.component";
import { company_location, company_name, properties_cleaned, satisfied_customers } from "@/data/about";
import { address, mobile, service_area, telephone } from "@/data/contact";
import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import regularCleaningServices from "@/data/regular_cleaning_services.list copy";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsFileEarmarkCheck, BsSendFill } from "react-icons/bs";
import { FaAmbulance, FaCalendarAlt, FaFirstAid, FaInfoCircle, FaMobileAlt, FaPhoneAlt, FaShieldAlt, FaTools, FaUserCog } from "react-icons/fa";
import { FaAward, FaBroom, FaBuilding, FaCalendar, FaCalendarCheck, FaChartLine, FaCheck, FaCircleCheck, FaClipboard, FaClipboardCheck, FaClock, FaDesktop, FaEnvelope, FaEuroSign, FaGift, FaLeaf, FaListCheck, FaLocationDot, FaLock, FaShield, FaShieldVirus, FaSliders, FaStar, FaStethoscope, FaUserCheck, FaUserGroup, FaUserTie } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { HiMiniSparkles } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";
import { LuPaintBucket } from "react-icons/lu";

const RegularCleaningServicePage = () => {
    
    return (
        <>

        {/* hero section */}
        <Box as={"section"} bg={"blue.100/30"}>

            <Flex gap={12} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} gap={2}> <FaBroom /> Reinigungsfirma München</Badge>
                        <Heading as={"h1"} color={"blue.600"} my={3} fontSize={"4xl"} lineHeight={1.25} fontWeight={"bolder"}
                        >Unterhaltsreinigung München</Heading>

                        <Text fontWeight={"bolder"}>Dauerhaft saubere Räume</Text>

                        <Text opacity={0.55} my={3}>
                            Saubere Räumlichkeiten schaffen Wohlfühlatmosphäre. Arisma Gebäudedienste ist Ihre zuverlässige Reinigungsfirma für professionelle Unterhaltsreinigung in München – regelmäßig, gründlich und verlässlich.
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
                                    <Text>Regelmäßige Pflege</Text>
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
                                    <Text>Flexible Intervalle</Text>
                                </HStack>
                            </GridItem>

                            <GridItem asChild>
                                <HStack gap={2}>
                                    <Center color={"bg"} w={5} aspectRatio={"square"} rounded={"full"} bg={"green.700"}>
                                        <Text scale={0.75}><HiMiniSparkles /></Text>
                                    </Center>
                                    <Text>Dauerhaft gepflegt</Text>
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

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} right={-8} top={"25%"} translateY={"-50%"} zIndex={-1}></Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>{properties_cleaned}+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Objekte gereinigt</Text>
                    </Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>100%</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Zuverlässigkeit</Text>
                    </Box>

                    <Image alt="" src="/assets/regular-cleaning-page-hero-section.jpg" w={"90%"} mx="auto" h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>

        </Box>

        {/* advantages section */}
        <Box as={"section"}>

            <VStack w={"full"}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaInfoCircle /></Text>    ÜBER UNSERE UNTERHALTSREINIGUNG</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    <Text as={"span"} color={"blue.600"}> Ihre Vorteile </Text> 
                    mit {company_name} – Reinigungsfirma München  
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Ob kleines Büro oder Großfläche: Wir bieten
                    <br/>
                    <b>Regelmäßige Reinigung nach Bedarf</b>
                    <br/>
                    <b>Individuelle Hygienekonzepte</b>
                    <br/>
                    <b>Zuverlässige Teams mit Erfahrung</b>
                    <br/>
                    <b>Flexible Einsatzzeiten – auch außerhalb Ihrer Arbeitszeiten</b>
                    <br/>
                    Für hygienische Räume, zufriedene Mitarbeitende und einen überzeugenden ersten Eindruck.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaCalendarCheck /></Center>
                            <Heading as={"h5"}>Regelmäßige Reinigung</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Tägliche, wöchentliche oder monatliche Büroreinigung München – wir passen uns Ihren individuellen Anforderungen und Betriebsabläufen an.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaSliders /></Center>
                            <Heading as={"h5"}>Flexible Intervalle</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Von der täglichen Unterhaltsreinigung bis zur monatlichen Grundreinigung – Ihre Reinigungsfirma München bietet maßgeschneiderte Lösungen.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaShieldVirus /></Center>
                            <Heading as={"h5"}>Hygienekonzepte</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Professionelle Hygienestandards und Desinfektionsmaßnahmen für ein gesundes Arbeitsumfeld und reduzierte Krankheitstage.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <Flex rounded={"md"} py={10} className="gradient_dark_background" w="full" gap={6} gapY={14} mt={4} px={8} flexDir={{ base: "column", lg: "row" }}>

                    <Box color={"bg"} w={{ base: "full", lg: "50%" }}>

                        <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Warum regelmäßige Unterhaltsreinigung wichtig ist</Heading>

                        <VStack gap={6} mt={10} align={"start"}>

                            <HStack gap={5} alignItems={"start"}>

                                <Center w={10} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Dauerhaft gepflegte Räume</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Kontinuierliche Pflege erhält den Wert Ihrer Immobilie und verhindert teure Sanierungen
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center w={10} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Hygienische Umgebung</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>Regelmäßige Reinigung reduziert Keime und Bakterien für gesündere Räume
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center w={10} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Professioneller Auftritt</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Saubere Räumlichkeiten hinterlassen bei Kunden und Besuchern einen positiven Eindruck
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
                                        Konzentrieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um die Sauberkeit
                                    </Text>
                                </Box>

                            </HStack>

                        </VStack>

                    </Box>

                    <Center w={{ base: "full", lg: "50%" }}>

                        <VStack gap={5} bg={"bg"} w={"full"} rounded={"md"} p={8} shadow={"md"} textAlign={"center"}>

                            <Heading as={"h6"} fontSize={"4xl"} fontWeight={"bolder"} color={"blue.500"}>95%</Heading>

                            <Text fontSize={"sm"} lineHeight={1.45}>der Unternehmen berichten von höherer Mitarbeiterzufriedenheit durch saubere Arbeitsplätze</Text>

                            <Separator w={"full"} />

                            <Heading as={"h6"} fontSize={"3xl"} fontWeight={"bolder"} color={"blue.500"}>30%</Heading>

                            <Text fontSize={"sm"} lineHeight={1.45}>weniger Krankheitstage durch professionelle Unterhaltsreinigung</Text>

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
                    Unterhaltsreinigung München –  
                    <Text as={"span"} color={"blue.600"}> Unser Service-Angebot </Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Als erfahrenes Reinigungsunternehmen bieten wir:
                    <br/>
                    Tägliche, wöchentliche oder monatliche Reinigung
                    <br/>
                    Regelmäßige Pflege aller Räumlichkeiten
                    <br/>
                    Reinigung von Böden, Sanitärbereichen, Küchen & Arbeitsplätzen
                    <br/>
                    Individuelle Lösungen für Büros, Praxen und Gewerbeflächen
                    <br/>
                    Mit uns bleibt Ihre Arbeitsumgebung sauber, gepflegt und dauerhaft ansprechend.
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
                        regularCleaningServices.map((service, i) => {
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

            </VStack>
        </Box>

        <Box as={"section"}>

            <Box w={"full"}>

            <VStack w={"full"} mt={8} mb={36}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaClipboardCheck /></Text>   QUALITÄTSSICHERUNG</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Unterhaltsreinigung –  <Text as={"span"} color={"blue.600"}> Prozesse & Qualitätskontrolle</Text>
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.55} w={"full"}>
                    Regelmäßige Unterhaltsreinigung sorgt für dauerhaft hohe Sauberkeit in allen Bereichen Ihres Gebäudes.
                </Text>

                <VStack rounded={"md"} p={8} gap={5} mt={10} mx={"auto"} align={"start"} className="gradient_light_background_one" color={"bg"}>

                    <Grid
                        w={"full"}
                        templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
                        gap={8}
                    >
                        <GridItem asChild>
                            <HStack gap={5} align={"start"} w={"full"}>
                                <Center bg={"bg"} mt={1} color={"blue.500"} minW={12} fontSize={"xl"} aspectRatio={"square"} shadow={"md"} rounded={"md"}>
                                    <FaBroom />
                                </Center>
                                <Box>
                                    <Heading lineHeight={1.25} as={"h6"} fontSize={"18px"}>Gründliche Reinigung aller relevanten Bereiche</Heading>
                                    <Text mt={1} opacity={0.65}>Böden, Sanitär, Küchen und Arbeitsplätze werden professionell gereinigt</Text>
                                </Box>
                            </HStack>
                        </GridItem>

                        <GridItem asChild>
                            <HStack gap={5} align={"start"} w={"full"}>
                                <Center bg={"bg"} mt={1} color={"blue.500"} minW={12} fontSize={"xl"} aspectRatio={"square"} shadow={"md"} rounded={"md"}>
                                    <LuPaintBucket />
                                </Center>
                                <Box>
                                    <Heading lineHeight={1.25} as={"h6"} fontSize={"18px"}>Kontrolle und Nachfüllen von Verbrauchsmaterialien</Heading>
                                    <Text mt={1} opacity={0.65}>Seife, Papierhandtücher und Toilettenpapier werden regelmäßig überprüft und aufgefüllt</Text>
                                </Box>
                            </HStack>
                        </GridItem>

                        <GridItem asChild>
                            <HStack gap={5} align={"start"} w={"full"}>
                                <Center bg={"bg"} mt={1} color={"blue.500"} minW={12} fontSize={"xl"} aspectRatio={"square"} shadow={"md"} rounded={"md"}>
                                    <FaUserCog />
                                </Center>
                                <Box>
                                    <Heading lineHeight={1.25} as={"h6"} fontSize={"18px"}>Kontinuierliche Leistungsüberwachung durch unsere Teams</Heading>
                                    <Text mt={1} opacity={0.65}>Unsere Teamleiter kontrollieren regelmäßig die Qualität der durchgeführten Arbeiten</Text>
                                </Box>
                            </HStack>
                        </GridItem>

                        <GridItem asChild>
                            <HStack gap={5} align={"start"} w={"full"}>
                                <Center bg={"bg"} mt={1} color={"blue.500"} minW={12} fontSize={"xl"} aspectRatio={"square"} shadow={"md"} rounded={"md"}>
                                    <BsFileEarmarkCheck />
                                </Center>
                                <Box>
                                    <Heading lineHeight={1.25} as={"h6"} fontSize={"18px"}>Protokollierung jeder Reinigung im digitalen Leistungsverzeichnis</Heading>
                                    <Text mt={1} opacity={0.65}>Alle durchgeführten Reinigungsarbeiten werden digital dokumentiert und nachvollziehbar gemacht</Text>
                                </Box>
                            </HStack>
                        </GridItem>
                    </Grid>

                    

                    <Separator w={"full"} opacity={0.2} />

                    <HStack p={4} color={"bg.inverted"} bg={"bg"} w={"full"} gap={3} rounded={"md"} borderLeft={"4px solid"} borderColor={"green.600"}>
                        <Text color={"green.600"} mt={0.5}><FaChartLine /></Text>
                        <Text fontWeight={"semibold"}>Damit haben Sie jederzeit einen transparenten Überblick über den Reinigungsstatus.</Text>
                    </HStack>

                </VStack>


                <Badge mt={8} mb={3} color={"blue.600"} bg={"blue.100"} rounded={"full"} px={5} py={3} size={"lg"} gap={2} fontWeight={"semibold"}><Text as={"span"} scale={1.5} mr={0.5}><IoShieldCheckmark /></Text>   Zertifizierte Qualitätssicherung</Badge>

            </VStack>
                
            <VStack w={"full"} my={8}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaStar /></Text>   IHRE VORTEILE</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Warum regelmäßige <Text as={"span"} color={"blue.600"}> Unterhaltsreinigung?</Text>
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.55} w={"full"}>
                    Mit professioneller Gebäudereinigung München von {company_name} profitieren Sie von zahlreichen Vorteilen.
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaCalendarCheck /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Individuelle Intervalle</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Wir passen die Reinigungsintervalle exakt an Ihre Bedürfnisse und Ihr Budget an – flexibel und bedarfsgerecht.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaShield /></Center>
                            <Heading as={"h5"} textAlign={"center"}>100% Zuverlässigkeit</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Feste Termine, pünktliche Mitarbeiter und verlässliche Leistung – darauf können Sie sich bei uns verlassen.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><GrPowerCycle /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Fester Rhythmus</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Regelmäßige Reinigung in festem Rhythmus sorgt für kontinuierliche Sauberkeit ohne Überraschungen.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaUserTie /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Fester Ansprechpartner</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Ihr persönlicher Ansprechpartner kennt Ihre Anforderungen und ist jederzeit für Sie erreichbar.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaEuroSign /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Planbare Kosten</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Transparente Preisgestaltung und feste monatliche Kosten für bessere Budgetplanung.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><HiMiniSparkles /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Dauerhaft sauber</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Kontinuierliche Pflege verhindert hartnäckige Verschmutzungen und sorgt für dauerhaft gepflegte Räume.</Text>
                        </VStack>
                    </GridItem>

                </Grid>

            </VStack>

            <Box shadow={"lg"} className="gradient_dark_background" color={"bg"} p={12} rounded={"xl"} my={8}>
                <Heading as={"h6"} fontWeight={"bolder"} fontSize={"2xl"} mb={4} textAlign={"center"}>Weitere Vorteile der Unterhaltsreinigung München</Heading>

                <Grid 
                    gap={6}
                    gapY={12}
                    mt={16}
                    textAlign={"center"}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                >

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaUserGroup />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Geschultes Team</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Professionell ausgebildete Reinigungskräfte</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaLeaf />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Umweltfreundlich</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Ökologische Reinigungsmittel</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaClock />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Flexible Zeiten</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Auch außerhalb Ihrer Arbeitszeiten</Text>
                    </VStack>

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaTools />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Eigene Ausstattung</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Wir bringen alle Geräte mit</Text>
                    </VStack>

                </Grid>
            </Box>

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
                    Ihre Unterhaltsreinigung München 
                    <Text as={"span"} color={"cyan.400"}> professionell planen</Text>
                </Heading>

                <Text textAlign={"center"} maxW={"600px"}>
                    Jetzt kostenloses Angebot für regelmäßige Gebäudereinigung München anfordern oder direkt telefonisch beraten lassen.
                </Text>

                <HStack mt={7} gap={4} justify={"center"} flexWrap={"wrap"}>
                    
                    <Button asChild bg={"bg"} color={"blue.800"} _hover={{ bg: "blue.600", color: "bg" }} shadow={"md"}>
                            <Link href={"/#contact"}>
                                <Text scale={0.75}><FaGift /></Text>
                                 Reinigung planen
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
                        <VStack gap={2} textAlign={"center"}>
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
                        <VStack gap={2} textAlign={"center"}>
                            <Center w={20} fontSize={"3xl"} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                                <FaPhoneAlt />
                            </Center>
                        <Heading as={"h6"} fontWeight={"bolder"}>Telefon</Heading>
                        <Link href={`tel:${telephone.replaceAll(" ", "")}`}>{telephone}</Link>
                        <Link className="-mt-2!" href={`tel:${mobile.replaceAll(" ", "")}`}>{mobile}</Link>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} rounded={"md"} bg={"bg/10"} color={"bg"} border={"1px solid"} borderColor={"bg/50"} py={8} px={4} asChild>
                        <VStack gap={2} textAlign={"center"}>
                            <Center w={20} fontSize={"3xl"} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                                <FaCalendarAlt />
                            </Center>
                        <Heading as={"h6"} fontWeight={"bolder"}>Service</Heading>
                        <Text>
                            Täglich
                            <br />
                            Wöchentlich
                            <br />
                            Monatlich
                        </Text>
                        </VStack>
                    </GridItem>

                </Grid>

                <HStack mt={9} flexWrap={"wrap"} justify={"center"} gap={12}>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                            <FaShieldAlt />
                        </Center>
                        <Text fontWeight={"bolder"}>Garantie</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                            <GrPowerCycle />
                        </Center>
                        <Text fontWeight={"bolder"}>Regelmäßig</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                            <FaBuilding />
                        </Center>
                        <Text fontWeight={"bolder"}>{properties_cleaned}+ Objekte</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                            <FaStar />
                        </Center>
                        <Text fontWeight={"bolder"}>Top Qualität</Text>
                    </VStack>

                    <VStack gap={2}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"blue.800"}>
                            <FaLocationDot />
                        </Center>
                        <Text fontWeight={"bolder"}>{company_location}</Text>
                    </VStack>

                </HStack>

                <HStack mt={9} flexWrap={"wrap"} justify={"center"} gap={12}>

                    <VStack gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                            <FaStethoscope />
                        </Center>
                        <Text fontWeight={"bolder"}>München Nord</Text>
                        <Text fontSize={"sm"}>Schwabing, Milbertshofen</Text>
                    </VStack>

                    <VStack minW={"200px"} gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                            <FaAmbulance />
                        </Center>
                        <Text fontWeight={"bolder"}>München Süd</Text>
                        <Text fontSize={"sm"}>Sendling, Giesing</Text>
                    </VStack>

                    <VStack gap={2} bg={"bg/5"} rounded={"md"} p={3}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"none"} color={"blue.400"} fontSize={"3xl"}>
                            <FaFirstAid />
                        </Center>
                        <Text fontWeight={"bolder"}>München Umland</Text>
                        <Text fontSize={"sm"}>Garching, Unterschleißheim</Text>
                    </VStack>

                </HStack>

                <Separator w={"full"} opacity={0.15} my={12} />

                <VStack mt={2} gap={3} w={"full"} bg={"bg/15"} rounded={"md"} p={6} border={"1px solid"} borderColor={"bg"} textAlign={"center"}>
                    
                    <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Professionelle Unterhaltsreinigung München & Gebäudereinigung</Heading>

                    <Text maxW={"800px"}>
                        {company_name} ist Ihr Experte für <b>Unterhaltsreinigung München</b> und <b>Gebäudereinigung München</b>. Mit unserer regelmäßigen Reinigung sorgen wir dafür, dass Ihre Büros, Praxen und Gewerbeflächen dauerhaft sauber und gepflegt bleiben.
                        <br /><br />
                        Von der täglichen Basisreinigung über wöchentliche Pflege bis zur monatlichen Grundreinigung – als professionelle Gebäudereinigung München bieten wir individuelle Lösungen für kontinuierliche Sauberkeit. Vertrauen Sie auf unsere Zuverlässigkeit und jahrelange Erfahrung in der Unterhaltsreinigung.

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

export default RegularCleaningServicePage;