import { urlApi } from "../api";
import type { actualizarRestauranteDto, crearRestauranteDto, Restaurante } from "../modelos/types/restaurante";

export const obtenerRestaurantes = async (): Promise<Restaurante[]> => {
    const { data } = await urlApi.get("/restaurantes");
    return data;
  };
  
  export const crearRestaurante = async (info: crearRestauranteDto) => {
    const { data } = await urlApi.post("/restaurantes", info);
    return data;
  };
  
  export const eliminarRestaurante = async (id: number | string) => {
    const { data } = await urlApi.delete(`/restaurantes/${id}`);
    return data;
  };
  
  export const editarRestaurante = async (info: actualizarRestauranteDto) => {
    const { data } = await urlApi.put("/restaurantes", info);
    return data;
  };
  