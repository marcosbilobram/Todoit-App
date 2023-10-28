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

    try {
        const resp = await fetch(url, options)
        revalidatePath("/")
        return { ok: "Todo cadastrado com sucesso" }
    }
    catch (error) {
        throw new Error("Failed to insert todo")
    }

}

export async function deleteTodo(id) {
    const deleteURl = "http://localhost:8080/user/1/ToDos/".concat(id);

    console.log(deleteURl)

    const options = {
        method: "DELETE"
    }

    const response = await fetch(deleteURl, options)

    if (!response.ok) {
        throw new Error("Failed to delete todo")
    }

    revalidatePath("/")
}

export async function updateTodoDone(todoId) {
    const updateTodoUrl = "http://localhost:8080/user/1/ToDos/".concat(todoId).concat("/editDone")

    console.log(updateTodoUrl)

    const options = {
        method: "PUT"
    }

    try {
        const resp = await fetch(updateTodoUrl, options)
        revalidatePath("/")
        return { ok: "Todo cadastrado com sucesso" }
    }
    catch (error) {
        throw new Error("Failed to update todo" + error)
    }
}