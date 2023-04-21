import Hero from "./Hero"
function Home({products, keyWord}){

    const title = `You Are Searching for ${keyWord}`

    const Products = ({item}) => {
        return(
           
            <div className="card" >
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">${item.price}</p>
            <p className="rating">Rating: {item.rating.rate}</p>
            <a href="/" className="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        )
    }
    const listProducts = products.map((obj, i) => {
      return <Products item={obj} key={i} />
    })

    return(
        <>
        <Hero text={title}/>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-3 my-5">{listProducts}</div>
            </div>
        </div>
        </>
    )
}

export default Home