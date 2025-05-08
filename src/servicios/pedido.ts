import { urlApi } from "../api";
import type { actualizarPedidoDto, crearPedidoDto, Pedido } from "../modelos/types/pedido";

export const obtenerPedidos = async (): Promise<Pedido[]> => {
    const { data } = await urlApi.get("/pedidos");
    return data;
  };
  
  export const crearPedido = async (info: crearPedidoDto) => {
    const { data } = await urlApi.post("/pedidos", info);
    return data;
  };
  
  export const eliminarPedido = async (id: number | string) => {
    const { data } = await urlApi.delete(`/pedidos/${id}`);
    return data;
  };
  
  export const editarPedido = async (info: actualizarPedidoDto) => {
    const { data } = await urlApi.put("/pedidos", info);
    return data;
  };