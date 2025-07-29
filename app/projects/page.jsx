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
    image: '/assets/'
  }
]

const Projects = () => {
  return (
    <div>Projects Page</div>
  )
}

export default Projects
