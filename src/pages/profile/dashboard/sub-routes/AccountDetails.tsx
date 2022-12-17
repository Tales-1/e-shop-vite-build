import { useStyles } from "../DashboardPg"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import { useEffect, useState } from "react";
import Spinner from "components/Spinner";
type UserDetails = {
    name:string | null
    email:string | null
    url:string | null
    loading:boolean
}
const AccounDetails:React.FC = () => {
    const [user] = useAuthState(auth);
    const [userDetails,setUserDetails] = useState<UserDetails>({
        name:"none",
        email:"none",
        url:"",
        loading:true
    })
    
    useEffect(()=>{
        if(user){
            setUserDetails(
                {
                    name:user.displayName,
                    email:user.email,
                    url:user.photoURL,
                    loading:false,
                }
                
            ) 
           
        }
        
    },[user])

    const styles = useStyles()
    
    return(
        <div className={`${styles} h-full bg-gray-100 max-w-2xl justify-self-center w-11/12 lg:justify-self-start lg:max-w-4xl grid gap-2 p-4`}>
            <h1 className="text-center font-sans-serif text-2xl">Account Details</h1>
            {userDetails.loading ? <Spinner styles="justify-self-center" /> : 
                <>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                </>}
        </div>
    )
}

export default AccounDetails