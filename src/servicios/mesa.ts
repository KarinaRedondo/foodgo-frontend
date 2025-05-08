import { urlApi } from "../api";
import type { actualizarMesaDto, crearMesaDto, Mesa } from "../modelos/types/mesa";

export const obtenerMesas = async (): Promise<Mesa[]> => {
    const { data } = await urlApi.get("/mesas");
    return data;
  };
  
  export const crearMesa = async (info: crearMesaDto) => {
    const { data } = await urlApi.post("/mesas", info);
    return data;
  };
  
  export const eliminarMesa = async (id: number | string) => {
    const { data } = await urlApi.delete(`/mesas/${id}`);
    return data;
  };
  
  export const editarMesa = async (info: actualizarMesaDto) => {
    const { data } = await urlApi.put("/mesas", info);
    return data;
  };
  