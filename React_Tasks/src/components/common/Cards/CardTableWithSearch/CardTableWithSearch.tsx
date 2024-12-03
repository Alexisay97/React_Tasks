import React, { useEffect, useState } from "react";
import Card from "../CardContainer/Card";
import Table from "../../Tables/Table";
import { InputText } from "../../Inputs/InputText";
import Pagination from "../../Utils/Pagination";

interface CardTableWithSearchProps {
  title: string;
  tableTitle?: string;
  searhPlaceholder?: string;
  columns: any;
  rows: any;
  enablePaginate?: boolean;
  totalPages?: number;
  currentPage?: number;
  handlePageChange?: (newPage: number) => void;
  onSearchTermChange: (e: string) => void;
}

const CardTableWithSearch: React.FC<CardTableWithSearchProps> = ({
  title,
  tableTitle = "",
  searhPlaceholder = "",
  columns,
  rows,
  onSearchTermChange,
  enablePaginate = false,
  totalPages = 1,
  currentPage = 1,
  handlePageChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Timeout para actualizar el valor de búsqueda retardado después de un tiempo
    const timer = setTimeout(() => {
      onSearchTermChange(searchTerm); // Se actualiza después de 800 ms sin cambios
    }, 800);

    return () => clearTimeout(timer); // Limpiar timeout en cada cambio para evitar múltiples disparos
  }, [searchTerm]);

  return (
    <Card title={title}>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-blue text-[16px]">{tableTitle}</h2>
        <div className="flex px-2 py-3 gap-4">
          <InputText
            name="search"
            placeholder={searhPlaceholder}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            styleClasses="w-full lg:min-w-[250px]"
            icon="fa-solid fa-magnifying-glass"
            isRequired={false}
          />
        </div>
      </div>
      <hr className="my-3 text-gray9" />
      <Table columns={columns} data={rows} />
      {enablePaginate ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange ? handlePageChange : () => {newPage: 0}}
        />
      ) : null}
    </Card>
  );
};

export default CardTableWithSearch;
