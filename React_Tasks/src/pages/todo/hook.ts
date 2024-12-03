import { useEffect, useState } from "react";
import { Errors, initialErrors, initialTask, Task } from "../../models/Tasks";
import { toast } from "react-toastify";

const HookTask = () => {
  /* Declaracion de estados */
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [taskState, setTaskState] = useState<string>("1");
  const [task, setTask] = useState<Task>(initialTask);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funcion para el filtrado de las tareas, busquedas por texto y estado //
  const filterFunction = (search?: string) => {
    let filtered = [...tasks];

    if (filtered) {
      switch (taskState) {
        case "2":
          filtered = filtered.filter((task: Task) => task.completed === true);
          break;
        case "3":
          filtered = filtered.filter((task: Task) => task.completed === false);
          break;
        default:
          filtered = filtered; // Devuelve todas las tareas
          break;
      }
    }

    if (filtered && search) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Actualizar el estado con las tareas filtradas
    setFilteredTasks(filtered);
  };

  // Carga inicial de las tareas desde localStorage //
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    setTasks(storedTasks ? JSON.parse(storedTasks) : []);
  }, []);

  // Effect para filtrar cuando cambie el estado o la tarea //
  useEffect(() => {
    filterFunction();
  }, [taskState, tasks]);

  // Effect para el filtrado por texto al terminar de escribir en el campo //
  useEffect(() => {
    // Timeout para actualizar el valor de búsqueda retardado después de un tiempo
    const timer = setTimeout(() => {
      filterFunction(searchTerm); // Se actualiza después de 800 ms sin cambios
    }, 800);

    return () => clearTimeout(timer); // Limpiar timeout en cada cambio para evitar múltiples disparos
  }, [searchTerm]);

  // Manejador para los cambios dentro de los input y agregarlos al estado de tarea, con esto no ahorramos tener un estado por campo //
  const handleInputsChange = (updatedTask: Partial<Task>) => {
    setTask((prevTask) => ({ ...prevTask, ...updatedTask }));
  };

  // Funcion para validar los campos, que no este vacios //
  const validarCampos = (newTask: Task) => {
    if (!newTask.title) {
      errors.title = "Debe agregar un titulo a la tarea!";
    } else {
      errors.title = "";
    }

    if (!newTask.description) {
      errors.description = "Debe agregar una descripción a la tarea!";
    } else {
      errors.description = "";
    }

    if (errors.description || errors.title) {
      setErrors(errors);
      return false;
    } else {
      return true;
    }
  };

  // Añade una tarea
  const handleAddTask = (newTask: Omit<Task, "id">) => {
    if (validarCampos(newTask)) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...newTask, id: Date.now().toString() },
      ]);
      setTask(initialTask);
      toast.success("Tarea agregada!");
      setIsModalOpen(false);
    } else {
      toast.error("Verifique sus campos!");
    }
  };

  // Actualiza el estado de una tarea //
  const handleUpdateTask = (updatedTask: Partial<Task>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
    updatedTask.completed
      ? toast.info("Tarea pendiente!")
      : toast.success("Tarea completada!");
  };

  // Elimina una tarea //
  const handleRemoveTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.error("Tarea eliminada!");
    //setTaskState("1");
  };

  // Actualiza el localStorage cada que hay cambio en las tareas //
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return {
    task,
    filteredTasks,
    taskState,
    errors,
    isModalOpen,
    setIsModalOpen,
    setTaskState,
    handleInputsChange,
    handleAddTask,
    handleUpdateTask,
    handleRemoveTask,
    searchTerm,
    setSearchTerm,
  };
};

export default HookTask;
