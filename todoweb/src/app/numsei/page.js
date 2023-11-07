import Navbar from "@/components/NavBar"

export default function NumSei() {
  return (
    <>
      <Navbar active={"numsei"}/>

    <div className="flex justify-center items-center h-screen">
      <div className="w-auto h-80 bg-yellow-400 flex flex-col items-center">
        <img
          src="https://i.pinimg.com/736x/78/ec/cc/78eccca458603026e37935cf01d70328.jpg"
          alt="Pug fofinho"
          className="w-60 h-60 mb-2"
        />
          <p className="text-center text-black text-xl">
          Isso foi só para implementar os conhecimentos <br/>
          de app route porque eu tava sem ideia do que colocar aqui :P
          </p>
      </div>
    </div>
    </>
  )
}
