"use client"

import Counter from "@/components/counter.component";
import { about_us_in_detail, companies_worked_with, company_ideology_or_goal, company_name, director_note, owner_name, properties_cleaned, satisfied_customers, singleReview, timeline, years_of_experiense } from "@/data/about";
import { address, telephone } from "@/data/contact";
import { Badge, Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Separator, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaCertificate, FaCheckCircle, FaClipboardCheck, FaClock, FaEnvelope, FaEye, FaHandshake, FaHeart, FaLeaf, FaPhoneAlt, FaQuoteLeft, FaStar, FaUser } from "react-icons/fa";
import { FaLocationDot, FaShield } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { IoSchool, IoShieldCheckmarkSharp, IoTime } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";

const AboutPage = () => {
    
    return (
        <>
        
            {/* quick info section */}
            <Box asChild>

                <Center as={"section"} minH={"600px"} bg={"blue.900"} color={"bg"} position={"relative"} py={20}>
                    {/* <Image src={"./assets/about-banner.jpg"} opacity={0.35} w={"full"} pointerEvents={"none"} h={"full"} pos={"absolute"} top={0} left={0} alt="" objectPosition={"bottom"} /> */}
                    <VStack gap={10} align={"start"} w={{ base: "full", md: "auto" }} maxW={"900px"} pos={"relative"}>
                        
                        <Heading fontSize={"4xl"}>Über <Text as={"span"} color={"bg"}>{company_name}</Text></Heading>
                        <Text lineHeight={1.8}>{company_ideology_or_goal}</Text>

                        <Grid gap={5} w={"full"} color={"bg.inverted"} templateColumns={{
                            base: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)" 
                        }}>
                            <Box p={5} bg={"bg/10"} color={"bg"} rounded={"md"}>
                                <Heading as={"h3"} fontWeight={"semibold"} fontSize={"3xl"}><Counter end={satisfied_customers} suffix="+" /></Heading>
                                <Text fontSize={"sm"} textWrap={"nowrap"} mt={4} opacity={0.75}>Zufriedene Kunden</Text>
                            </Box>
                            <Box p={5} bg={"bg/10"} color={"bg"} rounded={"md"}>
                                <Heading as={"h3"} fontWeight={"semibold"} fontSize={"3xl"}><Counter end={properties_cleaned} suffix="+" /></Heading>
                                <Text fontSize={"sm"} textWrap={"nowrap"} mt={4} opacity={0.75}>Betreute Objekte</Text>
                            </Box>
                            <Box p={5} bg={"bg/10"} color={"bg"} rounded={"md"}>
                                <Heading as={"h3"} fontWeight={"semibold"} fontSize={"3xl"}><Counter end={years_of_experiense} suffix="+" /></Heading>
                                <Text fontSize={"sm"} textWrap={"nowrap"} mt={4} opacity={0.75}>Jahre Erfahrung</Text>
                            </Box>
                            <Box p={5} bg={"bg/10"} color={"bg"} rounded={"md"}>
                                <Heading as={"h3"} fontWeight={"semibold"} fontSize={"3xl"}>24/7</Heading>
                                <Text fontSize={"sm"} textWrap={"nowrap"} mt={4} opacity={0.75}>Notdienst verfügbar</Text>
                            </Box>
                        </Grid>

                    </VStack>
                </Center>

            </Box>

            {/* about section */}
            <Box as={"section"} overflowX={"hidden"}>
                <Flex gap={16} alignItems={"start"} flexDir={{ base: "column-reverse", xl: "row" }}>
                    <Box w={{ base: "full", xl: "50%" }}>
                        <Heading as={"h2"} mb={4} lineHeight={1.5} fontSize={"3xl"} fontWeight={"bold"}>Sauberkeit als Verantwortung – Qualität als Versprechen</Heading>
                        <hr className="w-1/2" />
                        <Text lineHeight={1.75} my={4} whiteSpace={"pre-wrap"}>{about_us_in_detail}</Text>

                        <HStack flexWrap={"wrap"} mt={10}>

                            <Badge colorPalette={"blue"} py={2} px={3}> <FaCertificate /> ALEGRIA-Zertifiziert</Badge>

                            <Badge colorPalette={"blue"} py={2} px={3}> <FaShield /> Vollversichert</Badge>

                            <Badge colorPalette={"blue"} py={2} px={3}> <IoTime /> 24/7 Notdienst</Badge>

                        </HStack>

                    </Box>
                    <Center pos={"relative"} maxW={"450px"} mx={"auto"} w={{ base: "full", xl: "50%" }} p={5}>
                        <Box color={"bg"} className="gradient_dark_background" rounded={"lg"} p={4} px={5} pos={"absolute"} top={"-15px"} right={"-20px"}>
                            <Text fontSize={{ base: "2xl", sm: "3xl" }} fontWeight={"bolder"}>100%</Text>
                            <Text fontSize={"sm"} textWrap={"nowrap"} mt={1}>Zuverlässigkeit</Text>
                            <Text fontSize={"sm"} textWrap={"nowrap"} mt={1} opacity={0.75}>Geld-zurück-Garantie</Text>
                        </Box>
                        <Image src={"./assets/about-details-img.jpg"} w={"full"} pointerEvents={"none"} rounded={"md"} maxW={"450px"} boxShadow="10px 10px 0 0 var(--chakra-colors-blue-500)" alt="" />
                    </Center>
                </Flex>
            </Box>

            {/* timeline */}
            <Box as={"section"} bg={"blue.100"}>
                <Box>
                    <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"} lineHeight={1.5}>Unsere Geschichte: Von den Anfängen bis heute</Heading>
                    <Text textAlign={"center"} lineHeight={1.75} mx={"auto"} my={6} opacity={0.75} mb={20} w={"full"} maxW={"450px"}>Über zwei Jahrzehnte Erfahrung in der professionellen Gebäudereinigung</Text>

                    <VStack gap={{ base: 10, lg: 6 }} pos={"relative"}>

                        <Box pos={"absolute"} w={"5px"} h={"100%"} bg={"blue.300"} zIndex={0}>

                        </Box>

                        {
                            timeline.map((item, i) => {

                                const isEven = ((i+1)%2) == 0;

                                return <Flex zIndex={1} key={i} w={"100%"} justifyContent={{ base: "start", lg: !isEven ? "start" : "end" }}  pos={"relative"}>

                                    <Box pos={"absolute"} w={5} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} border={"3px solid"} borderColor={"blue.800"} top={"50%"} translateY={"-50%"} translateX={"-50%"} left={"49%"} className="max-lg:hidden"></Box>
                                    
                                    <Flex flexDir={"column"} alignItems={{ base: "start", lg: !isEven ? "end" : "start" }} bg={"bg"} p={8} rounded={"xl"} shadow={"lg"} w={{ base: "100%", lg: "45%" }}>

                                        <Heading color={"blue.500"} fontWeight={"bolder"} as={"h5"}>{item.yearish}</Heading>
                                        <Heading my={2} as={"h4"}>{item.title}</Heading>
                                        <Text lineHeight={1.5} mt={3} opacity={0.75} textAlign={{ base: "left", lg: !isEven ? "right" : "left" }}>{item.detail}</Text>

                                    </Flex>

                                </Flex>
                            })
                        }

                    </VStack>

                </Box>
            </Box>

            {/* our values and philosophy section */}
            <Box as={"section"}>
                <Box>

                    <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"} lineHeight={1.5}>Unser Team & unsere Philosophie</Heading>
                    <Text textAlign={"center"} lineHeight={1.75} my={4} opacity={0.75} mb={8}>Geschulte Mitarbeiter, die mit Herz und Verstand für Ihre Zufriedenheit arbeiten</Text>

                    <Flex gap={10} gapY={20} mt={14} flexDir={{ base: "column-reverse", xl: "row" }}>

                        <Box w={{ base: "full", xl: "50%" }}>
                            
                            <Heading as={"h4"} fontWeight={"bold"} textAlign={{ base: "center", md: "left" }} mb={6}>Unsere Werte</Heading>

                            <Grid
                                w={"full"}
                                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                                templateRows={"repeat(2, 1fr)"}
                                gap={4}
                            >

                                <Box bg={"blue.100"} _hover={{ bg: "blue.900", color: "bg" }} className="duration-500 group" p={5} px={6} rounded={"lg"}>

                                    <VStack align={"start"} gap={2}>
                                        <Center w={14} h={14} rounded={"full"} bg={"blue.900"} color={"bg"} fontSize={"3xl"} className="group-hover:bg-white! group-hover:text-blue-900! duration-500"><FaHandshake /></Center>
                                        <Heading as={"h5"}>Zuverlässigkeit</Heading>
                                        <Text opacity={0.7} fontSize={"sm"}>Pünktlichkeit und Verbindlichkeit – darauf können Sie sich verlasse</Text>
                                    </VStack>

                                </Box>

                                <Box bg={"blue.100"} _hover={{ bg: "blue.900", color: "bg" }} className="duration-500 group" p={5} px={6} rounded={"lg"}>

                                    <VStack align={"start"} gap={2}>
                                        <Center w={14} h={14} rounded={"full"} bg={"blue.900"} color={"bg"} fontSize={"3xl"} className="group-hover:bg-white! group-hover:text-blue-900! duration-500"><FaStar /></Center>
                                        <Heading as={"h5"}>Qualität</Heading>
                                        <Text opacity={0.7} fontSize={"sm"}>Professionelle Standards bei jedem Auftrag, ohne Kompromisse</Text>
                                    </VStack>

                                </Box>

                                <Box bg={"blue.100"} _hover={{ bg: "blue.900", color: "bg" }} className="duration-500 group" p={5} px={6} rounded={"lg"}>

                                    <VStack align={"start"} gap={2}>
                                        <Center w={14} h={14} rounded={"full"} bg={"blue.900"} color={"bg"} fontSize={"3xl"} className="group-hover:bg-white! group-hover:text-blue-900! duration-500"><FaHeart /></Center>
                                        <Heading as={"h5"}>Menschlichkeit</Heading>
                                        <Text opacity={0.7} fontSize={"sm"}>Respektvoller Umgang mit Kunden und Mitarbeitern gleichermaßen</Text>
                                    </VStack>

                                </Box>

                                <Box bg={"blue.100"} _hover={{ bg: "blue.900", color: "bg" }} className="duration-500 group" p={5} px={6} rounded={"lg"}>

                                    <VStack align={"start"} gap={2}>
                                        <Center w={14} h={14} rounded={"full"} bg={"blue.900"} color={"bg"} fontSize={"3xl"} className="group-hover:bg-white! group-hover:text-blue-900! duration-500"><FaEye /></Center>
                                        <Heading as={"h5"}>Transparenz</Heading>
                                        <Text opacity={0.7} fontSize={"sm"}>Klare Kommunikation und faire Preise – keine versteckten Kosten</Text>
                                    </VStack>

                                </Box>

                            </Grid>

                        </Box>

                        <Box w={{ base: "full", xl: "50%" }}>

                            <Box p={8} rounded={"xl"} color={"bg"} className="gradient_dark_background">

                                <Text fontSize={{ base: "2xl", md: "3xl" }} color={"blue.400"}><FaQuoteLeft /></Text>

                                <Text fontSize={"lg"} mt={5}>
                                    Bei Popp Dienstleistungen arbeiten Menschen, keine Maschinen. Jedes Teammitglied wird sorgfältig ausgewählt, regelmäßig geschult und nach höchsten Standards ausgebildet. Wir legen Wert auf Motivation, Verantwortungsbewusstsein und persönliche Entwicklung.
                                </Text>

                                <Text mt={5} mb={2} opacity={0.65}>
                                    Das Ergebnis: ein motiviertes Team, das stolz auf seine Arbeit ist – und Kunden, die den Unterschied spüren.
                                </Text>

                                <Separator opacity={0.25} my={7} />

                                <HStack gap={3} alignItems={"center"}>
                                    <Center w={20} aspectRatio={"square"} rounded={"full"} fontSize={"4xl"} bg={"blue.400"}>
                                        <HiUserGroup />
                                    </Center>

                                    <Box>
                                        <Text fontWeight={"bolder"}>Unser Team</Text>
                                        <Text fontSize={"sm"} opacity={0.65}>Geschult, motiviert & zuverlässig</Text>
                                    </Box>
                                </HStack>

                            </Box>

                        </Box>

                    </Flex>

                </Box>
            </Box>

            {/* quality and safety section */}
            <Box as={"section"} bg={"blue.100"}>
                <Box py={5}>
                    
                    <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"} lineHeight={1.5}>Qualität & Sicherheit: Unser Versprechen</Heading>
                    <Text textAlign={"center"} lineHeight={1.75} mx={"auto"} my={6} opacity={0.75} mb={8} w={"full"} maxW={"450px"}>Zertifiziert, versichert und kontrolliert – für Ihre Sicherheit und unser Qualitätsversprechen</Text>

                    {/* grid */}
                    <Grid
                        gap={8}
                        templateColumns={{ md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
                        // templateRows={"repeat(2, 1fr)"}
                        mt={20}
                    >

                        <Box className="group">
                            <Box bg={"bg"} p={8} w={"full"} h={"full"} rounded={"lg"} shadow={"md"} _hover={{ shadow: "xl" }} className="  group-hover:-translate-y-4 duration-500">

                                <VStack align={"start"} gap={5}>
                                    <Center w={14} h={14} rounded={"lg"} className="gradient_light_background_one" color={"bg"} fontSize={"xl"}><FaCertificate /></Center>
                                    <Heading as={"h5"}>ALEGRIA-Zertifizierung</Heading>
                                    <Text opacity={0.7} fontSize={"sm"}>Als zertifizierter ALEGRIA-Partner erfüllen wir höchste Qualitäts- und Servicestandards. Regelmäßige Audits garantieren konstante Exzellenz.</Text>
                                </VStack>

                            </Box>
                        </Box>

                        <Box className="group">
                            <Box bg={"bg"} p={8} w={"full"} h={"full"} rounded={"lg"} shadow={"md"} _hover={{ shadow: "xl" }} className="  group-hover:-translate-y-4 duration-500">

                                <VStack align={"start"} gap={5}>
                                    <Center w={14} h={14} rounded={"lg"} className="gradient_light_background_one" color={"bg"} fontSize={"2xl"}><IoSchool /></Center>
                                    <Heading as={"h5"}>Kontinuierliche Schulungen</Heading>
                                    <Text opacity={0.7} fontSize={"sm"}>Unser Team wird fortlaufend in modernen Reinigungstechniken, Hygiene-Standards und Sicherheitsprotokollen geschult.</Text>
                                </VStack>

                            </Box>
                        </Box>

                        <Box className="group">
                            <Box bg={"bg"} p={8} w={"full"} h={"full"} rounded={"lg"} shadow={"md"} _hover={{ shadow: "xl" }} className="  group-hover:-translate-y-4 duration-500">

                                <VStack align={"start"} gap={5}>
                                    <Center w={14} h={14} rounded={"lg"} className="gradient_light_background_one" color={"bg"} fontSize={"2xl"}><IoShieldCheckmarkSharp /></Center>
                                    <Heading as={"h5"}>Vollversichert</Heading>
                                    <Text opacity={0.7} fontSize={"sm"}>Umfassende Haftpflicht- und Betriebshaftpflichtversicherung für maximale Sicherheit – für Sie und uns.</Text>
                                </VStack>

                            </Box>
                        </Box>

                        <Box className="group">
                            <Box bg={"bg"} p={8} w={"full"} h={"full"} rounded={"lg"} shadow={"md"} _hover={{ shadow: "xl" }} className="  group-hover:-translate-y-4 duration-500">

                                <VStack align={"start"} gap={5}>
                                    <Center w={14} h={14} rounded={"lg"} className="gradient_light_background_one" color={"bg"} fontSize={"2xl"}><FaLeaf /></Center>
                                    <Heading as={"h5"}>Umweltfreundlich</Heading>
                                    <Text opacity={0.7} fontSize={"sm"}>Wir setzen auf nachhaltige Reinigungsmittel und ressourcenschonende Verfahren – gut für die Umwelt und Ihre Gesundheit.</Text>
                                </VStack>

                            </Box>
                        </Box>

                        <Box className="group">
                            <Box bg={"bg"} p={8}w={"full"} h={"full"}  rounded={"lg"} shadow={"md"} _hover={{ shadow: "xl" }} className="  group-hover:-translate-y-4 duration-500">

                                <VStack align={"start"} gap={5}>
                                    <Center w={14} h={14} rounded={"lg"} className="gradient_light_background_one" color={"bg"} fontSize={"2xl"}><FaClipboardCheck /></Center>
                                    <Heading as={"h5"}>Qualitätskontrolle</Heading>
                                    <Text opacity={0.7} fontSize={"sm"}>Systematische Kontrollen und Feedbackschleifen garantieren gleichbleibend hohe Qualität bei jedem Einsatz.</Text>
                                </VStack>

                            </Box>
                        </Box>

                        <Box className="group">
                            <Box bg={"bg"} p={8} w={"full"} h={"full"} rounded={"lg"} shadow={"md"} _hover={{ shadow: "xl" }} className="  group-hover:-translate-y-4 duration-500">

                                <VStack align={"start"} gap={5}>
                                    <Center w={14} h={14} rounded={"lg"} className="gradient_light_background_one" color={"bg"} fontSize={"2xl"}><FaClock /></Center>
                                    <Heading as={"h5"}>24/7 Notdienst</Heading>
                                    <Text opacity={0.7} fontSize={"sm"}>Rund um die Uhr für Sie erreichbar – bei Notfällen sind wir schnell und zuverlässig zur Stelle.</Text>
                                </VStack>

                            </Box>
                        </Box>

                    </Grid>

                </Box>
            </Box>

            {/* money back banner */}
            <Box p={8} py={14} rounded={"2xl"} pos={"relative"} maxW={"750px"} w={"90%"} mx={"auto"} my={{ base: 10, md: 20 }} color={"bg"} className="gradient_dark_background" overflow={"hidden"}>

                <Box pos={"absolute"} w={40} className="pulse_animation" aspectRatio={"square"} rounded={"full"} bg={"bg/10"} right={-20} top={-20}></Box>
                <Box pos={"absolute"} w={40} className="pulse_animation" aspectRatio={"square"} rounded={"full"} bg={"bg/10"} left={-20} bottom={-20}></Box>

                <VStack align={"center"} gap={8}>
                    <Center w={20} aspectRatio={"square"} rounded={"full"} bg={"blue.500"} color={"bg"} fontSize={"3xl"}>
                        <SlBadge />
                    </Center>
                    <Heading as="h4" fontWeight={"bolder"} fontSize={"xl"}>100% Geld-zurück-Garantie</Heading>
                    <Text textAlign={"center"} lineHeight={1.75}>
                        Wir stehen zu unserer Leistung. Sollten Sie mit unserer Arbeit nicht vollständig zufrieden sein, erhalten Sie Ihr Geld zurück – ohne Wenn und Aber. Das ist unser Versprechen.
                    </Text>
                </VStack>
                
            </Box>

            {/* customer satisfaction and review */}

            <Box as={"section"}>

                <Box>
                    <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"} lineHeight={1.5}>Kundenzufriedenheit & Referenzen</Heading>
                    <Text textAlign={"center"} lineHeight={1.75} mx={"auto"} my={6} opacity={0.75} mb={20} w={"full"} maxW={"450px"}>Über {satisfied_customers} Kunden vertrauen auf unsere Leistung – lernen Sie einige unserer Partner kennen</Text>

                    <Grid gap={5} gapY={7} color={"bg.inverted"} templateColumns={{
                            base: "1fr",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(4, 1fr)" 
                        }}>
                        <Box p={8} bg={"blue.100"} color={"bg.intverted"} rounded={"md"}>
                            <Heading as={"h3"} color={"blue.500"} textAlign={"center"} fontWeight={"semibold"} fontSize={"3xl"}><Counter end={satisfied_customers} suffix="+" /></Heading>
                            <Text fontSize={"sm"} fontWeight={"bolder"} textAlign={"center"} textWrap={"nowrap"} mt={4} opacity={0.75}>Zufriedene Kunden</Text>
                        </Box>
                        <Box p={8} bg={"blue.100"} color={"bg.intverted"} rounded={"md"}>
                            <Heading as={"h3"} color={"blue.500"} textAlign={"center"} fontWeight={"semibold"} fontSize={"3xl"}><Counter end={properties_cleaned} suffix="+" /></Heading>
                            <Text fontSize={"sm"} fontWeight={"bolder"} textAlign={"center"} textWrap={"nowrap"} mt={4} opacity={0.75}>Betreute Objekte</Text>
                        </Box>
                        <Box p={8} bg={"blue.100"} color={"bg.intverted"} rounded={"md"}>
                            <Heading as={"h3"} color={"blue.500"} textAlign={"center"} fontWeight={"semibold"} fontSize={"3xl"}><Counter end={years_of_experiense} suffix="+" /></Heading>
                            <Text fontSize={"sm"} fontWeight={"bolder"} textAlign={"center"} textWrap={"nowrap"} mt={4} opacity={0.75}>Jahre Erfahrung</Text>
                        </Box>
                        <Box p={8} bg={"blue.100"} color={"bg.intverted"} rounded={"md"}>
                            <Heading as={"h3"} color={"blue.500"} textAlign={"center"} fontWeight={"semibold"} fontSize={"3xl"}>100%</Heading>
                            <Text fontSize={"sm"} fontWeight={"bolder"} textAlign={"center"} textWrap={"nowrap"} mt={4} opacity={0.75}>Zuverlässigkeit</Text>
                        </Box>
                    </Grid>

                    <Heading as={"h4"} textAlign={"center"} my={8} mt={16} fontSize={"xl"} fontWeight={"bold"}>Unsere geschätzten Partner</Heading>
                    
                    <Flex gap={4} justifyContent={"center"} flexWrap={"wrap"}>
                        {
                            companies_worked_with.map((item, i) => {
                                return (
                                    <VStack align={"center"} minW={"180px"} bg={"bg"} gap={2} key={i} p={3} border={"1px solid"} shadow={"sm"} borderColor={"blue.100"} rounded={"md"} >
                                        <Heading as="h5" fontWeight={"bold"}>{item.name}</Heading>
                                        <Text as="h5" opacity={0.65} fontSize={"sm"}>{item.type}</Text>
                                    </VStack>
                                )
                            })
                        }
                        <VStack align={"center"} minW={"180px"} color={"bg"} className="gradient_dark_background" gap={2} p={3} border={"1px solid"} shadow={"sm"} borderColor={"blue.100"} rounded={"md"} >
                            <Heading as="h5" fontWeight={"bold"}>{satisfied_customers}+</Heading>
                            <Text as="h5" opacity={0.65} fontSize={"sm"}>Weitere Partner</Text>
                        </VStack>
                    </Flex>

                    {/* single review */}
                    <Box p={8} pt={2} rounded={"xl"} color={"bg.inverted"} className="gradient_light_background_two" mt={24} shadow={"xl"} maxW={"900px"} mx={"auto"} pos={"relative"}>

                        <Text pos={"absolute"} top={"-8px"} left={"-20px"} fontSize={{ base: "2xl", md: "4xl" }} color={"blue.500"}><FaQuoteLeft /></Text>

                        <Text fontSize={"lg"} mt={5}>
                            {singleReview.review}
                        </Text>

                        <Separator borderColor={"bg.inverted"} opacity={0.05} my={7} />

                        <HStack gap={3} alignItems={"center"}>
                            <Center w={12} aspectRatio={"square"} rounded={"full"} fontSize={"xl"} color={"bg"} bg={"blue.900"}>
                                <FaUser />
                            </Center>

                            <Box>
                                <Text fontWeight={"bolder"}>{singleReview.review_by}</Text>
                                <Text fontSize={"sm"} opacity={0.65}>{singleReview.from}</Text>
                            </Box>
                        </HStack>

                    </Box>

                    <Flex
                        gap={8}
                        gapX={{ base: 20, xl: 8 }}
                        gapY={14}
                        flexWrap={"wrap"}
                        justifyContent={{ base: "center", xl: "space-between" }}
                        mt={32}
                    >
                        <Box minW={"200px"} maxW={"300px"}>

                            <VStack align={"center"} gap={1}>
                                <Center w={14} h={14} rounded={"full"} className="gradient_light_background_two" color={"blue.500"} fontSize={"2xl"}><FaHandshake /></Center>
                                <Heading mt={4} textAlign={"center"} as={"h5"} fontSize={"18px"}>Langfristige Partnerschaften</Heading>
                                <Text textAlign={"center"} opacity={0.7} fontSize={"sm"}>Viele Kunden arbeiten seit Jahren mit uns zusammen</Text>
                            </VStack>

                        </Box>

                        <Box minW={"200px"} maxW={"300px"}>

                            <VStack align={"center"} gap={1}>
                                <Center w={14} h={14} rounded={"full"} className="gradient_light_background_two" color={"blue.500"} fontSize={"2xl"}><FaStar /></Center>
                                <Heading mt={4} textAlign={"center"} as={"h5"} fontSize={"18px"}>Erstklassige Bewertungen</Heading>
                                <Text textAlign={"center"} opacity={0.7} fontSize={"sm"}>Höchste Kundenzufriedenheit in  Nürnberg, Fürth & Umgebung</Text>
                            </VStack>

                        </Box>

                        <Box minW={"200px"} maxW={"300px"}>

                            <VStack align={"center"} gap={1}>
                                <Center w={14} h={14} rounded={"full"} className="gradient_light_background_two" color={"blue.500"} fontSize={"2xl"}><SlBadge /></Center>
                                <Heading mt={4} textAlign={"center"} as={"h5"} fontSize={"18px"}>Geld-zurück-Garantie</Heading>
                                <Text textAlign={"center"} opacity={0.7} fontSize={"sm"}>100% Zufriedenheit oder Ihr Geld zurück</Text>
                            </VStack>

                        </Box>

                    </Flex>

                </Box>

            </Box>

            {/* director note */}
            <Box as={"section"} className="gradient_dark_background" py={28}>
                <Flex gap={16} color={"bg"} alignItems={"start"} flexDir={{ base: "column", xl: "row" }}>

                    <Center pos={"relative"} maxW={"450px"} mx={"auto"} w={{ base: "full", xl: "50%" }}>
                        <Image src={"./assets/about-director-note.jpg"} w={"full"} pointerEvents={"none"} rounded={"md"} maxW={"450px"} alt="" />
                    </Center>

                    <Box w={{ base: "full", xl: "50%" }}>

                        <Badge colorPalette={"blue"} fontSize={"16px"} rounded={"full"} bg={"blue.100/10"} color={"blue.200"} p={2.5} px={4} mb={5}>Geschäftsführer & Inhaber</Badge>
                        
                        <Heading as={"h2"} mb={4} lineHeight={1.5} fontSize={"3xl"} fontWeight={"bold"}>Der Mensch hinter {company_name}: {owner_name}</Heading>

                        <Text lineHeight={1.75} my={4} whiteSpace={"pre-wrap"}>{director_note}</Text>

                        <Separator borderColor={"bg"} opacity={0.15} mt={12} mb={5} />
                        
                        <Heading as="h4">{owner_name}</Heading>
                        <Text opacity={0.65} mt={1} fontSize={"sm"}>Geschäftsführer & Inhaber</Text>

                    </Box>
                </Flex>
            </Box>

            {/* contact section */}
            <Box as="section" py={28}>
                
                <Box maxW={"900px !important"}>
                    <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"} lineHeight={1.5}>Lernen Sie uns persönlich kennen</Heading>
                    <Text textAlign={"center"} lineHeight={1.75} mx={"auto"} my={6} opacity={0.75} mb={20} w={"full"} maxW={"450px"}>Überzeugen Sie sich selbst von unserem Service. Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an.</Text>

                    <Grid gap={5}
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        maxW={"750px"}
                        mx={"auto"}
                    >
                        
                        <GridItem>
                            <Flex  asChild _hover={{ bg: "blue.700", color: "bg" }} className="duration-150 group" gap={4} alignItems={"center"} p={6} bg={"bg"} rounded={"lg"} shadow={"3px 3px 0 0 var(--chakra-colors-blue-600), -3px -3px 0 0 var(--chakra-colors-blue-400)"} px={8} h={"full"}>

                                <Link href={`tel:${telephone.replaceAll(" ", "")}`}>

                                <Center w={14} fontSize={"2xl"} aspectRatio={"square"} bg={"blue.700"} rounded={"full"} color={"bg"} className="group-hover:bg-white! group-hover:text-blue-700! duration-150"><FaPhoneAlt /></Center>

                                <Box>
                                    <Text fontSize={"sm"} opacity={0.65}>Rufen Sie uns an</Text>
                                    <Text fontWeight={"bold"} fontSize={"lg"}>{telephone}</Text>
                                </Box>

                                </Link>

                            </Flex>
                        </GridItem>

                        <GridItem>
                            <Flex asChild _hover={{ bg: "blue.700", color: "bg" }} className="duration-150 group" gap={4} alignItems={"center"} p={6} bg={"bg"} rounded={"lg"} shadow={"3px 3px 0 0 var(--chakra-colors-blue-600), -3px -3px 0 0 var(--chakra-colors-blue-400)"} px={8} h={"full"}>

                                <Link href={`/#contact`}>

                                <Center w={14} fontSize={"2xl"} aspectRatio={"square"} bg={"blue.700"} rounded={"full"} color={"bg"} className="group-hover:bg-white! group-hover:text-blue-700! duration-150"><FaLocationDot /></Center>

                                <Box>
                                    <Text fontSize={"sm"} opacity={0.65}>Besuchen Sie uns</Text>
                                    <Text fontWeight={"bold"} whiteSpace={"pre-wrap"} fontSize={"lg"}>{address}</Text>
                                </Box>

                                </Link>

                            </Flex>
                        </GridItem>

                        
                    </Grid>

                    <HStack justify={"center"} gap={4} flexWrap={"wrap"} w={"full"} my={12}>

                        <Button asChild p={7} rounded={"lg"} display={"flex"} gap={5} fontSize={"lg"} variant={"solid"} colorPalette={"blue"}>
                            <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                <FaPhoneAlt />
                                <Text>Jetzt anrufen</Text>
                            </Link>
                        </Button>

                        <Button asChild p={7} rounded={"lg"} display={"flex"} gap={5} fontSize={"lg"} variant={"outline"} colorPalette={"blue"}>
                            <Link href={"/#contact"}>
                                <FaEnvelope />
                                <Text>Angebot anfordern</Text>
                            </Link>
                        </Button>

                    </HStack>
                    
                    <Separator/>

                    <Flex justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }} gapY={8} alignItems={"center"} my={5} mt={10}>

                        <VStack align={"center"} gap={3}>
                            <Text color={"blue.700"} fontSize={"xl"}><FaCheckCircle  /></Text>
                            <Text fontWeight={"bolder"}>Kostenlose Beratung</Text>
                        </VStack>

                        <VStack align={"center"} gap={3}>
                            <Text color={"blue.700"} fontSize={"xl"}><FaCheckCircle  /></Text>
                            <Text fontWeight={"bolder"}>Unverbindliches Angebot</Text>
                        </VStack>

                        <VStack align={"center"} gap={3}>
                            <Text color={"blue.700"} fontSize={"xl"}><FaCheckCircle  /></Text>
                            <Text fontWeight={"bolder"}>Schnelle Rückmeldung</Text>
                        </VStack>

                    </Flex>

                </Box>

            </Box>

        </>
    )

} 

export default AboutPage;