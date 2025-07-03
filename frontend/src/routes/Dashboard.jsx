import { useState, useEffect } from "react";
import Card from "../components/Card";
import apiClient from "../services/api";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await apiClient.get('/transaction/recent');
        setTransactions(response.data);
      } catch (error) {
        console.error("Error al obtener las transacciones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mt-1 mb-4 text-center">Últimos 6 movimientos</h1>
      
      {loading ? (
        <p className="text-center">Cargando movimientos...</p>
      ) : (
        <ul className="flex flex-col w-full items-center gap-3">
          {transactions.length > 0 ? (
            transactions.map(tx => <Card key={tx._id} transaction={tx} />)
          ) : (
            <p className="text-slate-500">No se encontraron movimientos recientes.</p>
          )}
        </ul>
      )}
      {/* Esto es necesario para que TailwindCSS no purgue estas clases dinámicas */}
      <p className="hidden text-emerald-300 text-red-300"></p>
    </div>
  );
}

export default Dashboard;