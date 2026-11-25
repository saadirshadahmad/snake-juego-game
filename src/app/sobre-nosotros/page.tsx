import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce el propósito de SNAKEJUEGO y cómo ofrecemos una experiencia accesible e independiente para disfrutar del juego Snake en el navegador.",
  alternates: {
    canonical: "/sobre-nosotros/",
  },
};

export default function SobreNosotrosPage() {
  return (
    <article className="content-card">
      <Breadcrumbs items={[{ label: "Sobre nosotros" }]} />

      <h1>Sobre SNAKEJUEGO</h1>

      <p className="lead">
        SNAKEJUEGO nació con el firme compromiso de ofrecer a la comunidad hispanohablante un espacio web limpio, accesible, rápido y respetuoso para disfrutar del clásico e imperecedero juego Snake directamente en el navegador.
      </p>

      <h2>Nuestra filosofía de diseño</h2>
      <p>
        En una red a menudo saturada de ventanas emergentes invasivas, anuncios molestos y tiempos de carga excesivos, en SNAKEJUEGO apostamos por un enfoque minimalista:
      </p>
      <ul>
        <li>
          <strong>Prioridad de juego:</strong> El juego se encuentra en el primer plano para que comiences tu partida sin distracciones ni pasos previos innecesarios.
        </li>
        <li>
          <strong>Rendimiento y ligereza:</strong> Desarrollado sobre tecnologías web modernas para asegurar que las páginas carguen de forma casi instantánea en cualquier red y dispositivo.
        </li>
        <li>
          <strong>Contenido útil y original:</strong> Redactamos guías rigurosas, explicaciones de mecánicas y análisis históricos para enriquecer la experiencia de juego de principiantes y veteranos.
        </li>
        <li>
          <strong>Accesibilidad:</strong> Interfaz con soporte para modo oscuro, navegación completa por teclado y respeto por los estándares de contraste visual y lectura de pantalla.
        </li>
      </ul>

      <h2>Aviso de independencia y titularidad</h2>
      <p>
        SNAKEJUEGO es un sitio web operado de manera totalmente independiente. No estamos afiliados, patrocinados, respaldados ni vinculados oficialmente con Google LLC ni con ninguna de sus marcas filiales.
      </p>
      <p>
        El juego de Snake accesible en este portal se ofrece a través de la integración mediante marco público (iframe) provisto externamente. SNAKEJUEGO no reclama derechos de propiedad intelectual sobre el código motor del juego de terceros, el cual permanece bajo la titularidad y condiciones de su respectivo proveedor.
      </p>

      <h2>Contacto y sugerencias</h2>
      <p>
        Agradecemos enormemente los comentarios de nuestros visitantes. Si deseas hacernos llegar una sugerencia, reportar un fallo de visualización o realizar cualquier consulta relacionada con el sitio, no dudes en escribirnos a través de nuestro{" "}
        <Link href="/contacto/" className="page-inline-link">
          formulario de contacto
        </Link>
        .
      </p>
    </article>
  );
}
