import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el uso de cookies y tecnologías de almacenamiento local en SNAKEJUEGO.",
  alternates: {
    canonical: "/politica-de-cookies/",
  },
};

export default function PoliticaCookiesPage() {
  return (
    <article className="content-card">
      <Breadcrumbs items={[{ label: "Política de cookies" }]} />

      <h1>Política de Cookies</h1>

      <p className="lead">
        Última actualización: 24 de noviembre de 2024.
      </p>

      <p>
        Esta Política de Cookies explica de forma clara qué son las cookies, qué tecnologías de almacenamiento emplea SNAKEJUEGO y cómo puedes gestionar tus preferencias en tu navegador web.
      </p>

      <h2>1. ¿Qué son las cookies y el almacenamiento local?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web descargan en tu navegador o dispositivo al visitarlos. Por su parte, tecnologías como <em>LocalStorage</em> permiten a los sitios web almacenar pares clave-valor de información directamente en tu navegador sin enviarlos automáticamente en las cabeceras de cada petición HTTP.
      </p>

      <h2>2. Tecnologías utilizadas en SNAKEJUEGO</h2>
      <p>
        SNAKEJUEGO mantiene un compromiso estricto de privacidad y ligereza técnica:
      </p>
      <ul>
        <li>
          <strong>No utilizamos cookies propias de seguimiento ni cookies publicitarias de terceros</strong> en la versión inicial de la plataforma.
        </li>
        <li>
          <strong>Preferencia de apariencia visual (LocalStorage):</strong> Utilizamos la clave <code>snakejuego_theme</code> en el almacenamiento local de tu navegador para recordar si prefieres visualizar el sitio en modo claro o modo oscuro. Esta clave es de naturaleza puramente técnica y funcional, no recopila datos de carácter personal y permanece alojada en tu propio navegador.
        </li>
      </ul>

      <h2>3. Contenido incrustado de proveedores externos</h2>
      <p>
        El juego interactivo presente en la portada se proporciona mediante un marco incrustado (iframe) procedente de un servidor externo. El proveedor de dicho juego puede hacer uso de sus propias cookies técnicas o mecanismos de persistencia para guardar la configuración de sonido o los ajustes de la partida dentro del propio marco. Dichas tecnologías se rigen bajo las políticas del proveedor de dicho contenido.
      </p>

      <h2>4. Cómo configurar o eliminar el almacenamiento en tu navegador</h2>
      <p>
        Puedes revisar, restringir o eliminar en cualquier instante los datos almacenados localmente y las cookies accediendo a la configuración de privacidad y seguridad de tu navegador web:
      </p>
      <ul>
        <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
        <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
        <li><strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Administrar datos del sitio web.</li>
        <li><strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
      </ul>
    </article>
  );
}
