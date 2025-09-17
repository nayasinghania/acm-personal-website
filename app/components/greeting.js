import Image from 'next/image'

export default function Greeting() {
  return (
    <div>
      <p className="text-5xl font-bold pt-4 pb-8">Evil scientist, aspiring ruler of the Tri-State Area</p>
      <Image src="/portrait.jpg" alt="Evil Scientist" width={300} height={400}/>
    </div>
  )
}