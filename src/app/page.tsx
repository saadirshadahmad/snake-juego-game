import Image from "next/image";
import Link from "next/link";
import GameEmbed from "@/components/GameEmbed";
import AdReservation from "@/components/AdReservation";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const base = siteConfig.siteUrl ? siteConfig.siteUrl.replace(/\/$/, "") : "";

  // 1. VideoGame Schema for the embedded Snake game
  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Juego Snake",
    alternateName: "Google Snake Game",
    description:
      "Juego clásico de la serpiente online y gratuito. Controla la serpiente para comer manzanas, crecer de tamaño y evitar colisionar con los bordes o tu propia cola.",
    genre: ["Arcade", "Clásico", "Habilidad"],
    gamePlatform: ["Navegador Web", "PC", "Mobile"],
    applicationCategory: "GameApplication",
    operatingSystem: "Cualquiera",
    inLanguage: "es",
    playMode: "SinglePlayer",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `${base}/`,
    },
  };

  // 2. FAQPage Schema matching the visible FAQs on the homepage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es necesario instalar algún programa o extensión para jugar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. El juego se ejecuta íntegramente a través de la tecnología estándar de tu navegador web moderno, permitiéndote jugar al instante en Windows, macOS, Linux, Android e iOS.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo pausar la partida en cualquier momento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, al hacer clic fuera del recuadro o pulsar la tecla de espacio en la mayoría de configuraciones, el juego detendrá temporalmente el avance de la serpiente hasta que decidas reanudarlo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué la serpiente no puede girar hacia atrás directamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debido a la física del juego, un giro de 180 grados instantáneo haría que la cabeza impactara directamente contra el primer segmento de su cuello, lo que representaría una colisión inmediata no permitida.",
        },
      },
    ],
  };

  return (
    <div className="homepage-container">
      {/* Structured Data: VideoGame & FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Section: Game Area + Reserved Empty Ad Column */}
      <section className="gameplay-hero" aria-label="Zona de juego Snake">
        <div className="gameplay-columns">
          <div className="gameplay-main-col">
            <GameEmbed />
          </div>
          <AdReservation />
        </div>
      </section>

      {/* Main Content Section: Single White Rounded Card below the game */}
      <article className="content-card homepage-article">
        <h1>Juega a Snake online</h1>
        
        <p className="lead">
          Bienvenido a SNAKEJUEGO, tu punto de encuentro para jugar al legendario juego de Snake directamente desde tu navegador web, sin descargas, sin registros previos y con una experiencia rápida y optimizada tanto para ordenador como para dispositivos móviles.
        </p>

        {/* Featured Game Illustration */}
        <div className="game-feature-media">
          <Image
            src="/images/snake-illustration.svg"
            alt="Ilustración de la serpiente azul sobre tablero verde observando una manzana roja"
            width={800}
            height={480}
            priority
            className="feature-image"
          />
        </div>

        <h2>Cómo jugar a Snake</h2>
        <p>
          El funcionamiento del juego es directo e intuitivo: diriges una serpiente a través de un tablero cuadriculado con el objetivo de engullir tantas manzanas como sea posible. Cada pieza consumida incrementa el tamaño de la serpiente y suma puntos a tu marcador.
        </p>
        <p>
          En ordenadores, puedes guiar a la serpiente utilizando las cuatro flechas de dirección del teclado o las teclas W, A, S y D. En pantallas táctiles de tabletas y teléfonos inteligentes, basta con deslizar el dedo en la dirección hacia donde deseas que la serpiente gire. Si deseas conocer todos los detalles técnicos y particularidades del control, consulta nuestra{" "}
          <Link href="/como-jugar/" className="inline-link">
            guía completa sobre cómo jugar
          </Link>
          .
        </p>

        <h2>Reglas del juego</h2>
        <p>
          Las reglas elementales han cautivado a generaciones de jugadores por su perfecta combinación de simplicidad y reto creciente:
        </p>
        <ul>
          <li>
            <strong>Objetivo:</strong> Dirigir a la serpiente hacia el alimento generado de manera aleatoria en el tablero.
          </li>
          <li>
            <strong>Crecimiento:</strong> Cada alimento consumido añade un nuevo bloque al cuerpo de la serpiente, reduciendo progresivamente el espacio disponible para maniobrar.
          </li>
          <li>
            <strong>Fin de la partida:</strong> La ronda concluye de inmediato si la cabeza de la serpiente colisiona contra las paredes exteriores del campo o choca contra cualquier segmento de su propia cola.
          </li>
          <li>
            <strong>Puntuación:</strong> Cada objeto engullido otorga puntos que se van acumulando de forma visible en el marcador superior.
          </li>
        </ul>

        <h2>Consejos para conseguir una mejor puntuación</h2>
        <p>
          Superar los récords personales en Snake requiere serenidad y una táctica de desplazamiento bien estructurada:
        </p>
        <ul>
          <li>
            <strong>Avanza con calma:</strong> Las manzanas no tienen tiempo límite de caducidad. No te apresures en llegar a la fruta si eso implica tomar una curva arriesgada.
          </li>
          <li>
            <strong>Aprovecha el perímetro exterior:</strong> Desplazarte siguiendo los bordes del tablero te otorga mayor visibilidad y mantiene libre el núcleo central de la cuadrícula.
          </li>
          <li>
            <strong>Dibuja patrones en serpentina:</strong> Cuando el cuerpo comience a ocupar una parte considerable del área de juego, muévete en zigzag ordenado para compactar la cola en hileras adyacentes.
          </li>
        </ul>
        <p>
          Para profundizar en tácticas avanzadas de supervivencia y control de espacios estrechos, echa un vistazo a nuestra sección especializada de{" "}
          <Link href="/consejos-y-estrategias/" className="inline-link">
            consejos y estrategias para Snake
          </Link>
          .
        </p>

        <h2>Preguntas frecuentes</h2>
        <h3>¿Es necesario instalar algún programa o extensión para jugar?</h3>
        <p>
          No. El juego se ejecuta íntegramente a través de la tecnología estándar de tu navegador web moderno, permitiéndote jugar al instante en Windows, macOS, Linux, Android e iOS.
        </p>

        <h3>¿Puedo pausar la partida en cualquier momento?</h3>
        <p>
          Sí, al hacer clic fuera del recuadro o pulsar la tecla de espacio en la mayoría de configuraciones, el juego detendrá temporalmente el avance de la serpiente hasta que decidas reanudarlo.
        </p>

        <h3>¿Por qué la serpiente no puede girar hacia atrás directamente?</h3>
        <p>
          Debido a la física del juego, un giro de 180 grados instantáneo haría que la cabeza impactara directamente contra el primer segmento de su cuello, lo que representaría una colisión inmediata no permitida.
        </p>

        <div className="disclaimer-note">
          <p>
            <strong>Nota informativa:</strong> SNAKEJUEGO es un portal independiente dedicado a la divulgación de juegos clásicos de navegador. No estamos afiliados, asociados, autorizados ni respaldados de ninguna manera por Google LLC. El juego Snake mostrado se ofrece mediante inserción pública facilitada por su respectivo proveedor externo.
          </p>
        </div>
      </article>
    </div>
  );
}
