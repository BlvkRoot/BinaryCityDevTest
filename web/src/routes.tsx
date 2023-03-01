import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ListClient from './pages/Client/List';
import Main from './pages/Main';

export default function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/clients" element={<ListClient />} />
            </Routes>
        </BrowserRouter>
    )
}