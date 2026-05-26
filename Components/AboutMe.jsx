import {
    Monitor,
    Code2,
    Zap,
    Palette,
    GraduationCap,
    Rocket,
    Calendar,
    Folder,
    User,
    Trophy,
    BrainCircuit
} from "lucide-react";

import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiJavascript,SiMysql } from "react-icons/si";

const journey = [
    {
        year: "2022",
        title: "Started Learning",
        text: "Began my web development journey.",
        icon: <GraduationCap size={20} />,
    },
    {
        year: "2023",
        title: "First Projects",
        text: "Built my first projects and improved my skills.",
        icon: <Code2 size={20} />,
    },
    {
        year: "2024+",
        title: "Growing & Building",
        text: "Continuously learning and building better web experiences.",
        icon: <Rocket size={20} />,
    },
];

const whatIDo = [
    {
        icon: <BrainCircuit size={30} />,
        title: "AI & Machine Learning",
        text: "AI & Machine Learning Projects with real-world applications.",
    },
    {
        icon: <Code2 size={30} />,
        title: "Full Stack Development",
        text: "Building both frontend and backend solutions.",
    },
    {
        icon: <Zap size={30} />,
        title: "Performance",
        text: "Problem Solving & Optimization",
    },
    {
        icon: <Palette size={30} />,
        title: "Modern UI/UX",
        text: "Designing beautiful and user-friendly interfaces.",
    },
];

const techStack = [
    {
        name: "React",
        icon: <FaReact size={30} />,
    },
    {
        name: "Python",
        icon: <FaPython size={30} />,
    },
    {
        name: "Django",
        icon: <SiDjango size={30} />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript size={30} />,
    },
    {
        name: "MySQL",
        icon: <SiMysql size={30} />,
    },

    {
        name:"Machine Learning",
        icon:"ML"
    }
];

const stats = [
    {
        icon: <Calendar size={34} />,
        number: "2+",
        label: "Years Experience",
    },
    {
        icon: <Folder size={34} />,
        number: "15+",
        label: "Projects Completed",
    },
    {
        icon: <User size={34} />,
        number: "10+",
        label: "Happy Clients",
    },
    {
        icon: <Trophy size={34} />,
        number: "5+",
        label: "Awards Received",
    },
];

export default function About() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#171717] px-6 py-24 text-[#e5e5e5]">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[50vw] w-[50vw] lg:h-[800px] lg:w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.16)_0%,rgba(245,158,11,0.06)_45%,transparent_75%)] blur-3xl pointer-events-none"></div>

            {/* Top Left Dots */}
            <div className="absolute left-10 top-10 grid grid-cols-5 gap-4 pointer-events-none">
                {Array.from({ length: 25 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]/70"
                    ></span>
                ))}
            </div>

            {/* Bottom Left Dots */}
            <div className="absolute bottom-10 left-10 grid grid-cols-4 gap-4 pointer-events-none">
                {Array.from({ length: 16 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]/60"
                    ></span>
                ))}
            </div>

            {/* Top Right Circle */}
            <div className="absolute -right-34 -top-36 h-[22vw] w-[22vw] lg:h-[360px] lg:w-[360px] rounded-full border border-[#f59e0b]/40 pointer-events-none"></div>
            <span className="absolute right-40 top-40 h-4 w-4 rounded-full bg-[#f59e0b] shadow-[0_0_30px_rgba(245,158,11,0.9)] pointer-events-none"></span>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <div className="text-center">
                    <div className="mb-4 flex items-center justify-center gap-3 text-[#f59e0b]">
                        <span className="h-3 w-3 rounded-full bg-[#f59e0b]"></span>
                        <p className="text-lg font-medium">About Me</p>
                    </div>

                    <h1 className="text-5xl font-extrabold md:text-7xl">
                        About{" "}
                        <span className="text-[#f59e0b]">
                            Me
                        </span>
                    </h1>

                    <div className="mx-auto mt-5 h-0.5 w-16 bg-[#f59e0b]"></div>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#e5e5e5]/70">
                        I&apos;m a Full Stack & AI Developer passionate about building modern web apps, 
                        intelligent systems, and scalable solutions with clean code and great user experience.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.4fr]">

                    {/* My Journey */}
                    <div className="rounded-3xl border border-[#262626] bg-[#171717]/80 p-8 backdrop-blur-md">
                        <h2 className="border-l-4 border-[#f59e0b] pl-4 text-2xl font-bold">
                            My Journey
                        </h2>

                        <p className="mt-6 leading-8 text-[#e5e5e5]/70">
                            My journey in web development started with curiosity and has
                            turned into a passion. I enjoy learning new technologies and
                            turning ideas into real digital products that solve problems.
                        </p>

                        <div className="relative mt-10 space-y-10">
                            <div className="absolute left-7 top-8 h-[calc(100%-90px)] w-px bg-[#f59e0b]/25"></div>
                            

                            {journey.map((item) => (
                                <div key={item.year} className="relative flex gap-6">
                                    
                                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-black shadow-[0_0_25px_rgba(245,158,11,0.45)]">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="font-bold text-[#f59e0b]">
                                            {item.year}
                                        </p>
                                        <h3 className="mt-1 text-lg font-bold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-[#e5e5e5]/60">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-8">

                        {/* What I Do */}
                        <div className="rounded-3xl border border-[#262626] bg-[#171717]/80 p-8 backdrop-blur-md">
                            <h2 className="border-l-4 border-[#f59e0b] pl-4 text-2xl font-bold">
                                What I Do
                            </h2>

                            <p className="mt-6 max-w-2xl leading-8 text-[#e5e5e5]/70">
                                I build responsive, fast, and modern websites with the best
                                practices and technologies.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
                                {whatIDo.map((item) => (
                                    <div key={item.title} className="text-center">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f59e0b]/10 text-[#f59e0b]">
                                            {item.icon}
                                        </div>

                                        <h3 className="mt-5 font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#e5e5e5]/60">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="rounded-3xl border border-[#262626] bg-[#171717]/80 p-8 backdrop-blur-md">
                            <h2 className="border-l-4 border-[#f59e0b] pl-4 text-2xl font-bold">
                                Tech Stack
                            </h2>

                            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                                {techStack.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="rounded-2xl border border-[#262626] bg-[#262626]/40 p-5 text-center transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
                                    >
                                        <div className="p-2 text-3xl font-bold text-[#f59e0b]">
                                            {tech.icon}
                                        </div>

                                        <p className="mt-3 text-sm">
                                            {tech.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Stats Cards */}
                {/* <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-6 rounded-2xl border border-[#262626] bg-[#171717]/80 p-6 backdrop-blur-md"
                        >
                            <div className="text-[#f59e0b]">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold">
                                    {item.number}
                                </h3>
                                <p className="text-[#e5e5e5]/60">
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> */}

            </div>
        </section>
    );
}