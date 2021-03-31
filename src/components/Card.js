import "./Card.scss";
import Rating from "./Rating.js";

const Card = (props) => {
  return (
    <article className="product__card">
      <div className="product__img--container">
        <img className="product__img" src={props.thumbnail} alt=""></img>
      </div>
      <div className="product__info--container">
        <h3>{props.title}</h3>
        <p>{props.type}</p>
        <h4>${props.price}</h4>
        <p>{props.rating}</p>
        <Rating key={props.rating} rating={props.rating}></Rating>
      </div>
    </article>
  );
};

export default Card;
