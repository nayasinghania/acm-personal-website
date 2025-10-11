export default function Navbar() {
  
  return (
    <nav className="flex gap-8 font-semibold text-xl px-8 py-4 bg-black fixed top-0 w-full">
      <a href="#" className="hover:scale-105 hover:text-gray-300">Home</a>
      <a href="#about" className="hover:scale-105 hover:text-gray-300">About Me</a>
      <a href="#projects" className="hover:scale-105 hover:text-gray-300">Projects</a>
    </nav>
  )
}