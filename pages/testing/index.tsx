// import Unity, { UnityContext } from "react-unity-webgl";

// const unityContext = new UnityContext({
//   loaderUrl: "/unity/testing/testing.loader.js",
//   dataUrl: "/unity/testing/testing.data",
//   frameworkUrl: "/unity/testing/testing.framework.js",
//   codeUrl: "/unity/testing/testing.wasm",
// });

import dynamic from 'next/dynamic'

const Model = dynamic(
  () => import('../../components/model'),
  { ssr: false }
)

export default function testing() {
  // return <Unity unityContext={unityContext} className="w-5/6 mx-auto" />;
  return <Model _src='3Dmodels/Astronaut.glb' _alt='Astro' _poster='' _className='w-5/6 h-screen mx-auto'></Model>
}
