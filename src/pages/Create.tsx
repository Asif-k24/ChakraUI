import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {

    const toast = useToast()
    const showToast = () => {
        toast({
            title: 'Form submitted',
            description: 'Submitted successfully',
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'bottom-right'
        })
    }

    return (
        <Box maxW='400px'>
            <Form method="post" action="/create">
                <FormControl isRequired mb="40px">
                    <FormLabel>Task name:</FormLabel>
                    <Input type="text" name="title" />
                    <FormHelperText>Enter a descriptive task name</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>Task Description:</FormLabel>
                    <Textarea
                        placeholder="Enter a detailed description for the task..."
                        name="description"
                    />

                </FormControl>

                <FormControl display="flex" alignItems="center" mt="40px">
                    <Checkbox
                        name="isPriority"
                        size="lg"
                        colorScheme="purple"
                    />
                    <FormLabel mb="0" ml="10px">Make this a priority task.</FormLabel>
                </FormControl>

                <Button onClick={showToast} type="submit" mt="30px">Submit</Button>
            </Form>
        </Box>
    )
}

export const createAction = async ({ request }: any) => {
    const data = await request.formData()

    const task = {
        title: data.get('title'),
        description: data.get('description'),
        isPriority: data.get('isPriority') === ""
    }

    console.log(task);

    return redirect('/');
}