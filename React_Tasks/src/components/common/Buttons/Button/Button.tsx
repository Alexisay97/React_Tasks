import { Link } from 'react-router-dom';
import classNames from 'classnames';

/**
 * Componente de Botón reutilizable.
 *
 * @param {Object} props - Propiedades del botón.
 * @param {ReactNode} props.children - Contenido del botón.
 * @param {string} props.styleClasses - Clases CSS adicionales para el botón.
 * @param {string} props.variant - Variante del botón ('primary', 'secondary', 'danger').
 * @param {boolean} props.isSubmit - Indica si el botón actúa como un botón de envío en un formulario.
 * @param {function} props.onClick - Función que se ejecuta al hacer clic en el botón.
 * @param {boolean} props.disabled - Indica si el botón está desactivado.
 * @param {boolean} props.isLoading - Indica si el botón muestra un indicador de carga.
 * @param {string} props.startIcon - Icono que se muestra antes del texto del botón.
 * @param {string} props.endIcon - Icono que se muestra después del texto del botón.
 * @param {string} props.path - URL de destino si el botón actúa como un enlace (Link).

 * @returns {JSX.Element} Componente de botón.
 */

const Button = ({
  children = null,
  styleClasses = '',
  variant = 'primary',
  isSubmit = false,
  onClick,
  disabled = false,
  isLoading = false,
  startIcon,
  endIcon,
  path,
}: ButtonProps): JSX.Element => {
  return path ? (
    <Link
      to={path}
      className={classNames(
        'focus:ring-4 focus:outline-none font-medium rounded-md text-md px-5 py-2 inline-flex items-center me-2',
        styleClasses,
        {
          'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300': variant === 'primary',
          'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300': variant === 'secondary',
          'text-white bg-red-500 hover:bg-red-600 focus:ring-red-400': variant === 'danger',
          'cursor-wait pointer-events-none': isLoading,
          'opacity-50 cursor-not-allowed pointer-events-none': disabled,
        },
      )}
    >
      {isLoading ? (
        <i className='fa-solid fa-spinner fa-spin text-20font' />
      ) : (
        <>
          {startIcon && <i className={classNames(`${startIcon} mr-0`, { 'mr-2': children })} />}
          {children}
          {endIcon && <i className={`${endIcon} ml-2`} />}
        </>
      )}
    </Link>
  ) : (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={classNames(
        'focus:ring-4 focus:outline-none font-medium rounded-md text-md px-5 py-2 inline-flex items-center me-2 w-auto whitespace-nowrap',
        styleClasses,
        {
          'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300': variant === 'primary',
          'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300': variant === 'secondary',
          'text-white bg-red-500 hover:bg-red-600 focus:ring-red-400': variant === 'danger',
          'cursor-wait pointer-events-none': isLoading,
          'opacity-50 cursor-not-allowed pointer-events-none': disabled || isLoading,
        },
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <i className='fa-solid fa-spinner fa-spin text-20font' />
      ) : (
        <>
          {startIcon && <i className={classNames(`${startIcon} mr-0`, { 'mr-2': children })} />}
          {children}
          {endIcon && <i className={`${endIcon} ml-2`} />}
        </>
      )}
    </button>
  );
};

export default Button;
