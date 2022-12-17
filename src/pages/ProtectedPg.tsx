import { Navigate } from "react-router-dom"

type Props = {
    children:JSX.Element
    accessGranted: boolean | null | undefined
}

const ProtectedPg:React.FC<Props>= ({children,accessGranted}) => {
   if(!accessGranted){
        return <Navigate to = "/login" replace />
   }
    return (
      <>{children}</>
        
    )
}


export default ProtectedPg