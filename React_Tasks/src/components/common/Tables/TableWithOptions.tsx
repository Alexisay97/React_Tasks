import classNames from "classnames";

interface TableProps<T> {
  columns: { key: keyof T; label: string }[];
  data: T[] | null;
  onView: (item: T) => void;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  actions?: { view?: boolean; edit?: boolean; delete?: boolean };
}

const TableWithOptions = <T,>({
  columns,
  data,
  onView,
  onEdit,
  onDelete,
  actions = { view: false, edit: false, delete: false },
}: TableProps<T>) => {
  return (
    <>
      {data === null || data.length === 0 ? (
        <div
          className="p-4 font-medium text-sm text-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800"
          role="alert"
        >
          <span className="font-medium">Info!</span> No se encontraron datos.
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left table-auto min-w-max">
            <thead className="text-xs text-gray-400 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key as string}
                    className={classNames("px-4 py-3 ", column.label === 'Opciones' ? "text-center" : "")}
                    scope="col"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 bg-gray-200">
                  {columns.map((column) => (
                    <td
                      key={column.key as string}
                      className="p-4 border-b border-slate-200"
                    >
                      {column.key === "options" ? (
                        <div className="flex justify-center items-center gap-2">
                          {actions.view && onView && (
                            <button
                              type="button"
                              onClick={() => onView(item)}
                              className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
                            >
                              <i className="fa-solid fa-eye"></i>
                              <span className="sr-only">Ver</span>
                            </button>
                          )}
                          {actions.edit && onEdit && (
                            <button
                              type="button"
                              onClick={() => onEdit(item)}
                              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                            >
                              <i className="fa-solid fa-pencil"></i>
                              <span className="sr-only">Editar</span>
                            </button>
                          )}
                          {actions.delete && onDelete && (
                            <button
                              type="button"
                              onClick={() => onDelete(item)}
                              className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
                            >
                              <i className="fa-solid fa-trash"></i>
                              <span className="sr-only">Eliminar</span>
                            </button>
                          )}
                        </div>
                      ) : (
                        <p className="block text-sm text-slate-800">
                          {item[column.key] !== null &&
                          item[column.key] !== undefined
                            ? String(item[column.key])
                            : "N/A"}
                        </p>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TableWithOptions;
