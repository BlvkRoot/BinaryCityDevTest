import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Upload from './pages/Upload';

export default function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/upload-file" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    )
}