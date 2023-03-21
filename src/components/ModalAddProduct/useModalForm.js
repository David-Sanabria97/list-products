
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import getListProducts from '../../api/getListProducts';
import { usePagination } from "../usePagination";

export const useModalForm = ({handleClose}) =>{

    const [ products, setProducts] = useState([])
    const [ filterProducts, setFilterProducts] = useState([])


    const { register, handleSubmit,  formState: { errors }, reset } = useForm();

    const { handlePage, totalPage, pageData} = usePagination({products: filterProducts.length>0 ? filterProducts :products })

    const addProduct = (data) =>{
        const list = products
        list.push({...data, id: products[products.length-1].id+1})
        setProducts(list)
        handleClose()
    }

    const getData = async() =>{
        const data = await getListProducts()
        setProducts(data)
    }

    const handleDelete = (id) =>{
        const elements = products.filter((product)=> product.id !== id)
        setProducts(elements)
    }

    const handleSearch = (e)=>{
        
        const elements = products.filter((product)=>  product.title.includes(e.target.value) )
        setFilterProducts(elements)

    }

    useEffect(()=>{
            getData()
      },[])

      return { 
        pageData,
        errors,
        totalPage,
        handleDelete,
        reset,
        handleSearch,
        handlePage,
        handleSubmit,
        addProduct,
        register
    }

}