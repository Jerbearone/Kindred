import ProductsCard from "./ProductsCard"

export default function CategoriesContainer({products}) {
    console.log(`$Container: ${products}`)
    return (<div className=" flex flex-row  w-full flex items-center ">
        {products.map((product) => {
            console.log("PRODUCT: " + product)
            return <ProductsCard key={product.id} product={product}></ProductsCard>
        })}



    </div>)
}