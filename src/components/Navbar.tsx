import { UnlockIcon } from "@chakra-ui/icons";
import {
    // Box,
    Avatar,
    AvatarBadge,
    Button,
    Flex,
    Heading,
    HStack,
    Spacer,
    Text,
    useToast,
} from "@chakra-ui/react";

export default function Navbar() {

    const toast = useToast()
    const showToast = () => {
        toast({
            title: 'Logged out',
            description: 'Successfully logged out',
            duration: 5000,
            isClosable: true,
            status: "success",
            position: 'bottom-right',
            icon: <UnlockIcon />
        })
    }

    return (

        <Flex as={"nav"} p={"10px"} mb={"40px"} alignItems={"center"} gap={"10px"}>
            <Heading as="h1">Dojo Tasks</Heading>
            <Spacer />

            <HStack spacing={"20px"}>
                <Avatar name="Mario" src="/img/mario.png">
                    <AvatarBadge boxSize="1.3em" bg='teal.300'>
                        <Text fontSize={'xs'} color='white'>3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>mario@netninja.dev</Text>
                <Button onClick={showToast} colorScheme="purple" size={"md"}>Logout</Button>
            </HStack>
        </Flex>
    )
}