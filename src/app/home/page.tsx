"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

type ProjectTab = "data" | "frontend";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  image: string;
  alt: string;
  description: string;
  tools: string;
  links: ProjectLink[];
};

const dataProjects: Project[] = [
  {
    name: "RencanaKita",
    image: "/image/rencanakita.jpeg",
    alt: "RencanaKita Project",
    description:
      "Investment recommendation system with user risk profiling and time series forecasting for 16 financial assets, consisting of 15 equities and 1 gold asset.",
    tools: "Python, Scikit-learn, Streamlit",
    links: [
      {
        label: "Go to Project",
        href: "https://github.com/pittggun-beep/p2-ftds-final-project-ftds-039-hck-group-001.git",
      },
      {
        label: "Web",
        href: "https://rencanakita.streamlit.app",
      },
    ],
  },
  {
    name: "StrokeSense",
    image: "/image/strokesense.jpeg",
    alt: "StrokeSense Project",
    description:
      "As a Data Scientist in the StrokeSense project, I developed a machine learning–based early stroke screening system that enables users to assess their stroke risk through interactive health data inputs, supporting early awareness and preventive action.",
    tools: "TensorFlow, Python, Streamlit",
    links: [
      {
        label: "Go to Project",
        href: "https://github.com/yosiaos/stroke-project-dbs.git",
      },
      {
        label: "Web",
        href: "https://stroke-sense-front-end.vercel.app/",
      },
    ],
  },
  {
    name: "Coffee Shop Analytics",
    image: "/image/coffee.jpeg",
    alt: "Coffee Shop Analytics Project",
    description:
      "End-to-end automated data pipeline and interactive dashboard to optimize sales and operational strategies.",
    tools: "Airflow, Great Expectations, Elasticsearch, Kibana",
    links: [
      {
        label: "Go to Project",
        href: "https://github.com/yosiaos/coffee-sales-data-pipeline.git",
      },
    ],
  },
  {
    name: "Fraud Detection System",
    image: "/image/fraud.jpeg",
    alt: "Fraud Detection System Project",
    description:
      "Machine learning-based web application to automatically detect fraudulent digital transactions.",
    tools: "Hugging Face, Streamlit, Scikit-learn, Imblearn",
    links: [
      {
        label: "Go to Project",
        href: "https://github.com/yosiaos/financial-fraud-detection-system.git",
      },
      {
        label: "Web",
        href: "https://huggingface.co/spaces/yosiaos/fraud-detection-analyst",
      },
    ],
  },
  {
    name: "National Food Price",
    image: "/image/foodprice.jpeg",
    alt: "National Food Price Project",
    description:
      "Data analysis and visualization analyzing food price volatility and comparison across Indonesia.",
    tools: "Python, SciPy, Tableau",
    links: [
      {
        label: "Go to Project",
        href: "https://github.com/yosiaos/indonesia-food-price-analysis-2022-2026.git",
      },
    ],
  },
];

const frontendProjects: Project[] = [
  {
    name: "NgeBaju",
    image: "/image/ngebaju.png",
    alt: "NgeBaju Project",
    description:
      "An e-commerce website for a Software Engineering university course. I was responsible for UI design and frontend development using Figma and Next.js.",
    tools: "Figma, Next.js",
    links: [
      {
        label: "Go to Project",
        href: "https://github.com/yosiaos/SEProj-NgebajuFE.git",
      },
    ],
  },
  {
    name: "To-Do WOW",
    image: "/image/todohansyos.png",
    alt: "To-Do WOW Project",
    description:
      "A personal productivity app for managing daily tasks. I worked on the frontend development using Next.js, focusing on responsive and interactive UI.",
    tools: "Next.js",
    links: [
      {
        label: "Go to Project",
        href: "https://github.com/HansImmanuel/ToDoListWow.git",
      },
    ],
  },
  {
    name: "The Silent Sacrifice",
    image: "/image/mulsys.png",
    alt: "The Silent Sacrifice Project",
    description:
      "A movie promo website for a Multimedia Systems course. I contributed as the film editor and worked on the frontend development using Next.js and Tailwind CSS.",
    tools: "Next.js, Tailwind CSS",
    links: [
      {
        label: "Go to Project",
        href: "https://kitsucchi.github.io/silentsacrifice/",
      },
    ],
  },
];

const projectTabs: { id: ProjectTab; label: string }[] = [
  { id: "data", label: "Data Science & Analytics" },
  { id: "frontend", label: "Software Engineering" },
];

function ProjectCard({ project }: { project: Project }) {
  const imageCard = (
    <div className="overflow-hidden rounded-lg shadow-md mb-4 group cursor-pointer">
      <Image
        src={project.image}
        alt={project.alt}
        width={800}
        height={400}
        className="transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );

  return (
    <div className="mb-10">
      {project.links.length > 0 ? (
        <Link href={project.links[0].href} target="_blank">
          {imageCard}
        </Link>
      ) : (
        imageCard
      )}

      <p className="font-semibold">
        {project.name}
        {project.links.length > 0 && (
          <>
            {" "}
            ·{" "}
            {project.links.map((link, index) => (
              <span key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="text-green-600 group relative"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                </Link>
                {index < project.links.length - 1 && " · "}
              </span>
            ))}
          </>
        )}
      </p>

      <p className="text-gray-800 mt-2">{project.description}</p>

      <p className="text-sm text-gray-600 mt-2">
        <span className="font-semibold">Tools:</span> {project.tools}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("data");

  const displayedProjects =
    activeTab === "data" ? dataProjects : frontendProjects;

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
            Data Engineer · Data Analyst · Data Scientist
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Building end-to-end data solutions, from robust infrastructure and 
            predictive modeling to intuitive, user-centered web applications.
          </p>

          {/* Navigation */}
          <nav className="mt-6 md:mt-10 space-y-3">
            {["about", "Curriculum Vitae", "projects"].map((id) => (
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
            <Link
              href="https://www.linkedin.com/in/yosia-oscar-stephen-marpaung-226054387/"
              target="_blank"
            >
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
            I am a Computer Science student at BINUS University and a graduate 
            of the intensive Hacktiv8 Data Science & AI Machine Learning Bootcamp. 
            I bridge the gap between Software Engineering and Data Science 
            by combining expertise in responsive web development with advanced 
            analytical capabilities.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            My technical toolkit spans the entire data lifecycle from engineering 
            robust data pipelines (SQL, Airflow, Spark) and developing predictive 
            AI models (TensorFlow, Scikit-Learn) to delivering actionable insights 
            via intuitive, user-centered data products. Whether it’s architecting 
            scalable backend systems, scraping complex data, or building interactive 
            dashboards, I thrive on creating functional, efficient, and intelligent 
            digital solutions. I am driven to continuously master emerging technologies
            to solve real-world problems through data-driven innovation.
          </p>
        </section>

        {/* Resume Section */}
        <section id="resume" className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Curriculum Vitae</h2>

          <p className="text-gray-600">Latest CV - June 17, 2026</p>

          <p className="font-semibold">
            CV Link ·{" "}
            <Link
              href="https://drive.google.com/drive/folders/1V1O8FiCyOkpvzIXPqcxezi01alkBneso?usp=drive_link"
              className="text-green-600 group relative"
              target="_blank"
            >
              Go to Link
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
            </Link>
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>

          {/* Project Tabs */}
          <div className="flex gap-6 mb-8">
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative inline-block transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "font-semibold text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-black transition-transform duration-300 origin-left ${
                    activeTab === tab.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Project List */}
          {displayedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </section>
    </main>
  );
}