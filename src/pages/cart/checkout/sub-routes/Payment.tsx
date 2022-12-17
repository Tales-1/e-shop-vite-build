import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Payment:React.FC = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    return(
    <section className="flex flex-col gap-4 w-11/12 mx-auto max-w-[33rem]">
        <article className="flex flex-col border-[1px] border-gray-400 gap-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2">
                <span className="col-start-1 row-start-1 opacity-50">Contact</span>
                <i className="row-start-2">Email Address</i>
                <button className="col-start-2 row-start-1 justify-self-end">Change</button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 border-[1px] border-t-gray-400">
                <span className="col-start-1 row-start-1 opacity-50">Deliver to</span>
                <i className="row-start-2">Post address</i>
                <button className="col-start-2 row-start-1 justify-self-end">Change</button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 border-[1px] border-t-gray-400">
                <span className="col-start-1 row-start-1 opacity-50">Method</span>
                <i className="row-start-2">2-3 working day</i>
                <button className="col-start-2 row-start-1 justify-self-end">Change</button>
            </div>
        </article>
        <article className="flex flex-col border-[1px] border-gray-400 gap-6 py-5">
            <div className="flex gap-1 ml-6">
                <input id="sameAddress" type="radio" name="billing" value="same" onChange={() => setVisible(false)}/>
                <i className="row-start-2">Same as delivery address</i>
            </div>
            <div className="flex gap-1 ml-6">
                <input id="differentAddress" type="radio" name="billing" value="different" onChange={()=> setVisible(true)} />
                <i className="row-start-2">Use a different billing address</i>
            </div>
            <div className={`bg-gray-100 py-4 ${visible ? "block" : "hidden"}`}>
                    <form className="grid gap-3 w-11/12 max-w-[30rem] mx-auto rows-9 grid-cols-2">
                        <select name="Countries" className="col-span-2 p-2 bg-white border-[1px] border-gray-100">
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
                    </form>
                </div>
        </article>
        <button className="w-full bg-blue-header tracking-wider text-white p-3 col-span-2 font-bold">PAY NOW!</button>
        <button onClick={()=>navigate(-1)}>Previous page</button>
    </section>
    )
}

export default Payment