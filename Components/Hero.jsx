export default function Hero() {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-10 pt-24 bg-[#171717] text-[#e5e5e5]">
            <div className="max-w-2xl">
                <p className="text-xl text-[#e5e5e5]/70">
                    Hi, I'm
                </p>

                <h1 className="mt-4 text-6xl font-bold text-white">
                    Chaitanya{" "}
                    <span className="text-[#f59e0b]">
                        Sharma
                    </span>
                </h1>

                <h2 className="mt-4 text-2xl text-[#e5e5e5]/70">
                    Frontend Developer
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#e5e5e5]/60">
                    I build modern and responsive websites using React,
                    Tailwind CSS, and JavaScript.
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="rounded-full bg-[#f59e0b] px-6 py-3 font-semibold text-black">
                        Download CV
                    </button>

                    <button className="rounded-full border border-[#f59e0b] px-6 py-3 text-[#f59e0b]">
                        View My Work →
                    </button>
                </div>
            </div>

            {/* Right Part */}
            <div className="relative mt-16 flex min-h-[620px] items-center justify-center overflow-visible lg:mt-0">

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.35)_0%,rgba(245,158,11,0.18)_30%,rgba(245,158,11,0.08)_50%,rgba(245,158,11,0.02)_65%,transparent_80%)] blur-2xl"></div>
                </div>

                {/* Circle Border */}
                <div className="absolute h-[360px] w-[360px] rounded-full border border-[#f59e0b]/50 lg:h-[500px] lg:w-[500px]"></div>

                {/* Dot 1 - left bottom circle */}
                <span className="absolute left-[14%] bottom-[28%] z-20 h-2.5 w-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_14px_rgba(245,158,11,0.9)]"></span>

                {/* Dot 2 - right upper circle */}
                <span className="absolute right-[15%] top-[28%] z-20 h-3 w-3 rounded-full bg-[#f59e0b] shadow-[0_0_14px_rgba(245,158,11,0.9)]"></span>

                {/* Dotted Square */}
                <div className="absolute right-4 top-8 z-20 grid grid-cols-6 gap-3">
                    {Array.from({ length: 36 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1 w-1 rounded-full bg-[#f59e0b]/70"
                        ></span>
                    ))}
                </div>

                {/* Profile Image */}
                <img
                    src={`${import.meta.env.BASE_URL}profile.png`}

                    alt="Profile"
                    className="relative z-10 w-[350px] object-cover lg:w-[530px]"
                />

                {/* Bottom Feature Card */}
                <div className="absolute bottom-6 z-30 grid w-[92%] max-w-2xl grid-cols-2 gap-6 rounded-2xl border border-[#262626] bg-[#171717]/90 p-6 shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-md lg:grid-cols-4">

                    <div className="text-center">
                        <div className="text-3xl text-[#f59e0b]">{"</>"}</div>
                        <h3 className="mt-2 font-semibold text-[#e5e5e5]">Clean Code</h3>
                        <p className="mt-1 text-sm text-[#e5e5e5]/60">Maintainable</p>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl text-[#f59e0b]">🖥️</div>
                        <h3 className="mt-2 font-semibold text-[#e5e5e5]">Responsive</h3>
                        <p className="mt-1 text-sm text-[#e5e5e5]/60">All devices</p>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl text-[#f59e0b]">⚡</div>
                        <h3 className="mt-2 font-semibold text-[#e5e5e5]">Performance</h3>
                        <p className="mt-1 text-sm text-[#e5e5e5]/60">Fast website</p>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl text-[#f59e0b]">🎨</div>
                        <h3 className="mt-2 font-semibold text-[#e5e5e5]">UI/UX</h3>
                        <p className="mt-1 text-sm text-[#e5e5e5]/60">Clean design</p>
                    </div>

                </div>
            </div>



        </section>
    );
}