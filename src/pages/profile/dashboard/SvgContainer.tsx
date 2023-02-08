import React from "react"

interface Props { 
    children: JSX.Element
    
}

const SvgContainer:React.FC<Props> = ({children}) => {
    return (
        <div className="w-2/5 max-w-[3rem]">
            {children}
        </div>
    )
}


export default SvgContainer