import { selectTranslate } from "redux/features/screenSlice"
import {useAppSelector} from "redux/store/hooks"
import { selectMsg } from "redux/features/screenSlice"

const Notification:React.FC = () => {
    // const type = useAppSelector(selectType)
    // const color = type === "CART" || "LOGIN" ? "green" : type === "LOGOUT" ? "red" : "white"
    // console.log(color)
    const msg = useAppSelector(selectMsg)
    const translate = useAppSelector(selectTranslate)
   
    return (
        <div className={`fixed top-0 transition-all ${translate} p-6 bg-green z-30 flex justify-center items-center w-full`}>
            <p className="text-white font-bold">{msg}</p>
        </div>
    )
}

export default Notification