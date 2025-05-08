import { urlApi } from "../api";
import type { ActualizarDetallePedidoDto, CrearDetallePedidoDto, DetallePedido } from "../modelos/types/detallePedido";

export const obtenerDetallesPedido = async (): Promise<DetallePedido[]> => {
    const { data } = await urlApi.get("/detalles-pedido");
    return data;
  };
  
  export const crearDetallePedido = async (info: CrearDetallePedidoDto) => {
    const { data } = await urlApi.post("/detalles-pedido", info);
    return data;
  };
  
  export const eliminarDetallePedido = async (id: number | string) => {
    const { data } = await urlApi.delete(`/detalles-pedido/${id}`);
    return data;
  };
  
  export const editarDetallePedido = async (info: ActualizarDetallePedidoDto) => {
    const { data } = await urlApi.put("/detalles-pedido", info);
    return data;
  };