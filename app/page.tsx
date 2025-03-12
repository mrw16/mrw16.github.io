import Link from "next/link"
import { Github, Mail, Linkedin, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#4a3b96] font-mono">
      <header className="sticky top-0 z-30 bg-[#4a3b96] text-white py-4 shadow-[0px_4px_0px_0px_#fcb044]">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-8 h-8 bg-[url('/icon-removebg-preview.png')] bg-cover"></div>
          </div>

          <nav className="flex gap-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#fcb044] transition-colors relative group uppercase tracking-wider"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#fcb044] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section id="home" className="py-20 bg-[#fff8f0]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight tracking-tight">
                <span className="block text-[#fcb044] drop-shadow-[4px_4px_0px_#4a3b96]">RIFQI</span>
                <span className="block text-[#4a3b96] drop-shadow-[4px_4px_0px_#fcb044]">WAHYUDI</span>
              </h2>
              <div className="w-24 h-4 bg-[#fcb044] mb-6 shadow-[2px_2px_0px_0px_#4a3b96]"></div>
              <p className="text-xl mb-8 max-w-md">
                Web & Mobile Developer | Turning ideas into powerful apps.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#contact"
                  className="bg-[#fcb044] text-white px-6 py-3 shadow-[4px_4px_0px_0px_#4a3b96] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_#4a3b96] transition-all font-bold uppercase tracking-wider"
                >
                  Get in Touch
                </Link>
                <Link
                  href="#projects"
                  className="bg-[#4a3b96] text-white px-6 py-3 shadow-[4px_4px_0px_0px_#fcb044] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_#fcb044] transition-all font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <Play size={16} />
                  View Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#ff6b97] -rotate-3 translate-x-4 translate-y-4 shadow-[4px_4px_0px_0px_#4a3b96]"></div>
                <div className="absolute inset-0 bg-[#fcb044] rotate-3 shadow-[4px_4px_0px_0px_#4a3b96]"></div>
                <div className="absolute inset-0 bg-[#4a3b96] shadow-[4px_4px_0px_0px_#fcb044]">
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-[#fcb044] shadow-[2px_2px_0px_0px_#4a3b96] flex justify-center items-center">
                    <div className="w-3/4 h-1/2 bg-[#ff6b97] shadow-[2px_2px_0px_0px_#4a3b96]"></div>
                  </div>
                  <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/6 flex justify-between items-center px-4">
                    <div className="w-1/4 h-1/2 bg-[#ff6b97] shadow-[2px_2px_0px_0px_#4a3b96]"></div>
                    <div className="w-1/4 h-1/2 bg-[#fcb044] shadow-[2px_2px_0px_0px_#4a3b96]"></div>
                  </div>
                  <div className="absolute top-1/6 right-1/6 w-1/6 h-1/6 bg-[#fcb044] shadow-[2px_2px_0px_0px_#4a3b96] flex justify-center items-center">
                    <div className="w-1/2 h-1/2 bg-[#4a3b96]"></div>
                  </div>
                  <div className="absolute bottom-1/6 left-1/6 w-1/6 h-1/6 bg-[#ff6b97] shadow-[2px_2px_0px_0px_#4a3b96]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-20 bg-[#ffefd7] relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-[#4a3b96]"></div>

          <div className="container mx-auto px-4 relative z-10 mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#4a3b96] inline-block bg-[#fcb044] px-6 py-2 uppercase tracking-widest shadow-[4px_4px_0px_0px_#ff6b97]">
                About Me
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square w-full max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#ff6b97] translate-x-4 translate-y-4 shadow-[4px_4px_0px_0px_#4a3b96]"></div>
                <div className="absolute inset-0 bg-[#fcb044] shadow-[4px_4px_0px_0px_#4a3b96]">
                  <div className="absolute inset-0 m-6 bg-[url('/placeholder.svg?height=400&width=400')] bg-cover"></div>
                </div>
              </div>
              <div>
                <div className="inline-block bg-[#4a3b96] text-white p-2 mb-4 shadow-[3px_3px_0px_0px_#fcb044]">
                  <span className="text-sm tracking-widest">WHO AM I</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#4a3b96] uppercase tracking-wider drop-shadow-[2px_2px_0px_#fcb044]">
                  Web & Mobile Developer
                </h3>
                <div className="w-16 h-4 bg-[#fcb044] mb-6 shadow-[2px_2px_0px_0px_#4a3b96]"></div>
                <p className="mb-6">
                  Hi, I'm Rifqi! A programmer who has been involved in web and mobile development for 3 years. I often code using Laravel, Express.js, and Flutter to create applications that are not only cool, but also powerful. In addition, I also like to explore new technologies to stay up-to-date!
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#4a3b96] text-white p-4 shadow-[4px_4px_0px_0px_#fcb044]">
                    <h4 className="font-bold text-[#fcb044] mb-2 uppercase tracking-wider">Skills</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        HTML & CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        JavaScript
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Express Js
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Next Js
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Tailwind CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Laravel
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#4a3b96] text-white p-4 shadow-[4px_4px_0px_0px_#fcb044]">
                    <h4 className="font-bold text-[#fcb044] mb-2 uppercase tracking-wider">Experience</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Web Developer
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Web Programmer
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Flutter Programmer
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#fcb044]"></span>
                        Programmer
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/mrw16"
                    className="bg-[#fcb044] text-white p-3 shadow-[3px_3px_0px_0px_#4a3b96] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a3b96] transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rifqi-wahyudi/"
                    className="bg-[#fcb044] text-white p-3 shadow-[3px_3px_0px_0px_#4a3b96] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a3b96] transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:rifqiwahyudi16@gmail.com"
                    className="bg-[#fcb044] text-white p-3 shadow-[3px_3px_0px_0px_#4a3b96] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a3b96] transition-all"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-8 bg-[#4a3b96]"></div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20 bg-[#e9e4ff]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white inline-block bg-[#4a3b96] px-6 py-2 uppercase tracking-widest shadow-[4px_4px_0px_0px_#fcb044]">
                My Projects
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item, index) => {
                // Alternate colors for variety
                const colors = [
                  { bg: "#fcb044", shadow: "#4a3b96", text: "#ffffff" },
                  { bg: "#4a3b96", shadow: "#fcb044", text: "#fcb044" },
                  { bg: "#ff6b97", shadow: "#4a3b96", text: "#ffffff" },
                ]
                const colorSet = colors[index % 3]

                return (
                  <div key={item} className="group">
                    <div
                      className={`bg-[${colorSet.bg}] p-4 shadow-[5px_5px_0px_0px_${colorSet.shadow}] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_${colorSet.shadow}] transition-all`}
                    >
                      <div className="aspect-video bg-[url('/placeholder.svg?height=300&width=500')] bg-cover bg-center mb-4"></div>
                      <h3 className={`font-bold text-xl mb-2 text-[${colorSet.text}] uppercase tracking-wider`}>
                        Project {item}
                      </h3>
                      <p className="text-sm text-white mb-4">
                        A retro-inspired web application with modern functionality.
                      </p>
                      <Link
                        href="#"
                        className={`inline-block bg-white text-[${colorSet.bg}] px-4 py-2 shadow-[3px_3px_0px_0px_${colorSet.shadow}] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_${colorSet.shadow}] transition-all uppercase tracking-wider font-bold`}
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 bg-[#ffd2e0] relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-[#4a3b96]"></div>

          <div className="container mx-auto px-4 relative z-10 mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white inline-block bg-[#4a3b96] px-6 py-2 uppercase tracking-widest shadow-[4px_4px_0px_0px_#fcb044]">
                Contact Me
              </h2>
            </div>
            <div className="max-w-2xl mx-auto bg-[#4a3b96] p-6 shadow-[6px_6px_0px_0px_#fcb044]">
              <form className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-bold text-[#fcb044] uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white p-3 shadow-[3px_3px_0px_0px_#fcb044] focus:outline-none focus:shadow-[3px_3px_0px_0px_#ff6b97]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-bold text-[#fcb044] uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white p-3 shadow-[3px_3px_0px_0px_#fcb044] focus:outline-none focus:shadow-[3px_3px_0px_0px_#ff6b97]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-bold text-[#fcb044] uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white p-3 shadow-[3px_3px_0px_0px_#fcb044] focus:outline-none focus:shadow-[3px_3px_0px_0px_#ff6b97]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-bold text-[#fcb044] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-white p-3 shadow-[3px_3px_0px_0px_#fcb044] focus:outline-none focus:shadow-[3px_3px_0px_0px_#ff6b97]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#fcb044] text-white px-6 py-3 shadow-[4px_4px_0px_0px_#4a3b96] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_#4a3b96] transition-all justify-self-start uppercase tracking-wider font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-8 bg-[#4a3b96]"></div>
        </section>
      </main>

      <footer className="bg-[#4a3b96] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="uppercase tracking-wider">© {new Date().getFullYear()} RIFQI WAHYUDI. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 text-[#fcb044] uppercase tracking-wider">DESIGNED WITH ❤️</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/mrw16" className="text-[#fcb044] hover:text-[#ff6b97] transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/rifqi-wahyudi/" className="text-[#fcb044] hover:text-[#ff6b97] transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:rifqiwahyudi16@gmail.com" className="text-[#fcb044] hover:text-[#ff6b97] transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

