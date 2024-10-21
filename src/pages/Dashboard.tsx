import {
    Box,
    // Container,
    // Heading,
    Text,
    SimpleGrid
} from '@chakra-ui/react'

export default function Dashboard() {

    // const boxStyles = {
    //     p: "10px",
    //     bg: "purple.400",
    //     color: "white",
    //     m: "10px",
    //     textAlign: "center",
    //     filter: "blur(2px)",
    //     ':hover': {
    //         color: 'black',
    //         bg: 'blue.300'
    //     }
    // }

    return (
        // <Container as={"section"} maxWidth={"4xl"}>
        //     <Heading my={"30px"} p={"10px"}>Chakra UI Components</Heading>
        //     <Text ml={"30px"} mb={"10px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem repellendus sunt mollitia corporis eligendi.</Text>
        //     <Text ml={"30px"} color={"blue.400"} fontWeight={"bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem repellendus sunt mollitia corporis eligendi.</Text>
        //     <Box my={"30px"} p={"20px"} bg={"orange"}>
        //         <Text color={"white"}>This is a box component</Text>
        //     </Box>
        //     <Box sx={boxStyles}>
        //         Hello Nijja
        //     </Box>
        // </Container>

        <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth="170px">
            <Box bg="white" h="200px" border="1px solid">
                <Text color={{ base: 'pink.200', md: 'blue', lg: 'green' }}>Hello</Text>
            </Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
        </SimpleGrid>
    )
}
