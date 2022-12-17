import { selectUser, storeUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";


const useStoreUser = ( userObj?:object ) => {
    const user = useAppSelector(selectUser)
    let isLoggedIn = user ? true : false
    const dispatch = useAppDispatch()
    function executeDispatch(){
        dispatch(storeUser(userObj))
    }

    return {executeDispatch, isLoggedIn }
}

export default useStoreUser