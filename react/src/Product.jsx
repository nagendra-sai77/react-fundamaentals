
function Product(App) {

    return (
        <div className="container">
            <img className="photo" src={App.photo} alt="product" />
            <h1>{App.photo}</h1>
            <h1 className="title">{App.productName}</h1>
            <h2 className="price">{App.price}</h2>
            <h2>{App.blood}</h2>
            <h2>{App.dob}</h2>



        </div>
    )
}
export default Product;