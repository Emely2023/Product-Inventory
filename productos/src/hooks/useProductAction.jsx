import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_URL = "https://retoolapi.dev/BuJvOm/productos";

const useProductAction = (getProducts) => {
  const navigate = useNavigate();

  // Eliminar producto por ID
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar");

      toast.success("Producto eliminado correctamente");
      console.log("Producto eliminado:", response);
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      toast.error("Error al eliminar el producto");
    } finally {
      getProducts(); // Actualiza la lista después de eliminar
    }
  };

  // Redirigir a la pantalla de edición con el ID
  const handleUpdateProduct = (id) => {
    navigate(`/editar-producto/${id}`);
  };

  return {
    deleteProduct,
    handleUpdateProduct,
  };
};

export default useProductAction;
