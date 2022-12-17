import { Link } from "react-router-dom"
import EmptyBag from "images/shopping-bag-36964.png"
import Button from "components/Button"
const CartIsEmpty:React.FC = () => {

    return(
        <div className="w-full h-[82vh] flex flex-col gap-8 justify-center items-center bg-gray-50">
            <img src={EmptyBag} className="animate-wiggle" alt="empty shopping bag" />
            <h1 className="font-bold text-3xl text-center mx-10">Whoops! <span className="block mt-3">Looks like your bag is empty.</span></h1>
            <Button styles="bg-blue-header text-white p-3 tracking-wider font-bold">
                <Link to="/collection/kurtas">Fill it now!</Link>
            </Button>
        </div>
    )
}

export default CartIsEmpty