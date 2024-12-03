import React, { useState } from "react";
import { Checkbox } from "../Checkboxs";
import { Button } from "../Buttons/Button";
import { Task } from "../../../models/Tasks";

interface AccordionTaskProps {
  items: Task[];
  handleUpdate: (item: Task) => void;
  handleRemove: (item: string) => void;
}

const AccordionTaskList: React.FC<AccordionTaskProps> = ({
  items,
  handleUpdate,
  handleRemove,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Expande o contrae
  };

  return (
    <>
      {items.length > 0 ? (
        <div className="w-full border border-gray-200 divide-y divide-gray-200">
          {items.map((item, index) => (
            <div key={index}>
              {/* Botón del título con estilos condicionales */}
              <button
                key={index}
                type="button"
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center text-left px-4 py-3 font-medium ${
                  activeIndex === index
                    ? "bg-gray-800 text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-700"
                    : "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span
                  className={`capitalize-first-letter ${
                    item.completed
                      ? "text-green-600 dark:text-green-400"
                      : "text-inherit"
                  }`}
                >
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </span>
                <span
                 className={` ${
                  item.completed
                    ? "text-green-600 dark:text-green-400"
                    : "text-inherit"
                }`}
                >
                  {item.completed ? "Completada" : "Pendiente"}
                </span>
              </button>

              {/* Contenido del acordeón */}
              {activeIndex === index && (
                <div className="px-4 py-3 bg-gray-50">
                  {/* Descripción */}
                  <div className="text-gray-700 mb-3">{item.description}</div>

                  {/* Línea separadora */}
                  <hr className="my-3 border-gray-300" />

                  {/* Checkbox y botón alineados a la derecha */}
                  <div className="flex justify-end items-center gap-4">
                    <Checkbox
                      id="checkbox"
                      name="checkbox"
                      label="Completa?"
                      checked={item.completed}
                      onChange={() => handleUpdate(item)}
                      styleClasses="w-auto"
                    />
                    <Button
                      isSubmit={true}
                      variant="secondary"
                      endIcon={"fa-solid fa-trash"}
                      onClick={() => handleRemove(item.id ? item.id : "")}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div
          className="p-4 font-medium text-sm text-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800"
          role="alert"
        >
          <span className="font-medium">Info!</span> No hay tareas creadas.
        </div>
      )}
    </>
  );
};

export default AccordionTaskList;
