// hooks/useCodeCopy.ts
import { useEffect } from "react";

export function useCodeCopy(containerSelector: string = "article") {
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const codeBlocks = container.querySelectorAll("pre > code");

    codeBlocks.forEach((code) => {
      const pre = code.parentElement;
      if (!pre || pre.querySelector(".copy-btn")) return; // Avoid duplicates

      const button = document.createElement("button");
      button.innerText = "Copy";
      button.className =
        "copy-btn absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 text-xs rounded hover:bg-gray-600";

      button.onclick = async () => {
        try {
          await navigator.clipboard.writeText(code.textContent || "");
          button.innerText = "Copied!";
          setTimeout(() => (button.innerText = "Copy"), 2000);
        } catch (err) {
          button.innerText = "Failed";
        }
      };

      pre.classList.add("relative"); // Ensure the pre is relatively positioned
      pre.appendChild(button);
    });
  }, [containerSelector]);
}
