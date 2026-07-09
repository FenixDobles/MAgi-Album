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
      musicaColeccion: "./Freebola.mp3",
      fotos: [
        {
          id: 1,
          tipo: "foto",
          url: "./IMG_20260702_174146.jpg",
          titulo: "Ella es Magi",
          fecha: "30 de Mayo, 2026",
          descripcion: "Ella es mi Magi, la mujer que me hace feliz y me gusta estar con ella. Es una niña que se esfuerza mucho en todo lo que hace, su sonrisa y como se rie me encanta, es totalmente increible. La amo sin medidda.", 
          musica: "./Freebola.mp3"
        },
        {
          id: 2,
          tipo: "foto",
          url: "./IMG_0742.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "Magi es un niña muy linda y especial para mi, no sé que haria yo sin ella. El dia que vino a mi casa y compartimos una parte del día juntos fue especial para mi y me hizo muy feliz. La amo mucho y espero que siempre estemos juntos, hasta la infinidad. jijijiji", 
          musica: "./Freebola.mp3"
        },
        {
          id: 3,
          tipo: "foto",
          url: "./IMG_0753.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "Me pregunto que cara pondria si vuelve a esta misma escena, de seguro ni vendria PUASDJAJSDJ. En fin, es demasiado linda a pesar de todo. Cada momento que paso a su lado es muy especial para mi, me gusta pasar tiempo con mi novia. ><",
          musica: "./Freebola.mp3"
        },
        {
          id: 4,
          tipo: "foto",
          url: "./IMG_07471.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "La mirada de las mil suegras :v, te está respirando en la nuca. jjijijij. No sé porque eres tan linda, me encantas. ñaaaaam",
          musica: "./Freebola.mp3"
        },
       {
          id: 5,
          tipo: "foto",
          url: "./IMG_0758.JPG",
          titulo: "Visita magica de Magi :v",
          fecha: "1 de Febrero, 2026",
          descripcion: "JADSASD, se nota que le gusta mucho, pero a mi me gusta más ella. La amo una infinita infinidad, Yo tambien quisiera darle un buen mordisco y no hablo de la fruta. JIJIJIJ. ><",
          musica: "./Freebola.mp3"
        },
        {
          id: 6,
          tipo: "foto",
          url: "./IMG_1145.JPG",
          titulo: "Magi Bonita",
          fecha: "10 de mayo, 2026",
          descripcion: "Esta es una niña muy muy hermosa, me gusta pasar tiempo con ella, no importa lo que hagamos o dónde estemos, mientras sea con ella yo estaré feliz. La amo mucho y no me cansaré de repetirlo, es la mejor novia que podria existir.",
          musica: "./Freebola.mp3"
        },
        {
          id: 7,
          tipo: "foto",
          url: "IMG-20260511-WA0008.jpg",
          titulo: "Magi y yo",
          fecha: "11 de mayo, 2026",
          descripcion: "Cada vez que estoy contigo me siento en las nubes, al igual que Pucca y Garu. Me gusta mucho estar contigo, no me importa donde y cuando. Mis dias contigo son como aún más lindos que esta foto, pero nunca más lindos que tú, ustes es insuperable. Muaaack la amo con todo mi corazón. <3",
          musica: "./Freebola.mp3"
        }
      ]
    },
    {
      idAlbum: "album-2",
      tituloAlbum: "Magi y yo",
      musicaColeccion: "./",
      fotos: [
        {
          id: 1,
          tipo: "foto",
          url: "./IMG_20251130_104302.jpg",
          titulo: "Como amo a mi novia",
          fecha: "30 de noviembre, 2025",
          descripcion: "Me gusta cuando estás a mi lado, eres todo lo que yo quiero. Sentir tu calor y tu cariño cuando me abrazas y tomas de la mano me hace sentir muy feliz. Te amo mucho y no me canso de decirlo, eres la mejor novia que podría tener.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
     {
          id: 2,
          tipo: "foto",
          url: "./IMG_20251130_104308.jpg",
          titulo: "Como amo a mi novia",
          fecha: "30 de noviembre, 2025",
          descripcion: "Es increible como esta niña tan bella se pudo haber fijado en mi, que tan afortunado puedo ser de tenerla conmigo. Yo espero que este grandioso sueño sea eterno.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 3,
          tipo: "foto",
          url: "./IMG-20260404-WA0077.jpg",
          titulo: "Magi y el amor de su vida",
          fecha: "4 de abril, 2026",
          descripcion: "Claramente vemos como Magi está al lado del amor de su vida y al costado voy yo :v. jijijiji. Yo la amo a ella.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 4,
          tipo: "foto",
          url: "./IMG-20260412-WA0029.jpg",
          titulo: "Un beso",
          fecha: "12 de abril, 2026",
          descripcion: "Magi es muy hermosa, es completamente dificil y complicado no intentar darle un beso, un beso en la frente o en la mejilla, pero un beso en los labios es lo que más deseo. solo un beso.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 5,
          tipo: "foto",
          url: "./IMG-20260412-WA0028.jpg",
          titulo: "Ojo al piojo",
          fecha: "12 de abril, 2026",
          descripcion: "visitar a Magi me gusta, en realidad todo lo que haga con ella me gusta, aprecio todo lo que ella hace por mi, me gusta todo de ella, ñaaaam.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 6,
          tipo: "foto",
          url: "./IMG-20260412-WA0027.jpg",
          titulo: "Ojo al piojo",
          fecha: "12 de abril, 2026",
          descripcion: "Me gusta ver a Magi feliz y sonriendo, me gusta verla reir y escuchar su risa, me gusta verla contenta. Ver sus ojos tan bonitos, los compararia con un cielo estrellado, pero no hay cielo que se compare con la belleza de sus ojos. Si a ti te gusta Pucca, a mi me gusta Magi, y no hay comparación. La amo mucho. muaaaack.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 7,
          tipo: "foto",
          url: "./IMG-20260411-WA0017.jpg",
          titulo: "Mi linda Novia",
          fecha: "12 de abril, 2026",
          descripcion: "No entiendo, no entiendo como puedes ser tan bella, linda, hermosa, espectacular. Cada vez que veo las pocas fotos que tenemos juntos me doy cuenta de lo afortunado que soy de tener a una novia tan linda y hermosa como tú. Eres espectacular.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 8,
          tipo: "foto",
          url: "./IMG_1150.JPG",
          titulo: "Magi espectacular",
          fecha: "10 de mayo, 2026",
          descripcion: "Me gusta verme a tu lado, me gusta estar contigo. No me gusta tomarme fotos porque me molesta la idea de que mi rostro ande por ahi, pero contigo es distinto, me gusta verme a tu lado y estar junto a ti. Pero mucho mas que todo eso, me encanta verte a ti, eres demasiado linda y hermosa. La amo mucho y no me canso de decirlo. jijijijij. <3",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 9,
          tipo: "foto",
          url: "./IMG-20260530-WA0002.jpg",
          titulo: "Dos bellas mujeres",
          fecha: "30 de mayo, 2026",
          descripcion: "En esta foto vemos a dos bellas mujeres, una es mi novia a quien yo amo mucho. Como puede ser tan fotogenica, tan hermosa y tan bella. Me gusta pasar eventos a tu lado, me gustas tu. muaaack <3.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 10,
          tipo: "foto",
          url: "./IMG-20260622-WA0090.jpg",
          titulo: "Un mono",
          fecha: "30 de mayo, 2026",
          descripcion: "Los monos se cuelgan de una rama cunado la necesitan y yo te necesito simpre, dejame colgarme de ti y no me sueltes nunca. Necesito mucho de ti, por mi fuera estaria como garrapata pegado a ti, ojala.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 11,
          tipo: "foto",
          url: "./WhatsApp Image 2026-06-27 at 23.05.45.jpeg",
          titulo: "afortunadas mis piernas",
          fecha: "22 de junio, 2026",
          descripcion: "--",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 12,
          tipo: "foto",
          url: "./WhatsApp Image 2026-06-28 at 00.05.56.jpeg",
          titulo: "Ocaso en la Playa",
          fecha: "27 de junio, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        }
      ]
    },
    {
      idAlbum: "album-3",
      tituloAlbum: "Oddie y Freed",
      musicaColeccion: "./",
      fotos: [
        {
          id: 1,
          tipo: "foto",
          url: "./IMG_0175.JPG",
          titulo: "Oddie",
          fecha: " 24 de enero, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 2,
          tipo: "foto",
          url: "./IMG_0836.JPG",
          titulo: "Fred",
          fecha: "15 de febrero, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 3,
          tipo: "foto",
          url: "./IMG_0837.JPG",
          titulo: "Oddie y Fred",
          fecha: "25 de febrero, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 4,
          tipo: "foto",
          url: "./IMG-20260515-WA0024.jpeg",
          titulo: "Ocaso en la Playa",
          fecha: "15 de mayo, 2026",
          descripcion: "El sol escondiéndose en el horizonte, creando reflejos dorados sobre el agua.",
          musica: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 5,
          tipo: "foto",
          url: "./IMG-20260515-WA0026.jpeg",
          titulo: "Ocaso en la Playa",
          fecha: "15 de mayo, 2026",
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
              <button className="boton-cerrar-lightbox" onClick={() => setFotoActualRef(null)}>❌​</button>
              
              <div className="info-texto" key={fotoAbierta.id}>
                <h2>{fotoAbierta.titulo}</h2>
                <span className="fecha">📅 {fotoAbierta.fecha}</span>
                <p>{fotoAbierta.descripcion}</p>
              </div>
              
              {/* Música exclusiva solo para las fotografías */}
              {fotoAbierta.tipo === 'foto' && fotoAbierta.musica && (
                <div className="musica-individual">
                  <p>🎵 Musica para ti :p</p>
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