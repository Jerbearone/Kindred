import categorySort from "./categorySort";

async function sortPriceLowToHigh(products) {
    //function that will filter products prices from low to high
    //console.log("SortPriceLowToHigh " + products);
    const tempProducts = [...products];
    const newArry = tempProducts.sort((a, b) => {
        return a.price - b.price
    })
    const sortedProducts = await categorySort(newArry);
    return sortedProducts;
}

async function sortPriceHighToLow(products) {
    //function that will filter products prices from low to high
    //console.log("SortPriceLowToHigh " + products);
    const tempProducts = [...products];
    const newArry = tempProducts.sort((a, b) => {
        return b.price - a.price
    })
    const sortedProducts = await categorySort(newArry);
    return sortedProducts;
}

async function sortPriceLessThan100(products) {
    //function that will filter products prices from low to high
    //console.log("SortPriceLowToHigh " + products);
    const tempProducts = [...products];
    const newArry = tempProducts.filter((product) => {
        return product.price < 100;
    })
    const sortedProducts = await categorySort(newArry);
    return sortedProducts;
}

export {sortPriceLowToHigh, sortPriceHighToLow, sortPriceLessThan100}