import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { selectHamburgerVisible, toggleHamburger, selectViewport } from "../../redux/features/screenSlice";


// WHAT TYPE DO I GIVE TO THIS HOOK?
const useToggler = () => {
    const viewport = useAppSelector(selectViewport)
    const {mobile} = viewport
    const dispatch = useAppDispatch()
    const isVisible = useAppSelector(selectHamburgerVisible)
    function toggleMenu(defaultValue:string){
        if(mobile){
            dispatch(toggleHamburger(defaultValue))
        }
    }
    return {toggleMenu, isVisible}
}


export default useToggler