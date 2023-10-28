'use server'

import { revalidatePath } from "next/cache";

export async function create(formData) {
    const url = "http://localhost:8080/user/1/Events/add";

    const parsedData = Object.fromEntries(formData);

    const dateValue = formData.get("date");

    const dateObject = new Date(dateValue);

    const formattedDate = `${String(dateObject.getDate()).padStart(2, "0")}/${
        String(dateObject.getMonth() + 1).padStart(2, "0")
    }/${dateObject.getFullYear()} ${String(dateObject.getHours()).padStart(2, "0")}:${String(
        dateObject.getMinutes()
    ).padStart(2, "0")}`;

    parsedData.date = formattedDate;

    const options = {
        method: "POST",
        body: JSON.stringify(parsedData),
        headers: {
            "Content-Type": "application/json",
        },
    };

    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const mensagens = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {error: "Erro ao cadastrar" + mensagens}
    }

    revalidatePath("/eventos")
    return {ok: "Evento cadastrado"}
}

export async function getAll() {
    const getAllUrl = "http://localhost:8080/user/1/Events/"

    const options = {
        method: "GET"
    }

    const response = await fetch(getAll, options)

    if(!response.ok) {
        throw new Error("Failed to delete event")
    }

    revalidatePath("/eventos")

}

export async function destroy(id) {
    const deleteUrl = "http://localhost:8080/user/1/Events/".concat(id)

    console.log(deleteUrl)

    const options = {
        method: "DELETE"
    }

    const response = await fetch(deleteUrl, options)

    if(!response.ok) {
        throw new Error("Failed to delete event")
    }

    revalidatePath("/eventos")
}