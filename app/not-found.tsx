import { Center, Image, Text, VStack } from "@chakra-ui/react"
import Link from "next/link";

const NotFound = () => {

    return (
        <Center w={"full"} minH={"calc(100vh - 100px)"} px={"5vw"}>

            <VStack>
                <Image src={"/assets/not-found.png"} alt="" w={"300px"} mb={5} />
                <Text fontSize={"5xl"}>Seite nicht gefunden</Text>
                <Text color={"bg.inverted/65"}>
                    Die gesuchte Seite existiert nicht. Zurück zu
                    <Link href={"/"} className="underline! ml-1! text-blue-500! font-bold!">Home</Link>
                </Text>
            </VStack>

        </Center>
    )

}

export default NotFound;