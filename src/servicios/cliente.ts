import { urlApi } from "../api";
import type { actualizarClienteDto, Cliente, crearClienteDto } from "../modelos/types/cliente";

export const obtenerClientes = async (): Promise<Cliente[]> => {
    const { data } = await urlApi.get("/clientes");
    return data;
  };
  
  export const crearCliente = async (info: crearClienteDto) => {
    const { data } = await urlApi.post("/clientes", info);
    return data;
  };
  
  export const eliminarCliente = async (id: number | string) => {
    const { data } = await urlApi.delete(`/clientes/${id}`);
    return data;
  };
  
  export const editarCliente = async (info: actualizarClienteDto) => {
    const { data } = await urlApi.put("/clientes", info);
    return data;
  };
  