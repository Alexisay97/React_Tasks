import { useState } from 'react';
import classNames from 'classnames';

/**
 * Componente Input de Contraseña React.
 *
 * @param {Object} props - Propiedades de la entrada de contraseña.
 * @param {string} props.placeholder - Texto de marcador de posición.
 * @param {string} props.label - Etiqueta de la entrada de contraseña.
 * @param {string} props.name - Nombre de la entrada.
 * @param {string} props.id - ID de la entrada.
 * @param {boolean} props.disabled - Indica si la entrada está deshabilitada (por defecto, false).
 * @param {boolean} props.error - Indica si hay un error en la entrada.
 * @param {string} props.errorMessage - Mensaje de error a mostrar si `error` es true.
 * @param {string} props.value - Valor de la entrada de contraseña.
 * @param {string} props.styleClasses - Clases CSS adicionales para la entrada de contraseña.
 * @param {string} props.classNameInput - Clases CSS para el elemento de entrada.
 * @param {function} props.onChange - Función para manejar el evento onChange de la entrada de contraseña.
 * @param {function} props.onBlur - Función para manejar el evento onBlur de la entrada de contraseña.
 * @param {boolean} props.isRequired - Indica si la entrada de contraseña es obligatoria (por defecto, true).
 *
 * @returns {JSX.Element} Componente de entrada de contraseña.
 */

const InputPassword = ({
  placeholder,
  label,
  name,
  id,
  disabled = false,
  error = false,
  errorMessage,
  value,
  styleClasses,
  classNameInput = 'w-full',
  onChange,
  onBlur,
  isRequired = true,
}: InputPasswordProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classNames('flex flex-col', styleClasses)}>
      <label
        htmlFor={name}
        className={classNames('text-14font font-normal mb-1', {
          'text-red': error,
          'text-black': isFocused || (value !== '' && !error),
          'text-gray10': value === '' && !isFocused && !error,
          'text-gray11': disabled,
        })}
      >
        {label} {isRequired && '*'}
      </label>
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={classNames(
            'border px-4 py-2 rounded-md text-14font outline-none',
            classNameInput,
            {
              'border-red': error,
              'border-black text-black': value !== '' && !error,
              'text-gray10 border-gray9': value === '' && !isFocused && !disabled,
              'border-blue2': isFocused && !error,
              'text-gray11 cursor-not-allowed': disabled,
            },
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={onBlur}
        />
        <button
          type='button'
          className={classNames('absolute top-1/2 transform -translate-y-1/2 right-3 w-5', {
            'text-gray10': value === '' && !isFocused && !error,
            'text-black': value !== '' && !error,
            'text-gray11 cursor-not-allowed': disabled,
          })}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <i className='fa-regular fa-eye-slash' />
          ) : (
            <i className='fa-regular fa-eye' />
          )}
        </button>
      </div>
      {error && (
        <p className='text-red text-12font font-bold mt-2'>
          <i className='fa-solid fa-circle-exclamation mr-2' />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputPassword;
