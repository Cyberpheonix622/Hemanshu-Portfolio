import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Apiring Ethical Hacker</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-accent">Hemanshu Moundekar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Detail-oriented Computer Science Student specializing in Cyber Security and Digital Forensics, with a solid
              foundation in network security, ethical hacking, and risk assessment. Proficient in Wireshark, Nmap, and Kali
              Linux; familiar with ISO 27001 and OWASP Top 10. Experienced in academic projects simulating real-world
              threats, and eager to apply skills to secure and resilient systems. Quick learner and committed to continuous
              growth in the cybersecurity field.
            </p>
            <Button 
              variant="outline"
              size="lg" 
              className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
            </Button>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home
