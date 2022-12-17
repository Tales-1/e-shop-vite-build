import { Link } from "react-router-dom"
import { useAppSelector } from "redux/store/hooks"
import { selectOverlay } from "redux/features/screenSlice"
import { motion } from "framer-motion"

type CardProps = {
    url:string
    src:string
    name:string
    style?:string
    cardNo:number
}

const CatalogueCard:React.FC<CardProps> = ({url,src,style,name, cardNo}) => { 

    const overlayStyles = useAppSelector(selectOverlay)
    return(     
                <motion.div 
                    className={`w-full ${style} relative`}
                    initial={{translateY:"-50px",opacity:0,}}
                    whileInView={{opacity:1, translateY:"0px", transition:{duration:0.3*cardNo, delay:cardNo*0.1}}}
                    viewport={{once:true, amount:0.8}}
                    >
                    <Link to={url}>
                        <div className="relative bg-blue-header flex flex-col items-center transition-all duration-300 hover:scale-105">
                            <div className={`relative w-full ml-auto ${overlayStyles} before:bg-black `}>
                                <img 
                                    src={src} 
                                    alt="clothes"
                                    className={`aspect-square lg-2:aspect-[1.4/1] object-cover w-full`}
                                />
                            </div>
                            <div className="flex flex-col absolute justify-center items-center h-full w-full">

                                <h2 className="text-white text-3xl font-serif tracking-wider lg:text-4xl lg-2:text-5xl">{name}</h2>
                            </div> 
                        </div>
                    </Link>
                </motion.div>
    )
}

export default CatalogueCard