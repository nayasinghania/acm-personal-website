import Image from 'next/image'

export default function Projects() {
  return (
    <div id="projects">
      <p className="text-3xl pt-2 font-bold">Projects</p>
      <div className="py-2">
        <p className="text-xl font-semibold py-2">Destructor-Inator Ray</p>
        <Image src="/destructor-inator.jpg" alt="Destructor-Inator Ray" width={400} height={300} />
        <p>An inator that can destroy any object in the tri-state area.</p>
        <a href="#">Learn More</a>
      </div>
      <div className="py-2">
        <p className="text-xl font-semibold py-2">De-Love-inator</p>
        <Image src="/de-love-inator.png" alt="De-Love-inator" width={400} height={300} />
        <p>A low-earth-orbit inator that emits a laser that eliminates love from the Tri-State area.</p>
        <a href="#">Learn More</a>
      </div>
      <div className="py">
        <p className="text-xl font-semibold py-2">Make-Everything-Evil-inator</p>
        <Image src="/evil-inator.png" alt="Make-Everything-Evil-inator" width={400} height={300} />
        <p>An inator that emits a ray that turns anything evil.</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  )
}