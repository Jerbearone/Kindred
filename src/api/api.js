
const BASEURL = 'https://fakestoreapi.com/'
//get
const getAllProducts = async() => {
    try {
        const response = await fetch(`${BASEURL}/products`);
        const productsData = await response.json();
        return productsData;
        
    } catch (error) {
        console.log(error);
    }
}

//get sorted products by description

const getAllSortedProducts = async() => {
    try {
        const response = await fetch(`${BASEURL}/products?sort=desc`);
        const productsData = await response.json();
        return productsData;
        
    } catch (error) {
        console.log(error);
    }
}

//get products from a category

const getProductsByCategory = async(category) => {
    try {
        const response = await fetch(`${BASEURL}/products/${category}`);
        const productsData = await response.json();
        return productsData;
        
    } catch (error) {
        console.log(error);
    }
}



//getbyId

const getProductById = async(productId) => {
    try {
        const response = await fetch(`${BASEURL}/products/${productId}`)
        const product = await response.json();
        return product         
    } catch (error) {
        console.log(error);
    }
}

//post

const addNewProduct = async(productObject) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: productObject.title,
                    price: productObject.price,
                    description: productObject.description,
                    image: productObject.image,
                    category: productObject.category
                }
            )
        });
        const addedProductData = await response.json();
        return addedProductData;
    } catch (error) {
        console.log(error);
    }
}



//update

const updateProductById = async(productObject) => {
    try {
        const response = await fetch(`${BASEURL}/products/${product.id}`, {
            method:"PATCH",
            body: JSON.stringify(
                {
                    title:productObject.title,
                    price:productObject.price,
                    description:productObject.description,
                    image:productObject.image,
                    category:productObject.category
                }
            )
        })
        const product = await response.json();
        return product         
    } catch (error) {
        console.log(error);
    }
}



//delete

const deleteProduct = async(productId) => {
    try {
        const response = await fetch(`${BASEURL}/products/${productId}`, {
            method:"DELETE"
        });
        const product = await response.json();
        return product;         
    } catch (error) {
        console.log(error);
    }
}




export {getAllProducts, getAllSortedProducts, getProductById, getProductsByCategory, addNewProduct, updateProductById, deleteProduct}