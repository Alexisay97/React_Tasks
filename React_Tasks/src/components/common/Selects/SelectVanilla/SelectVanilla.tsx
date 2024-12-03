import React, { useState } from "react";
import useSelectOptions from "./hook";
import classNames from "classnames";

/**
 * Componente Select.
 *
 * @param {string} props.placeholder - Texto de marcador de posición.
 * @param {string} props.catalog - Etiqueta de la entrada de texto.
 * @param {string} props.value - Nombre de la entrada.
 * @param {string} props.styleClasses - Clases CSS para el elemento de entrada.
 * @param {function} props.onChange - Función para manejar el evento onChange de la entrada.
 * @param {boolean} props.isRequired - Indica si la entrada es obligatoria (por defecto, true).
 * @param {string} props.error - Nombre de la entrada.
 * @param {string} props.errorMessage - Clases CSS para el elemento de entrada.
 *
 * @returns {JSX.Element} Componente de entrada de texto.
 */

const SelectVanilla = ({
  id,
  name,
  label = null,
  options,
  //catalog = null,
  value,
  onChange,
  placeholder,
  styleClasses,
  classNameSelect,
  isRequired = false,
  disabled = false,
  //filter = null,
  error,
  errorMessage,
}: SelectVanillaProps): JSX.Element => {
  //const { optionsSelect, loading } = useSelectOptions(options, catalog, filter);
  const loading : boolean = false;
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const option = options.find((o) => o.value == value);

    if (option) {
      onChange(option.value, option.label);
    } else {
      onChange(0, "");
    }
  };

  return (
    <div className={classNames("flex flex-col w-full", styleClasses)}>
      {label && (
        <label
          htmlFor={name}
          className={classNames("text-14font font-normal mb-1", {
            "text-red": error,
            "text-black": isFocused || (value !== "" && !error) || disabled,
            "text-gray10": value === "" && !isFocused && !error,
          })}
        >
          {label} {isRequired && "*"}
        </label>
      )}
      <div className="relative">
        {loading ? (
          <p className="text-sm text-gray-500">Cargando...</p>
        ) : (
          <>
            <select
              id={id}
              name={name}
              value={value}
              onChange={handleChange}
              className={classNames(
                "w-full p-2 rounded border",
                { "border-gray-300": !disabled },
                "appearance-none pr-10",
                {
                  "border-black text-black font-semibold": disabled,
                },
                classNameSelect
              )}
              onFocus={() => setIsFocused(true)}
              disabled={disabled}
            >
              <option value="">{placeholder || "Seleccione una opción"}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </>
        )}
      </div>
      {error && (
        <p className="text-red text-12font font-bold mt-2">
          <i className="fa-solid fa-circle-exclamation mr-2" />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SelectVanilla;
