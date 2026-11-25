import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal, condiciones generales de uso e información sobre la titularidad de SNAKEJUEGO.",
  alternates: {
    canonical: "/aviso-legal/",
  },
};

export default function AvisoLegalPage() {
  return (
    <article className="content-card">
      <Breadcrumbs items={[{ label: "Aviso legal" }]} />

      <h1>Aviso Legal</h1>

      <p className="lead">
        Última actualización: 24 de noviembre de 2024.
      </p>

      <h2>1. Datos identificativos y titularidad</h2>
      <p>
        En cumplimiento de los principios de transparencia e información general, se informa de que este sitio web es operado de manera independiente por el equipo de SNAKEJUEGO.
      </p>
      <p>
        Canal de comunicación general y notificaciones: <code>contacto@example.com</code> (dirección provisional de contacto a la espera de la confirmación formal por el titular del proyecto).
      </p>

      <h2>2. Objeto del sitio web</h2>
      <p>
        SNAKEJUEGO tiene por objeto poner a disposición del público un espacio informativo y de entretenimiento centrado en el juego Snake, incluyendo guías de control, análisis de reglas, consejos de partida y artículos divulgativos sobre la historia de los videojuegos clásicos.
      </p>

      <h2>3. Propiedad intelectual y contenido de terceros</h2>
      <p>
        Todos los textos originales, logotipos distintivos de la marca SNAKEJUEGO, hojas de estilo, estructura de código fuente y elementos gráficos propios expuestos en este sitio web están protegidos por las leyes de propiedad intelectual y derechos de autor vigentes.
      </p>
      <p>
        Queda expresamente reconocido que los elementos del juego Snake integrado a través de marco externo corresponden a sus legítimos autores y titulares. La mención descriptiva de marcas como &quot;Google Snake&quot; se realiza con fines exclusivamente informativos y de referencia para los usuarios, sin que ello implique afiliación, patrocinio o titularidad sobre dichos signos distintivos.
      </p>

      <h2>4. Exclusión de responsabilidad</h2>
      <p>
        SNAKEJUEGO no se hace responsable de las eventuales interrupciones técnicas, modificaciones o ceses de servicio que pudieran producirse en los servidores externos que alojan el juego embebido. Asimismo, no se garantiza la ausencia absoluta de errores tipográficos u omisiones involuntarias en los textos divulgativos, si bien nos comprometemos a subsanarlos con la máxima celeridad en cuanto tengamos constancia de ellos.
      </p>

      <h2>5. Legislación aplicable</h2>
      <p>
        Las relaciones entre el usuario y el Sitio web se regirán por la legislación común aplicable y cualquier controversia se someterá a los juzgados y tribunales competentes con arreglo a derecho.
      </p>
    </article>
  );
}
