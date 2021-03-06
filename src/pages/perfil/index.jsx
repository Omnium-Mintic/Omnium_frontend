import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PERFIL } from 'graphql/perfil/queries';
import { toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';
import { useUser } from "context/userContext";

const IndexPerfil = () => {
  
  const { userData } = useUser();
  const { _id } = useParams();
  const { data, error, loading } = useQuery(GET_PERFIL, {
    variables: { _id },});

  useEffect(() => {
    if (error) {
      toast.error('Error consultando los usuarios');
    }
  }, [error]);

  if (loading) return <div>Cargando....</div>;

  return (
    <div className='p-10 flex flex-col'>
        <div className='flex w-full items-center justify-center'>
          <h1 className='text-2xl font-bold text-gray-900'>Lista de Usuarios</h1>
        </div>
    
      <div>
        Datos Usuarios:
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Identificación</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody> 
           {data && data.userData ? (
              <>
                {data.userData.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}</td>
                      <td>{u.apellido}</td>
                      <td>{u.correo}</td>
                      <td>{u.identificacion}</td>
                      <td>{Enum_Rol[u.rol]}</td>
                      <td>{Enum_EstadoUsuario[u.estado]}</td>
                      <td>
                        <Link to={`/perfil/editar/${u._id}`}>
                          <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <div>?No autorizado?</div>
            )}
          </tbody>
        </table>
      </div>
   
    </div>
  );
};

export default IndexPerfil;
