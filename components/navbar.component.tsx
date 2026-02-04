'use client'

import { company_name } from "@/data/about";
import { telephone } from "@/data/contact";
import services from "@/data/services.list";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown } from "react-icons/rx";

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);
    const [dropDownAllow, setDropDownAllow] = useState(false);

    const path = usePathname();

    useEffect(() => {

       (() => setShowNavbar(false))();

       (() => setDropDownAllow(false))(); // disable dropdown on path change

       setTimeout(() => { // re-enable drop down after 500ms
            setDropDownAllow(true);
       }, 500)

    }, [path])

    return (
        <Box as="nav" bg={"bg"} borderBottom={"1px solid"} borderColor={"gray.50"} boxShadow={"lg"} pos={"sticky"} top={0} zIndex={1000} px={"5vw"}>
            <Flex h={"80px"} py={4} justify={"space-between"} align={"center"}>

                {/* logo */}
                <Text asChild fontWeight="semibold"><Link href={"/"}>{company_name}</Link></Text>

                {/* toggle button */}
                <Button variant={"outline"} onClick={() => { setShowNavbar(current => !current) }} p={2} rounded={"md"} border={"1px solid "} borderColor={"bg.inverted/20"} fontSize={"xl"} className="lg:hidden!">
                    <GiHamburgerMenu />
                </Button>

                {/* links */}
                <Flex shadow={{ base: "lg", lg: "none" }} className={ !showNavbar ? "max-lg:hidden!" : "" } gap={0} pos={{ base: "absolute", lg: "relative" }} flexDirection={{ base: "column", lg: "row" }} top={{ base: "80px", lg: 0 }} bg={{ base: "gray.50", lg: "bg" }} width={{ base: "full", lg: "auto" }} left={{ base: "0", lg: "0" }} px={0} overflowY={{ base: "auto", lg: "visible" }} maxH={{ base: "calc( 100vh - 80px )", lg: "auto" }}>

                    <Link href={"/"} className="navlink">Home</Link>
                    
                    <Box pos={"relative"} className="group">
                        <Text className="navlink cursor-pointer flex gap-1 items-center">Leistungen <RxCaretDown /></Text>

                        <VStack 
                            pos={{ base: "relative", lg: "absolute" }} 
                            className={"lg:opacity-0 lg:pointer-events-none lg:group-hover:pointer-events-auto lg:group-hover:opacity-100 duration-200 lg:hover:opacity-100 lg:hover:pointer-events-auto " + ( !dropDownAllow ? "hidden!" : "" )} 
                            gap={0} 
                            top={{ base: 0, lg: "100%" }} 
                            bg={{ base: "transparent", lg: "bg" }} 
                            shadow={{ base: "none", lg: "sm" }} 
                            py={1} 
                            w={{ base: "full", lg: "300px" }} 
                            rounded={{ base: "none", lg: "md" }}
                        >

                            {
                                services.map((item, i) => {
                                    return <Link key={i} href={`/${item.link!.toLowerCase()}`} className={"flex max-lg:px-[5vw]! py-1.5!  border-black/5! text-[14px]! px-4! gap-4 items-center w-full hover:bg-blue-100! hover:text-blue-600! mb-0! items-start! " + (i == services.length - 1 ? " max-lg:border-b! " : " border-b! ")}>
                                            <Text mt={1.5}><item.icon /></Text>
                                            <Text w={"full"}>{item.name}</Text>
                                    </Link>
                                })
                            }

                        </VStack>

                    </Box>

                    <Link href={"/ueber-uns"} className="navlink">Über uns</Link>
                    <Link href={"/#references"} className="navlink">Referenzen</Link>
                    <Link href={"/#contact"} className="navlink">Kontakt</Link>
                    <Link href={"/rechtliches"} className="navlink">Rechtliches</Link>

                    <HStack gap={{ base: 4, lg: 2 }} ml={2} className="max-lg:my-6! max-md:flex-col! max-lg:items-start! max-lg:px-[5vw]!">
                        <Button asChild variant={"solid"} w={{ base: "full", md: "50%" , lg: "auto" }} colorPalette={"blue"} rounded={"md"} px={2}>
                            <Link href={`tel:${telephone.replaceAll(" ", "")}`}>
                                <Text scale={0.75}><FaPhoneAlt /></Text>
                                <Text className=" max-lg:block! max-xl:hidden!">{telephone}</Text>
                            </Link>
                        </Button>

                        <Button asChild variant={"solid"} w={{ base: "full", md: "50%" , lg: "auto" }} colorPalette={"blue"} rounded={"md"} px={3}>
                            <Link href={`/#contact`}>
                            Kostenloses Angebot
                            </Link>
                        </Button>
                    </HStack>

                </Flex>

            </Flex>
        </Box>
    )

}

export default Navbar;