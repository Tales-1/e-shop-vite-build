import Header from "components/header/Header"
import SlidingCartMenu from "components/cart/SlidingCartMenu"
import { Outlet, useLocation } from "react-router-dom"
import { lazy, Suspense } from "react"
import Footer from "components/Footer"
import LandingPage from "./LandingPg"
import Spinner from "components/Spinner"

const LazyLandingPage = lazy(() => import("./LandingPg"))

const ParentRoute:React.FC = () => {
    const location = useLocation()
    return(
        <div className="h-fit">
            <Header />
            <SlidingCartMenu />
            {location.pathname === "/" && 
            <Suspense fallback={<Spinner />}>
                <LazyLandingPage />
            </Suspense>
            }
            <Outlet />
            <Footer />
            
        </div>
    )
}

export default ParentRoute