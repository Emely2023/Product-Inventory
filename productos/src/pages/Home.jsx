import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFetchProducts from "../hooks/useFetchProducts";
import useProductActions from "../hooks/useProductAction";
import { Plus } from "lucide-react";

const HomeProducts = () => {
  const { products, getProducts } = useFetchProducts();
  const { deleteProduct, handleUpdateProduct } = useProductActions(getProducts);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-100 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <Titulo titulo="Información de Productos" />
            <p className="text-sm text-gray-600">
              Administra y visualiza tus productos registrados en el sistema.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md"
          >
            <Plus size={18} />
            Agregar Producto
          </Link>
        </div>

        {/* Cards para productos */}
        {products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-purple-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {product.nombre}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Precio: <span className="text-indigo-600 font-semibold">${product.precio}</span>
                  </p>
                  <p className="text-sm text-gray-600">Categoría: {product.categoria}</p>
                  <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                </div>

                <div className="flex justify-between items-center px-6 py-4 bg-gray-50 rounded-b-2xl">
                  <Button
                    text="Editar"
                    onClick={() => handleUpdateProduct(product.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white py-1.5 px-4 rounded-lg"
                  />
                  <ButtonDelete
                    text="Eliminar"
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-600 hover:bg-red-700 text-white py-1.5 px-4 rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12 text-sm">
            No hay productos registrados por el momento.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
