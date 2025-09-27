import Image from 'next/image'

export default function Greeting() {
  return (
    <div className="flex flex-row text-center items-center justify-center gap-8 px-48 py-12">
      <h1 className="text-5xl font-bold pt-4 pb-8 justify-center items-center align-center w-1/3">Evil scientist, aspiring ruler of the Tri-State Area</h1>
      <Image src="/portrait.jpg" alt="Evil Scientist" className="rounded-xl" width={450} height={600}/>
    </div>
  )
}