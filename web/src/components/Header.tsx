import React from 'react'
import { Link } from 'react-router-dom'
import { Head, Nav } from '../styles'
export default function Header() {
    return (
        <Head>
            <h1>Welcome to BCity ClientPortal</h1>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/upload-file">Upload ficheiro</Link>
            </Nav>
        </Head>
    )
}