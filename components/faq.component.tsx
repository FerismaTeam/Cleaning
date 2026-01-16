'use client'

import { Faq as FaqType } from "@/data/hospital_cleaning_faqs.list";
import boldMarkdownToHtml from "@/utils/boldMarkdown.utils";
import { Box, Button, Grid, GridItem, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

const Faq: React.FC<{ question: FaqType, bg: string }> = ({ question, bg }) => {

    const [expand, setExpand] = useState(false);

    return (
        <Box border={"1px solid"} borderColor={"bg.inverted/10"} rounded={"xl"} pos={"relative"} bg={bg} w="full" mb={5}>
        
            <HStack asChild p={5} gap={2} alignItems={"center"}>
                <Button unstyled textAlign={"left"} w={"full"} cursor={"pointer"} onClick={() => { setExpand(current => !current) }}>
                     <Heading as={"h3"} w="full" fontSize={"lg"}>
                        {question.question}
                    </Heading>
                    <Text rotate={expand ? "180deg" : "0"} className="duration-200"><FaCaretDown /></Text>
                </Button>
            </HStack>

            {
                expand &&
                <VStack align={"start"} px={5} gap={2} pb={5} color={"bg.inverted/75"} lineHeight={1.65} fontSize={"15px"} opacity={0.85} w={"full"}>

                    {
                        question.answer.map((ele, i) => {

                            if(ele.type == "text"){
                                return <Text key={i} dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(ele.content) }}></Text>
                            } 
                            else if(ele.type == "point"){
                                return <HStack key={i} gap={2} align={"start"}>
                                    <Text scale={0.5} opacity={0.75} mt={1}><FaCircle /></Text>
                                    <Text dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(ele.content) }}></Text>
                                </HStack>
                            } 
                            else if(ele.type == "block"){
                                return <VStack gap={1} w={"full"} align={"start"} key={i}>
                                        <Heading as={"h6"} fontSize={"sm"}>{ele.title}</Heading>
                                        <Text key={i} dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(ele.content) }}></Text>
                                    </VStack>
                            }
                            else if(ele.type == "grid"){
                                return <Grid key={i}
                                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                                    w={"full"}
                                    gap={6}
                                    my={3}
                                >
                                    {
                                        ele.content.map((point, j) => {
                                            return <GridItem key={j}>

                                                <VStack gap={2} align={"start"} w={"full"}>
                                            
                                                    <Heading as={"h6"} fontSize={"sm"}>{point.title}</Heading>

                                                    {
                                                        point.points.map((p, k) => {
                                                            return <HStack key={k} gap={2} align={"start"}>
                                                                <Text scale={0.5} opacity={0.75} mt={1}><FaCircle /></Text>
                                                                <Text dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(p) }}></Text>
                                                            </HStack>
                                                        })
                                                    }

                                                </VStack>

                                            </GridItem>
                                        })
                                    }
                                </Grid>
                            }

                            return ""

                        })
                    }

                </VStack>
            }

        </Box>
    )

}

export default Faq;