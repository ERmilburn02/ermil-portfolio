import MarkdownIframe from "./MarkdownIframe";

export type MarkdownItchioProps = {
  projectID: string;
};

const itchURLStart = "https://itch.io/embed/";
const itchURLEnd = "?border_width=0&dark=true&bg_color=1F2937";

export default function MarkdownItchio({ projectID }: MarkdownItchioProps) {
  const pageURL = `${itchURLStart}${projectID}${itchURLEnd}`;

  return (
    <>
      <MarkdownIframe
        src={pageURL}
        style={{
          width: "83.333333%",
          maxHeight: "177px", // Only for this specific iframe, since it never goes taller than this
          marginLeft: "auto",
          marginRight: "auto",
          borderStyle: "none",
          borderWidth: "0px",
        }}
        allowFullScreen={false}
      />
      <br />
    </>
  );
}
