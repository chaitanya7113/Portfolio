import {
    Mail,
    Phone,
    MapPin,
    Send,
    icons,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
const contactInfo = [
    {
        icon: <Mail />,
        title: "Email",
        value: "Chaitanyasharmas@outlook.com"
    },
    {
        icon: <Phone />,
        title: "Phone No.",
        value: "+91 9876543210"
    },
    {
        icon: <MapPin />,
        title: "Location",
        value: "India"
    },



];

const socialLinks = [
    {
        icon: <FaGithub />,
        id: "github",
        icons: "github",
        link:"https://github.com/chaitanya7113",
    },
    {
        icon: <FaLinkedinIn />,
        id: "linkedin",
        icons: "linkedin",
        link:"https://www.linkedin.com/in/chaitanyaa-sharma5/",
    }

];

export default function Contact() {

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#171717] px-6 pt-32 pb-20 text-[#e5e5e5]">

            <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.20)_0%,rgba(245,158,11,0.08)_40%,transparent_85%)] blur-3xl"></div>
            {/* Top Right Dotted Pattern */}
            <div className="absolute right-10 top-32 grid grid-cols-6 gap-4">
                {Array.from({ length: 36 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-1 w-1 rounded-full bg-[#f59e0b]/70"
                    ></span>
                ))}
            </div>

            {/* Bottom Left Dotted Pattern */}
            <div className="absolute bottom-10 left-10 grid grid-cols-4 gap-4">
                {Array.from({ length: 16 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]/50"
                    ></span>
                ))}
            </div>
            {/* Bottom Circle */}
            <div className="absolute -right-44 -bottom-56 h-[400px] w-[400px] rounded-full border border-[#f59e0b]/40"></div>

            {/* Circle Dot */}
            <span className="absolute bottom-20 right-44 h-5 w-5 rounded-full bg-[#f59e0b] shadow-[0_0_30px_rgba(245,158,11,0.9)]"></span>

            {/* Small Floating Dot */}
            <span className="absolute right-33 top-55 h-4 w-4 rounded-full bg-[#f59e0b] shadow-[0_0_30px_rgba(245,158,11,0.9)]"></span>

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
                <div >
                    <div className="mb-8 flex items-center gap-4 text-[#f59e0b]">
                        <span className="h-3 w-3 rounded-full bg-[#f59e0b]">
                        </span>
                        <p className="text-lg font-medium">Get In Touch</p>
                    </div>

                    <h1 className="text-5xl font-extrabold leading-tight md:text-4xl">
                        Contact{" "}
                        <span className="text-[#f59e0b]">
                            Me
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#e5e5e5]/70">
                        Have a project in mind or just want to say hello?
                        I&apos;d love to hear from you.
                    </p>
                    <div className="mt-12 space-y-6">
                        {contactInfo.map((item) => (
                            <div key={item.title} className="flex items-center gap-6">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#262626] bg-[#262626]/70 text-xl text-[#f59e0b]">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-sm text-[#e5e5e5]/60">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-lg text-[#e5e5e5]">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="mt-12 ml-10 flex gap-4">
                        {socialLinks.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#262626] bg-[#262626]/70 text-sm font-semibold text-[#e5e5e5] transition hover:border-[#f59e0b] hover:text-[#f59e0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>




                </div>

                <div className="rounded-3xl border border-[#262626] bg-[#171717]/80 p-8 shadow-2xl backdrop-blur-md md:p-12">
                    <h2 className="text-3xl font-bold text-[#e5e5e5]">
                        Send Me a Message
                    </h2>

                    <div className="mt-4 h-0.5 w-16 bg-[#f59e0b]"></div>

                    <form className="mt-5 space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="rounded-xl border border-[#3a3a3a] bg-transparent px-5 py-4 text-[#e5e5e5] outline-none transition placeholder:text-[#e5e5e5]/50 focus:border-[#f59e0b]"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="rounded-xl border border-[#3a3a3a] bg-transparent px-5 py-4 text-[#e5e5e5] outline-none transition placeholder:text-[#e5e5e5]/50 focus:border-[#f59e0b]"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-xl border border-[#3a3a3a] bg-transparent px-5 py-4 text-[#e5e5e5] outline-none transition placeholder:text-[#e5e5e5]/50 focus:border-[#f59e0b]"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full resize-none rounded-xl border border-[#3a3a3a] bg-transparent px-5 py-4 text-[#e5e5e5] outline-none transition placeholder:text-[#e5e5e5]/50 focus:border-[#f59e0b]"
                        ></textarea>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f59e0b] px-6 py-4 font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]"
                        >
                            Send Message
                            <span>➤</span>
                        </button>
                    </form>
                </div>


            </div>
        </section>
    )
}