import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/unity/testing/testing.loader.js",
  dataUrl: "/unity/testing/testing.data",
  frameworkUrl: "/unity/testing/testing.framework.js",
  codeUrl: "/unity/testing/testing.wasm",
});

export default function EmbedTesting() {
  return <Unity unityContext={unityContext} className="w-screen h-screen" />;
}
