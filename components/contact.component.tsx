'use client'

import { instagramHandle, mobile, official_mail, telephone } from "@/data/contact";
import { whatsAppContact } from "@/data/footer";
import { Box, Button, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaInstagram, FaMobileAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {

    const [detailWindow, setDetailWindow] = useState(false);

    return (
        <Box pos={"fixed"} zIndex={2} bottom={5} right={5}>

            {
                detailWindow &&
                <VStack align={"start"} bg={"bg"} border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"md"} minW={"250px"} shadow={"sm"} p={3} mb={-4} mr={7} gap={3}>
                
                    <Heading as={"h4"} fontSize={"sm"} px={3} opacity={0.6} pointerEvents={"none"}>Contact Details</Heading>

                    <HStack bg={"green.500/1"} color={"green.700"} _hover={{ bg: "green.700", color: "bg" }} w={"full"} p={2} px={3} rounded={"md"} asChild>
                        <Link target="_blank" href={`https://wa.me/${whatsAppContact}`}>
                            <Text><FaWhatsapp /></Text>
                            <Text>Whatsapp</Text>
                        </Link>
                    </HStack>

                    <HStack bg={"pink.500/1"} color={"pink.700"} _hover={{ bg: "pink.700", color: "bg" }} w={"full"} p={2} px={3} rounded={"md"} asChild>
                        <Link target="_blank" href={`https://www.instagram.com/${instagramHandle}`}>
                            <Text><FaInstagram /></Text>
                            <Text>Instagram</Text>
                        </Link>
                    </HStack>


                    <HStack bg={"blue.500/1"} color={"blue.700"} _hover={{ bg: "blue.700", color: "bg" }} w={"full"} p={2} px={3} pr={4} rounded={"md"} asChild>
                        <Link target="_blank" href={`mailto:${official_mail}`}>
                            <Text><FaEnvelope /></Text>
                            <Text>Email</Text>
                        </Link>
                    </HStack>

                    <HStack bg={"orange.500/1"} color={"orange.700"} _hover={{ bg: "orange.700", color: "bg" }} w={"full"} p={2} px={3} rounded={"md"} asChild>
                        <Link target="_blank" href={`tel:${telephone.replaceAll(" ", "")}`}>
                            <Text><FaPhoneAlt /></Text>
                            <Text>{telephone}</Text>
                        </Link>
                    </HStack>

                    <HStack bg={"orange.500/1"} color={"orange.700"} _hover={{ bg: "orange.700", color: "bg" }} w={"full"} p={2} px={3} rounded={"md"} asChild>
                        <Link target="_blank" href={`tel:${mobile.replaceAll(" ", "")}`}>
                            <Text><FaMobileAlt /></Text>
                            <Text>{mobile}</Text>
                        </Link>
                    </HStack>
                    
                </VStack>
            }

            <Center asChild zIndex={2} ml={"auto"}>
                <Button onClick={() => { setDetailWindow(currentState => !currentState) }} cursor={"pointer"} shadow={"md"} w={14} h={14} rounded={"full"} bg={"green.600"}>
                    <Text fontSize={"lg"} color={"bg"}><FaPhoneAlt /></Text>
                </Button>
            </Center>
        </Box>
    )

}

export default ContactInfo;