import ProductsCard from "./ProductsCard"

export default function CategoriesContainer({products, username, setAddedToCartClicked}) {
    console.log(`$Container: ${products}`)
    return (<div className=" flex justify-start w-full overflow-x-scroll ">
        {products.map((product) => {
            console.log("PRODUCT: " + product)
            return <ProductsCard key={product.id} product={product} username={username} setAddedToCartClicked={setAddedToCartClicked}></ProductsCard>
        })}
    </div>)
}