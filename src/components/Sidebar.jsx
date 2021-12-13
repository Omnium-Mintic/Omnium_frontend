<<<<<<< HEAD
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "context/authContext";
import PrivateComponent from "./PrivateComponent";
import EstadoComponnet from "./EatadoComponent";
=======
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import PrivateComponent from './PrivateComponent';
import { useUser } from 'context/userContext';

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
>>>>>>> 3bfea29b243800da0337692b2d1648e9d2f977da

const SidebarLinks = () => {
  const { userData } = useUser();
  console.log( " at " , dateTime, " From SiderBar " , userData.correo, " es un ", userData.rol);
  
  return (
    <ul className="mt-12">
      <SidebarRoute to="" title="Inicio" icon="fas fa-home" />
      <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
        <SidebarRoute to="/usuarios" title="Usuarios" icon="fas fa-users" />
      </PrivateComponent>
      <EstadoComponnet estadoList={["AUTORIZADO"]}>
        <SidebarRoute
          to="/proyectos"
          title="Proyectos"
          icon="fas fa-briefcase"
        />
      </EstadoComponnet>
      <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
        <SidebarRoute
          to="/inscripciones"
          title="Aprobacion Inscripciones"
          icon="fas fa-user"
        />
      </PrivateComponent>
<<<<<<< HEAD
      <SidebarRoute to="/perfil" title="Editar Usuario" icon="fas fa-user" />
      <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
      <SidebarRoute
        to="/category1"
        title="Proyectos de un líder"
        icon="fas fa-clipboard-list"
      />
      </PrivateComponent>
      {/* <SidebarRoute to="/category1/page1" title="Test" icon="fas fa-car" /> */}
      <Logout />
=======
      <PrivateComponent roleList={['ESTUDIANTE']}>
      <SidebarRoute to='/category1/page1' title='Inscripciones' icon='fas fa-book' />
      <SidebarRoute to='/usuarios/editar' title='Editar Usuario' icon='fas fa-pen' />
      </PrivateComponent>
      <SidebarRoute to='/category1' title='Varios' icon='fas fa-clipboard-list' />
     <Logout />
>>>>>>> 3bfea29b243800da0337692b2d1648e9d2f977da
    </ul>
  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log("eliminar token");
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      <NavLink to="/auth/login" className="sidebar-route text-red-700">
        <div className="flex items-center">
          <i className="fas fa-sign-out-alt" />
          <span className="text-sm  ml-2">Cerrar Sesión</span>
        </div>
      </NavLink>
    </li>
  );
};

const Logo = () => {
  return (
    <div className="py-3 w-full flex flex-col items-center justify-center">
      <img src="Logo_Omnium.png" alt="Logo" className="h-16" />
      <span className="my-2 text-xl font-bold text-center">
        Gestión de Proyectos Omnium
      </span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col md:flex-row flex-no-wrap md:h-full">
      {/* Sidebar starts */}

      <div className="sidebar hidden md:flex">
        <div className="px-8">
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className="flex md:hidden w-full justify-between bg-gray-800 p-2 text-white">
        <i
          className={`fas fa-${open ? "times" : "bars"}`}
          onClick={() => setOpen(!open)}
        />
        <i className="fas fa-home" />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className="sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        <div className="px-8">
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "sidebar-route text-white bg-indigo-700"
            : "sidebar-route text-gray-900 hover:text-white hover:bg-indigo-400"
        }
      >
        <div className="flex items-center">
          <i className={icon} />
          <span className="text-sm  ml-2">{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
