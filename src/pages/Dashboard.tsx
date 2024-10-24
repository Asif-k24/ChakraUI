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
    Divider,
    Avatar,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    // Grid
} from '@chakra-ui/react'
// import { useEffect, useState } from 'react'z
import { useLoaderData } from 'react-router-dom'

export const tasksLoader = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    return res.json()
}

export default function Dashboard() {

    // const [tasks, setTasks] = useState<any[]>([]);

    // useEffect(() => {
    //     fetch('/data/data.json')
    //         .then((res: any) => {
    //             return res.json();
    //         })
    //         .then((data: any) => {
    //             // console.log(data)
    //             setTasks(data)
    //             setTasks(tasks)
    //         })
    // }, [])

    // <TabPanel>
    //                     <Heading as={'h2'} size={'md'} /* size={'lg'} */>Statistics</Heading>
    //                     <TabList fontSize={'small'}>
    //                         <Tab fontSize={''} _selected={{ bg: 'blue.300', color: 'white' }}>General Stats</Tab>
    //                         <Tab fontSize={''} _selected={{ bg: 'blue.300', color: 'white' }}>Age Distribution</Tab>
    //                         <Tab fontSize={''} _selected={{ bg: 'blue.300', color: 'white' }}>Service Period</Tab>
    //                         <Tab fontSize={''} _selected={{ bg: 'blue.300', color: 'white' }}>Geography</Tab>
    //                         <Tab fontSize={''} _selected={{ bg: 'blue.300', color: 'white' }}>Religion and Ethnicity</Tab>
    //                     </TabList>
    //                     <TabPanels>
    //                         <TabPanel>
    //                             <SimpleGrid spacing={10}>

    //                             </SimpleGrid>
    //                         </TabPanel>
    //                     </TabPanels>
    //                 </TabPanel>

    const tasks = useLoaderData() as any[]

    return (
        <>
            <Tabs>
                <TabList>
                    <Tab _selected={{ bg: 'blue.300', color: 'white' }}>Dashboard</Tab>
                    <Tab _selected={{ bg: 'blue.300', color: 'white' }}>Charts</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid spacing={10} minChildWidth="250px">
                            {
                                tasks && tasks.map((task: any) => (
                                    <Card key={task.id} borderTop="8px" borderColor={"purple.400"} bg={"white"}>
                                        <CardHeader>
                                            <Flex gap={5}>
                                                <Avatar src={task.img} />
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}