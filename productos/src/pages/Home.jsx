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
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl shadow-lg">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <Titulo titulo="Información de Productos" />
            <p className="text-sm text-gray-600">
              Lista de productos registrados.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-md transition"
          >
            <Plus size={18} />
            Agregar Producto
          </Link>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 border-b">Nombre</th>
                <th className="px-4 py-3 border-b">Precio</th>
                <th className="px-4 py-3 border-b">Categoría</th>
                <th className="px-4 py-3 border-b">Stock</th>
                <th className="px-4 py-3 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 border-b">{product.nombre}</td>
                  <td className="px-4 py-3 border-b">${product.precio}</td>
                  <td className="px-4 py-3 border-b">{product.categoria}</td>
                  <td className="px-4 py-3 border-b">{product.stock}</td>
                  <td className="px-4 py-3 border-b flex gap-2">
                    <Button
                      text="Editar"
                      onClick={() => handleUpdateProduct(product.id)}
                    />
                    <ButtonDelete
                      text="Eliminar"
                      onClick={() => deleteProduct(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default HomeProducts;
