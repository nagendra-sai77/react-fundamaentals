import Product from "./Product.jsx"
import "./Product.css"
import "./App.css"


function App() {
  const productName = "Name:Nagendra"
  const price = "Roll:23VV1A0539"
  const blood = "BloodGroop:B+"
  const dob = "DOB:12/06/2005"
  const photo = "S.jpeg"

  
   return (
    
    <div className="App">
    <p className="s"><Product productName={productName} price={price} blood={blood} dob={dob} photo={photo}/></p>

  
  
    
    </div>
  )
}

export default App
