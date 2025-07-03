import { useState, useEffect } from "react";
import Dashboard from "./routes/Dashboard";
import Form from "./routes/Form";
import NavBar from "./components/NavBar";
import Categorias from "./routes/Categorias";
import Movimientos from "./routes/Movimientos";
import { logout } from "./js/formularioLogin";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [ruta, setRuta] = useState(window.location.pathname);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      if (ruta === "/") {
        setRuta("/dashboard");
      }
    } else {
      setRuta("/");
    }
  }, []);

  const handleSetRuta = (nuevaRuta) => {
    if (nuevaRuta === "/") {
      logout();
      setIsAuthenticated(false);
    }
    setRuta(nuevaRuta);
  };

  const renderContent = () => {
    if (!isAuthenticated) {
      return <Form />;
    }
    switch (ruta) {
      case "/dashboard":
        return <Dashboard />;
      case "/categorias":
        return <Categorias />;
      case "/movimientos":
        return <Movimientos />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="w-screen min-h-screen bg-slate-100 flex flex-col items-center">
      {isAuthenticated && <NavBar ruta={ruta} setRutas={handleSetRuta} />}
      <main className="w-full max-w-4xl flex-grow flex justify-center items-center p-4">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;