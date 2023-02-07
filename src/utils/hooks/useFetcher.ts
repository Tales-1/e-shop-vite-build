import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { selectStatus, fetchData, selectProducts } from "../../redux/features/dataSlice"

const useFetcher = () => {
    const products = useAppSelector(selectProducts)
    const dispatch = useAppDispatch()
    const status = useAppSelector(selectStatus)
    function fetch(){
        dispatch(fetchData())
    }
    return {status, fetch, dispatch, products}
} 

export default useFetcher