"use client";
import React, { useState } from "react";

export const CodeBlock = ({
  code,
  language,
}: {
  code: string;
  language?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Fallback copy failed", err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleCopy = async () => {
    // Check if modern clipboard API is available
    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      window.isSecureContext
    ) {
      try {
        // Check permissions first
        const permission = await navigator.permissions.query({
          name: "clipboard-write" as PermissionName,
        });

        if (permission.state === "denied") {
          console.warn("Clipboard permission denied, using fallback");
          fallbackCopy(code);
          return;
        }

        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Modern clipboard failed, using fallback:", err);
        fallbackCopy(code);
      }
    } else {
      console.warn("Modern clipboard API not available, using fallback");
      fallbackCopy(code);
    }
  };

  return (
    <div className="group relative">
      <pre
        className={`language-${language} overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100`}
      >
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded bg-gray-700 px-3 py-1 text-sm text-white opacity-30 transition-all duration-200 hover:bg-gray-600 focus:opacity-100 group-hover:opacity-100"
        type="button"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
