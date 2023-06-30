export default function Testing() {
  if (typeof window !== "undefined") {
    const isDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log(isDarkTheme);
  }

  return (
    <>
      <></>
    </>
  );
}
