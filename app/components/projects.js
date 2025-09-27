import Image from 'next/image'

export default function Projects() {
  return (
    <div id="projects">
      <h2 className="text-4xl pt-8 pb-4 font-bold">Projects</h2>
      <div className="grid grid-cols-2 gap-12">
        <div className="rounded-xl">
          <h3 className="text-2xl font-semibold pb-4">Destructor-Inator Ray</h3>
          <Image src="/destructor-inator.jpg" alt="Destructor-Inator Ray" className="rounded-xl pb-2" width={400} height={300} />
          <p className="pt-4 pb-2">An inator that can destroy any object in the tri-state area.</p>
          <a href="#">Learn More</a>
        </div>
        <div className="rounded-xl">
          <h3 className="text-2xl font-semibold pb-4">De-Love-inator</h3>
          <Image src="/de-love-inator.png" alt="De-Love-inator" className="rounded-xl pb-2" width={400} height={300} />
          <p className="pt-4 pb-2">A low-earth-orbit inator that emits a laser that eliminates love from the Tri-State area.</p>
          <a href="#">Learn More</a>
        </div>
        <div className="rounded-xl">
          <h3 className="text-2xl font-semibold pb-4">Make-Everything-Evil-inator</h3>
          <Image src="/evil-inator.png" alt="Make-Everything-Evil-inator" className="rounded-xl pb-2" width={400} height={300} />
          <p className="pt-4 pb-2">An inator that emits a ray that turns anything evil.</p>
          <a href="#">Learn More</a>
        </div>
      </div>

    </div>
  )
}