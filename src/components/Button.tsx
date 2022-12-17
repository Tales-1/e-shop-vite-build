type ButtonProps = { 
    children:string | JSX.Element,
    styles:string,
    func?:() => void
    id?:string
}


const Button:React.FC<ButtonProps> = ({children,styles,func,id}) => { 

    return(
        <button id={id} className={`${styles} rounded-md transition-all duration-100 hover:scale-105 focus:ring focus:outline-none focus:ring-blue-card`} onClick={func}>
            {children}
        </button>
    )
}

export default Button