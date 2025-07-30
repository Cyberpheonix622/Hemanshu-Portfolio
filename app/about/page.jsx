"use client";

import {BsArrowDownRight} from "react-icons/bs";

import Link from "next/link";

const about = [
  {
    num: '01',
    title: "About Me",
    href: "#about-me",
    description:
      "I'm an enthusiastic and detail-oriented Computer Science graduate specializing in Cyber Security and Digital Forensics. I’ve applied theoretical knowledge to uncover vulnerabilities and design secure systems. Right now, I’m seeking opportunities where I can apply my skills, collaborate with security-focused teams, and continue growing as a cyber defender."
  },
  {
    num: '02',
    title: "What I Do",
    href: "#what-i-do",
    description:
      "- Vulnerability Assessment: Scanning systems for weaknesses before attackers can. \n" +
      "- Penetration Testing: Simulating attacks to strengthen defenses. \n" +
      "- Digital Forensics: Investigating security incidents and retrieving evidence.\n" +
      "- Network Security: Monitoring, analyzing, and securing traffic.\n" +
      "- Risk Management: Applying frameworks like ISO 27001 and aligning with OWASP Top 10."
  },
  {
    num: '03',
    title: "Skills and Tools",
    href: "#skills-and-tools",
    description:
      "Languages: Python, Bash, JavaScript.\n" +
      "Tools: Kali Linux, Metasploit, Wireshark, Burp Suite, Nmap, Hashcat.\n" +
      "Soft Skills: Analytical thinking, attention to detail, curiosity-driven learning."
  },
  {
    num: '04',
    title: "What I'm Looking For",
    href: "#what-i'm-looking-for",
    description:
      "I'm looking to join a forward-thinking company or security team where I can:\n" +
      "- Tackle real-world security challenges\n" +
      "- Work with experienced professionals\n" +
      "- Continue learning and growing as a Cyber Security Specialist"
  }
];

import {motion} from "framer-motion";

const About = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12  xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial = {{opacity: 0}}
          animate = {{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {about.map((about, index) => {
            return(
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl fonts-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {about.num}
                  </div>
                  <Link 
                    href={about.href}
                    className="w-[40px] h-[40px] rounded-full bg-white
                    group-hover:bg-accent transition-all duration-500
                    flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text:3xl"/>
                  </Link>
                </div>
                <h2 className="text-[26px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {about.title}
                </h2>
                <p className="whitespace-pre-line text-sm text-white/60">{about.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About