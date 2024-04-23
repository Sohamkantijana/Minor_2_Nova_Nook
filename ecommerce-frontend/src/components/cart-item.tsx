import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


type CartItemProps = {
    
    cartItem : any;

};

const CartItem = ({ cartItem }: CartItemProps) => {

    // productId: "asdasdasd",
    // photo: "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg",
    // name: "Macbook",
    // price: "3000",
    // quantity: 40,
    // stock: 10,

    const {photo,productId,name,price,quantity} = cartItem

  return <div className="cart-item">
    
    <img src={photo} alt="name" />
    <article>
        <Link to = {`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
    </article>

<div>
    <button>-</button>
    <p>{quantity}</p>
    <button>+</button>
</div>


<button>
  <FaTrash />
</button>

  </div>;
};

export default CartItem;