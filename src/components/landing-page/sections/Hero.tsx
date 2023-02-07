import heroImg from "images/hero-img.jpg";
import { motion } from "framer-motion";
// FIND A SOLUTION TO THE MOBILE KEY PAIRING NOT BEING READ OR UNDERSTOOD BY TYPESCRIPT AT THE MOMENT I'VE PUT DOWN ANY
// Property 'mobile' does not exist on type '{ mobile?: boolean | undefined; tablet?: boolean | undefined; desktop?: boolean | undefined; } | undefined'.ts(2339)

import { Link } from "react-router-dom";
import Button from "components/Button";

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative grid grid-rows-3 grid-cols-3 h-[85vh] bg-slate-100 shadow-lg">
        <div className="grid row-start-1 row-end-4 col-start-1 col-end-4  w-[95%] h-[90%] m-auto relative z-0 
        before:absolute before:inset-0 before:bg-black before:opacity-60 overflow-hidden">
          <img
            className="w-full object-cover h-full"
            src={heroImg}
            alt="woman wearing a dress"
          />
        </div>
        <div
          className="text-center col-start-1 col-span-3 row-start-2 m-auto w-3/5 max-w-[60rem] flex flex-col gap-8 
                md:gap-9 items-center text-white z-0"
        >
          <h1 className="text-5xl sm:text-7xl leading-tight xl:text-7xl font-serif font-bold">
            Traditional and Modern Styles To Suit All
            <span className="block text-2xl md:text-4xl mt-5 font-normal">
              Browse through our collection
            </span>
          </h1>

          <Link to="/collection/kurtas">
            <Button styles="text-lg py-3 px-4 md:px-6 md:py-5 md:text-2xl mt-8 bg-red font-bold">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
