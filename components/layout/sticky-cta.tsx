"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { root: null, threshold: 0.05 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white shadow-xl transition hover:scale-105",
        hidden && "pointer-events-none opacity-0",
      )}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold">Chat</span>
    </a>
  );
}
