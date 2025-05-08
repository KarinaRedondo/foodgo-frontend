import { urlApi } from "../api";
import type { actualizarReservaDto, crearReservaDto, Reserva } from "../modelos/types/reserva";

export const obtenerReservas = async (): Promise<Reserva[]> => {
    const { data } = await urlApi.get("/reservas");
    return data;
  };
  
  export const crearReserva = async (info: crearReservaDto) => {
    const { data } = await urlApi.post("/reservas", info);
    return data;
  };
  
  export const eliminarReserva = async (id: number | string) => {
    const { data } = await urlApi.delete(`/reservas/${id}`);
    return data;
  };
  
  export const editarReserva = async (info: actualizarReservaDto) => {
    const { data } = await urlApi.put("/reservas", info);
    return data;
  };