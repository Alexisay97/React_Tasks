import AccordionList from "../../components/common/Accordion/AccordionTaskList";
import { Button } from "../../components/common/Buttons/Button";
import Card from "../../components/common/Cards/CardContainer/Card";
import { InputText } from "../../components/common/Inputs/InputText";
import { Modal } from "../../components/common/Modal";
import useTasks from "./hook";
import SelectVanilla from "../../components/common/Selects/SelectVanilla/SelectVanilla";

// Declaracion de la lista para el select de estados //
const Options = [
    { value: "1", label: "Todas las tareas" },
    { value: "2", label: "Tareas completadas" },
    { value: "3", label: "Tareas pendientes" },
  ];

const ListTasks: React.FC = () => {
  const {
    task,
    filteredTasks,
    taskState,
    errors,
    isModalOpen,
    setIsModalOpen,
    setTaskState,
    handleAddTask,
    handleInputsChange,
    handleUpdateTask,
    handleRemoveTask,
    searchTerm,
    setSearchTerm
  } = useTasks();
  

  return (
    <>
      <Card title="Listado de tareas">
        <div>
          {/* Botón para abrir el modal */}
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-blue text-[16px]">
              Listado de tareas
            </h2>
            <div className="flex px-2 py-3 gap-5">
              <Button
                variant="secondary"
                endIcon="fa-solid fa-circle-plus"
                onClick={() => setIsModalOpen(true)}
              >
                Agregar tarea
              </Button>
              <InputText
                name="search"
                placeholder="Buscar tareas"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                styleClasses="w-full lg:w-1/3 lg:pr-3"
                icon="fa-solid fa-magnifying-glass"
                isRequired={false}
              />
              <SelectVanilla
                id="stateTask"
                name="stateTask"
                label=""
                placeholder="Filtro por estado"
                options={Options}
                value={taskState ? taskState.toString() : "0"}
                onChange={(e) => {
                  setTaskState(e)}
                }
                isRequired={false}
                styleClasses="w-full lg:w-1/3 lg:pr-5"
              />
            </div>
          </div>
          <hr className="my-3 text-gray9" />
          <AccordionList
            items={filteredTasks}
            handleUpdate={handleUpdateTask}
            handleRemove={handleRemoveTask}
          />
          {/* Modal reutilizable */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Crear nueva tarea"
          >
            {/* Contenido dinámico pasado como children */}
            <div>
              <InputText
                id="title"
                name={"title"}
                label="Titulo tarea"
                placeholder={"Ingrese un titulo"}
                type="text"
                value={task.title}
                onChange={(e) => handleInputsChange({ title: e.target.value })}
                isRequired={true}
                styleClasses="w-full mb-6"
                error={errors.title ?? errors.title}
                errorMessage={errors.title ?? errors.title}
              />
              <InputText
                id="descripcion"
                name={"descripcion"}
                label="Descripcion"
                placeholder={"Ingrese una descripcion"}
                type="text"
                value={task.description}
                onChange={(e) =>
                  handleInputsChange({ description: e.target.value })
                }
                isRequired={true}
                styleClasses="w-full mb-6"
                error={errors.description ?? errors.description}
                errorMessage={errors.description ?? errors.description}
              />
              <Button
                isSubmit={false}
                variant="secondary"
                endIcon={"fa-solid fa-plus"}
                onClick={() => {handleAddTask(task);}}
              >
                Agregar
              </Button>
            </div>
          </Modal>
        </div>
      </Card>
    </>
  );
};

export default ListTasks;
