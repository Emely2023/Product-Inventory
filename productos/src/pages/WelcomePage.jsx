import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          ¡Bienvenido a <span className="text-purple-600">TecnoMarket</span>!
        </h1>

        <SubTitulo titulo="Aplicación CRUD de Inventario" />

        <p className="text-gray-600 text-base sm:text-lg mt-3 mb-8">
          Administra tu inventario de productos de forma clara, rápida y eficiente.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl py-5 px-6 mb-8 shadow-inner">
          <h2 className="text-lg font-semibold text-purple-700">
            ¿Listo para comenzar?
          </h2>
          <p className="text-sm text-purple-500 mt-1">
            Accede al panel para crear, editar o eliminar productos con facilidad.
          </p>
        </div>

        <Button
          type="button"
          onClick={handleAccept}
          text="Ingresar al Panel"
          className="w-full py-3 text-white bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all duration-300 rounded-2xl font-semibold shadow-md"
        />
      </div>
    </div>
  );
};

export default Welcome;
