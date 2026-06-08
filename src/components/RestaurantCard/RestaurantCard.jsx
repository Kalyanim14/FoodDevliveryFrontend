import "./RestaurantCard.css";
import { Link } from "react-router-dom";
import res from "../../assets/restaurant.jpg";
function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <img
        src={res}
        alt="restaurant"
      />

      <div className="restaurant-content">
        <h3>{restaurant.name}</h3>

        <p>{restaurant.address}</p>

        <span>{restaurant.phone}</span>

        <Link to={`/restaurant/${restaurant.id}`}>
          <button>View Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard;

