import Navbar from "@/components/NavBar"
import ToDo from "@/components/ToDo"
import Button from "./eventos/Button";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

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

      <div className="flex justify-end items-center px-6 py-6">
        <Button icon={<CalendarDaysIcon className="h-6 w-6" />}
          className ="px-6" href="/todos/new">Adicionar ToDo</Button>
      </div>

      <main className="flex flex-wrap">
        {toDOs.map(todo => {
          return <ToDo todo={todo} />
        })}
      </main>

    </>
  )
}
