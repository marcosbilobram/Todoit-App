'use server'

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

    fetch(url, options)
        .then((response) => {
            if (response.ok) {
                console.log("Foi registrado")
                return {ok : "Evento cadastrado com sucesso"}
            } else {
                console.log("Não foi registrado")
                return {error : "Falha ao cadastrar o evento"};
            }
        });
}