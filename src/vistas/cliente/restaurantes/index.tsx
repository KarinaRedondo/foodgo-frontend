import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Sidebar from '../../../componentes/Sidebar';
import styles from './restaurantes.module.css';
import { obtenerRestaurantes } from '../../../servicios/restaurante'; 
import type { Restaurante } from '../../../modelos/types/restaurante';
import type { Usuario } from '../../../modelos/types/usuario'; 

const Restaurantes: React.FC = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Leer los datos del usuario desde localStorage
  const usuarioGuardado = localStorage.getItem('usuario');
  const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

  const getInitials = (nombre: string, apellido: string) => {
    return `${nombre?.[0] ?? ''}${apellido?.[0] ?? ''}`.toUpperCase();
  };

  const user = usuario
    ? {
        name: `${usuario.nombre} ${usuario.apellido}`,
        role: usuario.tipoUsuario || 'Cliente',
        initials: getInitials(usuario.nombre, usuario.apellido),
      }
    : {
        name: 'Invitado',
        role: 'Sin rol',
        initials: 'IN',
      };

  useEffect(() => {
    const cargarRestaurantes = async () => {
      try {
        setIsLoading(true);
        const data = await obtenerRestaurantes();
        setRestaurantes(data);
      } catch (error) {
        console.error('Error al obtener los restaurantes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    cargarRestaurantes();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', searchTerm);
  };

  const filteredRestaurantes = restaurantes.filter(restaurante =>
    restaurante.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurante.direccionBarrio?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVerMenu = (id: number) => {
    console.log('Ver menú del restaurante', id);
  };

  const handleReservar = (id: number) => {
    console.log('Reservar en restaurante', id);
  };

  return (
    <div className={styles.pageContainer}>
      <Sidebar usuario={usuario} estaAbierto={true} alternarBarraLateral={() => {}} />

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Restaurantes</h1>
          <p className={styles.subtitle}>
            Explora los restaurantes disponibles y realiza pedidos o reservas
          </p>

          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Buscar restaurantes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <Search size={20} />
                <span>Buscar</span>
              </button>
            </div>
          </form>
        </div>

        {isLoading ? (
          <div className={styles.loadingContainer}>
            <p>Cargando restaurantes...</p>
          </div>
        ) : (
          <div className={styles.restaurantesGrid}>
            {filteredRestaurantes.length > 0 ? (
              filteredRestaurantes.map(restaurante => (
                <div key={restaurante.id} className={styles.restauranteCard}>
                  <div className={styles.restauranteImageContainer}></div>
                  <div className={styles.restauranteInfo}>
                    <h3 className={styles.restauranteNombre}>{restaurante.nombre}</h3>
                    <p className={styles.restauranteDireccion}>
                      {restaurante.direccionCalle} #{restaurante.direccionNumero}, {restaurante.direccionBarrio}
                    </p>
                  </div>
                  <div className={styles.restauranteActions}>
                    <button
                      onClick={() => handleVerMenu(restaurante.id)}
                      className={styles.verMenuButton}
                    >
                      Ver Menú
                    </button>
                    <button
                      onClick={() => handleReservar(restaurante.id)}
                      className={styles.reservarButton}
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResultsContainer}>
                <p>No se encontraron restaurantes que coincidan con la búsqueda.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Restaurantes;

