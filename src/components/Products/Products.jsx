import { useState, useEffect } from "react"
import { getAllProducts } from "../../api/api";
import categorySort from "../../utils/categorySort";
import CategoriesContainer from "./CategoriesContainer";
//main container for viewing all products (home)
export default function Products() {
    const [allProducts, setAllProducts] = useState([]);
    const [productCategories, setProductCategories] = useState([])
    useEffect(() => {
        const loadAllProducts = async() => {
            const response = await getAllProducts();
            console.log(response);
            setAllProducts(response);
            //itterate over all products and sort them by category
            const getAllCategories = await categorySort(response);
            setProductCategories(getAllCategories);
        }
        loadAllProducts();

    },[])

    return (
        <div className="h-full w-full items-center flex-row">
            {
                //will map over all products to split by category
                Object.keys(productCategories).map((category) => {
                    
                    return (<>
                    <h2 className="text-2xl uppercase text-gray-900 font-bold mt-10 mb-10" >{category}</h2>
                    <CategoriesContainer className="w-100vw h-100vh" key={category.category} products={productCategories[category]}></CategoriesContainer>
                    </>
                    )
                })
            }
            
            
        </div>
    )
}