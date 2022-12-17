import Logo from "../components/header/icons/logo.png"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useLayoutEffect } from "react"
import { useAppDispatch, useAppSelector } from "redux/store/hooks"
import { selectHidden } from "redux/features/screenSlice"
import { setLoaded } from "redux/features/screenSlice";


type Props = {
    isVisible:boolean
}

const Welcome:React.FC<Props> = ({isVisible}) => { 
    const dispatch = useAppDispatch()
    const isHidden = useAppSelector(selectHidden)
    
    const sentence = {
        hidden:{opacity:1},
        visible:{
            opacity:1,
            transition:{
                duration:0.1,
                staggerChildren:0.04
            },
        },
    }
    const letter = { 
        hidden: { opacity:0, y:50 },
        visible: { 
            opacity:1,
            y:0
        }
    }
    let line = "Welcome to "

    // HIDE COMPONENT IF THE PAGE HAS BEEN REFRESHED
    useLayoutEffect(()=>{
        let session = sessionStorage.getItem("session")
        if(session === "TRUE"){
          dispatch(setLoaded("HIDE"))
        }
      },[])
      
    // DISPLAY WELCOME COMPONENT ONLY IF PAGE IS BEING OPENED FOR THE FIRST TIME
      useEffect(()=>{
        let session = sessionStorage.getItem("session")
          setTimeout(()=>{
            if(session !=="TRUE"){
              dispatch(setLoaded("LOADED"))
              sessionStorage.setItem("session", "TRUE")
                }
            }, 1500)

     },[])
     /// Render logic
    return (
        <AnimatePresence>
       { isVisible ? <motion.div 
                className={`fixed ${isHidden ? "hidden" : "visible"} w-screen h-screen grid place-items-center bg-blue-card z-[9999]`}
                initial={{translateY:0}}
                animate={{opacity:1, transition:{duration:0.4}, translateY:0}}
                exit={{translateY:"-100%", transition:{duration:1,ease:"easeInOut"}}}
                >
                <div className="flex flex-col md:flex-row gap-6 place-items-center">
                    
                    <motion.h1 
                        className="font-bold text-sauvignon-cr text-2xl lg:text-5xl font-serif"
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        >
                        {line.split("").map((char,index) => {
                            return ( 
                                <motion.span key={char + index } variants={letter}>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </motion.h1>
                    <motion.img 
                        src={Logo} className="w-52 lg:w-[24rem]" alt="logo of company" 
                        initial={{opacity:0}}
                        animate={{opacity:1,transition:{duration:0.5, delay:0.7}}}
                        />
                </div>
            </motion.div>
         : null}
         </AnimatePresence>
    )
}

export default Welcome