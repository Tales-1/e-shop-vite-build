
import { useAppSelector,useAppDispatch } from "../redux/store/hooks";
import { hideCart, selectOverlayHidden } from "../redux/features/screenSlice";

const Overlay:React.FC = () => { 
    const hiddenOverlay = useAppSelector(selectOverlayHidden)
    const dispatch = useAppDispatch()
    const isHidden = hiddenOverlay ? "hidden" : "visible"

    return ( 
        <div 
            className={`fixed inset-0 ${isHidden} bg-black opacity-40 z-30`}
            onClick = {()=>dispatch(hideCart())}
            >

        </div>
    )
}


export default Overlay