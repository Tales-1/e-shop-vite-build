import { useNavigate } from "react-router-dom"
import Button from "components/Button"

const Delivery:React.FC = () => {
    const navigate = useNavigate()
    return(
    <div>
        <article className="flex flex-col w-11/12 mx-auto max-w-[33rem] border-[1px] border-gray-400 gap-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2">
                <span className="col-start-1 row-start-1">Contact</span>
                <i className="row-start-2">Email Address</i>
                <button className="col-start-2 row-start-1 justify-self-end">Change</button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 border-[1px] border-t-gray-400">
                <span className="col-start-1 row-start-1">Deliver to</span>
                <i className="row-start-2">Post address</i>
                <button className="col-start-2 row-start-1 justify-self-end">Change</button>
            </div>
        </article>

        <div className="grid mt-10 gap-6 w-11/12 mx-auto max-w-[33rem]">
            <h2 className="font-bold">Delivery Method</h2>
            <article className="grid border-[1px] border-gray-400">
                <div className="flex gap-3 p-2 justify-center">
                    <input type="radio" />
                    <p className="w-full">Standard Delivery <i className="block mt-2">Delivery within 3-5 working days</i></p>
                    <span className="w-1/5">free</span>
                </div>
                <div className="flex gap-3 p-2 justify-center border-[1px] border-t-gray-400">
                    <input type="radio" />
                    <p className="w-full">Express shipping <i className="block mt-2">Delivery within 1-2 working days</i></p>
                    <span className="w-1/5">£5.00</span>
                </div>
            </article>
            <Button func={()=>navigate("/checkout/payment")}
                    styles="bg-blue-header text-white p-3 font-bold">
                CONTINUE TO PAYMENT
            </Button>
            <p onClick={()=>navigate(-1)}>return to information</p>
        </div>

        
    </div>
    )
}

export default Delivery