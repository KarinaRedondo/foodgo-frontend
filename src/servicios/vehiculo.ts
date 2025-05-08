import { urlApi } from "../api";
import type { actualizarVehiculoDto, crearVehiculoDto, Vehiculo } from "../modelos/types/vehiculos";

export const obtenerVehiculos = async (): Promise<Vehiculo[]> => {
    const { data } = await urlApi.get("/vehiculos");
    return data;
  };
  
  export const crearVehiculo = async (info: crearVehiculoDto) => {
    const { data } = await urlApi.post("/vehiculos", info);
    return data;
  };
  
  export const eliminarVehiculo = async (id: number | string) => {
    const { data } = await urlApi.delete(`/vehiculos/${id}`);
    return data;
  };
  
  export const editarVehiculo = async (info: actualizarVehiculoDto) => {
    const { data } = await urlApi.put("/vehiculos", info);
    return data;
  };
  