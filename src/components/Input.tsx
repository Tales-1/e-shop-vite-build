interface Props { 
    placeholder:string,
    value:string,
    // func:Dispatch<SetStateAction<string>>
    setValue: (e: any) => void
    type:string
}


const Input:React.FC<Props> = ({placeholder,value,type,setValue}) => {

    return (
        <input
                type={type}
                className="border-2 border-black p-2 rounded-md"
                value={value}
                onChange={setValue}
                placeholder={placeholder}
                required
             />
    )
}

export default Input