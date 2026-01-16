import { Box } from "@chakra-ui/react";

const SectionEndDesign = () => {
    return (
        <>
            <Box as={"span"} pos={"absolute"} transform={"skewY(5deg)"} w={"200%"} h={"200px"} bg={"blue.800"} pointerEvents={"none"} zIndex={0} bottom={"-120px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(-5deg)"} w={"200%"} h={"200px"} bg={"blue.700"} pointerEvents={"none"} zIndex={0} bottom={"-120px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(5deg)"} w={"200%"} h={"200px"} bg={"blue.600"} pointerEvents={"none"} zIndex={0} bottom={"-140px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(-5deg)"} w={"200%"} h={"200px"} bg={"blue.500"} pointerEvents={"none"} zIndex={0} bottom={"-140px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(5deg)"} w={"200%"} h={"200px"} bg={"blue.400"} pointerEvents={"none"} zIndex={0} bottom={"-160px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(-5deg)"} w={"200%"} h={"200px"} bg={"blue.300"} pointerEvents={"none"} zIndex={0} bottom={"-160px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(5deg)"} w={"200%"} h={"200px"} bg={"blue.200"} pointerEvents={"none"} zIndex={0} bottom={"-180px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(-5deg)"} w={"200%"} h={"200px"} bg={"blue.100"} pointerEvents={"none"} zIndex={0} bottom={"-180px"} left={"-50%"}></Box>
        
            <Box as={"span"} pos={"absolute"} transform={"skewY(5deg)"} w={"200%"} h={"200px"} bg={"bg"} pointerEvents={"none"} zIndex={0} bottom={"-200px"} left={"-50%"}></Box>

            <Box as={"span"} pos={"absolute"} transform={"skewY(-5deg)"} w={"200%"} h={"200px"} bg={"bg"} pointerEvents={"none"} zIndex={0} bottom={"-200px"} left={"-50%"}></Box>
        </>
    )
}

export default SectionEndDesign;