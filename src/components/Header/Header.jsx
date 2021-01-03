import React from 'react';
import s from "./Header.module.css"
import {Navbar, Nav, Container, Button, Form, FormControl} from "react-bootstrap";
import logo from "./sound.png"
import {NavLink, Route} from "react-router-dom";

const Header = (props) => {

    return (
        <Navbar collapseOnSelect
                expand="md"
                bg="dark"
                variant="dark"
                className={s.header}>
            <Container>
                <Navbar.Brand href="/">

                    <img src={logo}

                         className="d-inline-block align-top"
                         width="30"
                         alt="Logo"/>
                    Soundphase

                </Navbar.Brand>
                <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={s.item}>

                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                        <NavLink to="/media" activeClassName={s.active}>Media</NavLink>
                        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                    </Nav>
                    <Form inline>

                        <FormControl type="text"
                                     placeholder="Search"
                                     className="mr-sm-2"/>
                        <Button variant="outline-info"> Search </Button>


                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;