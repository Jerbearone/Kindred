import ProductsCard from "./ProductsCard"

export default function CategoriesContainer({products, username}) {
    console.log(`$Container: ${products}`)
    return (<div className=" flex flex-row  w-full flex items-center overflow-x-scroll ">
        {products.map((product) => {
            console.log("PRODUCT: " + product)
            return <ProductsCard key={product.id} product={product} username={username}></ProductsCard>
        })}



    </div>)
}