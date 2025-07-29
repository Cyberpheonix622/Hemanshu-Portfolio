"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    description: "(+91) 77099-98271"
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "hemanshu.moundekar0504@gmail.com"
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    description: "linkedin.com/in/hemanshu-moundekar-"
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('✅ Message sent successfully!');
      setForm({ firstname: '', lastname: '', email: '', phone: '', message: '' });
    } else {
      alert('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* FORM */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">To Reach Out</h3>
              <p>To reach me out please contact me through the below form.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={form.firstname} onChange={handleChange} placeholder="First Name" required />
                <Input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Last Name" required />
                <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
                <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone No" />
              </div>

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type Your Message Here"
                className="h-[200px]"
                required
              />

              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
