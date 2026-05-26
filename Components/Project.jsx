import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const filters = ["All Projects",  "Full Stack"];

const projects = [
 
  {
    title: "PocketLens",
    category: "Full Stack",
    image: "/Project-1.png",
    description: "Expense tracker app built with React, Django, and PostgreSQL.",
    tags: ["React", "Django", "PostgreSQL"],
    link: "https://github.com/chaitanya7113/PocketLens-Expense-Tracker.git",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => {
          const normalizedFilter = activeFilter.replace(/s$/, "");

          return (
            project.category === activeFilter ||
            project.category === normalizedFilter
          );
        });

  const scrollProjects = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = container.clientWidth;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171717] px-5 py-20 text-[#e5e5e5] sm:px-6 lg:px-10 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-3/4 top-1/2 h-[clamp(320px,80vw,700px)] w-[clamp(320px,80vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.16)_0%,rgba(245,158,11,0.06)_45%,transparent_75%)] blur-3xl"></div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[clamp(320px,80vw,700px)] w-[clamp(320px,80vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.16)_0%,rgba(245,158,11,0.06)_45%,transparent_75%)] blur-3xl"></div>
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-[clamp(320px,80vw,700px)] w-[clamp(320px,80vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.16)_0%,rgba(245,158,11,0.06)_45%,transparent_75%)] blur-3xl"></div>

        {/* Dotted Pattern */}
        <div className="pointer-events-none absolute left-2 top-4 grid grid-cols-5 gap-2 sm:left-10 sm:top-10 sm:gap-3 lg:left-56 lg:top-14">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#f59e0b]/60"
            ></span>
          ))}
        </div>

        {/* Heading */}
        <div className="relative z-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-[#f59e0b]">
            <span className="h-2 w-2 rounded-full bg-[#f59e0b]"></span>
            <p className="text-sm font-medium">My Work</p>
          </div>

          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            My <span className="text-[#f59e0b]">Projects</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#e5e5e5]/60 sm:text-base">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg border px-4 py-2 text-xs transition duration-300 sm:px-8 sm:py-3 sm:text-sm ${
                activeFilter === filter
                  ? "border-[#f59e0b] bg-[#f59e0b] text-black"
                  : "border-[#f59e0b]/60 text-[#e5e5e5] hover:bg-[#f59e0b] hover:text-black"
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider Area */}
        <div className="relative z-10 mt-10 sm:mt-14 lg:px-16">

          {/* Left Button */}
          <button
            type="button"
            onClick={() => scrollProjects("left")}
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f59e0b]/60 bg-[#171717]/90 text-[#f59e0b] backdrop-blur-md transition duration-300 hover:bg-[#f59e0b] hover:text-black sm:h-12 sm:w-12 lg:left-0 lg:h-14 lg:w-14"
            aria-label="Previous projects"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards Wrapper */}
          <div
            ref={scrollRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              scroll-smooth
              px-12
              pt-3
              pb-6
              [scrollbar-width:none]
              sm:gap-6
              sm:px-14
              lg:px-0
              [&::-webkit-scrollbar]:hidden
            "
          >
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="
                  group
                  min-w-full
                  snap-start
                  rounded-2xl
                  border border-[#262626]
                  bg-[#171717]/80
                  p-4
                  shadow-xl
                  backdrop-blur-md
                  transition duration-300
                  hover:-translate-y-2
                  hover:border-[#f59e0b]/60
                  hover:shadow-[0_0_35px_rgba(245,158,11,0.12)]
                  sm:min-w-[calc((100%-24px)/2)]
                  xl:min-w-[calc((100%-72px)/4)]
                "
              >
                {/* Image */}
                <div className="overflow-hidden rounded-xl border border-[#262626]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40"
                  />
                </div>

                {/* Title */}
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#e5e5e5] sm:text-xl">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-[#f59e0b] transition duration-300 hover:scale-110"
                    aria-label={`Open ${project.title} in a new tab`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {/* Category */}
                <div className="mt-3 flex items-center justify-end gap-2 text-sm text-[#e5e5e5]/60">
                  <span className="h-2 w-2 rounded-full bg-[#f59e0b]"></span>
                  {project.category}
                </div>

                {/* Description */}
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#e5e5e5]/65">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-[#262626] bg-[#262626]/50 px-3 py-2 text-xs text-[#e5e5e5]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            type="button"
            onClick={() => scrollProjects("right")}
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f59e0b]/60 bg-[#171717]/90 text-[#f59e0b] backdrop-blur-md transition duration-300 hover:bg-[#f59e0b] hover:text-black sm:h-12 sm:w-12 lg:right-0 lg:h-14 lg:w-14"
            aria-label="Next projects"
          >
            <ChevronRight size={22} />
          </button>

        </div>
      </div>
    </section>
  );
}