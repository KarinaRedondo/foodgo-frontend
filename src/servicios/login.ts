import { urlApi } from "../api";
import axios from "axios";

export const iniciarSesion = async (correo: string, contrasena: string) => {
  try {
    const { data } = await urlApi.post("/auth/inicio-sesion", { correo, contrasena });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const mensaje = error.response.data?.mensaje || error.response.data?.error;

      if (mensaje?.toLowerCase().includes("correo")) {
        throw new Error("Correo no registrado");
      }

      if (mensaje?.toLowerCase().includes("contraseña")) {
        throw new Error("Contraseña incorrecta");
      }

      throw new Error(mensaje || "Error al iniciar sesión");
    }

    throw new Error("No se pudo conectar con el servidor.");
  }
};
