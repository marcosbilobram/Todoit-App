'use server'

import { revalidatePath } from "next/cache";

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