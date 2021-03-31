import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // iconos solidos
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"; // iconos regulares
// le cambio el nombre al desestructurar para no tener error por declarar la
// misma variable dos veces

const Rating = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }

  const completeStars = () => {
    let numberOfRegularStars = 5 - stars.length;
    for (let i = 0; i < numberOfRegularStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStarRegular} />);
    }
    return stars;
  };

  return (
    <div className="product__rating">
      {stars.length === 5 ? stars : completeStars()}
    </div>
  );
};

export default Rating;
