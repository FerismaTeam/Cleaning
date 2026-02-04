import { company_name, owner_name } from "@/data/about";
import { address, mobile, official_mail, operational_region, service_area, telephone, website_url } from "@/data/contact";
import legal from "@/data/legal.data";
import privacy from "@/data/privacy.data";
import tnc from "@/data/tnc.data";
import renderFormattedText from "@/utils/renderFormatedText";
import { Badge, Box, Button, Center, Heading, HStack, Separator, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaMobileAlt, FaPhoneAlt } from "react-icons/fa";
import { FaArrowUp, FaBrush, FaBuilding, FaEnvelope, FaGavel, FaGlobe } from "react-icons/fa6";
import { IoDocument, IoDocumentText } from "react-icons/io5";
import { LuBuilding, LuShieldAlert } from "react-icons/lu";

const LegalPage = () => {

    return (
        <>

        {/* hero section */}
        <Box as="section" id="home" className="gradient_mix_six" >

            <VStack align={"center"} gap={7} md={{ gap: 10, py: 20 }} py={5}>
                
                <Badge size={"lg"} px={4} py={2} rounded={"full"} bg={"blue.600"} color={"bg"}>
                    <FaGavel />
                     RECHTLICHE INFORMATIONEN
                </Badge>

                <Heading as={"h1"} fontSize={{ base: "3xl", md: "4xl" }} fontWeight={"bolder"}>Rechtliches</Heading>
                
                <Text textAlign={"center"} maxW={"800px"} lineHeight={1.85} opacity={0.8} px={"1"}>Hier finden Sie alle rechtlichen Informationen zu Popp Dienstleistungen Gebäudedienste  Nürnberg, Fürth & Umgebung – Impressum, Datenschutzerklärung und Allgemeine Geschäftsbedingungen.</Text>

                <Box>
                    <HStack gap={4} wrap={"wrap"} justify={"center"}>
                        <Button bg={"blue.600"} textTransform={"capitalize"} asChild>
                            <Link href={"#legal"}><LuBuilding /> Impressum</Link>
                        </Button>

                        <Button bg={"blue.600"} textTransform={"capitalize"} asChild>
                            <Link href={"#privacy"}><LuShieldAlert /> Datenschutz</Link>
                        </Button>

                        <Button bg={"blue.600"} textTransform={"capitalize"} asChild>
                            <Link href={"#tnc"}><IoDocument /> AGB</Link>
                        </Button>
                    </HStack>
                </Box>

            </VStack>

        </Box>

        {/* legal section */}
        <Box as={"section"} id="legal">

            <VStack gap={5} w={"full"} p={{ base: 2, md: 5 }} align={"start"} >

                <HStack gap={4}>

                    <Center minW={14} aspectRatio={"square"} bg={"blue.700"} color={"bg"} fontSize={"2xl"} rounded={"lg"}>
                        <FaBuilding />
                    </Center>

                    <VStack align={"start"} w={"full"} gap={0}>
                        <Heading as={"h2"} fontWeight={"bolder"} fontSize={"xl"}>Impressum</Heading>
                        <Text fontWeight={"medium"} opacity={0.5}>Angaben gemäß § 5 TMG</Text>
                    </VStack>

                </HStack>

                <Separator w={"full"} opacity={0.5} my={3} />

                <VStack gap={2} align={"start"} w={"full"}>
                    <Heading as={"h3"} fontWeight={"bolder"} fontSize={"initial"}>Firmeninformationen</Heading>
                    <VStack gap={3} align={"start"} fontSize={"sm"} w={"full"} p={{ base: 2, md: 5}} rounded={"md"} bg={"blue.100/25"}>
                        <Text> <b>Firmenname: </b> {company_name}</Text>
                        <Text whiteSpace={"pre-line"}> <b>Region: </b> {operational_region}</Text>
                        <Text whiteSpace={"pre-line"}> <b>Adresse:</b> {address}</Text>

                    </VStack>
                </VStack>
                
                <VStack gap={2} align={"start"} w={"full"}>
                    <Heading as={"h3"} fontWeight={"bolder"} fontSize={"initial"}>Kontakt</Heading>
                    <VStack gap={3} align={"start"} fontSize={"sm"} w={"full"} p={{ base: 2, md: 5}} rounded={"md"} bg={"blue.100/25"}>
                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaPhoneAlt /></Text>
                            <Text fontWeight={"bold"}>Telefon: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={`tel:${telephone.replaceAll(" ", "")}`}>{telephone}</Link>
                        </HStack>

                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaMobileAlt /></Text>
                            <Text fontWeight={"bold"}>Mobil: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={`tel:${mobile.replaceAll(" ", "")}`}>{mobile}</Link>
                        </HStack>

                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaEnvelope /></Text>
                            <Text fontWeight={"bold"}>E-Mail: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={`mailto:${official_mail}`}>{official_mail}</Link>
                        </HStack>

                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaGlobe /></Text>
                            <Text fontWeight={"bold"}>Web: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={website_url}>{website_url}</Link>
                        </HStack>

                    </VStack>
                </VStack>

                {
                    legal.map((item, i) => {
                        return <VStack key={i} gap={2} align={"start"} w={"full"}>
                            <Heading as={"h3"} fontWeight={"bolder"} fontSize={"initial"}>{item.title}</Heading>
                            <VStack gap={3} align={"start"} w={"full"} p={{ base: 2, md: 5}} rounded={"md"} bg={"blue.100/25"}>
                                {
                                    item.content.map((ele, j) => {
                                        return <Box fontSize={"sm"} opacity={0.85} lineHeight={1.7} key={j}>{renderFormattedText(ele)}</Box>
                                    })
                                }
                            </VStack>
                        </VStack>
                    })
                }
                
                <Separator w={"full"} opacity={0.5} my={3} />

                <Link className="flex! gap-2! items-center! w-auto! mx-auto! font-bold! text-blue-500! hover:underline!" href={"#home"}>
                    <FaArrowUp />
                    Nach oben
                </Link>

            </VStack>

        </Box>
        
        {/* privacy section */}
        <Box as={"section"} id="privacy" bg={"blue.100/30"}>

            <VStack gap={5} w={"full"}  p={{ base: 2, md: 5 }} align={"start"} >

                <HStack gap={4}>

                    <Center minW={14} aspectRatio={"square"} bg={"blue.800"} color={"bg"} fontSize={"2xl"} rounded={"lg"}>
                        <IoDocumentText />
                    </Center>

                    <VStack align={"start"} w={"full"} gap={0}>
                        <Heading as={"h2"} fontWeight={"bolder"} fontSize={"xl"}>Datenschutzerklärung</Heading>
                        <Text fontWeight={"medium"} opacity={0.5}>Informationen nach DSGVO</Text>
                    </VStack>

                </HStack>

                <Separator w={"full"} opacity={0.5} my={3} />
                
                <VStack gap={2} align={"start"} w={"full"}>
                    <Heading as={"h3"} fontWeight={"bolder"} fontSize={"initial"}>1. Verantwortlicher</Heading>
                    <VStack gap={3} align={"start"} fontSize={"sm"} w={"full"} p={{ base: 2, md: 5}} rounded={"md"} bg={"bg"} border={"1px solid"} borderColor={"blue.500/10"}>
                        <Text fontWeight={"bolder"}>{company_name}</Text>
                        <Text whiteSpace={"pre-line"}>{service_area}</Text>
                        <Text whiteSpace={"pre-line"}>{address}</Text>
                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaPhoneAlt /></Text>
                            <Text fontWeight={"bold"}>Telefon: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={`tel:${telephone.replaceAll(" ", "")}`}>{telephone}</Link>
                        </HStack>

                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaMobileAlt /></Text>
                            <Text fontWeight={"bold"}>Mobil: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={`tel:${mobile.replaceAll(" ", "")}`}>{mobile}</Link>
                        </HStack>

                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaEnvelope /></Text>
                            <Text fontWeight={"bold"}>E-Mail: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={`mailto:${official_mail}`}>{official_mail}</Link>
                        </HStack>

                        <HStack gap={2} align={"start"} w={"full"}>
                            <Text mt={1} color={"blue.600"} fontSize={"xs"}><FaGlobe /></Text>
                            <Text fontWeight={"bold"}>Web: </Text>
                            <Link className="underline! text-blue-500!" target="_blank" href={website_url}>{website_url}</Link>
                        </HStack>

                        <Text fontWeight={"bolder"} mt={3} mb={-2}>Vertreten durch:</Text>
                        <Text>Geschäftsführer {owner_name}</Text>


                    </VStack>
                </VStack>

                {
                    privacy.map((item, i) => {
                        return <VStack key={i} gap={2} align={"start"} w={"full"}>
                            <Heading as={"h3"} fontWeight={"bolder"} fontSize={"initial"}>{i+2}. {item.title}</Heading>
                            <VStack gap={3} align={"start"} w={"full"} p={{ base: 2, md: 5}} rounded={"md"} bg={"bg"} border={"1px solid"} borderColor={"blue.500/10"}>
                                {
                                    item.content.map((ele, j) => {
                                        return <Box fontSize={"sm"} opacity={0.85} lineHeight={1.7} key={j}>{renderFormattedText(ele)}</Box>
                                    })
                                }
                            </VStack>
                        </VStack>
                    })
                }
                
                <Separator w={"full"} opacity={0.5} my={3} />

                <Link className="flex! gap-2! items-center! w-auto! mx-auto! font-bold! text-blue-500! hover:underline!" href={"#home"}>
                    <FaArrowUp />
                    Nach oben
                </Link>

            </VStack>

        </Box>
        
        {/* tnc section */}
        <Box as={"section"} id="tnc">

            <VStack gap={5} w={"full"} p={{ base: 2, md: 5 }} align={"start"} >

                <HStack gap={4}>

                    <Center minW={14} aspectRatio={"square"} bg={"blue.700"} color={"bg"} fontSize={"2xl"} rounded={"lg"}>
                        <IoDocumentText />
                    </Center>

                    <VStack align={"start"} w={"full"} gap={0}>
                        <Heading as={"h2"} fontWeight={"bolder"} fontSize={"xl"}>Allgemeine Geschäftsbedingungen (AGB)</Heading>
                        <Text fontWeight={"medium"} opacity={0.5}>{company_name} - Stand: Oktober 2025</Text>
                    </VStack>

                </HStack>

                <Separator w={"full"} opacity={0.5} my={3} />
                
                <Box w={"full"} p={{ base: 2, md: 5}} rounded={"md"} bg={"blue.100/25"} color={"blue.500"}>
                    <Text fontWeight={"bolder"}>{company_name}</Text>
                    <Text mt={2} fontWeight={"medium"} fontSize={"sm"} whiteSpace={"pre-line"}>{address}</Text>
                </Box>

                {
                    tnc.map((item, i) => {
                        return <VStack key={i} gap={2} align={"start"} w={"full"}>
                            <Heading as={"h3"} fontWeight={"bolder"} fontSize={"initial"}>{i+1}. {item.title}</Heading>
                            <VStack gap={3} align={"start"} w={"full"} p={{ base: 2, md: 5}} rounded={"md"} bg={"blue.100/25"}>
                                {
                                    item.content.map((ele, j) => {
                                        return <Box fontSize={"sm"} opacity={0.85} lineHeight={1.7} key={j}>{renderFormattedText(ele)}</Box>
                                    })
                                }
                            </VStack>
                        </VStack>
                    })
                }
                
                <Separator w={"full"} opacity={0.5} my={3} />

                <Link className="flex! gap-2! items-center! w-auto! mx-auto! font-bold! text-blue-500! hover:underline!" href={"#home"}>
                    <FaArrowUp />
                    Nach oben
                </Link>

            </VStack>

        </Box>

        </>
    )

}

export default LegalPage;