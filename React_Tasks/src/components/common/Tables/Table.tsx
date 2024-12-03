interface TableProps<T> {
  columns: { key: keyof T; label: string }[];
  data: T[];
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <>
      {data.length === 0 ? (
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
                    className="px-4 py-3"
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
                      <p className="block text-sm text-slate-800">
                        {item[column.key] !== null &&
                        item[column.key] !== undefined
                          ? String(item[column.key])
                          : "N/A"}
                      </p>
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

export default Table;
