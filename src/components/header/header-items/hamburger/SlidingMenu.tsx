import { Link } from "react-router-dom"
import { menuNames } from "../../menuNames"
import SearchBar from "../SearchBar"

type SlidingProps = {
    translate:string,
    toggle:() => void,
}

const SlidingMenu: React.FC<SlidingProps> = ({translate,toggle}) => { 
    

    const displayMenu:JSX.Element[] = menuNames.map((item,i) => (
    <li key={i} onClick={toggle}>
        <Link to={item.url}>{item.name}</Link>
    </li>

    ))
    return(
        <nav className={`w-full h-full fixed top-0 left-0 flex flex-col items-center bg-white transition:all duration-200 ease-in-out ${translate} md:hidden justify-end z-100`}>
            <SearchBar />
            <ul className="flex flex-col ml-7 gap-14 text-xl font-sans-serif mt-16">
                {displayMenu}
                <li 
                    className="animate-bounce hover:cursor-pointer flex justify-end w-screen relative right-6"
                    onClick={toggle}
                    >
                    x
                </li>
            </ul>
        </nav>
    )
}

export default SlidingMenu