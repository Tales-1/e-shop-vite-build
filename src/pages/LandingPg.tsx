import Hero from "components/landing-page/sections/Hero"
import { lazy, Suspense } from "react"
import Spinner from "components/Spinner"
const LazyCatalogue = lazy(() => import("components/landing-page/sections/Catalogue"))

const LandingPage:React.FC = () => {

    return (
        <>
          <Suspense fallback={<Spinner />}>
            <Hero />
            <LazyCatalogue />
          </Suspense>
        </>
    )
}

export default LandingPage