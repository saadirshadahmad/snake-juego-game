"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

interface FormState {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
  privacidad: boolean;
  honeypot: string; // Anti-spam hidden field
}

interface ValidationErrors {
  nombre?: string;
  email?: string;
  asunto?: string;
  mensaje?: string;
  privacidad?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
    privacidad: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Por favor, introduce tu nombre.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Por favor, introduce tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Introduce una dirección de correo válida.";
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "Por favor, especifica un asunto.";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Por favor, escribe el contenido de tu mensaje.";
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    } else if (formData.mensaje.length > 3000) {
      newErrors.mensaje = "El mensaje no puede superar los 3000 caracteres.";
    }

    if (!formData.privacidad) {
      newErrors.privacidad =
        "Debes aceptar la política de privacidad para enviar el mensaje.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) {
      return;
    }

    // Check honeypot
    if (formData.honeypot) {
      // Quietly reject bots
      setStatusMessage({
        type: "success",
        text: "Tu mensaje ha sido enviado correctamente.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
          privacidad: formData.privacidad,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMessage({
          type: "success",
          text:
            data.message ||
            "¡Mensaje recibido con éxito! Nos pondremos en contacto contigo lo antes posible.",
        });
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
          privacidad: false,
          honeypot: "",
        });
        setErrors({});
      } else {
        setStatusMessage({
          type: "error",
          text:
            data.error ||
            "No se pudo enviar el mensaje debido a un problema temporal. Por favor, inténtalo de nuevo más tarde.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text:
          "Ocurrió un error de conexión al enviar el formulario. Por favor, verifica tu conexión e inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      {/* Honeypot field hidden from real users */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website-field">No completar este campo</label>
        <input
          id="website-field"
          type="text"
          value={formData.honeypot}
          onChange={(e) =>
            setFormData({ ...formData, honeypot: e.target.value })
          }
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Status Alert */}
      {statusMessage && (
        <div
          role="alert"
          className={`form-alert ${
            statusMessage.type === "success" ? "alert-success" : "alert-error"
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      {/* Nombre */}
      <div className="form-group">
        <label htmlFor="contact-nombre" className="form-label">
          Nombre completo <span className="req">*</span>
        </label>
        <input
          id="contact-nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={(e) =>
            setFormData({ ...formData, nombre: e.target.value })
          }
          className={`form-input ${errors.nombre ? "input-error" : ""}`}
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "nombre-error" : undefined}
          required
        />
        {errors.nombre && (
          <p id="nombre-error" className="error-message">
            {errors.nombre}
          </p>
        )}
      </div>

      {/* Correo electrónico */}
      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">
          Correo electrónico <span className="req">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={`form-input ${errors.email ? "input-error" : ""}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && (
          <p id="email-error" className="error-message">
            {errors.email}
          </p>
        )}
      </div>

      {/* Asunto */}
      <div className="form-group">
        <label htmlFor="contact-asunto" className="form-label">
          Asunto <span className="req">*</span>
        </label>
        <input
          id="contact-asunto"
          type="text"
          name="asunto"
          value={formData.asunto}
          onChange={(e) =>
            setFormData({ ...formData, asunto: e.target.value })
          }
          className={`form-input ${errors.asunto ? "input-error" : ""}`}
          aria-invalid={!!errors.asunto}
          aria-describedby={errors.asunto ? "asunto-error" : undefined}
          required
        />
        {errors.asunto && (
          <p id="asunto-error" className="error-message">
            {errors.asunto}
          </p>
        )}
      </div>

      {/* Mensaje */}
      <div className="form-group">
        <label htmlFor="contact-mensaje" className="form-label">
          Mensaje <span className="req">*</span>
        </label>
        <textarea
          id="contact-mensaje"
          name="mensaje"
          rows={6}
          value={formData.mensaje}
          onChange={(e) =>
            setFormData({ ...formData, mensaje: e.target.value })
          }
          className={`form-textarea ${errors.mensaje ? "input-error" : ""}`}
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
          required
        />
        {errors.mensaje && (
          <p id="mensaje-error" className="error-message">
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Privacidad Checkbox */}
      <div className="form-checkbox-group">
        <input
          id="contact-privacidad"
          type="checkbox"
          name="privacidad"
          checked={formData.privacidad}
          onChange={(e) =>
            setFormData({ ...formData, privacidad: e.target.checked })
          }
          className="form-checkbox"
          aria-invalid={!!errors.privacidad}
          aria-describedby={errors.privacidad ? "privacidad-error" : undefined}
          required
        />
        <label htmlFor="contact-privacidad" className="checkbox-label">
          He leído y acepto la{" "}
          <Link href="/politica-de-privacidad/" className="legal-link" target="_blank">
            política de privacidad
          </Link>{" "}
          para el procesamiento de esta consulta. <span className="req">*</span>
        </label>
      </div>
      {errors.privacidad && (
        <p id="privacidad-error" className="error-message">
          {errors.privacidad}
        </p>
      )}

      {/* Submit Button */}
      <div className="form-submit-wrap">
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? "Enviando mensaje..." : "Enviar mensaje"}
        </button>
      </div>

      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 650px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .req {
          color: #e53e3e;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: var(--btn-radius);
          border: 1px solid var(--border-subtle);
          background-color: var(--bg-surface-elevated);
          color: var(--text-main);
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--brand-blue);
          box-shadow: 0 0 0 3px rgba(79, 120, 248, 0.2);
          outline: none;
        }

        .input-error {
          border-color: #e53e3e !important;
        }

        .error-message {
          color: #e53e3e;
          font-size: 0.85rem;
          margin-top: 4px;
          margin-bottom: 0;
        }

        .form-checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 4px;
        }

        .form-checkbox {
          margin-top: 4px;
          width: 18px;
          height: 18px;
          accent-color: var(--brand-blue);
          cursor: pointer;
        }

        .checkbox-label {
          font-size: 0.9rem;
          color: var(--text-main);
          line-height: 1.45;
          cursor: pointer;
        }

        .legal-link {
          color: var(--brand-blue);
          text-decoration: underline;
        }

        .form-submit-wrap {
          margin-top: 8px;
        }

        .submit-button {
          background-color: var(--brand-blue);
          color: #ffffff;
          padding: 14px 28px;
          font-size: 1.05rem;
          font-weight: 600;
          border-radius: var(--btn-radius);
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .submit-button:hover:not(:disabled) {
          background-color: var(--brand-blue-hover);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-alert {
          padding: 14px 18px;
          border-radius: var(--btn-radius);
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.45;
        }

        .alert-success {
          background-color: #e6fffa;
          color: #234e52;
          border: 1px solid #b2f5ea;
        }

        .alert-error {
          background-color: #fff5f5;
          color: #9b2c2c;
          border: 1px solid #fed7d7;
        }

        @media (max-width: 600px) {
          .submit-button {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
}
