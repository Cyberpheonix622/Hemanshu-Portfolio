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

const project = [
  {
    num: '01',
    category: "Backend",
    title: 'Java Based Simple keylogger',
    description: 'A simple Java-based keylogger for educational and ethical use only. Captures and logs keystrokes to a local file. Intended for learning purposes in cybersecurity and ethical hacking. Do not use on unauthorized devices.',
    stack: [{name:'Java'}, {library:'JNativeHook'}],
    image: '/assets/Projects/image1.png',
    github: "https://github.com/Cyberpheonix622/Keylogger"
  },
  {
    num: '02',
    category: "Backend",
    title: 'Python based Simple Packet Sniffer',
    description: ' Python Packet Sniffer A low-level network packet sniffer written in Python using raw sockets. This tool captures Ethernet frames and decodes IPv4/IPv6, TCP, UDP, ICMP, and ICMPv6 protocols in real-time.',
    stack: [{name:'Python'}, {library:'Scapy'},{library:'Socket'}, {technologies: 'Npcap'}],
    image: '/assets/Projects/image2.png',
    github: "https://github.com/Cyberpheonix622/Sniffer"
  },
    {
    num: '03',
    category: "Full Stack",
    title: 'PhishFinder',
    description: 'PhishFinder is a lightweight and intelligent phishing detection tool designed to help users identify and avoid malicious URLs or websites. Leveraging machine learning and domain analysis techniques, PhishFinder classifies web links as legitimate or phishing, helping prevent credential theft, financial fraud, and cyberattacks.',
    stack: [{name:'Python'}, {name:'React+vite'}, {library:'Scikit-learn'}, {library:'Pandas'}, {library:'NumPy'}, {library:'Flask'}],
    image: '/assets/Projects/image3.png',
    github: "https://github.com/Cyberpheonix622/PhishFinder"
  },
    {
    num: '04',
    category: "Full Stack",
    title: 'SecLog',
    description: 'Seclog is a Python-based GUI tool for analyzing Windows Event Logs in real time. It includes role-based login, search, filtering, visualization, export features, and is packaged for standalone use with PyInstaller and Inno Setup.',
    stack: [{name:'Python'}, {library:'ttkbootstrap'}, {library:'pywin32'}, {library:'matplolib'}],
    image: '/assets/Projects/image4.png',
    github: "https://github.com/Cyberpheonix622/Seclog"
  },
]

const Projects = () => {
  return (
    <div>Projects Page</div>
  )
}

export default Projects
