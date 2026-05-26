import Hero from '../Components/Hero.jsx'
import Navbar from '../Components/Navbar.jsx'
import AboutMe from '../Components/AboutMe.jsx'
import Contact from '../Components/Contact.jsx'
import Projects from '../Components/Project.jsx'
function App() {


  return (
    <div className="min-h-screen bg-[#171717] text-[#e5e5e5]">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutMe/>
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
