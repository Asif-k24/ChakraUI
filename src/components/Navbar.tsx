import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Spacer,
    Text,
} from "@chakra-ui/react";

export default function Navbar() {
    return (

        <Flex as={"nav"} p={"10px"} mb={"40px"} alignItems={"center"} gap={"10px"}>
            <Heading as="h1">Dojo Tasks</Heading>
            <Spacer />

            <HStack spacing={"20px"}>
                <Box bg={"gray.200"} p={"10px"}>M</Box>
                <Text>mario@netninja.dev</Text>
                <Button colorScheme="purple" size={"md"}>Logout</Button>
            </HStack>
        </Flex>
    )
}