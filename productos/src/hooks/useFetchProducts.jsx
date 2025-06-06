import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {url} from "../utils/apiUrl.jsx"


const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  // Obtener todos los productos
  const getProducts = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      toast.error("Error al obtener productos");
    }
  };

  // Obtener producto por ID
  const getProductById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        throw new Error("Error al obtener el producto");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      toast.error("No se pudo cargar el producto");
      return null;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    getProductById,
    getProducts,
  };
};

export default useFetchProducts;
