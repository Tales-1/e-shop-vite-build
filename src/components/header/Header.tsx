import { useEffect} from "react"
import { Link } from "react-router-dom"
import MobileNavBar from "./header-items/hamburger/MobileNavBar"
import CartBtn from "./header-items/CartBtn"
import logo from "./icons/logo.png"
import ProfileBtn from "./header-items/ProfileBtn"
import SearchBar from "./header-items/SearchBar"
import { useAppDispatch, useAppSelector } from "redux/store/hooks"
import { selectViewport, setWidth } from "redux/features/screenSlice"
import DesktopNavBar from "./DesktopNavBar"


const Header: React.FC = () => {
    const viewportSizes = useAppSelector(selectViewport)
    const dispatch = useAppDispatch()
    const {mobile, tablet, desktop} = viewportSizes
    
    useEffect(()=>{
        window.addEventListener("resize",()=>dispatch(setWidth(window.innerWidth)))
        return () => {
            window.removeEventListener("resize", ()=>dispatch(setWidth(window.innerWidth)))
        }
    },[])

    // const {viewportSizes} = useContext<ContextObject>(Context)
    // const {mobile,tablet,desktop} = viewportSizes
    
    return(
        <> 
            <header className="flex items-center sticky top-0 w-full p-2 z-10 shadow-md bg-blue-header">
                {mobile && <MobileNavBar />}
                <Link to="/" className="w-24 md:w-28 lg:w-32 mx-auto md:mx-0 p-2">
                    <img  src={logo} alt="shop logo" />
                </Link>  

                {(tablet || desktop) && <SearchBar />}

                <ProfileBtn />
                <CartBtn />
            </header>
            <DesktopNavBar />
        </>

    )
}

export default Header