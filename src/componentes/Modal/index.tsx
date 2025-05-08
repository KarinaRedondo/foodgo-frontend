import { type Dispatch, type SetStateAction } from "react";
import styles from "./Modal.module.css";

interface PropsModal {
  openModal: boolean | undefined;
  setOpenModal: Dispatch<SetStateAction<boolean>> | undefined;
  nombreModal: string;
  children: React.ReactNode;
}

export const ModalComponente = ({
  openModal,
  setOpenModal,
  nombreModal,
  children,
}: PropsModal) => {
  const cerrarModal = () => {
    setOpenModal && setOpenModal(false);
  };

  if (!openModal) return null;

  return (
    <div className={styles.contenedorModal}>
      <div className={styles.modal}>
        <div className={styles.headerModal}>
          <h2>{nombreModal}</h2>
          <button onClick={cerrarModal}>X</button>
        </div>
        <div className={styles.contenido}>{children}</div>
      </div>
    </div>
  );
};
