'use client'

import CommonServiceContactSection from "@/components/common-services-contact-section";
import SectionEndDesign from "@/components/design.component";
import { company_location, company_name, properties_cleaned, satisfied_customers } from "@/data/about";
import { address, mobile, official_mail, service_area, telephone } from "@/data/contact";
import { officeCleaningContactServiceOptions } from "@/data/office-cleaning";
import officeCleaningServices from "@/data/office_cleaning_services.list";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Input, List, Separator, Text, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsSendFill } from "react-icons/bs";
import { PiOfficeChairFill } from "react-icons/pi";
import { FaCalendarCheck, FaCheck, FaCheckCircle, FaGift, FaInfoCircle, FaMobileAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import { FaAward, FaBuilding, FaCalendar, FaChartLine, FaClipboardCheck, FaClock, FaDesktop, FaEnvelope, FaEuroSign, FaLeaf, FaListCheck, FaLocationDot, FaLock, FaShieldVirus, FaSliders, FaStar, FaTrash, FaUserCheck, FaUserGear, FaUserGroup, FaUserTie } from "react-icons/fa6";

const OfficeCleaningPage = () => {
    return (
        <>
        
        {/* hero section */}
        <Box as={"section"} overflowX={"hidden"} bg={"blue.100/30"}>

            <Flex gap={12} align={"center"} flexDir={{ base: "column-reverse", lg: "row" }}>

                <Box  w={{ base: "full", lg: "50%" }}>
                    <VStack gap={2} align={"start"} w={"fit"} mx={"auto"}>

                        <Badge color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} gap={2}> <FaBuilding /> Reinigungsfirma  Nürnberg, Fürth & Umgebung</Badge>
                        <Heading as={"h1"} color={"blue.600"} my={3} fontSize={"4xl"} lineHeight={1.25} fontWeight={"bolder"}>
                        Reinigungsfirma  Nürnberg, Fürth & Umgebung 
                        </Heading>

                        <Text fontWeight={"bolder"}>Sauberkeit, die wirkt</Text>

                        <Text opacity={0.55} my={3}>
                           Saubere Arbeitsplätze steigern die Produktivität. Popp Dienstleistungen ist Ihre zuverlässige Reinigungsfirma für professionelle Sauberkeit in Nürnberg – diskret, gründlich und planbar.
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
                                    <Text>Tägliche Reinigung</Text>
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
                                        <Text scale={0.75}><FaChartLine /></Text>
                                    </Center>
                                    <Text>Mehr Produktivität</Text>
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

                    <Box w={28} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} pos={"absolute"} left={"-5%"} top={"-15%"} translateY={"-50%"} zIndex={-1}></Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} bottom={-5} left={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>{properties_cleaned}+</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Objekte gereinigt</Text>
                    </Box>

                    <Box pos={"absolute"} bg={"bg"} p={3} top={-5} right={-3} rounded={"md"} shadow={"sm"}>
                        <Text fontWeight={"bolder"} color={"blue.500"} fontSize={"lg"}>100%</Text>
                        <Text fontSize={"sm"} opacity={0.5}>Zuverlässigkeit</Text>
                    </Box>

                    <Image alt="" src="./assets/office-cleaning-page-hero-section.jpg" w={"90%"} mx="auto" h={"auto"} objectFit={"cover"} rounded={"xl"} shadow={"0px 0 50px 20px var(--chakra-colors-blue-100)"} />
                </Box>

            </Flex>

        </Box>

        {/* advantages section */}
        <Box as={"section"}>

            <VStack w={"full"}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaInfoCircle /></Text>   ÜBER UNSERE BÜROREINIGUNG</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    <Text as={"span"} color={"blue.600"}> Ihre Vorteile </Text> 
                    mit {company_name} – Reinigungsfirma  Nürnberg, Fürth & Umgebung
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
                            <Text opacity={0.7} fontSize={"sm"}>Tägliche, wöchentliche oder monatliche Reinigung Nürnberg – wir passen uns Ihren individuellen Anforderungen und Betriebsabläufen an.</Text>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5}>
                            <VStack align={"start"} gap={3}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaSliders /></Center>
                            <Heading as={"h5"}>Flexible Intervalle</Heading>
                            <Text opacity={0.7} fontSize={"sm"}>Von der täglichen Unterhaltsreinigung bis zur monatlichen Grundreinigung – Ihre Reinigungsfirma Nürnberg, Fürth & Umgebung maßgeschneiderte Lösungen.</Text>
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

                <Flex rounded={"md"} py={{ base: 4, md: 10 }} className="gradient_dark_background" w="full" gap={{ base: 2, md: 6 }} gapY={14} mt={4} px={{ base: 4, md: 8 }} flexDir={{ base: "column", lg: "row" }}>

                    <Box color={"bg"} w={{ base: "full", lg: "50%" }}>

                        <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Warum saubere Arbeitsplätze wichtig sind</Heading>

                        <VStack gap={6} mt={10} align={"start"}>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Mehr Produktivität</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Saubere Büros fördern Konzentration und Motivation der Mitarbeiter
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Gesunde Mitarbeiter</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Weniger Krankheitstage durch professionelle Hygiene
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Professioneller Eindruck</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Gepflegte Büros beeindrucken Kunden und Geschäftspartner
                                    </Text>
                                </Box>

                            </HStack>

                            <HStack gap={5} alignItems={"start"}>

                                <Center minW={{ base: 6, md: 10 }} mt={2} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"}>
                                    <FaCheck />
                                </Center>

                                <Box>
                                    <Heading fontWeight={"bolder"} as={"h6"} fontSize={"lg"}>Werterhalt</Heading>
                                    <Text opacity={0.65} fontSize={"sm"} mt={1}>
                                        Regelmäßige Pflege schützt Ihre Büroeinrichtung langfristig
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

                            <Text fontSize={"sm"} lineHeight={1.45}>weniger Krankheitstage durch professionelle Büroreinigung</Text>

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
                    Büroreinigung  Nürnberg, Fürth & Umgebung -
                    <Text as={"span"} color={"blue.600"}> Unser Service-Angebot </Text> 
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Als erfahrenes Reinigungsunternehmen bieten wir:
                    <br/>
                    Tägliche Unterhaltsreinigung
                    <br/>
                    Regelmäßige Grundreinigungen
                    <br/>
                    Reinigung von Teppichen, Sanitärbereichen, Küchen & Arbeitsplätzen
                    <br/>
                    Individuelle Lösungen für Büros, Praxen und Gewerbeflächen
                    <br/>
                    Mit uns bleibt Ihre Arbeitsumgebung sauber, gepflegt und leistungsfördernd.
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
                        officeCleaningServices.map((service, i) => {
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

        <Box as={"section"}>

            <Box w={"full"}>

            <Box mb={32} mt={6}>
                <Heading as={"h4"} fontSize={"3xl"}  lineHeight={1.35} fontWeight={"bolder"} textAlign={"center"}>Büroreinigung – 
                    <Text as={"span"} color={"blue.600"}> Leistungsumfang & Protokollierung</Text>
                </Heading>
                <Text my={6} textAlign={"center"} opacity={0.75}>Wir schaffen eine saubere, hygienische und angenehme Arbeitsumgebung für Ihr Team.</Text>

                <VStack rounded={"md"} p={{ base: 3, md: 8 }} gap={5} bg={"blue.100/30"} mt={10} maxW={"800px"} mx={"auto"} align={"start"}>

                    <HStack gap={4} align={"start"} w={"full"}>
                        <Center bg={"blue.800"} mt={1} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaDesktop />
                        </Center>
                        <Text>Gründliche Reinigung aller Arbeitsflächen, Böden, Sanitäranlagen und Küchenbereiche</Text>
                    </HStack>
                    <Separator w={"full"} />
                    <HStack gap={4} align={"start"} w={"full"}>
                        <Center bg={"blue.800"} mt={1} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaTrash />
                        </Center>
                        <Text>Regelmäßige Entleerung der Abfallbehälter</Text>
                    </HStack>
                    <Separator w={"full"} />
                    <HStack gap={4} align={"start"} w={"full"}>
                        <Center bg={"blue.800"} mt={1} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaCalendar />
                        </Center>
                        <Text>Individuelle Reinigungspläne – täglich, wöchentlich oder monatlich</Text>
                    </HStack>
                    <Separator w={"full"} />
                    <HStack gap={4} align={"start"} w={"full"}>
                        <Center bg={"blue.800"} mt={1} color={"bg"} minW={10} aspectRatio={"square"} rounded={"md"}>
                            <FaClipboardCheck />
                        </Center>
                        <Text>Alle Tätigkeiten werden im digitalen Leistungsverzeichnis protokolliert</Text>
                    </HStack>

                    <HStack p={4} bg={"bg"} w={"full"} gap={3} rounded={"md"} borderLeft={"4px solid"} borderColor={"green.600"}>
                        <Text color={"green.600"} mt={0.5}><FaCheckCircle /></Text>
                        <Text fontWeight={"bold"}>Dadurch sind Sauberkeit und Transparenz jederzeit nachvollziehbar.</Text>
                    </HStack>

                </VStack>

            </Box>
                
            <VStack w={"full"} my={8}>
                <Badge mb={3} shadow={"lg"} color={"bg"} bg={"blue.600"} rounded={"full"} px={3} py={1} size={"lg"}><Text as={"span"} scale={0.9} mr={0.5}><FaAward /></Text>   QUALITÄTSVORTEILE</Badge>
                
                <Heading as={"h2"} textAlign={"center"} fontSize={"3xl"} lineHeight={1.4} fontWeight={"bolder"}>
                    Warum {company_name}?
                </Heading>
                <Text maxW={"800px"} textAlign={"center"} mt={3} mb={6} lineHeight={1.75} w={"full"} fontSize={"sm"}>
                    Weil wir wissen, worauf es ankommt:
                    <br />
                    Über 15 Jahre Erfahrung
                    <br />
                    Über 200 zufriedene Bürokunden
                    <br />
                    Maßgeschneiderte Reinigungspläne
                    <br />
                    100 % Zufriedenheitsgarantie
                    <br />
                    <b>
                    Lassen Sie uns dafür sorgen, dass Sauberkeit in Ihrem Unternehmen kein Thema mehr ist – sondern ein Standard.
                    </b>
                </Text>

                <Grid
                    gap={8}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    my={3}
                >

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaUserTie /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Feste Ansprechpartner</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Sie haben bei uns immer einen festen Ansprechpartner, der Ihre Wünsche kennt und für Sie erreichbar ist.</Text>
                            <List.Root gap={2} w={"full"} variant="plain" align="center" className="group-hover:text-white!" color={"bg.inverted/80"}>
                                                            
                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Persönliche Betreuung
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Schnelle Reaktionszeit
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Direkte Kommunikation
                                    </Text>
                                </List.Item>
                            </List.Root>
                        </VStack>
                    </GridItem>

                    <GridItem textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaUserCheck /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Geprüfte Mitarbeiter</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Alle unsere Reinigungskräfte sind sorgfältig ausgewählt, geschult und zertifiziert für höchste Qualitätsstandards.</Text>
                            <List.Root gap={2} w={"full"} variant="plain" align="center" className="group-hover:text-white!" color={"bg.inverted/80"}>
                                                            
                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Zuverlässiges Personal
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Professionelle Schulungen
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Verschwiegenheitserklärung
                                    </Text>
                                </List.Item>
                            </List.Root>
                        </VStack>
                    </GridItem>

                    <GridItem colSpan={{ base: "auto", md: 2, lg: "auto" }} textAlign={"left"} _hover={{ bg: "blue.800", color: "bg" }} w={"full"} h={"full"} bg={"blue.100/20"} border={"1px solid"} className="group" borderColor={"bg/40"} rounded={"xl"} shadow={"md"} p={5} py={8}>
                        <VStack gap={6}>
                            <Center w={12} aspectRatio={"square"} rounded={"lg"} bg={"blue.200"} color={"blue.800"} fontSize={"xl"}><FaClipboardCheck /></Center>
                            <Heading as={"h5"} textAlign={"center"}>Transparente Abläufe</Heading>
                            <Text opacity={0.7} textAlign={"center"} fontSize={"sm"}>Klare Leistungsbeschreibungen, nachvollziehbare Abrechnungen und dokumentierte Qualitätskontrollen.</Text>
                            <List.Root gap={2} w={"full"} variant="plain" align="center" className="group-hover:text-white!" color={"bg.inverted/80"}>
                                                            
                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Klare Vereinbarungen
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Faire Preisgestaltung
                                    </Text>
                                </List.Item>

                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <FaCheck />
                                    </List.Indicator>
                                    <Text fontSize={"sm"}>  
                                        Qualitätskontrolle
                                    </Text>
                                </List.Item>
                            </List.Root>
                        </VStack>
                    </GridItem>

                </Grid>

            </VStack>

            <Box shadow={"lg"} className="gradient_dark_background" color={"bg"} p={{ base: 6, md: 12 }} rounded={"xl"} my={8}>
                <Heading as={"h6"} fontWeight={"bolder"} fontSize={"2xl"} mb={4} textAlign={"center"}>Weitere Vorteile Ihrer Büroreinigung Nürnberg, Fürth & Umgebung</Heading>

                <Grid 
                    gap={6}
                    gapY={12}
                    mt={16}
                    textAlign={"center"}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                >

                    <VStack gap={1.5}>
                        <Center w={12} aspectRatio={"square"} rounded={"full"} bg={"blue.100"} color={"blue.600"} fontSize={"2xl"}>
                            <FaShieldAlt />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Geld-zurück-Garantie</Text>
                        <Text opacity={0.65} fontSize={"sm"}>100% Zufriedenheit oder Geld zurück</Text>
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
                            <FaEuroSign />
                        </Center>
                        <Text mt={2} fontWeight={"bolder"}>Faire Preise</Text>
                        <Text opacity={0.65} fontSize={"sm"}>Transparente Kostenstruktur</Text>
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
                    Saubere Büros für 
                    <Text as={"span"} color={"cyan.400"}> produktive Mitarbeiter</Text>
                </Heading>

                <Text textAlign={"center"} maxW={"600px"}>
                    Lassen Sie uns für Sauberkeit sorgen – fordern Sie jetzt Ihr unverbindliches Angebot an oder rufen Sie uns direkt an
                </Text>

                <HStack mt={7} gap={4} justify={"center"} flexWrap={"wrap"}>
                    
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
                                <FaEnvelope />
                            </Center>
                        <Heading as={"h6"} fontWeight={"bolder"}>E-Mail</Heading>
                        <Link href={`mailto:${official_mail}`}>{official_mail}</Link>
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
                            <FaUserGroup />
                        </Center>
                        <Text fontWeight={"bolder"}>{satisfied_customers}+ Kunden</Text>
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

                <Separator w={"full"} opacity={0.15} my={12} />

                <VStack mt={2} gap={3} w={"full"} bg={"bg/15"} rounded={"md"} p={6} border={"1px solid"} borderColor={"bg"} textAlign={"center"}>
                    
                    <Heading as={"h5"} fontSize={"xl"} fontWeight={"bolder"}>Professionelle Büroreinigung Nürnberg, Fürth & Umgebung für Unternehmen</Heading>

                    <Heading as={"h6"} mt={2} fontSize={"lg"} fontWeight={"bolder"}>Büroreinigung Nürnberg, Fürth & Umgebung – zuverlässig. gründlich. professionell.</Heading>

                    <Text maxW={"800px"}>
                        {company_name} ist Ihre erfahrene Reinigungsfirma in Nürnberg, Fürth & Umgebung für hygienische und gepflegte Arbeitsumgebungen. Wir halten Ihre Büroräume sauber – täglich, zuverlässig und mit höchsten Standards.

                        <br /><br />

                        Ob <b>Unterhaltsreinigung</b> oder <b>regelmäßige Grundreinigung</b>:
                        Wir bieten maßgeschneiderte Lösungen für Büros, Praxen und Gewerbeobjekte in Nürnberg, Fürth & Umgebung und Umgebung.

                        <br /><br />

                        <b>Vertrauen Sie auf unsere Expertise – für zufriedene Mitarbeiter und eine produktive Arbeitsatmosphäre.</b>

                    </Text>

                </VStack>

            </VStack>

        </Box>

        {/* contact sectin */}
        <CommonServiceContactSection />

        </>
    )
}

export default OfficeCleaningPage;