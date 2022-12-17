import { useLocation, Link,  } from "react-router-dom";
import useBreadCrumbs from "use-react-router-breadcrumbs"

const BreadCrumbs = () => { 
    const breadcrumbs = useBreadCrumbs()
    const location = useLocation()
    const { pathname } = location
    
    return(
        <nav className="w-full p-4 bg-white flex justify-center gap-4">
                {breadcrumbs.map(({ match,breadcrumb }, i) => {
                    if(i === 1) return null
                    else{
                        let currentLink = match.pathname === pathname
                        return (<Link key ={match.pathname} to={match.pathname} className={currentLink ? "text-black cursor-default" : "text-blue-card font-bold"}>
                        <span className={currentLink ? "no-underline" :"underline underline-offset-2 hover:opacity-75"}>{breadcrumb} </span>
                        {i !== breadcrumbs.length-1 && <span className="ml-3 text-black">/</span>}
                    </Link>)}
                })
                
                }
        </nav>
    )
}

export default BreadCrumbs

 