import { Blocks } from "lucide-react";
import { useState, useEffect } from "react";
import apiClient from "../services/api";

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchCategorias = async () => {
        try {
            const response = await apiClient.get('/category');
            setCategorias(response.data);
        } catch (error) {
            console.error("Error al obtener las categorías:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombreCategoria.trim()) return;
        try {
            await apiClient.post('/category', { name: nombreCategoria });
            setNombreCategoria('');
            fetchCategorias();
        } catch (error) {
            console.error("Error al crear la categoría:", error);
        }
    };

    return (
        <section className="w-full h-full p-4">
            <form onSubmit={handleSubmit} className="w-full text-center flex flex-col items-center gap-3">
                <h1 className="text-2xl flex gap-3 items-center">Categorías <Blocks /></h1>
                <div className="flex flex-col">
                    <label className="font-bold text-slate-700">Nombre:</label>
                    <input
                        className="focus:outline-none border-2 border-slate-400 rounded px-2 py-1 w-64"
                        type="text"
                        placeholder="Gastos de casa..."
                        value={nombreCategoria}
                        onChange={(e) => setNombreCategoria(e.target.value)}
                        required
                    />
                </div>
                <div className="flex w-64 justify-end">
                    <button type="submit" className="bg-emerald-600 text-white px-4 py-1 rounded hover:bg-emerald-800">Agregar</button>
                </div>
            </form>
            <ul className="w-full md:w-7/10 mx-auto mt-5">
                {loading ? <p>Cargando...</p> : categorias.map((categoria) => (
                    <li key={categoria._id} className="my-2 shadow-lg ps-3 py-2 text-xl hover:scale-105 transition-transform duration-300 bg-white font-bold text-slate-700 rounded">
                        {categoria.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Categorias;