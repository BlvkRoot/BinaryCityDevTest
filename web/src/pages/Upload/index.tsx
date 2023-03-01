import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Button, Form } from "../../styles";

export default function Upload() {
    const [file, setFile] = useState<File>();
    const navigate = useNavigate();

    const handleFileUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('upload-file', file);
            try {
                await api.post('/upload-transaction', formData);
                navigate('/');
            } catch (e) {
                console.log('error: uploading file: ', e);
            }
        }
    }

    const handleSelectFile = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (target.files) {
            setFile(target.files[0]);
        }

    }
    return (
        <Form onSubmit={handleFileUpload}>
            <input
                type="file"
                accept=".txt"
                onChange={handleSelectFile}
            />

            <Button data-testid='upload-button'>
                Enviar
            </Button>
        </Form>
    )
}