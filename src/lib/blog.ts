import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "como-jugar-a-snake-desde-el-navegador",
    title: "Cómo jugar a Snake desde el navegador",
    description:
      "Guía detallada para disfrutar de Snake directamente en tu navegador web, conociendo los controles y configuraciones óptimas.",
    publishedAt: "2024-05-10",
    readTime: "4 min de lectura",
    coverImage: "/images/blog/como-jugar-navegador.svg",
    imageAlt: "Ilustración de pantalla de juego Snake en navegador web",
    category: "Guías para principiantes",
    content: [
      "El juego de Snake es uno de los pasatiempos arcade más reconocidos y accesibles de la historia digital. Hoy en día, no necesitas instalar aplicaciones pesadas ni emuladores complejos para disfrutar de una partida rápida: cualquier navegador moderno en ordenador, tableta o teléfono móvil puede ejecutar el juego con total fluidez.",
      "Para comenzar a jugar, solo debes acceder a la página principal de SNAKEJUEGO. El juego se cargará automáticamente en la parte superior de la pantalla. Una vez visible, pulsa el botón de inicio de partida para que la serpiente empiece su trayectoria.",
      "En ordenadores de sobremesa y portátiles, los controles principales se gestionan con las cuatro flechas de dirección del teclado (Arriba, Abajo, Izquierda, Derecha) o bien con las teclas W, A, S y D. En dispositivos táctiles, el movimiento se controla deslizando suavemente el dedo en la dirección hacia donde deseas orientar el giro.",
      "Un aspecto fundamental al jugar desde el navegador es la concentración visual. Dado que la serpiente se mueve a velocidad constante al inicio, anticipar dos o tres movimientos antes de llegar al borde te permitirá reaccionar a tiempo y evitar giros involuntarios hacia tu propia cola.",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
