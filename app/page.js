import Navbar from "./components/navbar";
import Greeting from "./components/greeting";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Greeting />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}