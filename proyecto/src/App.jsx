import React, { useState } from 'react';
import './app.css';
import v1 from './assets/img/v1.jpg';
import v2 from './assets/img/v2.jpg';
import v3 from './assets/img/v3.jpg';
import v4 from './assets/img/v4.jpg';
import beigev1 from './assets/img/beigev1.jpg';
import marfilv1 from './assets/img/marfilv1.jpg';
import verdev1 from './assets/img/verdev1.jpg';

const LandingPoloDama = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const [colorSeleccionado, setColorSeleccionado] = useState('Blanco');
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');
  const [calificacion, setCalificacion] = useState(0);
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [favorito, setFavorito] = useState(false);
  const [resenas, setResenas] = useState([
    {
      id: 1,
      nombre: 'Andrea Martínez',
      iniciales: 'AM',
      fecha: '20 de septiembre, 2025',
      calificacion: 5,
      comentario: '¡Me encanta esta polo! La tela es súper suave y fresca, perfecta para el clima de Medellín. La compré en color blanco y negro, y ambas son de excelente calidad. El corte es favorecedor y no se deforma después de lavarla. Totalmente recomendada.',
      verificada: true
    },
    {
      id: 2,
      nombre: 'Sofía Castro',
      iniciales: 'S',
      fecha: '15 de septiembre, 2025',
      calificacion: 5,
      comentario: 'Excelente relación calidad-precio. La uso para ir al trabajo y para salir de forma casual. Es muy versátil y fácil de combinar. La talla M me quedó perfecta. Ya compré tres en diferentes colores porque me gustaron mucho.',
      verificada: true
    },
    {
      id: 3,
      nombre: 'Paula Ramírez',
      iniciales: 'PR',
      fecha: '10 de septiembre, 2025',
      calificacion: 5,
      comentario: 'Super cómoda y de buena calidad. La tela no es transparente como otras polos que he comprado. Me gusta que no se arruga fácilmente. Ideal para tener varias en el closet como básicos del día a día.',
      verificada: true
    },
    {
      id: 4,
      nombre: 'Diana Valencia',
      iniciales: 'DV',
      fecha: '5 de septiembre, 2025',
      calificacion: 4,
      comentario: 'Muy bonita y el material es de buena calidad. El único detalle es que me hubiera gustado que fuera un poco más larga, pero en general estoy satisfecha con la compra.',
      verificada: true
    }
  ]);

  const imagenes = [v1, v2, v3, v4];

  const colores = [
    { nombre: 'Blanco', imagen: v1},
    { nombre: 'Beige', imagen: beigev1 },
    { nombre: 'Crema', imagen: marfilv1},
    { nombre: 'Verde', imagen: verdev1}
  ];

  const tallas = ['S', 'M', 'L', 'XL'];

  const calcularPromedioCalificacion = () => {
    const suma = resenas.reduce((acc, resena) => acc + resena.calificacion, 0);
    return (suma / resenas.length).toFixed(1);
  };

  const renderEstrellas = (valor, clickeable = false) => {
    return (
      <div className="contenedor-estrellas">
        {[1, 2, 3, 4, 5].map((estrella) => {
          let porcentajeLleno = 0;
          
          if (valor >= estrella) {
            porcentajeLleno = 100;
          } else if (valor > estrella - 1 && valor < estrella) {
            porcentajeLleno = (valor - (estrella - 1)) * 100;
          }
          
          return (
            <span
              key={estrella}
              className={`estrella ${clickeable ? 'clickeable' : ''}`}
              onClick={() => clickeable && setCalificacion(estrella)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <span style={{ color: '#ddd' }}>★</span>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: `${porcentajeLleno}%`,
                  overflow: 'hidden',
                  color: '#ffc107',
                  pointerEvents: 'none'
                }}
              >
                ★
              </span>
            </span>
          );
        })}
      </div>
    );
  };

  const manejarPublicar = () => {
    if (calificacion === 0 || !nombre.trim() || !comentario.trim()) {
      alert('Por favor completa todos los campos y selecciona una calificación');
      return;
    }

    const nuevaResena = {
      id: resenas.length + 1,
      nombre: nombre,
      iniciales: nombre.split(' ').map(n => n[0]).join('').toUpperCase(),
      fecha: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      calificacion: calificacion,
      comentario: comentario,
      verificada: false
    };

    setResenas([nuevaResena, ...resenas]);
    setCalificacion(0);
    setNombre('');
    setComentario('');
  };

  return (
    <div className="contenedor-principal">
      <header className="encabezado">
        <p>✦ BIENVENIDOS, RENOVAMOS NUESTRA EXPERIENCIA ✦</p>
      </header>

      <div className="contenedor-producto">
        <div className="seccion-izquierda">
          <div className="miniaturas">
            {imagenes.map((img, index) => (
              <div
                key={index}
                className={`miniatura ${index === imagenActual ? 'activa' : ''}`}
                onClick={() => setImagenActual(index)}
              >
                <img src={img} alt={`Vista ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="galeria-principal">
            <button 
              className="boton-navegacion izquierda"
              onClick={() => setImagenActual(imagenActual > 0 ? imagenActual - 1 : imagenes.length - 1)}
            >
              ‹
            </button>
            <div className="imagen-principal">
              <img src={imagenes[imagenActual]} alt="Polo de dama" />
            </div>
            <button 
              className="boton-navegacion derecha"
              onClick={() => setImagenActual(imagenActual < imagenes.length - 1 ? imagenActual + 1 : 0)}
            >
              ›
            </button>
          </div>
        </div>

        <div className="seccion-derecha">
          
          <h1 className="titulo-producto">Polo de dama de moda</h1>
          <p className="referencia">Referencia: 010040003563</p>
          
          
          {renderEstrellas(parseFloat(calcularPromedioCalificacion()))}

          
          <p className="precio">$ 26.990</p>

          <div className="seccion-color">
            <p className="etiqueta-seccion">Color: {colorSeleccionado}</p>
            <div className="opciones-color">
              {colores.map((color) => (
                <div
                  key={color.nombre}
                  className={`opcion-color ${colorSeleccionado === color.nombre ? 'seleccionada' : ''}`}
                  onClick={() => setColorSeleccionado(color.nombre)}
                >
                  <img src={color.imagen} alt={color.nombre} />
                </div>
              ))}
            </div>
          </div>

          <div className="seccion-talla">
            <p className="etiqueta-seccion">Talla</p>
            <div className="opciones-talla">
              {tallas.map((talla) => (
                <button
                  key={talla}
                  className={`boton-talla ${tallaSeleccionada === talla ? 'seleccionada' : ''}`}
                  onClick={() => setTallaSeleccionada(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>
          </div>

          <p className="estado-stock">En stock</p>

          <div className="acciones">
            <button 
              className={`boton-favorito ${favorito ? 'activo' : ''}`}
              onClick={() => setFavorito(!favorito)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21C12 21 4 13.36 4 8.5C4 6 6 4 8.5 4C10.11 4 11.6 5 12 6.09C12.4 5 13.89 4 15.5 4C18 4 20 6 20 8.5C20 13.36 12 21 12 21Z"/>
              </svg>
            </button>
            <button className="boton-agregar">Agregar al carrito</button>
          </div>

          <p className="info-modelo">La modelo mide 170 cm y tiene puesto una talla S-m</p>

          <div className="acordeon">
            <button className="acordeon-titulo">
              DESCRIPCIÓN
              <span>+</span>
            </button>
          </div>

          <div className="acordeon">
            <button className="acordeon-titulo">
              ESPECIFICACIONES DEL PRODUCTO
              <span>+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sección de comentarios */}
      <section className="seccion-comentarios">
        <div className="encabezado-comentarios">
          <p className="banner-opinion">✦DANOS TÚ OPINIÓN✦</p>
        </div>

        <div className="resumen-calificaciones">
          <h2>Comentarios de clientes</h2>
          <div className="calificacion-general">
            <span className="numero-calificacion">{calcularPromedioCalificacion()}</span>
            <div>
              {renderEstrellas(parseFloat(calcularPromedioCalificacion()))}
              <p className="texto-opiniones">Basado en {resenas.length} opiniones</p>
            </div>
          </div>
        </div>

        <div className="formulario-comentario">
          <h3>Comparte tu opinión</h3>
          {renderEstrellas(calificacion, true)}
          
          <input
            type="text"
            className="input-nombre"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          
          <textarea
            className="textarea-comentario"
            placeholder="Escribe tu comentario aquí..."
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          
          <button className="boton-publicar" onClick={manejarPublicar}>
            Publicar
          </button>
        </div>

        {/* Sección TAMBIÉN TE PUEDE INTERESAR */}
        <section className="seccion-relacionados">
          <div className="encabezado-relacionados">
            <p>✦ TAMBIÉN TE PUEDE INTERESAR ✦</p>
          </div>
          
          <div className="contenedor-productos-relacionados">
            <div className="producto-relacionado">
              <img src="https://via.placeholder.com/300x400" alt="Jean de dama" />
              <div className="info-producto-relacionado">
                <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
                <p className="precio-producto-relacionado">$29.000</p>
              </div>
            </div>
            
            <div className="producto-relacionado">
              <img src="https://via.placeholder.com/300x400" alt="Jean de dama" />
              <div className="info-producto-relacionado">
                <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
                <p className="precio-producto-relacionado">$29.900</p>
              </div>
            </div>
            
            <div className="producto-relacionado">
              <img src="https://via.placeholder.com/300x400" alt="Jean de dama" />
              <div className="info-producto-relacionado">
                <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
                <p className="precio-producto-relacionado">$39.900</p>
              </div>
            </div>
            
            <div className="producto-relacionado">
              <img src="https://via.placeholder.com/300x400" alt="Jean de dama" />
              <div className="info-producto-relacionado">
                <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
                <div className="precios-descuento">
                  <span className="precio-anterior">$39.990</span>
                  <span className="precio-actual">$31.992</span>
                </div>
              </div>
            </div>
            
            <div className="producto-relacionado">
              <img src="https://via.placeholder.com/300x400" alt="Jean de dama" />
              <div className="info-producto-relacionado">
                <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
                <p className="precio-producto-relacionado">$29.900</p>
              </div>
            </div>
          </div>
        </section>

        <div className="lista-comentarios">
          {resenas.map((resena) => (
            <div key={resena.id} className="tarjeta-comentario">
              <div className="encabezado-tarjeta">
                <div className="info-usuario">
                  <div className="avatar">{resena.iniciales}</div>
                  <div>
                    <p className="nombre-usuario">{resena.nombre}</p>
                    <p className="fecha-comentario">{resena.fecha}</p>
                  </div>
                </div>
                {renderEstrellas(resena.calificacion)}
              </div>
              <p className="texto-comentario">{resena.comentario}</p>
              {resena.verificada && (
                <span className="badge-verificado">✓ Compra verificada</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPoloDama;