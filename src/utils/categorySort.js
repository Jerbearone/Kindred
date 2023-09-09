import { getAllCategories } from "../api/api";

export default async function categorySort(allProducts) {
    const productsSortedInCategories = {}
    const categories = await getAllCategories();
    console.log(categories);
    //itterate over categories and add them to productsSortedInCategories array as their own object
    categories.forEach((category) => {
        productsSortedInCategories[category] = []
        //productsSortedInCategories({category: category, products: []});
    });

    //itterate over all products and append them by category
    allProducts.forEach((product) => {
    const productCategory = product.category;
    //console.log("FOR " + productsSortedInCategories[productCategory])
        productsSortedInCategories[productCategory].push(product);
    })
  console.log(productsSortedInCategories)

    

    return productsSortedInCategories;
    


}