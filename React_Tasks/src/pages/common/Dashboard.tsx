const Dashboard = () => {
  return (
    <div
      className="p-4 font-medium text-sm text-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800"
      role="alert"
    >
      <div>
        <span className="font-medium">Bienvenido/a!</span> En esta pequeña
        aplicación encontrará lo siguiente:
      </div>
      <div className="my-3">
        <ul>
          <li><i className="fa-regular fa-square-check"></i>&nbsp;&nbsp;Creación de tareas.</li>
          <li><i className="fa-regular fa-square-check"></i>&nbsp;&nbsp;Marcar tareas como completadas.</li>
          <li>
            <ul>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;- Cambio de color del título de la tarea completada.</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;- Label que indica que la tarea fue completada.</li>
            </ul>
          </li>
          <li><i className="fa-regular fa-square-check"></i>&nbsp;&nbsp;Eliminación de tareas.</li>
          <li><i className="fa-regular fa-square-check"></i>&nbsp;&nbsp;Filtros para las tareas</li>
          <li>
            <ul>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;- 
                Filtro por estado de la tarea: Todas las tareas, Tareas
                completadas, Tareas pendientes.
              </li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;- Búsqueda por título de la tarea.</li>
            </ul>
          </li>
          <li><i className="fa-regular fa-square-check"></i>&nbsp;&nbsp;Persistencia de los datos mediante el uso de localStorage.</li>
        </ul>
      </div>
      <span className="font-medium">Acceda a esto por medio del apartado en el menú To-Do List.</span>
    </div>
  );
};

export default Dashboard;
