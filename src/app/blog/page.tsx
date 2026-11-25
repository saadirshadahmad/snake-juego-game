import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogGrid from "@/components/BlogGrid";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog de Snake: Guías y Consejos",
  description:
    "Lee guías, consejos prácticos, análisis de reglas y artículos históricos para disfrutar al máximo del juego Snake.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const base = siteConfig.siteUrl ? siteConfig.siteUrl.replace(/\/$/, "") : "";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de SNAKEJUEGO",
    description:
      "Colección de artículos dedicados a las mecánicas del juego Snake, guías para principiantes y estrategias.",
    url: `${base}/blog/`,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `${base}/`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${base}/blog/${post.slug}/`,
      datePublished: post.publishedAt,
      image: `${base}${post.coverImage}`,
    })),
  };

  return (
    <div className="blog-index-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="content-card" style={{ marginBottom: "28px" }}>
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <h1>Blog de SNAKEJUEGO</h1>
        <p className="lead" style={{ margin: 0 }}>
          Explora nuestra colección de artículos dedicados a las mecánicas del juego Snake, estrategias de movimiento paso a paso, análisis de errores habituales y la historia de los videojuegos clásicos de arcade.
        </p>
      </div>

      <section aria-label="Listado de artículos del blog">
        <BlogGrid posts={posts} />
      </section>
    </div>
  );
}
