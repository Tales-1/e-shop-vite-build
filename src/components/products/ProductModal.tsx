import Button from "../Button"
import { addToCart } from "redux/features/cartSlice"
import {useAppSelector,useAppDispatch} from "redux/store/hooks"
import {selectCurrentItem} from "redux/features/dataSlice"
import {useState} from "react"

// COME BACK TO LOOK AT THIS COMPONENT AT A LATER DATE

type Props = {
    item:{name:string | undefined, price:number | undefined, urls:string[] | undefined}
}

const ProductModal:React.FC<Props> = ({item}) => { 
    const dispatch = useAppDispatch()
    // refactor into another component maybe?
    const currentItem = useAppSelector(selectCurrentItem)
    const [cartItem,setCartItem] = useState({...currentItem,qty:1})
    
    
    return(
            <div className="fixed inset-0 grid justify-center items-center z-20 before:absolute before:inset-0 before:bg-black before:opacity-30 before:-z-10">
                <article className="grid gap-3 bg-white items-center w-11/12 mx-auto p-4 justify-center grid-cols-4 md:grid-cols-2 max-w-3xl">
                <img src={item.urls![0]} alt="" className="row-start-1 object-cover col-start-2 col-span-2 md:col-start-1 md:row-start-1 md:row-span-1 max-w-[200px]" />
                    <h2 className="row-start-2 col-start-2 col-span-2 text-center font-serif font-bold text-xl md:col-start-2 md:row-start-1 md:self-start md:text-xl">
                        {item.name}
                        <span className="text-bold font-serif block">£{item.price}</span> 
                    </h2>
                    
            
                    <div className="flex flex-wrap flex-row gap-2 justify-center row-start-3 col-start-1 col-span-4 border-y-2 border-y-black py-5 md:col-start-2 md:row-start-2">
                            <Button styles="py-1 px-2 border-2 border-blue-card rounded-xl">Small</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">Medium</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">Large</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">XL</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">XXL</Button>
                    </div>
                    
                    <Button 
                            styles="w-full bg-sauvignon-cr p-2 text-lg
                                    font-bold rounded-2xl transition-all duration-100 hover:scale-105 
                                    focus:ring focus:outline-none focus:ring-blue-card
                                    row-start-4 col-start-1 col-span-2 md:row-start-3 md:col-span-0" 
                            func={()=>dispatch(addToCart(cartItem))}>Add To Cart
                    </Button>
                    <Button styles="w-full bg-light-p p-2 text-xl font-bold bg-blue-header text-white 
                                    rounded-2xl transition-all duration-100 hover:scale-105 focus:ring
                                    row-start-4 col-start-3 col-span-2 md:row-start-3 md:col-span-0">
                                Buy Now
                    </Button>
                </article>
                    
                    {/* <Button styles="row-start-2 col-start-4 place-self-start" func={()=>dispatch(removeFromCart(item))}>Delete item</Button> */}
            </div>
    )
} 

export default ProductModal