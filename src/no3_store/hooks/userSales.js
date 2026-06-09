import { useAllGetUser } from "./useUser";
import { useAllGetProduct } from "./useProduct";
import { salesAllGetApi } from "../apis/sales.api";
import { useQuery } from "@tanstack/react-query";


export const useAllGetSales = () => {
    return useQuery({
        queryKey: ["sales"],
        queryFn: salesAllGetApi
    })
}

/** join */
export const useGetSales = () => {

    const {data: userList=[]} = useAllGetUser()
    const {data: productList=[]} = useAllGetProduct()
    const {data: salesList=[]} = useAllGetSales()
    
    
    const userObj = {}
    userList?.forEach(item => {
        userObj[item.id] = item
    })
    
    const productObj = {}
    productList.forEach(item => {
        productObj[item.id] = item
    })
    
    const rowData = salesList.map(item=> ({
        ...item,
        user_name: userObj[item.user_id]?.name ?? "알수없음",
        product_name: productObj[item.product_id]?.product_name ?? "알수 없음" 
    }))

    return rowData
}
