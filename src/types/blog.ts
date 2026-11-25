export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  coverImage: string;
  imageAlt: string;
  category: string;
  content: string[]; // Structured paragraphs & markdown-like blocks
}
