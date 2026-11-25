import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}/`} className="blog-card-media-link" tabIndex={-1} aria-hidden="true">
        <div className="blog-card-image-wrap">
          <Image
            src={post.coverImage}
            alt={post.imageAlt}
            width={380}
            height={220}
            className="blog-card-image"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-category">{post.category}</span>
          <time dateTime={post.publishedAt} className="blog-card-date">
            {formattedDate}
          </time>
        </div>

        <h3 className="blog-card-title">
          <Link href={`/blog/${post.slug}/`} className="blog-card-title-link">
            {post.title}
          </Link>
        </h3>

        <p className="blog-card-excerpt">{post.description}</p>

        <div className="blog-card-action">
          <Link href={`/blog/${post.slug}/`} className="blog-card-btn">
            Leer artículo
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
