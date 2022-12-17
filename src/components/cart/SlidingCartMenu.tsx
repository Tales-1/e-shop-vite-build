import { useAppSelector, useAppDispatch } from "redux/store/hooks"
import { emptyCart, selectCart, selectTotal } from "redux/features/cartSlice"
import { selectTranslateCart, hideCart } from "redux/features/screenSlice"
import Button from "../Button"
import { useNavigate } from "react-router-dom"
import DisplayCartItems from "./DisplayCartItems"


const SlidingCartMenu:React.FC = () => {
    const dispatch = useAppDispatch()
    const total = useAppSelector(selectTotal)
    const cartItems = useAppSelector(selectCart)
    const translate = useAppSelector(selectTranslateCart)
    const navigate = useNavigate()
    return (
        <aside className={`h-full w-11/12 max-w-md fixed top-0 right-0 pr-3 
                            flex flex-col gap-6 items-center bg-white transition-all ease-in-out duration-500
                            ${translate} z-50 shadow-lg
                            `}>

            <h1 className="font-serif text-3xl mt-5 border-b-2 pb-3 border-gray w-11/12">Cart Items </h1>
            <Button styles="absolute top-6 right-5 font-bold" func={()=>dispatch(hideCart())}> X </Button>
            <ul className="grid  gap-10 text-xl font-sans-serif w-11/12 my-4 overflow-scroll">
              <DisplayCartItems location="SLIDING_MENU"/>
            </ul>
            {cartItems.length !== 0 ? <footer className="grid gap-3 grid-cols-3 w-11/12 border-t-2 border-gray font-serif text-xl pt-3">
                <span className="">Subtotal</span>
                <span className="font-bold col-start-3 justify-self-end">£{total}</span>
                
                <Button 
                    styles="bg-blue-card text-white p-2 font-extrabold tracking-widest col-span-3 text-2xl"
                    func={()=>{
                        dispatch(hideCart())
                        navigate("/cart")
                    }}>
                    View Bag
                </Button>
            </footer> : <h1>Cart is Empty</h1>}
            
            <button 
                onClick={()=>dispatch(emptyCart())}
                className="border-2 border-black p-2"
                >
                Empty cart, debugger</button>
        </aside>
    )
}


export default SlidingCartMenu