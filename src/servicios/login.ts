import { urlApi } from "../api";

export const iniciarSesion = async (correo: string, contraseña: string) => {
  const { data } = await urlApi.post("/login", { correo, contraseña });
  return data;
};
