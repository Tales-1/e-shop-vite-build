import profileIcon from "../icons/profile-icon.png"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
const Profile:React.FC = () => { 
    const navigate = useNavigate()
    return (
        <motion.button
             onClick={() => navigate("/profile/dashboard")}
             whileHover={{scale:1.2}}
             >
            <img 
                src={profileIcon} 
                className="w-8 mr-3 xl:w-12 xl:mr-5 hover:cursor-pointer"
                alt="profile icon"
            />
        </motion.button>
    )
}


export default Profile