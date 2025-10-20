import React, { useState } from 'react';
import './app.css';
import v1 from './assets/img/v1.jpg';
import v2 from './assets/img/v2.jpg';
import v3 from './assets/img/v3.jpg';
import v4 from './assets/img/v4.jpg';
import imagen_gt from './assets/img/imagen_gt.png';

const LandingPoloDama = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const [colorSeleccionado, setColorSeleccionado] = useState('Blanco');
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');
  const [calificacion, setCalificacion] = useState(0);
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [favorito, setFavorito] = useState(false);
  const [modalGuiaAbierto, setModalGuiaAbierto] = useState(false);
  const [tabActivo, setTabActivo] = useState('guia');
  const [acordeonAbierto, setAcordeonAbierto] = useState({
    descripcion: false,
    especificaciones: false,
    garantia: false
  });
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

  const imagenes = [
    'https://surtitodo.co/cdn/shop/files/3342-ropa-de-dama-polo-color-blanco-ref-010040003563_600x600.jpg?v=1758570383', 
    'https://repositorio.surtitodo.com.co/fotos_vtex2/fotos_vtex/6613-ropa-de-dama-polo-color-blanco-ref-010040003563.jpg',  
    'https://repositorio.surtitodo.com.co/fotos_vtex2/fotos_vtex/5256-ropa-de-dama-polo-color-blanco-ref-010040003563.jpg', 
    'https://repositorio.surtitodo.com.co/fotos_vtex2/fotos_vtex/1082-ropa-de-dama-polo-color-blanco-ref-010040003563.jpg',    
    'https://surtitodo.co/cdn/shop/files/8625-ropa-de-dama-polo-color-blanco-ref-010040003563_800x800.jpg?v=1758570383'
  ];

  const colores = [
    { nombre: 'Blanco', imagen: 'https://surtitodo.co/cdn/shop/files/3342-ropa-de-dama-polo-color-blanco-ref-010040003563_120x120.jpg?v=1758570383' },
    { nombre: 'Beige', imagen: 'https://surtitodo.co/cdn/shop/files/2415-ropa-de-dama-polo-color-beige-ref-010040003563_120x120.jpg?v=1758570383' },
    { nombre: 'Marfil', imagen: 'https://surtitodo.co/cdn/shop/files/9861-ropa-de-dama-polo-color-marfil-ref-010040003563_120x120.jpg?v=1758570396' },
    { nombre: 'Verde', imagen: 'https://surtitodo.co/cdn/shop/files/4400-ropa-de-dama-polo-color-verde-ref-010040003563_120x120.jpg?v=1758570317' }
  ];

  const tallas = ['S', 'M', 'L', 'XL'];

  const datosTallas = [
    { talla: 'XS', pecho: '98', cintura: '71' },
    { talla: 'S', pecho: '103', cintura: '76' },
    { talla: 'M', pecho: '103', cintura: '81' },
    { talla: 'L', pecho: '108', cintura: '86' },
    { talla: 'XL', pecho: '115', cintura: '93' },
    { talla: 'XXL', pecho: '122', cintura: '100' }
  ];

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

  const toggleAcordeon = (seccion) => {
    setAcordeonAbierto(prev => ({
      ...prev,
      [seccion]: !prev[seccion]
    }));
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
            <h3 className="etiqueta-talla">Talla</h3>
            <button 
              className="boton-guia-tallas"
              onClick={() => setModalGuiaAbierto(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
              </svg>
              Guía de tallas
            </button>

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

          <p className="info-modelo">La modelo mide 170 cm y tiene puesto una talla S.</p>

          <div className="acordeon">
            <button 
              className="acordeon-titulo"
              onClick={() => toggleAcordeon('descripcion')}
            >
              DESCRIPCIÓN
              <span>{acordeonAbierto.descripcion ? '×' : '+'}</span>
            </button>
            {acordeonAbierto.descripcion && (
              <div className="acordeon-contenido">
                <p>Descubre el estilo único del Jean de dama, ideal para lucir la moda con comodidad.</p>
              </div>
            )}
          </div>

          <div className="acordeon">
            <button 
              className="acordeon-titulo"
              onClick={() => toggleAcordeon('especificaciones')}
            >
              ESPECIFICACIONES DEL PRODUCTO
              <span>{acordeonAbierto.especificaciones ? '×' : '+'}</span>
            </button>
            {acordeonAbierto.especificaciones && (
              <div className="acordeon-contenido">
                <ul>
                  <li><strong>Material:</strong> Índigo</li>
                  <li><strong>Mundo:</strong> Dama</li>
                  <li><strong>Silueta:</strong> Amplia</li>
                  <li><strong>Manga:</strong> Manga corta</li>
                  <li><strong>Sección:</strong> Polo</li>
                  <li><strong>Estampado:</strong> No</li>
                  <li><strong>Proveedor:</strong> ALBERTINI KALOR SAS</li>
                </ul>
              </div>
            )}
          </div>

          <div className="acordeon">
            <button 
              className="acordeon-titulo"
              onClick={() => toggleAcordeon('garantia')}
            >
              GARANTÍA
              <span>{acordeonAbierto.garantia ? '×' : '+'}</span>
            </button>
            {acordeonAbierto.garantia && (
              <div className="acordeon-contenido">
                <p>30 días de garantía y cambios.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalGuiaAbierto && (
        <div className="overlay-guia-tallas" onClick={() => setModalGuiaAbierto(false)}>
          <div className="modal-guia-tallas" onClick={(e) => e.stopPropagation()}>
            <button 
              className="cerrar-guia-tallas"
              onClick={() => setModalGuiaAbierto(false)}
            >
              ✕
            </button>

            <div className="tabs-guia-tallas">
              <button 
                className={`tab-guia ${tabActivo === 'guia' ? 'activo' : ''}`}
                onClick={() => setTabActivo('guia')}
              >
                GUÍA DE TALLAS
              </button>
              <button 
                className={`tab-guia ${tabActivo === 'medirse' ? 'activo' : ''}`}
                onClick={() => setTabActivo('medirse')}
              >
                CÓMO MEDIRSE
              </button>
            </div>

            {tabActivo === 'guia' && (
              <div className="contenido-guia-tallas">
                <h3>Superior Mujer (Centímetros)</h3>
                
                <table className="tabla-tallas">
                  <thead>
                    <tr>
                      <th>Talla</th>
                      <th>Pecho</th>
                      <th>Cintura</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosTallas.map((item) => (
                      <tr key={item.talla}>
                        <td><strong>{item.talla}</strong></td>
                        <td>{item.pecho}</td>
                        <td>{item.cintura}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="nota-tallas">
                  *Las medidas de la tabla son aproximadas y pueden variar entre prendas
                </p>
              </div>
            )}

            {tabActivo === 'medirse' && (
              <div className="contenido-guia-tallas">
                <h3>Cómo tomar tus medidas</h3>
                <div className="instrucciones-medidas">
                  <div className="item-medida">
                    <strong>Pecho:</strong> Mide el contorno de la parte más ancha del pecho, manteniendo la cinta métrica horizontal.
                  </div>
                  <div className="item-medida">
                    <strong>Cintura:</strong> Mide el contorno de la parte más estrecha de tu cintura, generalmente a la altura del ombligo.
                  </div>
                  <img src={imagen_gt} alt="Imágen de guía de tallas" className="imagen-guia-tallas" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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

      <section className="seccion-relacionados">
        <div className="encabezado-relacionados">
          <p>✦ TAMBIÉN TE PUEDE INTERESAR ✦</p>
        </div>
        
        <div className="contenedor-productos-relacionados">
          <div className="producto-relacionado">
            <img src="https://surtitodo.co/cdn/shop/files/ropa-de-dama-shortcolor-negro-010667006100-v250313-4144.jpg?v=1758313038&width=600" alt="Jean de dama" />
            <div className="info-producto-relacionado">
              <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
              <p className="precio-producto-relacionado">$29.000</p>
            </div>
          </div>
          
          <div className="producto-relacionado">
            <img src="https://surtitodo.co/cdn/shop/files/1973-ropa-de-hombre-polo-color-negro-ref-010040003442.jpg?v=1758298852&width=600" alt="Jean de dama" />
            <div className="info-producto-relacionado">
              <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
              <p className="precio-producto-relacionado">$29.900</p>
            </div>
          </div>
          
          <div className="producto-relacionado">
            <img src="https://surtitodo.co/cdn/shop/files/ropa-de-dama-leggincolor-verde-010653000954-v250529-10034.jpg?v=1758313202&width=600" alt="Jean de dama" />
            <div className="info-producto-relacionado">
              <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
              <p className="precio-producto-relacionado">$39.900</p>
            </div>
          </div>
          
          <div className="producto-relacionado">
            <img src="https://surtitodo.co/cdn/shop/files/6378-ropa-de-dama-blusa-color-marfil-ref-010661003508.jpg?v=1758297661&width=600" alt="Jean de dama" />
            <div className="info-producto-relacionado">
              <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
              <div className="precios-descuento">
                <span className="precio-anterior">$39.990</span>
                <span className="precio-actual">$31.992</span>
              </div>
            </div>
          </div>
          
          <div className="producto-relacionado">
            <img src="https://surtitodo.co/cdn/shop/files/9639-ropa-de-dama-blusa-color-cafe-ref-0108330rotb5.jpg?v=1758297385&width=600" alt="Jean de dama" />
            <div className="info-producto-relacionado">
              <p className="nombre-producto-relacionado">Jean de dama tiro alto ajustada</p>
              <p className="precio-producto-relacionado">$29.900</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-principal">
        <div className="contenedor-footer">
          <div className="redes-sociales-footer">
            <a href="https://www.facebook.com/search/top?q=surtitodo&locale=es_LA" className="icono-red-social">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/surtitodo_oficial/?hl=es-la" className="icono-red-social">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@surtitodo?lang=es" className="icono-red-social">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
          
          <div className="enlaces-footer">
            <a href="#" className="enlace-footer">Políticas de tratamiento y protección de datos personales</a>
            <a href="#" className="enlace-footer">Política de cambios y devoluciones</a>
            <a href="#" className="enlace-footer">Política de garantías</a>
            <a href="#" className="enlace-footer">Términos y condiciones promociones</a>
          </div>
        </div>
        
        <hr />
      </footer>

      <div className="payment-methods">
        <img src="https://surtitodo.co/cdn/shop/files/medios_pago.png?v=1751351529&width=1400" alt="Métodos de pago" className="payment-image" />
        
        <div className="contact-info">
          ¿Necesitas ayuda? LLámanos al (4) 444 4489 / Escríbenos a servicioalcliente@surtitodo.com.co COMPAÑÍA COMERCIAL UNIVERSAL S.A.S Carrera 56b # 49a - 29 Medellín, Colombia Todos los derechos reservados SURTITODO 2024
        </div>
      </div>

      <div className="brands-footer">
        <img src="https://surtitodo.co/cdn/shop/files/logos_71b9e6f1-46d5-4bc6-94ff-d7de6255b032.png?v=1753793511&width=1200" alt="Marcas" className="brands-image" />
      </div>

    </div>
  );
};

export default LandingPoloDama;