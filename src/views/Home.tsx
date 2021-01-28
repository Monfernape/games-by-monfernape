import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@chakra-ui/react"
import { links } from "../constants"

export const Home = () => (
    <List>
        {links.map((link, index) => (
            <ListItem key={index}>
                <Link to={link.path}>{link.label}</Link>
            </ListItem>
        ))}
    </List>
)
