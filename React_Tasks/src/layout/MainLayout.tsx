import React from 'react'
import SideBar from '../components/sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

interface MainLayoutProps {
    children: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          {children}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default MainLayout
