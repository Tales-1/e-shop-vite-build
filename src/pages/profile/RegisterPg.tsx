import {useState, useEffect} from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import Button from "components/Button";
import Input from "components/Input";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../../firebase";

const Register:React.FC = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [user, loading ] = useAuthState(auth)
    const navigate = useNavigate()
    const register = () => {
        registerWithEmailAndPassword(name,email,password)
    }

    useEffect(()=>{
        if(loading) return
        if(user) navigate("/dashboard")
    },[user, loading])

    return (
        <div className="flex justify-center h-[42rem] bg-dark items-center">
            <div className="bg-white p-3 max-w-md w-full h-full max-h-login grid items-center shadow-md rounded-md">
            <div className="flex flex-col gap-4 w-11/12 mx-auto">
            <h1 className="text-start font-sans-serif text-xl">Register</h1>
                <form className="flex flex-col gap-5">
                    <Input
                        type="text"
                        value={name}
                        setValue={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                    
                    />
                    <Input
                        type="text"
                        value={email}
                        setValue={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    
                    />
                    <Input
                        type="password"
                        value={password}
                        setValue={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    
                    />
                </form>
                <Button styles="bg-blue-card text-white font-bold p-2 rounded-2xl hover:opacity-70" func={register}>
                        Register
                    </Button>
                    <Button
                    styles="bg-red text-white font-bold p-2 rounded-2xl hover:opacity-70"
                    func={signInWithGoogle}
                    >
                    Register with Google
                    </Button>
            <div className="text-center mt-3">
            <Link to="/login" className="hover:text-blue-500 underline">Already have an account? Sign in now.</Link>
            </div>
            </div>
      </div>
    </div>
    )
}


export default Register