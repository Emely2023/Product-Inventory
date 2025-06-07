import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProducts from "./useFetchProducts";

const API_URL = "https://retoolapi.dev/BuJvOm/productos";

const useDataProduct = (methods) => {
  const { getProductById, getProducts } = useFetchProducts();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  // Crear nuevo producto
  const saveProductForm = async (dataForm) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) throw new Error("Error al registrar el producto");

      toast.success("Producto registrado con éxito");
      navigate("/home");
      getProducts();
      reset();
    } catch (error) {
      console.error("Error al registrar el producto:", error);
      toast.error("Error al registrar el producto");
    }
  };

  // Editar producto existente
  const editProduct = async (dataForm) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) throw new Error("Error al actualizar el producto");

      toast.success("Producto actualizado con éxito");
      navigate("/home");
      getProducts();
      // No se hace reset aquí para conservar el estado tras la edición
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      toast.error("Error al actualizar el producto");
    }
  };

  // Decide si guardar o editar
  const handleProductAction = (dataForm) => {
    if (id) {
      editProduct(dataForm);
    } else {
      saveProductForm(dataForm);
    }
  };

  // Navega a la ruta de edición de producto
  const handleUpdateProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  // Carga los datos del producto a editar
  const loadProduct = async () => {
    if (id) {
      const product = await getProductById(id);
      if (product) {
        reset({
          nombre: product.nombre || "",
          precio: product.precio || "",
          categoria: product.categoria || "",
          stock: product.stock || "",
        });
      } else {
        toast.error("Producto no encontrado");
        navigate("/home");
      }
    }
  };

  // Carga producto si hay un ID en la URL
  useEffect(() => {
    loadProduct();
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleProductAction),
    errors,
    getProductById,
    handleUpdateProduct,
    loadProduct,
  };
};

export default useDataProduct;
