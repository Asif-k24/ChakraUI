import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
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

                <Button type="submit" mt="30px">Submit</Button>
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