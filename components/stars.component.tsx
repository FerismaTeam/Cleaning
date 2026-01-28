import { HStack, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";

const Stars: React.FC<{ count?: number, color?: string, size?: string }> = ({ count = 5, color, size }) => {

    return (
        <HStack gap={1}>
            {
                Array.from({ length: (count && count <= 5 && count > 0) ? count : 5 }).map((_,i) => {
                    return <Text fontSize={size ? size : "lg"} color={ color ? color : "yellow.400" } key={i}>
                        <FaStar />
                    </Text>
                })
            }
        </HStack>
    )

}

export default Stars;