export interface SiteConfig {
  name: string;
  domain: string;
  siteUrl: string;
  defaultEmbedUrl: string;
  description: string;
  theme: {
    pageBgLight: string;
    brandBlue: string;
    brandGreen: string;
    h1Green: string;
    mainTextLight: string;
    surfaceWhite: string;
  };
  navigation: {
    name: string;
    href: string;
  }[];
  legalLinks: {
    name: string;
    href: string;
  }[];
  ownerContactPlaceholder: string;
  verifications: {
    google: string;
    adsense: string;
    bing: string;
    pinterest: string;
    yandex: string;
    facebook: string;
    baidu: string;
    norton: string;
    googleAnalytics: string;
    microsoftClarity: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "SNAKEJUEGO",
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  defaultEmbedUrl:
    process.env.NEXT_PUBLIC_SNAKE_GAME_EMBED_URL || "/game/index.html",
  description:
    "Juega al clásico juego Snake gratis en tu navegador. Aprende controles, reglas, tácticas avanzadas y curiosidades en SNAKEJUEGO.",
  theme: {
    pageBgLight: "#DEE5FC",
    brandBlue: "#4F78F8",
    brandGreen: "#A7D948",
    h1Green: "#8ECC39",
    mainTextLight: "#1C1C1C",
    surfaceWhite: "#FFFFFF",
  },
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Cómo jugar", href: "/como-jugar/" },
    { name: "Consejos y estrategias", href: "/consejos-y-estrategias/" },
    { name: "Blog", href: "/blog/" },
    { name: "Sobre nosotros", href: "/sobre-nosotros/" },
    { name: "Contacto", href: "/contacto/" },
  ],
  legalLinks: [
    { name: "Política de privacidad", href: "/politica-de-privacidad/" },
    { name: "Política de cookies", href: "/politica-de-cookies/" },
    { name: "Aviso legal", href: "/aviso-legal/" },
    { name: "Términos y condiciones", href: "/terminos-y-condiciones/" },
  ],
  ownerContactPlaceholder: "contacto@example.com",
  verifications: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    adsense: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ACCOUNT || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION || "",
    baidu: process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION || "",
    norton: process.env.NEXT_PUBLIC_NORTON_VERIFICATION || "",
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",
    microsoftClarity: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "",
  },
};
