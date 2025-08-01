import {FiDownload} from "react-icons/fi"

//componets
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import {Button} from "@/components/ui/button"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-4 xl:order-none">
            <span className="text-xl">Aspiring Ethical Hacker</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-accent">Hemanshu Moundekar</span>
            </h1>
            <p className="max-w-[400px] mb-9 text-white/80">
              Detail-oriented Computer Science Student specializing in Cyber Security and Digital Forensics, with a solid
              foundation in network security, ethical hacking, and risk assessment.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <a href="/assets/CV/Hemanshu_Moundekar_CV.pdf" download>
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
            
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home
