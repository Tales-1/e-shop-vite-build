import { selectViewport } from "redux/features/screenSlice"
import { useAppSelector ,useAppDispatch} from "redux/store/hooks"
import { sortItems } from "redux/features/dataSlice"

const SortProducts:React.FC = () => { 
    const dispatch = useAppDispatch()
    const viewport = useAppSelector(selectViewport)
    const { innerWidth } = viewport
    const desktopVW = innerWidth > 1200 
    return (
        desktopVW ? 
        <aside className="w-1/2 bg-blue-header mx-auto h-fit">
            <ul className="flex gap-6 text-white tracking-wide border-2 border-black">
                <li className="flex font-semibold w-full text-center">
                    <input type="radio" name="filter" id="l-h" className="hidden peer" />
                    <label htmlFor="l-h" 
                    className="cursor-pointer block w-full py-4 peer-checked:bg-white peer-checked:text-black peer-checked:font-bold" onClick={()=>dispatch(sortItems("LOW_TO_HIGH"))}>
                        Low to High
                    </label>
                </li>
                <li className="pl-4 font-semibold w-full text-center">
                    <input type="radio" name="filter" id="h-l" className="hidden peer" />
                    <label htmlFor="h-l" 
                    className="cursor-pointer block w-full py-4 peer-checked:bg-white peer-checked:text-black peer-checked:font-bold" onClick={()=>dispatch(sortItems("HIGH_TO_LOW"))}>
                        High to Low
                    </label>
                </li>
                <li className="pl-4 font-semibold w-full text-center">
                    <input type="radio" name="filter" id="a-z" className="hidden peer" />
                    <label htmlFor="a-z" 
                    className="cursor-pointer block w-full py-4 peer-checked:bg-white peer-checked:text-black peer-checked:font-bold" onClick={()=>dispatch(sortItems("A_TO_Z"))}>
                        Alphabetically A-Z
                    </label>
                </li>
                <li className="pl-4 font-semibold w-full text-center">
                    <input type="radio" name="filter" id="z-a" className="hidden peer"/>
                    <label htmlFor="z-a"  
                    className="cursor-pointer block w-full py-4 peer-checked:bg-white peer-checked:text-black peer-checked:font-bold" onClick={()=>dispatch(sortItems("Z_TO_A"))}>
                        Alphabetically Z-A
                    </label>
                </li>
                
            </ul>
        </aside> :
            <div className="flex justify-center md:w-10/12 md:mx-auto">
                <span className="mr-2 p-2 text-gray-800">Sort by: </span>
                <select name="Select-Option" className="bg-gray-100 text-sm p-3" defaultValue="default">
                    <option value="default" disabled hidden>Select</option>
                    <option value="p-low" onClick={()=>dispatch(sortItems("LOW_TO_HIGH"))}>Price, Low-High</option>
                    <option value="p-high" onClick={()=>dispatch(sortItems("HIGH_TO_LOW"))}>Price, High-low</option>
                    <option value="a-z" onClick={()=>dispatch(sortItems("A_TO_Z"))}>Alphabetically A-Z</option>
                    <option value="z-a" onClick={()=>dispatch(sortItems("Z_TO_A"))}>Alphabetically Z-A</option>
                </select>
            </div> 
            
    
    )
}

export default SortProducts