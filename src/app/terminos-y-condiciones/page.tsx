import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso aplicables al acceso y navegación en SNAKEJUEGO.",
  alternates: {
    canonical: "/terminos-y-condiciones/",
  },
};

export default function TerminosCondicionesPage() {
  return (
    <article className="content-card">
      <Breadcrumbs items={[{ label: "Términos y condiciones" }]} />

      <h1>Términos y Condiciones</h1>

      <p className="lead">
        Última actualización: 24 de noviembre de 2024.
      </p>

      <h2>1. Aceptación de los términos</h2>
      <p>
        El acceso y uso de SNAKEJUEGO atribuye la condición de usuario e implica la aceptación plena de todos los términos y condiciones recogidos en este documento. Si no estás conforme con alguna de las estipulaciones aquí indicadas, te rogamos que te abstengas de utilizar el sitio web.
      </p>

      <h2>2. Uso autorizado y de buena fe</h2>
      <p>
        El usuario se compromete a hacer un uso diligente, correcto y lícito de la plataforma. Queda terminantemente prohibido:
      </p>
      <ul>
        <li>Utilizar el sitio web para fines ilícitos, lesivos de derechos o contrarios a la buena fe.</li>
        <li>Intentar vulnerar las medidas de seguridad, introducir virus o programas maliciosos que puedan dañar los sistemas de SNAKEJUEGO o de terceros.</li>
        <li>Utilizar herramientas automáticas de raspado de datos (scraping) o ataques de denegación de servicio que sobrecarguen la infraestructura.</li>
      </ul>

      <h2>3. Disponibilidad del servicio y juego embebido</h2>
      <p>
        SNAKEJUEGO ofrece el acceso a la plataforma de forma gratuita y continua. No obstante, nos reservamos el derecho a suspender o interrumpir el acceso por motivos de mantenimiento técnico, mejoras de infraestructura o causas de fuerza mayor.
      </p>
      <p>
        Dado que el juego Snake se muestra a través de un enlace de inserción externa facilitado por su proveedor de origen, su disponibilidad, velocidad de respuesta y características operativas dependen directamente de los servidores de dicho proveedor externo.
      </p>

      <h2>4. Modificaciones de los términos</h2>
      <p>
        SNAKEJUEGO podrá modificar en cualquier momento las presentes condiciones para adaptarlas a cambios funcionales, regulatorios o técnicos. Las condiciones actualizadas surtirán efecto a partir del momento de su publicación en el sitio web.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Para resolver dudas acerca de estos términos y condiciones, los usuarios pueden comunicarse con el equipo responsable a través del formulario de contacto disponible en el sitio web.
      </p>
    </article>
  );
}
