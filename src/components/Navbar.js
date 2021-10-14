import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name="Star wars API"></Menu.Item>
                </Link>
                <Link to='/people'>
                    <Menu.Item name="People"></Menu.Item>
                </Link>
                <Link to='/planet'>
                    <Menu.Item name="Planets"></Menu.Item>
                </Link>
            </Container>
        </Menu>
    )
}
