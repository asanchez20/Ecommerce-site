import Hero from "./Hero"
function Home({products, keyWord, onAdd}){

    const title = `Welcome To Prime Products`

    
    const Products = ({item}) => {
        return(
           
            <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card" >
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">${item.price}</p>
            <p className="rating">Rating: {item.rating.rate}</p>
            <button className="btn btn-primary" onClick={() => onAdd(item)}>Add to Cart</button>
        </div>
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
               {listProducts}
            </div>
        </div>
        </>
    )
}

export default Home