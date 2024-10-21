import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons"

export default function Sidebar() {
    return (
        <List color={"white"} fontSize="1.2em" spacing={4}>
            <ListItem>
                <NavLink to={"/"}>
                    <ListIcon as={CalendarIcon} />
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to={"/create"}>
                    New Task
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to={"/profile"}>
                    Profile
                </NavLink>
            </ListItem>
        </List>
    )
}