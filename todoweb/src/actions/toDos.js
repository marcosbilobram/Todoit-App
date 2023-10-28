'use server'

import { revalidatePath } from "next/cache";

export async function create(formData) {
    const url = "http://localhost:8080/user/1/ToDos/add";

    const parsedData = Object.fromEntries(formData);

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

    revalidatePath("/")
    return {ok: "Todo cadastrado com sucesso"}

}

export async function deleteTodo(id) {
    const deleteURl = "http://localhost:8080/user/1/ToDos/".concat(id);

    console.log(deleteURl)

    const options = {
        method : "DELETE"
    }

    const response = await fetch(deleteURl, options)

    if(!response.ok) {
        throw new Error("Failed to delete todo")
    }

    revalidatePath("/")
}