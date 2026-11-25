"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

interface GameEmbedProps {
  embedUrl?: string;
}

export default function GameEmbed({ embedUrl }: GameEmbedProps) {
  const finalEmbedUrl = embedUrl || siteConfig.defaultEmbedUrl;
  const frameRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!(
        document.fullscreenElement ||
        (document as unknown as { webkitFullscreenElement?: Element })
          .webkitFullscreenElement
      );
      setIsFullscreen(isFs);

      // Notify iframe of fullscreen state
      const iframe = frameRef.current?.querySelector("iframe");
      iframe?.contentWindow?.postMessage(
        { type: "SNAKE_SET_FULLSCREEN", isFullscreen: isFs },
        "*"
      );
    };

    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === "SNAKE_TOGGLE_FULLSCREEN") {
        toggleFullscreen();
      }
    };

    window.addEventListener("message", handleMessage);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, [isFullscreen]);

  const toggleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        const elem = frameRef.current as HTMLElement & {
          webkitRequestFullscreen?: () => Promise<void>;
        };
        if (elem) {
          if (elem.requestFullscreen) {
            await elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            await elem.webkitRequestFullscreen();
          }
        }
      } else {
        const doc = document as Document & {
          webkitExitFullscreen?: () => Promise<void>;
        };
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn("Fullscreen toggle error:", err);
    }
  };

  return (
    <div className="game-wrapper">
      <div
        ref={frameRef}
        className={`game-screen-frame ${isFullscreen ? "is-fullscreen" : ""}`}
      >
        {finalEmbedUrl ? (
          <iframe
            src={finalEmbedUrl}
            title="Juego Snake de Google"
            className="game-iframe"
            allow="fullscreen; autoplay"
            allowFullScreen
            scrolling="no"
            referrerPolicy="no-referrer-when-downgrade"
            loading="eager"
          />
        ) : (
          <div className="game-fallback">
            <p className="fallback-text">
              No se ha configurado la dirección URL del juego embebido.
            </p>
            <a href="/game/index.html" className="fallback-btn">
              Abrir juego
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
