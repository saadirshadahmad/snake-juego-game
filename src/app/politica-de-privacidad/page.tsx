import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información detallada sobre el tratamiento de datos personales, derechos de los usuarios y política de privacidad de SNAKEJUEGO.",
  alternates: {
    canonical: "/politica-de-privacidad/",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <article className="content-card">
      <Breadcrumbs items={[{ label: "Política de privacidad" }]} />

      <h1>Política de Privacidad</h1>

      <p className="lead">
        Última actualización: 24 de noviembre de 2024.
      </p>

      <p>
        En SNAKEJUEGO nos comprometemos a proteger la privacidad y los datos de nuestros visitantes. La presente Política de Privacidad describe de forma transparente qué información se recopila durante la navegación, con qué finalidades se utiliza y cuáles son tus derechos conforme a la normativa aplicable de protección de datos personales.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El titular y operador de este sitio web es SNAKEJUEGO (en adelante, el &quot;Sitio&quot;). Para cualquier cuestión relativa a la privacidad, puedes ponerte en contacto a través de nuestra dirección de correo electrónico de atención: <code>contacto@example.com</code> (correo provisional sujeto a actualización por el titular del dominio).
      </p>

      <h2>2. Datos recabados y finalidades</h2>
      <p>
        SNAKEJUEGO está diseñado como un portal de acceso libre y gratuito que no exige registro previo, creación de cuenta de usuario ni suscripción de pago. Los datos que tratamos se limitan estrictamente a los siguientes supuestos:
      </p>
      <ul>
        <li>
          <strong>Consultas mediante formulario de contacto:</strong> Si decides contactar voluntariamente con nosotros mediante el formulario habilitado, recabamos tu nombre, dirección de correo electrónico, asunto y el contenido de tu consulta para gestionar y responder a tu solicitud.
        </li>
        <li>
          <strong>Preferencia de tema visual (LocalStorage):</strong> Almacenamos de forma local en tu navegador tu elección entre modo claro y modo oscuro para ofrecerte una visualización coherente en sucesivas visitas. Esta información se almacena en el dispositivo del usuario y no se transmite a nuestros servidores.
        </li>
      </ul>

      <h2>3. Base legal para el tratamiento</h2>
      <p>
        La base jurídica para el tratamiento de los datos aportados voluntariamente a través del formulario de contacto es el consentimiento expreso del usuario manifestado al marcar la casilla de aceptación previa al envío del mensaje.
      </p>

      <h2>4. Conservación de los datos</h2>
      <p>
        Los mensajes remitidos a través del formulario de contacto se conservarán únicamente durante el tiempo estrictamente necesario para resolver la consulta formulada y atender eventuales responsabilidades derivadas de la misma, tras lo cual se procederá a su supresión segura.
      </p>

      <h2>5. Integración de juegos y servicios de terceros</h2>
      <p>
        El juego Snake incluido en el sitio web se aloja externamente y se muestra mediante un marco embebido (iframe) facilitado por su proveedor de origen. Al cargar dicho marco, tu navegador establece una conexión directa con los servidores del proveedor externo, el cual puede recopilar datos técnicos de conexión (como tu dirección IP o datos de agente de usuario) con arreglo a sus propias políticas de privacidad independientes sobre las cuales SNAKEJUEGO no ejerce control.
      </p>

      <h2>6. Derechos de los usuarios</h2>
      <p>
        Tienes derecho a solicitar el acceso a tus datos personales, su rectificación o supresión, la limitación de su tratamiento, u oponerte al mismo. Puedes ejercer estos derechos enviando una comunicación escrita motivada al correo electrónico de contacto indicado en el encabezado.
      </p>

      <h2>7. Modificaciones de la presente política</h2>
      <p>
        SNAKEJUEGO se reserva el derecho a actualizar esta Política de Privacidad para adecuarla a novedades legislativas o cambios funcionales en los servicios ofrecidos en el sitio web.
      </p>
    </article>
  );
}
