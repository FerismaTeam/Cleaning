import { reviewType, storeLink } from "@/data/home";
import { Box, Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import Stars from "./stars.component";
import { useState } from "react";

const ReviewCard: React.FC<{review: reviewType}> = ({ review }) => {

    // const [expanded, setExpanded] = useState(false);

    return (
        <Box p={{ base: 4, md: 6 }} rounded={"lg"} border={"1px solid"} borderColor={"bg.inverted/5"} shadow={"xs"}
        >
            <HStack align={"start"} gap={4}>
                <Center color={"white"} minW={12} aspectRatio={"square"} rounded={"full"} bg={"blue.600"}>
                    <Text fontSize={"sm"} letterSpacing={"1px"} textTransform={"uppercase"}>{review.by.split(" ")[0][0]+review.by.split(" ")[1][0]}</Text>
                </Center>
                <VStack pt={1} w={"full"} align={"start"}>
                    <Text fontWeight={"bolder"}>{review.by}</Text>
                    <Box mt={-1.5}><Stars count={review.rating} size="sm" /></Box>
                </VStack>
            </HStack>
            <Text mt={4} w={"full"} fontSize={"sm"}>
                {
                    review.review.substring(0, 150)
                }
                {
                    (review.review.length > 150) ?
                    <Button unstyled color={"blue.400"} fontWeight={"medium"} textDecor={"underline"} cursor={"pointer"} onClick={() => { window.open(storeLink) }}> ... More</Button>
                    : ""
                }
            </Text>
        </Box>
    )

}

export default ReviewCard;