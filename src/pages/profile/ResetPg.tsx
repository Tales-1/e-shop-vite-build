import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import Input from "components/Input";

const Reset:React.FC = () => {
    const [email, setEmail] = useState("");
    const [user, loading ] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
      }, [user, loading]);
      
    return(
        <div className="flex justify-center h-[42rem] bg-dark items-center">
            <div className="bg-white p-6 max-w-md w-full h-fit grid items-center shadow-md rounded-md">
                <div className="flex flex-col gap-4 w-11/12 mx-auto">
                <h1 className="text-start font-sans-serif text-xl">Forgot Password</h1>
                    <form className="flex flex-col gap-5">
                        <Input 
                            type="text"
                            value={email}
                            setValue={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        
                        />
                    </form>

                <div className="text-center mt-3">
                    <button
                        className="p-3 bg-blue-card font-bold text-white rounded-md"
                        onClick={() => sendPasswordReset(email)}>
                        Send password reset email
                     </button>
                </div>
                <div className="text-center">
                <Link to="/register" className="hover:opacity-80 underline"> Don't have an account? Register now.</Link>
                </div>
            </div>
      </div>
    </div>
    )
}


export default Reset