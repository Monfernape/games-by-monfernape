import React from 'react'
import { ButtonGroup, Button, Flex} from "@chakra-ui/react"
import { Alphabet } from "../../constants"

export const AlphabetBoard = () => {
    return (
        <ButtonGroup spacing={6}>
            <Flex wrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
            {Alphabet.map(letter => (
                <Button variant={"solid"} colorScheme={"teal"} size={"lg"} margin={"10px"}>{letter}</Button>
            ))}
            </Flex>
        </ButtonGroup>
    )
}
