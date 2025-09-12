import Product from "./Product.jsx"
function App() {
  const productName = "laptop"
  const price = 45000
  
   return (
    
    <>
    <Product productName={productName} price={price} />
    </>
  )
}

export default App
