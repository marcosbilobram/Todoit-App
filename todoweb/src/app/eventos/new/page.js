"use client"

import Navbar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import Button from "../Button";
import { create } from "@/actions/eventos";
import { useState } from "react";

export default function CreateEvent() {
    const [message, setMessage] = useState("");

    async function handleSubmit(formData) {
        const resp = await create(formData)
        if(resp.error){
            setMessage(resp.error)
            return 
        }
        setMessage("Evento cadastrado com sucesso")
    }

    return (
        <>
            <Navbar active={"eventos"}/>
            <main className="bg-slate-900 mt-10 p-8 max-w-lg m-auto">
                <h2 className="felx text-xl">Adicionar Evento</h2>

                <form action={handleSubmit}>
                    <TextInput name = "title" id="title" label="Título" type="text"/>
                    <TextInput name = "date" id="date" label="Data e hora" type="datetime-local"/>

                    <div className="flex justify-around">
                        <Button href ="/eventos" variant="secondary">Cancelar</Button>
                        <Button element="button">Salvar</Button>
                    </div>
                    <p>{message}</p>
                </form>
            </main>
        </>
    )
}