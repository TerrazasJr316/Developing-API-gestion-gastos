const Movimientos = () => {

    return (
        <section className="w-full">
            <form className="bg-white shadow text-center px-auto flex flex-col items-center">
                <h1 className="text-3xl"> Movimientos </h1>


                <div className="flex flex-col w-fit items-start ">
                    <label className="text-slate-600">
                        Descripción:
                    </label>
                    <textarea rows={2} className="w-[300px] bg-stone-50 border border-sate-500 focus:outline-no focus border-emerald-400"></textarea>
                </div>

                
                <div className="flex flex-col w-fit items-start ">
                    <label className="text-slate-600">
                        Monto:
                    </label>
                    <input type="number" className="w-[300px] bg-stone-50 border border-sate-500 focus:outline-no focus border-emerald-400"/>
                </div>


                <div  className="flex flex-col w-fit items-start ">
                    <label className="text-slate-600">
                        Tipo:
                    </label>
                    <select className="w-[300px] bg-stone-50 border border-sate-500 focus:outline-none focus border-emerald-400">
                        <option value="ingreso">Ingreso</option>
                        <option value="egreso">Egreso</option>
                    </select>
                </div>


                <div  className="flex flex-col w-fit items-start ">
                    <label className="text-slate-600">
                        Categoria
                    </label>
                    <select className="w-[300px] bg-stone-50 border border-sate-500 focus:outline-no focus border-emerald-400">
                        <option value="1">Categoria1</option>
                        <option value="2">Categoria2</option>
                        <option value="3">Categoria3</option>
                        <option value="4">Categoria4</option>
                    </select>
                </div>


                <div className="flex justify-end w-fit">
                    <button className="b-emerald-400 text-white rounded px-2l py-4 hover:bg-emerald-600 my-3">Agregar</button>
                </div>
            </form>

            <form className="w-full flex justify-end">
                <div className="flex items-center mt-3 border-b me-3 gap-2">
                    <Search />
                    <input type="text" placeholder="Filtrar Resultados" className="focus:outline-none "/>
                </div>
            </form>
                <ul className=" flex flex-col w-full h-full p-5 items-center gap-2">
                    <Card type="ingreso" color="emerald" />
                    <Card type="egreso" color="red" />
                    <Card type="ingreso" color="emerald" />
                    <Card type="egreso" color="red" />
                    <Card type="egreso" color="red" />
                    <Card type="egreso" color="red" />
                </ul>
    </section>
    )
}

export default  Movimientos