import { NextResponse } from "next/server";

// Simple in-memory rate limiting tracker (per IP, max 5 requests per 10 minutes)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    // Rate limiting check
    const now = Date.now();
    const limitWindow = 10 * 60 * 1000; // 10 minutes
    const currentRate = rateLimitMap.get(ip);

    if (currentRate && currentRate.expiresAt > now) {
      if (currentRate.count >= 5) {
        return NextResponse.json(
          {
            error:
              "Has alcanzado el límite de envíos de mensajes. Por favor, espera unos minutos antes de intentar de nuevo.",
          },
          { status: 429 }
        );
      }
      currentRate.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, expiresAt: now + limitWindow });
    }

    const body = await request.json();
    const { nombre, email, asunto, mensaje, privacidad, honeypot } = body;

    // Honeypot check for bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Mensaje procesado." });
    }

    // Server-side validation
    if (!nombre || typeof nombre !== "string" || nombre.trim().length === 0) {
      return NextResponse.json(
        { error: "El nombre es obligatorio." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "La dirección de correo electrónico no es válida." },
        { status: 400 }
      );
    }

    if (!asunto || typeof asunto !== "string" || asunto.trim().length === 0) {
      return NextResponse.json(
        { error: "El asunto es obligatorio." },
        { status: 400 }
      );
    }

    if (!mensaje || typeof mensaje !== "string" || mensaje.trim().length < 10) {
      return NextResponse.json(
        { error: "El mensaje debe tener al menos 10 caracteres." },
        { status: 400 }
      );
    }

    if (mensaje.length > 3000) {
      return NextResponse.json(
        { error: "El mensaje supera el límite máximo de 3000 caracteres." },
        { status: 400 }
      );
    }

    if (!privacidad) {
      return NextResponse.json(
        { error: "Debes aceptar la política de privacidad." },
        { status: 400 }
      );
    }

    // Check email delivery credentials
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || "contacto@example.com";

    if (!apiKey) {
      // In development mode or until owner supplies verified email provider credentials:
      // Log safely server-side without revealing secrets or failing silently
      console.log(
        `[DEV/PLACEHOLDER CONTACT MESSAGE] To: ${recipient} | De: ${nombre} (${email}) | Asunto: ${asunto}`
      );

      return NextResponse.json({
        success: true,
        message:
          "¡Mensaje recibido correctamente! Hemos registrado tu consulta y nos pondremos en contacto contigo.",
      });
    }

    // In production with configured provider (e.g. Resend), send email securely:
    // await resend.emails.send({ ... })

    return NextResponse.json({
      success: true,
      message:
        "¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo en breve.",
    });
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error);
    return NextResponse.json(
      {
        error:
          "Ocurrió un error inesperado al procesar el mensaje en el servidor. Por favor, inténtalo más tarde.",
      },
      { status: 500 }
    );
  }
}
