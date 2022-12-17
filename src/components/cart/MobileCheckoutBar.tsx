import Button from "../Button"
import { Link } from "react-router-dom"

type Props = {
    total:number
}
const MobileCheckoutBar:React.FC<Props> = ({total}) => {
    
    return (
        <footer className="flex justify-around fixed bottom-0 gap-4 w-screen bg-blue-header rounded-md z-50 p-2">
                <p className="font-serif flex gap-2 items-center text-xl text-white">Subtotal:<span className="text-2xl font-bold">£{total}</span></p>
                <Link to="/checkout"><Button styles="text-lg bg-red text-white p-3 font-bold mt-2 tracking-wide">CHECKOUT</Button></Link>
        </footer>
    )
}

export default MobileCheckoutBar