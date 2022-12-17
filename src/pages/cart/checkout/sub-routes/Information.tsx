import Button from "components/Button"
import { Link } from "react-router-dom"

const Information:React.FC = () => {
    return ( 
        <div className="mt-2 grid gap-5 w-full justify-items-center">
                    <h2 className="lg:justify-self-start font-bold">Delivery Address</h2>
                    <form className="grid gap-3 w-11/12 max-w-[34rem] rows-9 grid-cols-2 lg:mr-auto">
                        <select name="Countries" className="col-span-2 p-2 bg-white border-2 border-gray-300">
                            <option>England</option>
                            <option>Wales</option>
                            <option>Scotland</option>
                            <option>Northern Ireland</option>
                        </select>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2 md:col-start-1 md:col-span-1 md:row-start-2" placeholder="First Name" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2 md:col-start-2 md:col-span-1 md:row-start-2" placeholder="Last Name" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Address" required />
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Apartment, suite, etc. (optional)"/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Town or City" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Postcode" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Phone (optional)"/>
                        
                        <Button styles="bg-blue-header justify-self-center p-3 text-white font-bold col-start-1 col-span-2 w-full">
                            <Link to="/checkout/delivery"> CONTINUE TO DELIVERY</Link>
                        </Button>
                    </form>
            </div>
    )
}

export default Information