import React, { useState } from "react"
import { Link } from "react-router-dom"
import emptyShoppingBag from "../icons/bag-empty.png"
import fullShoppingBag from "../icons/bag-fill.png"
import { motion } from "framer-motion"
const CartBtn: React.FC = () => { 
    const [isEmpty,setIsEmpty] = useState(false)
    
    // function fillCart(){
    //     setIsEmpty(prevEmpty => !prevEmpty)
    // }
     const shoppingBag = !isEmpty ? emptyShoppingBag : fullShoppingBag
    let z = 20
    return(
        <motion.div
            whileHover={{rotateZ:[0,z,-z,z,0],transition:{repeat:Infinity,duration:1}}}
        >
            <Link to="/cart" className="h-auto">
                <img 
                    src={shoppingBag} 
                    className="w-7 align-middle hover:cursor-pointer hover:scale-[1.5] transition-all md:w-7 xl:w-10"
                    alt={"shopping bag"}
                    />
            </Link>
        </motion.div>
    )
}


export default CartBtn