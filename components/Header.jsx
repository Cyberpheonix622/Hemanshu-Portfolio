import Link from "next/link";
import { Button } from "./ui/button";


import Nav from "./Nav";
import MobileNav from "./MobileNav";

const header = () => {
  return (
     <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center gap-8">
        {/* Logo and Title */}
        <Link href = "/">
            <h1 className="text-4xl font-semibold">
                Hemanshu<span className="text-accent">.</span>
            </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href = "/contact">
                <Button>Hire Me</Button>
            </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
            <MobileNav />
        </div>

    </div>
  </header>
    );
};

export default header
