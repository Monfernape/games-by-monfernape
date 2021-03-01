import React from 'react'
import { Flex, Button } from "@chakra-ui/react"

export const AnswerBox = () => {
    const word = "APPLE"
    return (
        <Flex alignItems={"center"} justifyContent={"center"}>
            {word.split("").map(letter => (
                <Button variant={"outline"} colorScheme={"teal"} size={"lg"} margin={"10px"}>{letter}</Button>
            ))}
        </Flex>
    )
}
