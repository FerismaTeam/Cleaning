import { company_name } from "@/data/about";
import { mobile, official_mail, opening_hours, service_area, telephone } from "@/data/contact";
import { company_quote, copyrightText, whatsAppContact } from "@/data/footer";
import services from "@/data/services.list";
import { Box, Button, Flex, Grid, Heading, HStack, Separator, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaClock, FaEnvelope, FaHome, FaInfo, FaInfoCircle, FaMobileAlt, FaPhoneAlt, FaStar, FaSuitcase, FaWhatsapp } from "react-icons/fa";
import { FaGift, FaLocationPin } from "react-icons/fa6";

const Footer = () => {
    return (
        <Box as="footer" color={"bg"} py={14} bg={"blue.800"} px={"5vw"}>
            <Box>
                <Grid
                    gap={{ base: 20, xl: 4 }}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl:"30% 15% 30% 25%" }}
                >

                    {/* info */}
                    <VStack align={"start"} gap={6}>
                        <Heading asChild fontSize={"3xl"} as={"h4"}><Link href={"/"}>{company_name}</Link></Heading>
                        <Text lineHeight={1.65}>{company_quote}</Text>
                        <Button asChild variant={"outline"} w={8} colorPalette={"white"} _hover={{ color: "blue.800" }} color={"bg"} rounded={"full"}>
                            <Link href={`https://wa.me/${whatsAppContact}`} target="_blank">
                                <FaWhatsapp />
                            </Link>
                        </Button>
                    </VStack>

                    {/* navigation */}

                    <VStack align={"start"} gap={3}>
                        <Heading as={"h4"} color={"blue.300"} fontSize={"xl"} fontWeight={"bolder"} mb={4}>Navigation</Heading>

                        <Link href={"/"} className="flex gap-2 items-center">
                            <FaHome />
                            Home
                        </Link>

                        <Link href={"/#services"} className="flex gap-2 items-center">
                            <FaSuitcase />
                            Leistungen
                        </Link>

                        <Link href={"/ueber-uns"} className="flex gap-2 items-center">
                            <FaInfoCircle />
                            Über uns
                        </Link>

                        <Link href={"/#references"} className="flex gap-2 items-center">
                            <FaStar />
                            Referenzen
                        </Link>

                        <Link href={"/#contact"} className="flex gap-2 items-center">
                            <FaEnvelope />
                            Kontakt
                        </Link>

                    </VStack>

                    <VStack align={"start"} gap={3}>
                        <Heading as={"h4"} color={"blue.300"} fontSize={"xl"} fontWeight={"bolder"} mb={4}>Unsere Leistungen München</Heading>

                        {
                            services.map((item, i) => {
                                return (
                                    <Link key={i} href={`/${item.link?.toLocaleLowerCase()}`} className="flex gap-2 items-center">
                                        <item.icon />
                                        {item.name}
                                    </Link>
                                )
                            })
                        }

                    </VStack>

                    <VStack align={"start"} gap={5}>
                        <Heading as={"h4"} color={"blue.300"} fontSize={"xl"} fontWeight={"bolder"} mb={3}>Kontakt</Heading>

                        <Flex gap={3} alignItems={"start"}>
                            <Text color={"blue.300"}><FaPhoneAlt /></Text>
                            <Box mt={-2}>
                                <Text fontWeight={"bolder"}>Telefon</Text>
                                <Text asChild opacity={0.85} fontWeight={"medium"}>
                                    <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                        {telephone}
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>

                        <Flex gap={3} alignItems={"start"}>
                            <Text color={"blue.300"}><FaMobileAlt /></Text>
                            <Box mt={-2}>
                                <Text fontWeight={"bolder"}>Mobil</Text>
                                <Text asChild opacity={0.85} fontWeight={"medium"} >
                                    <Link href={`tel:${mobile.replaceAll(" ", "")}`}>
                                        {mobile}
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>

                        <Flex gap={3} alignItems={"start"}>
                            <Text color={"blue.300"}><FaEnvelope /></Text>
                            <Box mt={-2}>
                                <Text fontWeight={"bolder"}>E-mail</Text>
                                <Text asChild opacity={0.85} fontWeight={"medium"}>
                                    <Link href={`mailto:${official_mail}`}>
                                    {official_mail}
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>

                        <Flex gap={3} alignItems={"start"}>
                            <Text color={"blue.300"}><FaLocationPin /></Text>
                            <Box mt={-1}>
                                <Text fontWeight={"bolder"}>Servicegebiet</Text>
                                <Text opacity={0.85} fontWeight={"medium"} mt={0.5}>{service_area}</Text>
                            </Box>
                        </Flex>

                        <Flex gap={3} alignItems={"start"}>
                            <Text color={"red.300"}><FaClock /></Text>
                            <Box mt={-1}>
                                <Text fontWeight={"bolder"}>Telefon</Text>
                                <Text opacity={0.85} fontWeight={"medium"} whiteSpace={"pre-wrap"} mt={0.5}>{opening_hours}</Text>
                            </Box>
                        </Flex>

                        <Button asChild colorPalette={"blue"} shadow={"xl"} mt={2} ml={2}>
                            <Link href={"/#contact"}>
                                <Text scale={0.75}><FaGift /></Text>
                                Kostenloses Angebot
                            </Link>
                        </Button>

                    </VStack>

                </Grid>

                <Separator my={6} borderColor={"bg/10"} />
                
                <HStack gap={5} flexWrap={"wrap"} justifyContent={"space-between"} fontSize={"sm"}>
                    
                    <Text>
                        {copyrightText}
                    </Text>

                    <HStack gap={2}>
                        
                        <Link href={"/rechtliches#imprint"}>
                        Impressum
                        </Link>

                        <Link href={"/rechtliches#privacy"}>
                        Datenschutz
                        </Link>

                        <Link href={"/rechtliches#tnc"}>
                        AGB
                        </Link>

                    </HStack>

                </HStack>

            </Box>
        </Box>
    )
}

export default Footer;