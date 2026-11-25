import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: {
    default: "Juega a Snake Online | SNAKEJUEGO",
    template: "%s | SNAKEJUEGO",
  },
  description:
    "Juega a Snake online gratis desde tu navegador. Consulta controles, reglas oficiales, consejos prácticos y trucos para superar tu récord personal.",
  keywords: [
    "Snake juego",
    "jugar a Snake online",
    "juego de la serpiente",
    "Google Snake",
    "Snake arcade",
    "juegos clásicos navegador",
  ],
  authors: [{ name: "SNAKEJUEGO" }],
  creator: "SNAKEJUEGO",
  publisher: "SNAKEJUEGO",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Juega a Snake Online | SNAKEJUEGO",
    description:
      "Juega a Snake desde tu navegador web y descubre las mejores estrategias y guías paso a paso.",
    url: siteConfig.siteUrl || "/",
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juega a Snake Online | SNAKEJUEGO",
    description:
      "Disfruta del juego de la serpiente gratis en tu navegador. Aprende tácticas y trucos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: siteConfig.verifications.google || undefined,
    yandex: siteConfig.verifications.yandex || undefined,
    other: {
      ...(siteConfig.verifications.adsense
        ? { "google-adsense-account": siteConfig.verifications.adsense }
        : {}),
      ...(siteConfig.verifications.bing
        ? { "msvalidate.01": siteConfig.verifications.bing }
        : {}),
      ...(siteConfig.verifications.pinterest
        ? { "p:domain_verify": siteConfig.verifications.pinterest }
        : {}),
      ...(siteConfig.verifications.facebook
        ? { "facebook-domain-verification": siteConfig.verifications.facebook }
        : {}),
      ...(siteConfig.verifications.baidu
        ? { "baidu-site-verification": siteConfig.verifications.baidu }
        : {}),
      ...(siteConfig.verifications.norton
        ? { "norton-safeweb-site-verification": siteConfig.verifications.norton }
        : {}),
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#DEE5FC" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1322" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const base = siteConfig.siteUrl ? siteConfig.siteUrl.replace(/\/$/, "") : "";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${base}/`,
    description: siteConfig.description,
    inLanguage: "es",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: `${base}/`,
    logo: `${base}/favicon.svg`,
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Site Verifications Meta Tags */}
        {siteConfig.verifications.google && (
          <meta name="google-site-verification" content={siteConfig.verifications.google} />
        )}
        {siteConfig.verifications.adsense && (
          <meta name="google-adsense-account" content={siteConfig.verifications.adsense} />
        )}
        {siteConfig.verifications.bing && (
          <meta name="msvalidate.01" content={siteConfig.verifications.bing} />
        )}
        {siteConfig.verifications.pinterest && (
          <meta name="p:domain_verify" content={siteConfig.verifications.pinterest} />
        )}
        {siteConfig.verifications.yandex && (
          <meta name="yandex-verification" content={siteConfig.verifications.yandex} />
        )}
        {siteConfig.verifications.facebook && (
          <meta name="facebook-domain-verification" content={siteConfig.verifications.facebook} />
        )}
        {siteConfig.verifications.baidu && (
          <meta name="baidu-site-verification" content={siteConfig.verifications.baidu} />
        )}
        {siteConfig.verifications.norton && (
          <meta name="norton-safeweb-site-verification" content={siteConfig.verifications.norton} />
        )}

        {/* AdSense Script Tag when AdSense ID is set */}
        {siteConfig.verifications.adsense && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.verifications.adsense}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Google Analytics (GA4) Tag when ID is set */}
        {siteConfig.verifications.googleAnalytics && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.verifications.googleAnalytics}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.verifications.googleAnalytics}');
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity Tag when Project ID is set */}
        {siteConfig.verifications.microsoftClarity && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${siteConfig.verifications.microsoftClarity}");
            `}
          </Script>
        )}

        {/* Inline script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('snakejuego_theme');
                if (storedTheme) {
                  document.documentElement.setAttribute('data-theme', storedTheme);
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (e) {}
            `,
          }}
        />

        {/* Global Structured Data: WebSite and Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <div className="site-wrapper">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
