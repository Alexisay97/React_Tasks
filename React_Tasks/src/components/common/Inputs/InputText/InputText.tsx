import { useState } from 'react';
import classNames from 'classnames';

/**
 * Componente Input de texto.
 *
 * @param {Object} props - Propiedades de la entrada de texto.
 * @param {string} props.type - Tipo de entrada (por defecto, 'text').
 * @param {string} props.placeholder - Texto de marcador de posición.
 * @param {string} props.label - Etiqueta de la entrada de texto.
 * @param {string} props.name - Nombre de la entrada.
 * @param {string} props.id - ID de la entrada.
 * @param {boolean} props.disabled - Indica si la entrada está deshabilitada (por defecto, false).
 * @param {boolean} props.error - Indica si hay un error en la entrada.
 * @param {string} props.errorMessage - Mensaje de error a mostrar si `error` es true.
 * @param {string} props.value - Valor de la entrada.
 * @param {string} props.styleClasses - Clases CSS adicionales para la entrada.
 * @param {string} props.icon - Icono a mostrar junto a la entrada.
 * @param {string} props.classNameInput - Clases CSS para el elemento de entrada.
 * @param {function} props.onChange - Función para manejar el evento onChange de la entrada.
 * @param {function} props.onBlur - Función para manejar el evento onBlur de la entrada.
 * @param {string} props.mask - Máscara para el valor de entrada (opcional).
 * @param {boolean} props.isRequired - Indica si la entrada es obligatoria (por defecto, true).
 *
 * @returns {JSX.Element} Componente de entrada de texto.
 */

const InputText = ({
  type = 'text',
  placeholder,
  label,
  name,
  id,
  disabled = false,
  error = false,
  errorMessage,
  value = '',
  styleClasses,
  icon = '',
  classNameInput = 'w-full',
  onChange,
  onBlur,
  mask = '',
  isRequired = true,
  maxLength,
  onKeyDownAction,
}: InputTextProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classNames('flex flex-col w-full', styleClasses)}>
      {label && (
        <label
          htmlFor={name}
          className={classNames('text-14font font-normal mb-1', {
            'text-red': error,
            'text-black': isFocused || (value !== '' && !error),
            'text-gray10': value === '' && !isFocused && !error,
          })}
        >
          {label} {isRequired && '*'}
        </label>
      )}

      <div className='relative'>
        {icon && (
          <i
            className={classNames(
              'absolute top-1/2 transform -translate-y-1/2 left-3 text-16font text-gray10',
              icon,
            )}
          />
        )}
        {
          type === 'number' ? (
            <input
              type={type}
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
                  'text-black font-semibold cursor-not-allowed': disabled,
                  'pl-8': icon !== '',
                },
              )}
              onFocus={() => setIsFocused(true)}
              onBlur={onBlur}
              maxLength={maxLength}
              min={0}
              onKeyDown={onKeyDownAction}
            />
          ) : (
            <input
              type={type}
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
                  'border-black': value !== '' && !error,
                  'text-gray10 border-gray9': value === '' && !isFocused && !disabled,
                  'border-blue2': isFocused && !error,
                  'text-black font-semibold cursor-not-allowed': disabled,
                  'pl-8': icon !== '',
                },
              )}
              onFocus={() => setIsFocused(true)}
              onBlur={onBlur}
              maxLength={maxLength}
              onKeyDown={onKeyDownAction}
            />
          )
        }
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

export default InputText;
