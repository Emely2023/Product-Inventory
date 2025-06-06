import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";
import { Sparkles } from "lucide-react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 max-w-lg w-full text-center border border-purple-200">
        <div className="flex justify-center items-center mb-4 text-purple-600">
          <Sparkles size={48} className="animate-pulse" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">
          ¡Bienvenido a TecnoMarket!
        </h1>

        <SubTitulo titulo="Aplicación CRUD de Inventario" />

        <p className="mb-6 text-gray-600 text-sm sm:text-base">
          Administra fácilmente tu inventario y mejora el control de tus productos.
        </p>

        <Button type="button" onClick={handleAccept} text="Ingresar al Panel" />
      </div>
    </div>
  );
};

export default Welcome;
