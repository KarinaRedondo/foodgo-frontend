import React, { useState } from "react";
import styles from "./Layout.module.css";
import Sidebar from "../Sidebar";


interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const verSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.layout}>
      <Sidebar estaAbierto={open} alternarBarraLateral={verSidebar} />
      <div
        className={
          open ? styles.contenidoVistasAbierto : styles.contenidoVistas
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
