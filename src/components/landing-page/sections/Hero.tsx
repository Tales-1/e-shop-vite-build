import heroImg from "images/hero-img.jpg";
import { motion } from "framer-motion";
// FIND A SOLUTION TO THE MOBILE KEY PAIRING NOT BEING READ OR UNDERSTOOD BY TYPESCRIPT AT THE MOMENT I'VE PUT DOWN ANY
// Property 'mobile' does not exist on type '{ mobile?: boolean | undefined; tablet?: boolean | undefined; desktop?: boolean | undefined; } | undefined'.ts(2339)

import { Link } from "react-router-dom";
import Button from "components/Button";

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative grid grid-rows-1 bg-slate-100 shadow-lg h-[80vh]">
        <div className="grid row-start-1 col-start-1 w-[95%] h-[90%] m-auto relative z-0 
        before:absolute before:inset-0 before:bg-black before:opacity-60 overflow-hidden">
          <img
            className="w-full object-cover h-full"
            src={heroImg}
            alt="woman wearing a dress"
          />
        </div>
        <div
          className="text-center col-start-1 row-start-1 m-auto w-3/5 max-w-[60rem] flex flex-col gap-8 
                md:gap-9 items-center text-white z-0"
        >
          <h1 className="text-5xl sm:text-6xl leading-tight xl:text-7xl font-serif font-bold">
            Traditional and Modern Styles To Suit All
            <span className="block text-2xl lg:text-3xl xl:text-4xl mt-5 font-normal">
              Browse through our collection
            </span>
          </h1>

          <Link to="/collection/kurtas">
            <Button styles="text-base py-2 px-3 lg:py-3 lg:px-5 xl:text-2xl xl:py-4 xl:px-6 bg-red font-bold xl:mt-6">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
