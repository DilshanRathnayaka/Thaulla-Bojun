import "./Product.css";
import { Link } from "react-router-dom";


const Product=({imageURL , name , price , description , productId})=>{
    return(
        <div className="product">
            <img src={imageURL} border="0'" alt={name}/>

            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__description">
                   {description.substring(0 , 100)}...
                </p>

                <p className="info__price">Rs.{price}.00</p>

                <Link to = {`/product/${productId}`} className="info__button" style={{width:"100%"}}>View</Link>
            </div>
        </div>
    )
}

export default Product;