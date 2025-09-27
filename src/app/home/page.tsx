"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="flex min-h-screen bg-white text-black font-poppins">
      {/* Sidebar kiri */}
      <aside className="w-1/3 p-10 border-r border-gray-300 sticky top-0 h-screen">
        <Image
        src="/image/foto latar biru.jpg"
        alt="My Profile Picture"
        width={150}
        height={150}  
        className="w-50 h-50 rounded-full object-cover mb-4"/>
        <h1 className="text-4xl font-bold leading-snug">
        Yosia Oscar <br /> Stephen Marpaung
        </h1>
        <p className="mt-2 text-gray-700">Frontend Developer · UI/UX & Graphic Designer</p>
        <p className="mt-2 text-sm text-gray-600">
          I craft beautiful, functional, and user-centered web & graphic designs.
        </p>

        <nav className="mt-10 space-y-4">
          <p>
          <Link href="#about" className="w-full group relative">
            About<span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 
                  transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
          </Link>
          </p>
          <p>
          <Link href="#experience" className="w-full group relative">
            Resume<span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 
                  transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
          </Link>
          </p>
          <p>
          <Link href="#projects" className="w-full group relative ">
            Projects<span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 
                  transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
          </Link>
          </p>
        </nav>

        <div className="mt-10 flex space-x-4">
          <Link href="https://www.linkedin.com/in/yosia-oscar-stephen-marpaung-226054387/" target="_blank">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors duration-200" />
          </Link>
          <Link href="https://github.com/yosiaos" target="_blank">
            <FaGithub className="text-2xl hover:text-purple-600 transition-colors duration-200" />
          </Link>
          <Link href="https://instagram.com/yosiaos" target="_blank">
            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-200" />
          </Link>
        </div>
      </aside>

      {/* Konten kanan */}
      <section className="w-3/4 p-10 space-y-20 overflow-y-auto">
        {/* About */}
        <div id="about" className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">ABOUT</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
          I am a Computer Science undergraduate student at BINUS University with a strong academic
          foundation and a genuine passion for frontend web development and UI
          design. I focus on building modern, responsive, and user-centered
          websites that balance functionality with visual appeal.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Throughout my academic journey, I have sharpened my technical expertise
            in frontend frameworks while enhancing my creativity and design thinking.
            I enjoy transforming design concepts into functional interfaces, ensuring
            accessibility, usability, and aesthetic harmony.
          </p>
          <p className="text-gray-800 leading-relaxed">
            I am highly motivated to continuously learn about new tools, frameworks,
            and design systems that can improve my work. Collaboration is important
            to me, I thrive in team environments but can also work independently with
            focus and responsibility. With a strong commitment to growth, I aim to
            contribute my frontend and UI expertise while gaining real-world
            experience to become a well-rounded web developer.
          </p>
        </div>


        {/* Resume */}
        <div id="experience">
          <h2 className="text-2xl font-bold mb-4">RESUME</h2>
          <div>
            <p className="text-gray-600">Latest Resume - September 26, 2025</p>
              <p className="font-semibold">
                Resume Link ·{" "}
                <Link href="https://drive.google.com/drive/folders/1a6MMbjWku9tYOjFJMT-IRLbVXPECM_C4?usp=drive_link" className="text-green-600 cursor-pointer group relative">
                  Go to Link <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 
                  transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
                </Link>
              </p>
          </div>
        </div>

        {/* Projects */}
        <div id="projects">
          <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>

          <div className="mb-10">
            <Link href="https://github.com/yosiaos/SEProj-NgebajuFE.git">
              <div className="overflow-hidden rounded-lg shadow-md mb-6 group cursor-pointer max-w-3xl">
                <Image
                  src="/image/ngebaju.png"
                  alt="NgeBaju Project"
                  width={800}
                  height={400}
                  className="transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="font-semibold">
              NgeBaju ·{" "}
              <Link href="https://github.com/yosiaos/SEProj-NgebajuFE.git" className="text-green-600 cursor-pointer group relative">
                Go to Project <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 
                transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
              </Link>
            </p>
            <p className="text-gray-800 mt-2">
             An e-commerce website for a Software Engineering university course. 
             <br/> I was responsible for UI design and frontend development using Figma and Next.js.
            </p>
          </div>

          <div>
            <Link href="https://github.com/HansImmanuel/ToDoListWow.git">
              <div className="overflow-hidden rounded-lg shadow-md mb-6 group cursor-pointer max-w-3xl">
                <Image
                  src="/image/todowow.png"
                  alt="To-Do WOW Project"
                  width={800}
                  height={400}
                  className="transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="font-semibold">
              To-Do WOW ·{" "}
              <Link href="https://github.com/HansImmanuel/ToDoListWow.git" className="text-green-600 w-full group relative">
                Go to Project <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 
                transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
              </Link>
            </p>
            <p className="text-gray-800 mt-2">
              A personal productivity app for managing daily tasks. 
              <br/> I worked on the frontend development using Next.js, focusing on responsive and interactive UI.
            </p>
          </div>

          <div className="mt-10">
            <Link href="https://kitsucchi.github.io/silentsacrifice/">
              <div className="overflow-hidden rounded-lg shadow-md mb-6 group cursor-pointer max-w-3xl">
                <Image
                  src="/image/mulsys.png"
                  alt="The Silent Sacrifice Project"
                  width={800}
                  height={400}
                  className="transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="font-semibold">
              The Silent Sacrifice ·{" "}
              <Link href="https://kitsucchi.github.io/silentsacrifice/" className="text-green-600 w-full group relative">
                Go to Project <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 
                transition-transform duration-300 group-hover:scale-x-102 group-hover:origin-left origin-right"></span>
              </Link>
            </p>
            <p className="text-gray-800 mt-2">
              A movie promo website for a Multimedia Systems course. 
              <br/>I contributed as the film editor and worked on the frontend development using Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


