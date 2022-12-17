
import Logo from "components/header/icons/logo.png"
import { selectCart, selectTotal } from "redux/features/cartSlice"
import { useAppSelector } from "redux/store/hooks"
import { useState,useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { selectViewport } from "redux/features/screenSlice"

const Checkout:React.FC = () => { 
    const viewport = useAppSelector(selectViewport)
    const { mobile, tablet, desktop } = viewport
    const cart = useAppSelector(selectCart)
    const total = useAppSelector(selectTotal)
    const [visible,setVisible] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const displayCart = cart.map((item, i)=>{
       return ( 
       <li className="flex gap-2 text-sm" key={i}>
           <div className="w-[6rem] aspect-square bg-white border-[1px] border-gray grid">
                <img src={item.url?.[0]} alt="product" className="w-9/12 aspect-square object-cover m-auto" />
            </div>
           <p className="w-1/2">{item.name}<i className="block mt-2">Qty. {item.qty}</i></p>
           <span className="1/4 ml-auto">{item.price}</span>
        </li>
        )
    })  
    useEffect(()=>{
        if(location.pathname ==="/checkout"){
            navigate("/checkout/information")
        }
    },[])
    return(
        <div className="flex flex-col lg:flex-row h-screen w-5/6 max-w-[95rem] mx-auto lg:mx-0 lg:ml-auto font-sans-serif">
            <section className="flex flex-col gap-4 h-full w-3/4 mx-auto">
                <img src={Logo} alt="logo" className="w-36 lg:w-52 cursor-pointer" onClick={()=>navigate("/cart")}/>
                {(mobile || tablet) && 
                    <div className="w-full p-2">
                        <p className="flex justify-around bg-gray-100 cursor-pointer" onClick={()=>{setVisible(prev => !prev)}}>
                            Show Order Summary
                            <span>£{total}</span>
                        </p>

                        <div className="flex flex-col gap-2 mt-1">
                            <ul className={`${visible ? "flex" : "hidden" } flex-col gap-4 transition-all duration-300 origin-top`}>
                                {displayCart}
                            </ul>
                            
                        </div> 

                    </div>}
                <Outlet />
            </section>

            {desktop && 
                    <aside className="pt-[5rem] col-start-2 bg-orange w-full text-black pr-24 bg-sauvignon-cr">
                        <ul className="flex flex-col gap-3 w-full max-w-sm mr-auto ml-20">
                            {displayCart}
                            <li className="flex w-full justify-between text-sm border-b-[1px] pb-5 border-black">Subtotal <span>£{total}</span></li>
                            <li className="flex gap-2 items-center w-full">Total <small>(incl VAT)</small><span className="ml-auto text-3xl">£{total}</span></li>
                        </ul>
                        
            </aside> }
        </div>
        
    )
}

export default Checkout