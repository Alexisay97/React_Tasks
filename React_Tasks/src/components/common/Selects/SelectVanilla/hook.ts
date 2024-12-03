import { useEffect, useState } from "react";

const useSelectOptions = (
  options: any | null,
  catalog: string | null,
  filter: string | null
) => {
  const [optionsSelect, setOptionsSelect] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!options) {
      console.error("No se encontraron datos para el selector");
      setOptionsSelect([]);
    } else if (options) {
      setOptionsSelect(options);
    }
  }, [options, catalog, filter]);

  return { optionsSelect, loading };
};

export default useSelectOptions;
