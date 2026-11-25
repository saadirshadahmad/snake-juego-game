import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con SNAKEJUEGO para enviarnos consultas, sugerencias o comentarios sobre la plataforma.",
  alternates: {
    canonical: "/contacto/",
  },
};

export default function ContactoPage() {
  return (
    <article className="content-card">
      <Breadcrumbs items={[{ label: "Contacto" }]} />

      <h1>Contacto</h1>

      <p className="lead">
        ¿Tienes alguna sugerencia sobre el sitio, has encontrado algún error técnico o deseas ponerte en contacto con nosotros? Completa el siguiente formulario y te responderemos a la mayor brevedad posible.
      </p>

      <div style={{ marginTop: "28px" }}>
        <ContactForm />
      </div>
    </article>
  );
}
