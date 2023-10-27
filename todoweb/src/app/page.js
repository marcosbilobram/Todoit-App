import Navbar from "@/components/NavBar"
import ToDo from "@/components/ToDo"

async function getTodos() {
  const url = "http://localhost:8080/user/1/ToDos"
  try {
    let response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    console.log("Funcionou")
    return response.json();
  } catch (error) {
    console.log("Error fetching todos:", error);
    return [];
  }
}

export default async function Home() {

  const toDOs = await getTodos();

  return (
    <>
      <Navbar />
      <main className="flex flex-wrap">

        {toDOs.map(todo => {
                return <ToDo todo={todo}/>
              })}
      </main>

    </>
  )
}
