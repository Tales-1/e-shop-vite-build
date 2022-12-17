import { useAppDispatch } from "../../redux/store/hooks";
import { showNotification, hideNotification } from "../../redux/features/screenSlice"


type Message = string

function useNotification(msg:Message){
    const dispatch = useAppDispatch()

    function displayNotification(){
        dispatch(showNotification(msg))
        setTimeout(()=>dispatch(hideNotification()),2000)
    }
    return displayNotification
}

export default useNotification