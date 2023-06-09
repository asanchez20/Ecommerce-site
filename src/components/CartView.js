function CartView({cartItems, onAdd, onRemove}){
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
const taxPrice = itemsPrice * 0.08;
const totalPrice = itemsPrice + taxPrice
    return(
        <aside className="block .col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.title}</div>
                    <div className="col-2">{item.category}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Items Tax</div>
                    <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <strong>Total Price </strong>
                        </div>
                    <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <button onClick={() => alert("Thank you for your order")}>
                        Checkout
                    </button>
                    
                </div>
                </>
    
            )}
        </aside>
    )
}


export default CartView