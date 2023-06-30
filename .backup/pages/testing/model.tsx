import dynamic from 'next/dynamic'

const Model = dynamic(
  () => import('../../components/model'),
  { ssr: false }
)

export default function TestingModel() {
  return <Model _src='/3Dmodels/Astronaut.glb' _alt='Astro' _poster='' _className='w-5/6 h-screen mx-auto'></Model>
}