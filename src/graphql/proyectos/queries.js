import { gql } from "@apollo/client";

const PROYECTOS = gql`
  query Proyectos {
    Proyectos {
      _id
      nombre
      estado
      objetivos {
        descripcion
        tipo
      }
      inscripciones {
        estado
        estudiante {
          _id
        }
      }
      lider {
        _id
        nombre
        apellido
      }
    }
  }
`;

export { PROYECTOS };
