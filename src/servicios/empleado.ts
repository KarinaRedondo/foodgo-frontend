import { urlApi } from "../api";
import type { actualizarEmpleadoDto, crearEmpleadoDto, Empleado } from "../modelos/types/empleado";

export const obtenerEmpleados = async (): Promise<Empleado[]> => {
    const { data } = await urlApi.get("/empleados");
    return data;
  };
  
  export const crearEmpleado = async (info: crearEmpleadoDto) => {
    const { data } = await urlApi.post("/empleados", info);
    return data;
  };
  
  export const eliminarEmpleado = async (id: number | string) => {
    const { data } = await urlApi.delete(`/empleados/${id}`);
    return data;
  };
  
  export const editarEmpleado = async (info: actualizarEmpleadoDto) => {
    const { data } = await urlApi.put("/empleados", info);
    return data;
  };
  