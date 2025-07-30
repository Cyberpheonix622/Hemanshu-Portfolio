"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import 
  { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  }
from "@/components/ui/tooltip";
  
import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

const projects = [
  {
    num: '01',
    category: "Backend",
    title: 'Java Based Simple keylogger',
    description: 'A simple Java-based keylogger for educational and ethical use only. Captures and logs keystrokes to a local file. Intended for learning purposes in cybersecurity and ethical hacking. Do not use on unauthorized devices.',
    stack: [{name:'Java'}, {name:'JNativeHook'}],
    image: '/assets/Projects/image1.png',
    github: "https://github.com/Cyberpheonix622/Keylogger"
  },
  {
    num: '02',
    category: "Backend",
    title: 'Python based Simple Packet Sniffer',
    description: ' Python Packet Sniffer A low-level network packet sniffer written in Python using raw sockets. This tool captures Ethernet frames and decodes IPv4/IPv6, TCP, UDP, ICMP, and ICMPv6 protocols in real-time.',
    stack: [{name:'Python'}, {name:'Scapy'},{name:'Socket'}, {name: 'Npcap'}],
    image: '/assets/Projects/image2.png',
    github: "https://github.com/Cyberpheonix622/Sniffer"
  },
    {
    num: '03',
    category: "Full Stack",
    title: 'PhishFinder',
    description: 'PhishFinder is a lightweight and intelligent phishing detection tool designed to help users identify and avoid malicious URLs or websites. Leveraging machine learning and domain analysis techniques, PhishFinder classifies web links as legitimate or phishing, helping prevent credential theft, financial fraud, and cyberattacks.',
    stack: [{name:'Python'}, {name:'React+vite'}, {name:'Scikit-learn'}, {name:'Pandas'}, {name:'NumPy'}, {name:'Flask'}],
    image: '/assets/Projects/image3.png',
    github: "https://github.com/Cyberpheonix622/PhishFinder"
  },
    {
    num: '04',
    category: "Full Stack",
    title: 'SecLog',
    description: 'Seclog is a Python-based GUI tool for analyzing Windows Event Logs in real time. It includes role-based login, search, filtering, visualization, export features, and is packaged for standalone use with PyInstaller and Inno Setup.',
    stack: [{name:'Python'}, {name:'ttkbootstrap'}, {name:'pywin32'}, {name:'matplolib'}],
    image: '/assets/Projects/image4.png',
    github: "https://github.com/Cyberpheonix622/Seclog"
  },
]

const Project = () => {
  const[project, setProject] = useState(projects[0]);

  const handleSlideChange = swiper => {
    const currentIndex  = swiper.activeIndex;
    setProject(projects[currentIndex]); 
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition:{delay: 2.4, duration:0.4, ease:'easeIn'},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[25px] h-[50%]">
              {/* Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Title */}
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* Category */}
              <h2 className="text-5xl font-semibold text-transparent text-outline capitalize group-hover:text-accent transition-all duration-500">
                {project.category} project
              </h2>
              {/* Description */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return(
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20 gap-4"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex justify-center items-center group">
                        <BsGithub className="text-white text-5xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return(
                  <SwiperSlide key = {index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-contain" alt=""/>
                      </div>
                    </div>
                    {/* Slider Button */}
                    <ProjectSliderBtns
                      containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                      btnStyles="text-white hover:text-accent text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                      iconsStyles="text-2xl" 
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Project
