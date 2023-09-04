"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export type MarkdownCodeSupportedLanguage =
  | "c"
  | "cpp"
  | "csharp"
  | "javascript"
  | "typescript";

export type MarkdownCodeProps = {
  children: string | string[];
  language: MarkdownCodeSupportedLanguage;
};

export default function MarkdownCode({
  children,
  language,
}: MarkdownCodeProps) {
  return (
    <>
      <div className="text-start">
        <SyntaxHighlighter language={language} style={a11yDark}>
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
