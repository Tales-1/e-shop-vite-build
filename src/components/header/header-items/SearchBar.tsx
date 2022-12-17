import { MouseEvent, useState } from "react"
import { selectProducts } from "redux/features/dataSlice"
import { useAppDispatch, useAppSelector } from "redux/store/hooks"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { searchItem } from "redux/features/dataSlice"
import useToggler from "utils/hooks/useToggler"

const SearchBar:React.FC = () => { 
    const {toggleMenu} = useToggler()
    const [query,setQuery] = useState<string>("")
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const products = useAppSelector(selectProducts)

    const filtered = useMemo(()=> products.filter((item)=>{
        if(query.length < 2) return
        if(item.name?.toLowerCase().includes(query?.toLowerCase())){
            return item
        } else if (item.type?.toLowerCase().includes(query?.toLowerCase())){
            return item
        }
    }), [query,products])
    
    const dropdownStyles = filtered.length && query.length ? "scale-y-100" : "scale-y-0"
    const searchBarStyles = filtered.length ? "z-[100] bg-black" : "relative"

    function searchItems(e:MouseEvent):void{
        e.preventDefault()
    }

    return(
            <form className={`${searchBarStyles} relative flex items-stretch md:m-auto md:w-1/2 xl:w-1/3`}>   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full  z-20">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query} id="simple-search" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl 
                                    focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                    dark:focus:border-blue-500 py-3" placeholder="Search" required />
                </div>

                <button type="submit" 
                        className="ml-2 px-2 text-sm font-medium text-white
                                bg-sauvignon-cr rounded-xl border hover:bg-light-p 
                                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                dark:focus:ring-blue-800"
                        onClick={(e)=>searchItems(e)}>
                            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                             <span className="sr-only">Search</span>
                </button>
                
                <div className={`fixed flex flex-col left-0 top-0 bottom-0 bg-white ${dropdownStyles} w-screen overflow-scroll pt-10 duration-[500ms] transition-all origin-top z-[10]`}>
                    <button className="fixed top-10 right-10" onClick={(e:MouseEvent):void=>{
                        e.preventDefault()
                        setQuery("")}}> X 
                    </button>

                    <ul className="mt-24 border-t-2 border-black w-1/2 mx-auto flex flex-col z-30">
                        {filtered.map((item,i)=>{
                            return( 
                                    <li className="flex gap-3 h-full w-full my-4 cursor-pointer transition-all hover:bg-sauvignon-cr hover:scale-105" key={i} 
                                        onClick={()=>{
                                            setQuery("")
                                            toggleMenu("CLOSE")
                                            navigate(`/collection/${item.type}/${item.type}`)
                                            dispatch(searchItem(item.id))
                                    }}>
                                        <img src={item.url![0]} alt="item" className="w-1/6 min-w-[7rem] h-full object-cover"/>
                                        <h3 className="w-5/6 font-serif">{item.name}
                                            <span className="block">£{item.price}</span>
                                        </h3>
                                    </li>
                            )
                        })}
                    </ul> 
                </div>
                
            </form>
    )
}

export default SearchBar