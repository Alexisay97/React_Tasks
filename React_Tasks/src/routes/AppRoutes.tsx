import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../components/error/404NotFound";
import Unauthorized from "../components/error/Unauthorized";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/common/Dashboard";
import ListTasks from "../pages/todo/ListTasks";

const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Navigate to="/bienvenido" />} />
          <Route
            path="/bienvenido"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
          <Route
            path="/todo"
            element={
              <MainLayout>
                <ListTasks />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;
  