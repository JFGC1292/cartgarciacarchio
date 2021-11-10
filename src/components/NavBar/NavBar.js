import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavbarBrand, Collapse, NavItem, NavLink } from 'reactstrap';
import { CartWidget } from '../CartWidget/CartWidget.js';

export const NavBar = () => {
    return (
        <>
            <Navbar
                color="dark"
                dark
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    Logo
                </NavbarBrand>
                <Collapse navbar>
                    <Nav
                        className="container-fluid"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="">
                                Productos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                Preguntas frecuentes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                ¿Quiénes somos?
                            </NavLink>
                        </NavItem>
                        <NavItem className="ms-auto">
                            <NavLink href="">
                                <CartWidget />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}
