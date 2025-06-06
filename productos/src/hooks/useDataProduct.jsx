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

  // Guardar nuevo producto
  const saveProductForm = async (dataForm) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("Error al registrar el producto");
        throw new Error("Error al registrar el producto");
      }

      toast.success("Producto registrado con éxito");
      navigate("/home");
    } catch (error) {
      console.error("Error al enviar el producto:", error);
    } finally {
      reset();
      getProducts();
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

      if (!response.ok) {
        toast.error("Error al actualizar el producto");
        throw new Error("Error al actualizar el producto");
      }

      toast.success("Producto actualizado con éxito");
      navigate("/home");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    } finally {
      reset();
      getProducts();
    }
  };

  // Decide si guardar nuevo o editar existente
  const handleProductAction = (dataForm) => {
    if (id) {
      editProduct(dataForm);
    } else {
      saveProductForm(dataForm);
    }
  };

  // Redirige a edición de producto
  const handleUpdateProduct = (id) => {
    navigate(`/products/${id}`);
  };

  // Cargar los datos del producto por ID para edición
  const loadProduct = async () => {
    if (id) {
      const product = await getProductById(id);
      if (product) {
        reset({
          nombre: product?.nombre || "",
          precio: product?.precio || "",
          categoria: product?.categoria || "",
          stock: product?.stock || "",
        });
      }
    }
  };

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
