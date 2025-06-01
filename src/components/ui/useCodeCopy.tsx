// components/hooks/useCodeCopy.ts
"use client";
import { useEffect } from "react";

export const useCodeCopy = () => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("[data-copy-button]");
      if (!button) return;

      const card = button.closest(".card");
      if (!card) return;

      const lines = card.querySelectorAll(".code .text");
      const text = Array.from(lines)
        .map((el) => el.textContent?.trim() ?? "")
        .join("\n");

      navigator.clipboard.writeText(text).then(() => {
        // Optional: add UI feedback
        button.classList.add("copied");
        setTimeout(() => button.classList.remove("copied"), 2000);
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
};
