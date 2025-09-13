import Product from "./Product.jsx"
import "./Product.css"
import "./App.css"
import BlogPost from "./BlogPost.jsx"


function App() {
  const productsName = [{
    product: "iphone 14 pro max",
    price: 300000,
    isAvailable: true
  },
  {
    product: "iphone 14 pro",
    price: 30000,
    isAvailable: true
  },
  {
    product: "iphone 14 ",
    price: 3000,
    isAvailable: true
  }]
  const posts = [{
    id:1,
    author: "pakkurthi",
    title: "my first blog",
    content: "this is my first blog post"
  },
  {
    id:2,
    author: "sai",
    title: "my second blog",
    content: "this is my second blog post"
  },
  {
    id:3,
    author: "gopi",
    title: "my third blog",
    content: "this is my third blog post"
  }]


  return (
    <div className="f">
    {posts.map((post)=> <BlogPost key={post.id} author={post.author}
    title={post.title}
    content={post.content} />)}
    </div>





  )
}

export default App
