import React from "react";
import  {Link } from "react-router-dom" 
import { menuNames } from "./menuNames";
import { useAppSelector } from "redux/store/hooks";
import { selectViewport } from "redux/features/screenSlice";
import {motion} from "framer-motion"

 const DesktopNavBar: React.FC = () => { 
    const viewportSizes = useAppSelector(selectViewport)
    const {tablet, desktop} = viewportSizes

    const displayMenu:JSX.Element[] = menuNames.map((item,i) => (
    <motion.li 
        className="text-base xl:text-lg xl:tracking-wide"
        key={i}
        whileHover={{
            backgroundColor:"#4A4E69", 
            color:"white",
            padding:"0.5rem",
            fontWeight:"bold", 
            borderRadius:"0.375rem"}}
        
         >
        <Link to={item.url}>{item.name}</Link>
    </motion.li>))

     return (
        (tablet || desktop) ? 
        (   <div className="w-screen bg-white sticky top-[6.1rem] lg:top-[7rem] z-[5]">
                <ul className="flex justify-center text-xs gap-16 py-[.4rem] lg-2:gap-40">
                    {displayMenu}
                </ul>
            </div>  )

            : null
     )
 }

 export default DesktopNavBar