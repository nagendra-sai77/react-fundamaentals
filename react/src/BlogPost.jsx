import "./BlogPost.css"
function BlogPost(post){
    return(
        <div className="blog-post">
            <h1 className="title">Title:{post.title}</h1>
            <p className="author">Author:{post.author}</p>
            <p className="content">Content:{post.content}</p>
        </div>
    )
}
export default BlogPost;