import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Box,
    // Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    HStack,
    Button,
    Divider
} from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'

export const tasksLoader = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    return res.json()
}

export default function Dashboard() {

    const tasks = useLoaderData() as any[]

    return (

        <SimpleGrid spacing={10} minChildWidth="250px">
            {
                tasks && tasks.map((task: any) => (
                    <Card key={task.id} borderTop="8px" borderColor={"purple.400"} bg={"white"}>
                        <CardHeader>
                            <Flex gap={5}>
                                <Box>
                                    <Text>AV</Text>
                                </Box>
                                <Box>
                                    <Heading as="h3" size="sm">{task.title}</Heading>
                                    <Text>by {task.author}</Text>
                                </Box>
                            </Flex>
                        </CardHeader>

                        <CardBody color='gray.500'>
                            <Text>{task.description}</Text>
                        </CardBody>

                        <Divider borderColor={"gray.200"} />

                        <CardFooter>
                            <HStack>
                                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                                <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
                            </HStack>
                        </CardFooter>
                    </Card>
                ))
            }
        </SimpleGrid>
    )
}
