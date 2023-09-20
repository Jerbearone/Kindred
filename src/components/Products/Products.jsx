import { useState, useEffect } from "react"
import { getAllProducts } from "../../api/api";
import categorySort from "../../utils/categorySort";
import CategoriesContainer from "./CategoriesContainer";
import { getCurrentUserName } from "../../api/userLocalStorage";
//main container for viewing all products (home)
export default function Products({products, setProducts, searchedProducts}) {
    console.log("Searched Products: " + searchedProducts)
    const [username, setUsername] = useState("");
    const [productCategories, setProductCategories] = useState([])
    useEffect(() => {
        const loadAllProducts = async() => {
            const response = await getAllProducts();
            console.log(response);
            setProducts(response);
            
        }
        loadAllProducts();

    },[]);

    useEffect(() => {
        const loadAllProducts = async() => {
            if (!searchedProducts){
                console.log("equal to" + searchedProducts)
                const getAllCategories = await categorySort(products);
                setProductCategories(getAllCategories);

            } else {
                    console.log(`not equal to ${searchedProducts} at all`)
                    const setSearchResults = async () => {
                    const getAllCategories =  await categorySort(searchedProducts);
                    setProductCategories(getAllCategories);
                }
                setSearchResults();
            }
            
        }
        loadAllProducts();

    },[searchedProducts]);

    //get username for adding to the users cart
    useEffect(()=> {
        const getCurrentUsersName = async() => {
            const fetchedName = await getCurrentUserName();
            if (fetchedName != null) {
                setUsername(fetchedName);
            }
        }
        getCurrentUsersName();

    },[])

    /*useEffect(() => {
        if (searchedProducts) {
            const setSearchResults = async () => {
                const getAllCategories =  await categorySort(searchedProducts);
                setProductCategories(getAllCategories);
            }
            setSearchResults();
        }
        

    }, [searchedProducts])
    */

    

    return (
        <div className="h-full w-full items-center flex-row">
            {
                //will map over all products to split by category
                Object.keys(productCategories).map((category) => {
                    
                    return (<>
                    <h2 className="text-2xl uppercase text-gray-900 font-bold mt-10 mb-10" >{category}</h2>
                    <CategoriesContainer className="w-full h-full" key={category.category} username={username} products={productCategories[category]}></CategoriesContainer>
                    </>
                )
                })
            } 
        </div>
    )
}