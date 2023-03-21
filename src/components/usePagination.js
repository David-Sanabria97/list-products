import {  useEffect, useState } from "react"


export const usePagination = ({products}) =>{

    const [pageData, setPageData] = useState();
    const [actualPage, setActualPage] = useState(1)
    const [limitPage, setLimitPage] = useState({initial:0, final:5})

    const totalPage = Math.ceil((products.length/5)) 

    const handlePage = (e, value) =>{
        setActualPage(value)
        setLimitPage({...limitPage, initial:value*5-5, final:value*5})
    }
    const setPageInformation = () =>{
        setPageData(products.slice(limitPage.initial,limitPage.final))
    }

    
    useEffect(()=>{
        setPageInformation()
    },[actualPage, products.length])

    return { pageData,totalPage, handlePage}
}