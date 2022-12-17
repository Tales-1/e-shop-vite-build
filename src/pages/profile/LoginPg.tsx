import {useState, useEffect, SetStateAction} from "react"
import Spinner from "components/Spinner"
import { Link, useNavigate } from "react-router-dom"
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import useNotification  from "utils/hooks/useNotification"
import Button from "components/Button"
import useStoreUser from "utils/hooks/useStoreUser"
import Input from "components/Input"
import { motion } from "framer-motion"
const Login:React.FC = () =>{
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user, loading ] = useAuthState(auth)
    const notification = useNotification("Successfully Logged In!")
    const navigate = useNavigate()
    const {executeDispatch} = useStoreUser({name:user?.displayName, email:user?.email})

    useEffect(()=>{
        if (loading) {
            // trigger loading screen
            return
        }
        if (user) {
            navigate("/profile/dashboard")
            notification()
            executeDispatch()
        }
    },[user,loading])
    
    const variant = {
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            transition:{
                duration:1
            }
        }
    }
    return(
        <motion.div 
            className="flex justify-center h-[40rem] bg-dark items-center"
            variants={variant}
            initial="hidden"
            animate="show"
            exit={{opacity:0}}
            >
            {loading && <Spinner />}
            <div className="bg-white p-3 max-w-md w-full max-h-login grid items-center shadow-md h-full rounded-md">
                <div className="flex flex-col gap-4 w-11/12 mx-auto">
                    <h1 className="text-start font-sans-serif text-xl">Sign In</h1>
                    <form className="flex flex-col gap-4">
                        <Input
                            placeholder="E-mail Address"
                            value={email}
                            setValue={(e: { target: { value: SetStateAction<string> } })=>setEmail(e.target.value)}
                            type="text"
                        />
                        <Input
                            placeholder="Password"
                            value={password}
                            setValue={(e: { target: { value: SetStateAction<string> } })=>setPassword(e.target.value)}
                            type="password"
                        />
                    </form>
                    <Button
                        styles="bg-blue-card text-white font-bold p-2 rounded-md hover:opacity-70"
                        func={() => logInWithEmailAndPassword(email, password)}
                    >
                    Login
                    </Button>
                    <Button styles="bg-red text-white font-bold p-2 rounded-md hover:opacity-70" func={signInWithGoogle}>
                    Login with Google
                    </Button>

                <div className="mt-3">
                    <Link to="/reset" >Forgot Password?</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register" className="hover:text-blue-500 underline">Register</Link> now!
                </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Login