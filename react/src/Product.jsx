function Product() {
    const products = "laptop"
    const price = 45000
    const isAvailable = true
    return (
        <div><p>Product</p>
            <h1>{products}</h1>
            <h2>{price}</h2>
            <h3>{isAvailable ? "available" : "not available"}</h3>
        </div>
    )
}
export default Product;