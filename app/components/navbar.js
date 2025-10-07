export default function Navbar() {
  return (
    <nav className="flex gap-8 font-semibold text-xl px-8 py-4 bg-black rounded-2xl fixed top-0 w-full">
      <a href="#" className="hover:scale-105">Home</a>
      <a href="#about" className="hover:scale-105">About Me</a>
      <a href="#projects" className="hover:scale-105">Projects</a>
    </nav>
  )
}