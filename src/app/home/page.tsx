"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-white text-black font-poppins">
      
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-300 md:sticky md:top-0 md:h-screen">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/image/foto latar biru.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full object-cover mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Yosia Oscar <br /> Stephen Marpaung
          </h1>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Frontend Developer · UI/UX & Graphic Designer
          </p>
          <p className="mt-2 text-sm text-gray-600">
            I craft beautiful, functional, and user-centered web & graphic designs.
          </p>

          {/* Navigation */}
          <nav className="mt-6 md:mt-10 space-y-3">
            {["about", "resume", "projects"].map((id) => (
              <p key={id}>
                <Link href={`#${id}`} className="group relative inline-block">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </p>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="mt-6 md:mt-10 flex gap-4">
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
        </div>
      </aside>

      {/* Main Content */}
      <section className="w-full md:w-2/3 p-6 md:p-10 space-y-20 overflow-y-auto">
        
        {/* About Section */}
        <section id="about" className="max-w-3xl">
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
            focus and responsibility.
          </p>
        </section>

        {/* Resume Section */}
        <section id="resume" className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">RESUME</h2>
          <p className="text-gray-600">Latest Resume - September 26, 2025</p>
          <p className="font-semibold">
            Resume Link ·{" "}
            <Link
              href="https://drive.google.com/drive/folders/1a6MMbjWku9tYOjFJMT-IRLbVXPECM_C4?usp=drive_link"
              className="text-green-600 group relative"
            >
              Go to Link
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
            </Link>
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>

          {/* Project 1 */}
          <div className="mb-10">
            <Link href="https://github.com/yosiaos/SEProj-NgebajuFE.git">
              <div className="overflow-hidden rounded-lg shadow-md mb-4 group cursor-pointer">
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
              <Link href="https://github.com/yosiaos/SEProj-NgebajuFE.git" className="text-green-600 group relative">
                Go to Project
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
              </Link>
            </p>
            <p className="text-gray-800 mt-2">
              An e-commerce website for a Software Engineering university course.
              <br /> I was responsible for UI design and frontend development using Figma and Next.js.
            </p>
          </div>

          {/* Project 2 */}
          <div className="mb-10">
            <Link href="https://github.com/HansImmanuel/ToDoListWow.git">
              <div className="overflow-hidden rounded-lg shadow-md mb-4 group cursor-pointer">
                <Image
                  src="/image/todohansyos.png"
                  alt="To-Do WOW Project"
                  width={800}
                  height={400}
                  className="transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="font-semibold">
              To-Do WOW ·{" "}
              <Link href="https://github.com/HansImmanuel/ToDoListWow.git" className="text-green-600 group relative">
                Go to Project
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
              </Link>
            </p>
            <p className="text-gray-800 mt-2">
              A personal productivity app for managing daily tasks.
              <br /> I worked on the frontend development using Next.js, focusing on responsive and interactive UI.
            </p>
          </div>

          {/* Project 3 */}
          <div className="mb-10">
            <Link href="https://kitsucchi.github.io/silentsacrifice/">
              <div className="overflow-hidden rounded-lg shadow-md mb-4 group cursor-pointer">
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
              <Link href="https://kitsucchi.github.io/silentsacrifice/" className="text-green-600 group relative">
                Go to Project
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
              </Link>
            </p>
            <p className="text-gray-800 mt-2">
              A movie promo website for a Multimedia Systems course.
              <br />I contributed as the film editor and worked on the frontend development using Next.js and Tailwind CSS.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
