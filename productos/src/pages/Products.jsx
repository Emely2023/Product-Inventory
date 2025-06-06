import { Link, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import Button from "../components/Button";
import useDataProduct from "../hooks/useDataProduct";
import { useForm } from "react-hook-form";

const Products = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataProduct(methods);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        to="/home"
        className="inline-block text-center bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg mb-6 hover:from-blue-500 hover:to-blue-600 transition-all"
      >
        ← Volver al inicio
      </Link>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 shadow-xl rounded-2xl space-y-6 border border-gray-200"
      >
        <Titulo titulo="Formulario de Productos" />

        <p className="text-gray-600 text-sm">
          Ingresa los datos del producto a registrar o editar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputText
            type="text"
            name="nombre"
            label="Nombre del producto"
            placeholder="Ej. Audífonos inalámbricos"
            register={register}
            errors={errors}
          />
          <InputText
            type="text"
            name="precio"
            label="Precio"
            placeholder="Ej. 19.99"
            register={register}
            errors={errors}
          />
          <InputText
            type="text"
            name="categoria"
            label="Categoría"
            placeholder="Ej. Electrónica"
            register={register}
            errors={errors}
          />
          <InputText
            type="text"
            name="stock"
            label="Stock"
            placeholder="Ej. 50"
            register={register}
            errors={errors}
          />
        </div>

        <Button type="submit" text={id ? "Actualizar producto" : "Guardar producto"} />
      </form>
    </div>
  );
};

export default Products;
