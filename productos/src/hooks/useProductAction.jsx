import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_URL = "https://retoolapi.dev/BuJvOm/productos";

const useProductAction = (getProducts) => {
  const navigate = useNavigate();

  // Función para eliminar un producto por su id
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el producto");

      toast.success("Producto eliminado correctamente");
      console.log("Producto eliminado:", response);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      toast.error("Error al eliminar el producto");
    } finally {
      getProducts();
    }
  };

  // Redirige a la ruta de edición del producto
  const handleUpdateProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return {
    deleteProduct,
    handleUpdateProduct,
  };
};

export default useProductAction;
