import { TwitterTweetEmbed } from "react-twitter-embed";
import useDarkMode from "../../hooks/useDarkMode";

export default function TestingTwitter() {
    const [darkTheme, setDarkTheme] = useDarkMode();

    return (
    <>
      <TwitterTweetEmbed
        tweetId={"1575925906811457536"}
        options={{
          theme: darkTheme ? "dark" : "light",
          dnt: true,
          align: "center",
          conversation: false,
        }}
      />
    </>
  );
}