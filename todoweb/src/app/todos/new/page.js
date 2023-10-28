"use client"

import Navbar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { redirect } from 'next/navigation'
import Button from "@/app/eventos/Button";
import { create } from "@/actions/toDos";

export default function CreateEvent() {
    const [message, setMessage] = useState("");

    async function handleSubmit(formData) {
        const resp = await create(formData)
        if(resp.error){
            setMessage(resp.error)
            return 
        }
        redirect("/")
    }

    return (
        <>
            <Navbar active={"eventos"}/>
            <main className="bg-slate-900 mt-10 p-8 max-w-lg m-auto">
                <h2 className="felx text-xl">Adicionar ToDo</h2>

                <form action={handleSubmit}>
                    <TextInput name = "name" id="name" label="Nome" type="text"/>
                    <TextInput name = "description" id="description" label="Descrição" type="text"/>

                    <div className="flex justify-around">
                        <Button href ="/" variant="secondary">Cancelar</Button>
                        <Button element="button">Salvar</Button>
                    </div>
                    <p>{message}</p>
                </form>
            </main>
        </>
    )
}