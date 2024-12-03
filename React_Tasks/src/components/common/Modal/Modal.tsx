const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative">
        {/* Título del modal */}
        <div className="dark:bg-gray-800 dark:border-gray-700 text-white shadow-gray-900/20 rounded-t-lg p-6">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        {/* Línea separadora */}
        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Contenido dinámico */}
        <div className="p-6">{children}</div>

        {/* Botón de cerrar */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
