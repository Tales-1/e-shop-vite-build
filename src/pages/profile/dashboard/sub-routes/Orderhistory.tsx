import { useProps } from "../DashboardPg"

const Orderhistory:React.FC = () => {
    const {contextStyles} = useProps()
   
    return(
        <div className={`${contextStyles} h-full bg-gray-100 max-w-2xl justify-self-center w-11/12 lg:justify-self-start lg:max-w-4xl grid gap-2 p-4`}>
            <h1 className="text-center font-sans-serif text-2xl">Order History</h1>
            <p className="text-center">No items ordered</p>
        </div>
    )
}

export default Orderhistory