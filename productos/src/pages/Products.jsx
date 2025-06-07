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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-8 sm:p-12 border border-blue-200">
        <Link
          to="/home"
          className="inline-block text-sm text-blue-600 hover:text-blue-800 mb-6 font-semibold"
        >
          ← Volver al inicio
        </Link>

        <Titulo titulo="Formulario de Productos" />

        <p className="text-gray-600 text-sm mb-6">
          Completa los datos para {id ? "editar" : "registrar"} un producto en TecnoMarket.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <InputText
            type="text"
            name="nombre"
            label="Nombre del producto"
            placeholder="Ej. Audífonos inalámbricos"
            register={register}
            errors={errors}
          />
          <InputText
            type="number"
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
            type="number"
            name="stock"
            label="Stock disponible"
            placeholder="Ej. 50"
            register={register}
            errors={errors}
          />

          <div className="sm:col-span-2 flex justify-end">
            <Button
              type="submit"
              text={id ? "Actualizar producto" : "Guardar producto"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
