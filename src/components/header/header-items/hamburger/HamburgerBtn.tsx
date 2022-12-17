import hamburgerIcon from "../../icons/white-hamburger.png"

type ToggleFunction = {
    toggleVisible:() => void
}

const HamburgerBtn: React.FC<ToggleFunction> = ({toggleVisible}) => { 
    
    return(
        <img 
        className="h-6 hover:cursor-pointer md:hidden" 
        src={hamburgerIcon}
        onClick={toggleVisible}
        alt="hamburger-menu"/>
    )
}

export default HamburgerBtn