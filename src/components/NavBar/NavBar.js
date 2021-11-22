import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavbarBrand, Collapse, NavItem } from 'reactstrap';
import { CartWidget } from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return (
        <>
            <Navbar
                color="dark"
                dark
                expand="md"
                light
            >
                <NavbarBrand>
                    <Link to="/">Logo</Link>
                </NavbarBrand>
                <Collapse navbar>
                    <Nav
                        className="container-fluid"
                        navbar
                    >
                        <NavItem>
                            <Link to="/products/remeras">Remeras</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/products/buzos">Buzos</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/products/zapatillas">Zapatillas</Link>
                        </NavItem>
                        <NavItem className="ms-auto cartWidget">
                            <Link to="/cart"><CartWidget /></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}
