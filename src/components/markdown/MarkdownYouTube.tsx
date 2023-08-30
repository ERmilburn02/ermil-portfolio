import MarkdownIframe from "./MarkdownIframe";

export type MarkdownYouTubeProps = {
  videoID: string; // Can't be undefined, video has to have an ID
  allowFullScreen: boolean;
};

const youtubeURLNoCookieStart = "https://www.youtube-nocookie.com/embed/";
const youtubeURLStart = "https://www.youtube.com/embed/";
const youtubeURLEnd = "?rel=0";
const fullScreenArg = "&fs=";

export default function MarkdownYouTube({
  videoID,
  allowFullScreen = true,
}: MarkdownYouTubeProps) {
  const videoURL = `${youtubeURLNoCookieStart}${videoID}${youtubeURLEnd}${fullScreenArg}${
    allowFullScreen ? 1 : 0
  }`;

  return (
    <>
      <MarkdownIframe
        src={videoURL}
        style={{
          aspectRatio: "16/9",
          width: "83.333333%",
          marginLeft: "auto",
          marginRight: "auto",
          borderStyle: "none",
          borderWidth: "0px",
        }}
        allowFullScreen={allowFullScreen}
      />
      <br />
    </>
  );
}
