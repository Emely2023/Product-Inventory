import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";
//import { Sparkles } from "lucide-react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center items-center mb-6 text-purple-600">
        </div>

        <h1 className="text-3xl font-extrabold text-center mb-3">
          ¡Bienvenido a TecnoMarket!
        </h1>

        <SubTitulo titulo="Aplicación CRUD de Inventario" />

        <p className="mb-6 text-lg text-center text-gray-300">
          Administra fácilmente tu inventario y mejora el control de tus productos.
        </p>

        <div className="mb-4 p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-center text-white">
            ¿Estás listo para gestionar tu inventario?
          </h2>
          <p className="text-white text-center mt-2">
            Ingresa al panel de administración para ver, actualizar o eliminar productos fácilmente.
          </p>
        </div>

        <Button
          type="button"
          onClick={handleAccept}
          text="Ingresar al Panel"
          className="w-full py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Welcome;
