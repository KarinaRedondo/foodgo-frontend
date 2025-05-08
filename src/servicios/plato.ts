import { urlApi } from "../api";
import type { actualizarPlatoDto, crearPlatoDto, Plato } from "../modelos/types/plato";

export const obtenerPlatos = async (): Promise<Plato[]> => {
    const { data } = await urlApi.get("/platos");
    return data;
  };
  
  export const crearPlato = async (info: crearPlatoDto) => {
    const { data } = await urlApi.post("/platos", info);
    return data;
  };
  
  export const eliminarPlato = async (id: number | string) => {
    const { data } = await urlApi.delete(`/platos/${id}`);
    return data;
  };
  
  export const editarPlato = async (info: actualizarPlatoDto) => {
    const { data } = await urlApi.put("/platos", info);
    return data;
  };
  