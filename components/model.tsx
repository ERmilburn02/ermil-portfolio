/* 
    import '@google/model-viewer';

const Model = () => (
  <div id="card">
  <model-viewer
    src="/Astronaut.glb"
    ios-src=""
    poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
)

export default Model;

*/


import "@google/model-viewer"

const Model = ({_src, _poster, _alt, _className}: {_src: string, _poster: string, _alt: string, _className: string}) => (
    <>
    {/* @ts-ignore */}
    <model-viewer src={_src} poster={_poster} alt={_alt} shadow-intensity="1" camera-controls auto-rotate ar class={_className}></model-viewer>
    </>
);

export default Model;