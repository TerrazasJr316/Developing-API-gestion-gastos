import { Blocks } from "lucide-react"

const Categorias = () => {
    const categorias = [
        {
            name: "categoria1"
        },
        {
            name: "categoria2"
        },
        {
            name: "categoria3"
        },
        {
            name: "categoria4"
        },
    ]

    return (
        <section className="w-full h-full p-4">
            <form className="w-full text-center flex flex-col items-center">
                <h1 className="text-2xl flex gap-3 items-center" >Categorias <Blocks /></h1>
                <div className="flex flex-col">
                    <label className="font-bold text-slate-700">Nombre:</label>
                    <input className="focus:outline-none border border-2 border-slate-400 roundeed px-2" type="text" placeholder="Gastos de casa..." required/>
                </div>
                <div className="flex w-4/11 justify-end ">
                    <button className="bg-emerald-600 text-white px-4 py-1 rounded hover:bg-emerald-800">Agregar</button>
                </div>
            </form>
            <ul className="w-7/10 mx-auto mt-3">
                {
                    categorias.map((categoria, posicion) => {
                        return (
                            <li key={posicion} className="my-2 shadow-lg ps-3 text-2xl hover:scale-x-100 transaction-500 duration-500 bg-white font-bold text-slate-700 rounded">
                                {categoria.name}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Categorias