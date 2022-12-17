const Footer:React.FC = () => {

    return ( 
        <footer className="w-full bg-blue-header pt-10">
            <div className="flex flex-col justify-center md:flex-row gap-10 w-3/4 mx-auto text-white py-20">
                <ul className="grid mx-auto w-3/5 gap-1">
                    <li className="text-2xl lg:text-3xl mb-3 font-serif font-semibold">Mibby Fashions</li>
                    <li>About Us</li>
                    <li> Contact Us</li>
                    <li>Terms of Service</li>
                    <li>Refund Policy</li>
                </ul>
                <ul className="grid mx-auto w-3/5 gap-1">
                    <li className="text-2xl lg:text-3xl mb-3 font-serif font-semibold">Information</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    <li>Reviews</li>
                </ul>

                <ul className="grid mx-auto w-3/5 gap-1">
                    <li className="text-2xl lg:text-3xl mb-3 font-serif font-semibold">Contact us</li>
                    <li>Need assistance or have any questions? contact@mibbyfashions.co.uk</li>
                </ul>
            </div>
           
            <div className="w-full bg-sauvignon-cr text-black p-2 mt-8 font-bold">
                <p className="mx-auto w-3/5 text-center">
                    <span className="mr-2">
                         &#169;
                    </span>
                     2022 All Rights Reserved Mibby Fashions&#8482;
    
                </p>
            </div>
        </footer>
    )
}

export default Footer