import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cómo Jugar a Snake: Controles y Reglas",
  description:
    "Aprende cómo jugar a Snake, conoce los controles oficiales para teclado y pantalla táctil, y comprende las reglas básicas paso a paso.",
  alternates: {
    canonical: "/como-jugar/",
  },
};

export default function ComoJugarPage() {
  return (
    <article className="content-card">
      <Breadcrumbs items={[{ label: "Cómo jugar" }]} />

      <h1>Cómo jugar a Snake</h1>

      <p className="lead">
        El juego de la serpiente (Snake) es uno de los entretenimientos más populares y atemporales del mundo digital. Aunque su premisa es sumamente sencilla de entender, dominar el movimiento y prolongar la partida exige atención constante y reflejos afinados.
      </p>

      <h2>Objetivo básico del juego</h2>
      <p>
        El propósito principal consiste en guiar a una serpiente continua dentro de un recinto cerrado para consumir los elementos comestibles (habitualmente representados por manzanas rojas) que van apareciendo uno a uno en distintas posiciones del tablero. Cada vez que la serpiente ingiere un alimento:
      </p>
      <ul>
        <li>Su longitud aumenta inmediatamente en un segmento o bloque.</li>
        <li>Tu puntuación se incrementa en un punto en el marcador de partida.</li>
        <li>Aparece de forma aleatoria una nueva manzana en cualquier casilla libre restante.</li>
      </ul>

      <h2>Controles del juego</h2>
      <p>
        El juego admite dos métodos de interacción principales en función del dispositivo desde el que estés jugando:
      </p>

      <h3>Controles en ordenador (teclado)</h3>
      <ul>
        <li>
          <strong>Flecha Arriba / Tecla W:</strong> Cambia la dirección de la serpiente hacia la parte superior del tablero.
        </li>
        <li>
          <strong>Flecha Abajo / Tecla S:</strong> Dirige la serpiente hacia la zona inferior.
        </li>
        <li>
          <strong>Flecha Izquierda / Tecla A:</strong> Gira la serpiente hacia la izquierda.
        </li>
        <li>
          <strong>Flecha Derecha / Tecla D:</strong> Gira la serpiente hacia la derecha.
        </li>
      </ul>

      <h3>Controles en móviles y tabletas (pantalla táctil)</h3>
      <ul>
        <li>
          <strong>Deslizamiento (Swipe):</strong> Arrastra brevemente el dedo sobre la superficie del juego en el sentido hacia el que quieras orientar el próximo giro de la serpiente.
        </li>
      </ul>

      <h2>Reglas y condiciones de derrota</h2>
      <p>
        Una partida finaliza de manera inmediata bajo cualquiera de las siguientes circunstancias:
      </p>
      <ul>
        <li>
          <strong>Colisión con los muros exteriores:</strong> En la modalidad clásica con bordes cerrados, impactar contra cualquiera de los cuatro límites del escenario provoca el fin de la partida.
        </li>
        <li>
          <strong>Colisión consigo misma:</strong> Conforme la serpiente se hace más larga, su propio cuerpo se convierte en el mayor obstáculo del juego. Tocar cualquier sección de la cola detiene el juego al instante.
        </li>
        <li>
          <strong>Inversión directa de marcha:</strong> No es posible girar en sentido opuesto al que te desplazas en un solo movimiento (por ejemplo, pulsar hacia abajo si estás ascendiendo), ya que provocaría un choque directo contra el cuerpo de la serpiente.
        </li>
      </ul>

      <h2>Primeros pasos recomendados para principiantes</h2>
      <ol>
        <li>
          <strong>Inicia la partida con calma:</strong> Al comenzar, la serpiente tiene un tamaño reducido y avanza a un ritmo constante. Dedica los primeros segundos a familiarizarte con la respuesta del teclado o la pantalla.
        </li>
        <li>
          <strong>Evita movimientos bruscos:</strong> Cambiar de dirección continuamente en espacios reducidos incrementa las probabilidades de cometer un error de pulsación.
        </li>
        <li>
          <strong>Asegúrate de dejar una ruta de escape:</strong> Antes de lanzarte a recoger una manzana que ha quedado cerca de tu propio cuerpo, comprueba que dispones de suficiente espacio libre para salir del recodo.
        </li>
      </ol>

      <p>
        ¿Listo para poner a prueba tus habilidades? Regresa a la{" "}
        <Link href="/" className="page-inline-link">
          página principal para jugar a Snake
        </Link>{" "}
        o consulta nuestra sección de{" "}
        <Link href="/consejos-y-estrategias/" className="page-inline-link">
          consejos y estrategias avanzadas
        </Link>
        .
      </p>
    </article>
  );
}
