"use client";

import { CSSProperties } from "react";

// Pretty much just pass the it to an actual iframe, but in a client component
// TODO: As needed, add more props

export type MarkdownIframeProps = {
  src: string | undefined;
  style: CSSProperties | undefined;
  allowFullScreen: boolean | undefined;
};

export default function MarkdownIframe({
  src = undefined,
  style = undefined,
  allowFullScreen = undefined,
}: MarkdownIframeProps) {
  return (
    <>
      <iframe src={src} style={style} allowFullScreen={allowFullScreen} />
    </>
  );
}
