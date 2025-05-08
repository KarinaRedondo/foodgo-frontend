import { urlApi } from "../api";
import type { actualizarUsuarioDto, crearUsuarioDto, Usuario } from "../modelos/types/usuario";

export const obtenerUsuarios = async (): Promise<Usuario[]> => {
    const { data } = await urlApi.get("/usuarios");
    return data;
  };
  
  export const crearUsuario = async (info: crearUsuarioDto) => {
    const { data } = await urlApi.post("/usuarios", info);
    return data;
  };
  
  export const eliminarUsuario = async (id: number | string) => {
    const { data } = await urlApi.delete(`/usuarios/${id}`);
    return data;
  };
  
  export const editarUsuario = async (info: actualizarUsuarioDto) => {
    const { data } = await urlApi.put("/usuarios", info);
    return data;
  };