import { HStack, Text } from "@chakra-ui/react";
import { FaCheck, FaCircle } from "react-icons/fa";
import boldMarkdownToHtml from "./boldMarkdown.utils";
import Link from "next/link";

const renderFormattedText = (input: string) => {
    if (!input) return null;

    // [check] || [point] case
    if (input.startsWith("[check] ") || input.startsWith("[point] ")) {
        const isCheck = input.startsWith("[check] ");
        const text =  isCheck ? input.replace("[check] ", "") : input.replace("[point] ", "");
        return (
            <HStack gap={2} align={"start"}>
                <Text textWrap={"wrap"} color={isCheck ? "green.500" : "bg.inverted/50"} fontSize={"2xs"} scale={isCheck ? 1 : 0.5} mt={2}>{ isCheck ? <FaCheck /> : <FaCircle /> }</Text>
                <Text dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(text) }}></Text>
            </HStack>
        );
    }

    // [link](url) case
    const linkMatch = input.match(/^\[link\]\((.*?)\)\s+(.*)/);
    if (linkMatch) {
        const [, url, text] = linkMatch;
        return (
            <Link href={url} className="underline! font-bold! text-blue-600! text-wrap" target="_blank" rel="noopener noreferrer">
                {text}
            </Link>
        );
    }

    // Default: just render bold formatting
    return <Text textWrap={"wrap"} dangerouslySetInnerHTML={{ __html: boldMarkdownToHtml(input) }}></Text>;
};

export default renderFormattedText;
