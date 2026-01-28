import { Center, Spinner } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Center w={"100vw"} h={"100vh"} zIndex={99999999999999} background={"bg.inverted/60"} pos={"fixed"} top={0} left={0} color={"bg"}>
            <Spinner />
        </Center>
    )
}   

export default Loader;