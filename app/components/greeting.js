import Image from 'next/image'

export default function Greeting() {
  return (
    <div className="flex flex-row text-center items-center justify-center gap-8 px-48 py-12 mt-16">
      <h1 className="text-5xl font-bold pt-4 pb-8 justify-center items-center align-center w-1/3 hover:scale-110 transition-transform duration-500 ease-in-out">Evil scientist, aspiring ruler of the Tri-State Area</h1>
      <Image src="/portrait.jpg" alt="Evil Scientist" className="rounded-xl hover:scale-110 transition-transform duration-500 ease-in-out" width={450} height={600}/>
    </div>
  )
}