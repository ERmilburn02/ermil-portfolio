import {Unity, useUnityContext} from "react-unity-webgl";

export default function EmbedTesting() {
  const {unityProvider} = useUnityContext({
    loaderUrl: "/unity/testing/testing.loader.js",
    dataUrl: "/unity/testing/testing.data",
    frameworkUrl: "/unity/testing/testing.framework.js",
    codeUrl: "/unity/testing/testing.wasm",
  });

  return <Unity unityProvider={unityProvider} className="w-screen h-screen" />;
}
