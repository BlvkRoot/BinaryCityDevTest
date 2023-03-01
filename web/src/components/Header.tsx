import React from 'react'
import { Link } from 'react-router-dom'
import { Head, Nav } from '../styles'
export default function Header() {
    return (
        <Head>
            <h1>BinaryCity ClientPortal</h1>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/clients">Clients</Link>
                <Link to="/contacts">Contacts</Link>
            </Nav>
        </Head>
    )
}