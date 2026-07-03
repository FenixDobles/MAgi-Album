import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estado para guardar el álbum actual y el índice del elemento abierto
  const [fotoActualRef, setFotoActualRef] = useState(null);

  // Estructura de datos organizada por bloques (Álbumes)
  const albumes = [
    {
      idAlbum: "album-1",
      tituloAlbum: "Mi Magi",
      musicaColeccion: "./Mon Amour Remix.mp3",
      fotos: [
        {
          id: 1,
          tipo: "foto",
          url: "./IMG_20260702_174146.jpg",
          titulo: "Ella es Magi",
          fecha: "30 de Mayo, 2026",
          descripcion: "Ella es Magi, la mujer que me hace feliz y me inspira a ser mejor cada día. Es una niña que se esfuerza mucho en todo lo que hace, su sonrisa todo el mundo, es totalmente increible. La amo sin medidda.", 
          musica: "./Mon Amour Remix.mp3"
        },
        {
          id: 2,
          tipo: "foto",
          url: "./IMG_0742.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "Magi es un niña muy linda y especial para mi. El dia que vino a mi casa y compartimos una parte del día juntos fue especial y me hizo muy feliz. La amo mucho y espero que siempre estemos juntos. jijijiji", 
          musica: "./Mon Amour Remix.mp3"
        },
        {
          id: 3,
          tipo: "foto",
          url: "./IMG_0753.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "Me pregunto que cara pondria si vuelve a esta misma escena, de seguro ni vendria PUASDJAJSDJ. En fin, es demasiado linda a pesar de todo.",
          musica: "./Mon Amour Remix.mp3"
        },
        {
          id: 4,
          tipo: "foto",
          url: "./IMG_07471.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "La mirada de las mil suegras :v, te está respirando en la nuca. jjijijij",
          musica: "./Mon Amour Remix.mp3"
        },
       {
          id: 5,
          tipo: "foto",
          url: "./IMG_0758.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "JADSASD, se nota que le gusta mucho, pero a mi me gusta más ella. La amo una infinita infinidad",
          musica: "./Mon Amour Remix.mp3"
        },
        {
          id: 6,
          tipo: "foto",
          url: "./IMG_1145.JPG",
          titulo: "Magi baila",
          fecha: "10 de Mayo, 2026",
          descripcion: "Esta es una niña muy muy hermosa, me gusta pasar tiempo con ella, no importa lo que hagamos o dónde estemos, mientras sea con ella yo estaré feliz. La amo mucho.",
          musica: "./Mon Amour Remix.mp3"
        },
        {
          id: 7,
          tipo: "video",
          url: "./MAgi.mp4",
          thumbnail: "", // Portada en la cuadrícula
          titulo: "Magi baila",
          fecha: "10 de Mayo, 2026",
          descripcion: "-",
          musica: null // Los videos reproducen su propio sonido nativo
        }
      ]
    },
    {
      idAlbum: "album-2",
      tituloAlbum: "Magi y yo",
      fotos: [
        {
          id: 1,
          tipo: "foto",
          url: "./IMG-20260412-WA0029.jpg",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
     {
          id: 2,
          tipo: "foto",
          url: "https://picsum.photos/id/12/1200/900",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 3,
          tipo: "foto",
          url: "https://picsum.photos/id/12/1200/900",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 4,
          tipo: "foto",
          url: "https://picsum.photos/id/12/1200/900",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 5,
          tipo: "foto",
          url: "https://picsum.photos/id/12/1200/900",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 6,
          tipo: "foto",
          url: "https://picsum.photos/id/12/1200/900",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 7,
          tipo: "foto",
          url: "https://picsum.photos/id/12/1200/900",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 8,
          tipo: "foto",
          url: "https://picsum.photos/id/12/1200/900",
          titulo: "Ocaso en la Playa",
          fecha: "2 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 9,
          tipo: "foto",
          url: "./WhatsApp Image 2026-06-27 at 23.05.45.jpeg",
          titulo: "Ocaso en la Playa",
          fecha: "27 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 10,
          tipo: "foto",
          url: "./WhatsApp Image 2026-06-28 at 00.05.56.jpeg",
          titulo: "Ocaso en la Playa",
          fecha: "27 de Junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        }
      ]
    }
  ];

  // Obtener las referencias del elemento multimedia que está abierto actualmente
  const albumAbierto = fotoActualRef ? albumes.find(a => a.idAlbum === fotoActualRef.idAlbum) : null;
  const fotoAbierta = albumAbierto ? albumAbierto.fotos[fotoActualRef.index] : null;

  // Funciones de navegación
  const irAnterior = (e) => {
    if (e) e.stopPropagation();
    setFotoActualRef(prev => ({ ...prev, index: Math.max(0, prev.index - 1) }));
  };

  const irSiguiente = (e) => {
    if (e) e.stopPropagation();
    setFotoActualRef(prev => ({ ...prev, index: Math.min(albumAbierto.fotos.length - 1, prev.index + 1) }));
  };

  // Escuchador del teclado (Teclas Esc, Flecha Izquierda y Derecha)
  useEffect(() => {
    const escucharTeclado = (evento) => {
      if (!fotoActualRef) return;
      
      if (evento.key === 'Escape') {
        setFotoActualRef(null);
      } else if (evento.key === 'ArrowLeft' && fotoActualRef.index > 0) {
        irAnterior();
      } else if (evento.key === 'ArrowRight' && fotoActualRef.index < albumAbierto.fotos.length - 1) {
        irSiguiente();
      }
    };

    window.addEventListener('keydown', escucharTeclado);
    return () => window.removeEventListener('keydown', escucharTeclado);
  }, [fotoActualRef, albumAbierto]);

  return (
    <div className="contenedor-album">
      <h1>Pa que las veas ;v</h1>
      <p>Espero vayan aumentando...</p>
      
      {/* Bloques de Álbumes */}
      {albumes.map((album) => (
        <div key={album.idAlbum} className="seccion-album">
          <h2 className="titulo-album">{album.tituloAlbum}</h2>
          
          <div className="galeria">
            {album.fotos.map((elemento, numero) => (
              <div key={elemento.id} className="marco-foto" onClick={() => setFotoActualRef({ idAlbum: album.idAlbum, index: numero })}>
                <img src={elemento.tipo === 'video' ? elemento.thumbnail : elemento.url} alt={elemento.titulo} />
                {elemento.tipo === 'video' && <div className="icono-play">▶</div>}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Visor de Pantalla Completa (Estilo Facebook) */}
      {fotoAbierta && (
        <div className="pantalla-completa-lightbox" onClick={() => setFotoActualRef(null)}>
          <div className="panel-lightbox" onClick={(e) => e.stopPropagation()}>
            
            {/* Panel Izquierdo: Visualizador (Foto o Video) */}
            <div className="panel-imagen">
              {fotoActualRef.index > 0 && (
                <button className="nav-prev" onClick={irAnterior}>&lt;</button>
              )}
              
              {/* Renderizado condicional con KEY para obligar a React a reiniciar el componente */}
              {fotoAbierta.tipo === 'video' ? (
                <video 
                  key={fotoAbierta.url} 
                  src={fotoAbierta.url} 
                  controls 
                  autoPlay 
                  muted 
                  className="video-reproductor" 
                />
              ) : (
                <img src={fotoAbierta.url} alt={fotoAbierta.titulo} />
              )}
              
              {fotoActualRef.index < albumAbierto.fotos.length - 1 && (
                <button className="nav-next" onClick={irSiguiente}>&gt;</button>
              )}
            </div>
            
            {/* Panel Derecho: Información Lateral */}
            <div className="panel-info">
              <button className="boton-cerrar-lightbox" onClick={() => setFotoActualRef(null)}>X</button>
              
              <div className="info-texto">
                <h2>{fotoAbierta.titulo}</h2>
                <span className="fecha">📅 {fotoAbierta.fecha}</span>
                <p>{fotoAbierta.descripcion}</p>
              </div>
              
              {/* Música exclusiva solo para las fotografías */}
              {fotoAbierta.tipo === 'foto' && fotoAbierta.musica && (
                <div className="musica-individual">
                  <p>🎵 Sonando ahora:</p>
                  <audio src={fotoAbierta.musica} controls autoPlay loop />
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;