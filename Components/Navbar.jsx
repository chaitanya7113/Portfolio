import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Home",
    id: "home",
  },
  
  {
    name: "About Me",
    id: "about",
  },
  {
    name: "Project",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

export default function Layout() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[95%] -translate-x-1/2 rounded-full border border-[#262626] bg-[#171717]/80 px-6 py-3 shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-[#f59e0b]"
        >
          CS.
        </a>

        {/* Nav Links */}
        <div className="hidden gap-3 md:flex ">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  rounded-full
                  border-2
                  px-5 py-2
                  text-sm
                  transition
                  duration-300 
                  
                  ${
                    isActive
                      ? "border-[#f59e0b] bg-[#f59e0b] text-black outline-none ring-[#f59e0b]/40 ring-4 shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                      : "border-[#f59e0b]/60 text-[#f59e0b] hover:bg-[#f59e0b]  hover:scale-105 hover:text-black"
                  }
                `}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}