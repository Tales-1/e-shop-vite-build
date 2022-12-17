import { decrement, removeFromCart, selectCart,increment } from "redux/features/cartSlice"
import { useAppDispatch, useAppSelector } from "redux/store/hooks"
import Button from "../Button"
import Plus from "images/expand-plus-icon.png"
import Minus from "images/collapse-minus-icon.png"
import TrashIcon from "images/trash-bin-icon.png"

type Props = {
    location:"CART" | "SLIDING_MENU"
}

const DisplayCartItems:React.FC<Props> = ({location}) => {
    const cartItems = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    
    const displayItems = cartItems.map((item,i) => {
        if(location === "SLIDING_MENU"){
            return (
                <li className="grid grid-rows-3 grid-cols-4 text-base gap-3" key={i}>
                    <img src={item!.url![0]} alt="cart item"  className="object-cover row-start-1 row-span-3 h-full"/>
                    <h4 className="col-start-2 col-span-2">{item.name}</h4>
                    <span className="row-start-2 col-start-2">{item.price}</span>
                    <div className="flex col-start-3 row-start-2 gap-1 h-fit">
                        <Button styles="w-6" func={()=>dispatch(decrement(item))}><img src={Minus} alt="minus button" /></Button>
                        <span className="grid items-center underline underline-offset-4 w-1/2 text-center">{item.qty}</span>
                        <Button styles="w-6" func={()=>dispatch(increment(item))}><img src={Plus} alt="plus button" /></Button>
                    </div>
                    <Button styles="row-start-3 col-start-4 place-self-end font-bold text-red hover:animate-bounce" func={(()=>dispatch(removeFromCart(item)))}>
                            <img className="w-4 md:w-6" src={TrashIcon} alt="Trash Icon" />
                    </Button>
                </li>
            )
        } else if(location === "CART") { 
            return (
                <li className="flex flex-col justify-center items-center md:items-start md:grid md:grid-rows-2 md:grid-cols-4 gap-3 border-b-2 pb-3 tracking-wider" key={i}>
                    <h2 className="font-bold font-serif text-lg lg:text-xl">{item.name}</h2>
                    <img src={item.url![0]} alt="" className="row-start-1 row-span-2 object-cover w-28" />
                    <div className="flex gap-1 md:row-start-1 md:col-start-4 3/4 h-fit">
                        <Button styles="w-6" func={()=>dispatch(decrement(item))}><img src={Minus} alt="" /></Button>
                        <span className="grid items-center underline underline-offset-4 w-1/2 text-center text-lg lg:text-xl">{item.qty}</span>
                        <Button styles="w-6" func={()=>dispatch(increment(item))}><img src={Plus} alt="" /></Button>
                    </div>
                    <span className="md:row-start-1 md:col-start-5">£{item!.price! * item!.qty!}</span>
                    <Button styles="row-start-2 md:col-start-5 place-self-center md:place-self-end font-bold text-red hover:animate-bounce" func={()=>dispatch(removeFromCart(item))}>
                        <img className="w-4 md:w-5" src={TrashIcon} alt="Trash Icon" />
                    </Button>
                </li>
            )
        }
    })
    
    return (
        <>
            {displayItems}
        </>
        )
}

export default DisplayCartItems