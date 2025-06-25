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

  const handleCopy = async () => {
    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      typeof code === "string"
    ) {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Clipboard write failed", err);
      }
    } else {
      console.warn("Clipboard API not available in this environment");
    }
  };

  return (
    <div className="group relative">
      <pre className={`language-${language}`}>
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded bg-gray-700 px-2 py-1 text-sm text-white opacity-0 transition group-hover:opacity-100"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
