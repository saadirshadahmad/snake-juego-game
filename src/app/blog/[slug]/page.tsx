import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const base = siteConfig.siteUrl ? siteConfig.siteUrl.replace(/\/$/, "") : "";
  const postUrl = `${base}/blog/${post.slug}/`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.title} | SNAKEJUEGO`,
      description: post.description,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const otherPosts = getAllPosts().filter((p) => p.slug !== post.slug);
  const base = siteConfig.siteUrl ? siteConfig.siteUrl.replace(/\/$/, "") : "";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${base}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `${base}/`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${base}/blog/${post.slug}/`,
    },
  };

  return (
    <div className="article-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="content-card article-content-card">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog/" },
            { label: post.title },
          ]}
        />

        <div className="article-header">
          <div className="article-meta-tags">
            <span className="article-category">{post.category}</span>
            <span className="article-dot">•</span>
            <time dateTime={post.publishedAt} className="article-date">
              {formattedDate}
            </time>
            <span className="article-dot">•</span>
            <span className="article-read-time">{post.readTime}</span>
          </div>

          <h1>{post.title}</h1>
        </div>

        <div className="article-featured-image">
          <Image
            src={post.coverImage}
            alt={post.imageAlt}
            width={760}
            height={420}
            priority
            className="post-cover"
          />
        </div>

        <div className="article-body">
          {post.content.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "lead" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="article-cta-box">
          <h3>¿Quieres poner a prueba lo que has aprendido?</h3>
          <p>
            Accede ahora mismo a la partida interactiva y experimenta los nuevos movimientos y tácticas en tiempo real.
          </p>
          <Link href="/" className="article-play-btn">
            Jugar a Snake ahora
          </Link>
        </div>
      </article>

      {/* Related Articles Section (only if other articles exist) */}
      {otherPosts.length > 0 && (
        <section className="related-articles-section">
          <h2>Otros artículos de interés</h2>
          <div className="related-grid">
            {otherPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
