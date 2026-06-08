import "./Home.css";
import { Link } from "react-router-dom";
import cover from "../../assets/cover.avif";
import fastdelivery from "../../assets/fastdelivery.jpg";
import toprestaurants from "../../assets/toprestaurants.webp";
import bestqualityfood from "../../assets/bestqualityfood.jpg";

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            Delicious Food Delivered To Your Doorstep
          </h1>

          <p>
            Order your favorite meals from top restaurants near you.
          </p>

          <Link to="/restaurants">
            <button>Explore Restaurants</button>
          </Link>
        </div>

        <div className="hero-right">
          <img
            src={cover}
            alt="Food"
          />
        </div>
      </section>

      <section className="features-section">
       <div className="feature-card">
          <img
            src={fastdelivery}
            alt="Fast Delivery"
          />
          <h3>Fast Delivery</h3>
          <p>
            Enjoy quick and reliable food delivery right to your doorstep.
            Our efficient delivery partners ensure your meals arrive hot,
            fresh, and on time every time.
          </p>
        </div>

        <div className="feature-card">
          <img
            src={toprestaurants}
            alt="Top Restaurants"
          />
          <h3>Top Restaurants</h3>
          <p>
            Explore a wide selection of top-rated restaurants offering
            diverse cuisines. From local favorites to premium dining
            experiences, find the perfect meal for every craving.
          </p>
        </div>

        <div className="feature-card">
          <img
            src={bestqualityfood}
            alt="Best Quality"
          />
          <h3>Best Quality</h3>
          <p>
            We partner with trusted restaurants that prioritize freshness,
            hygiene, and quality ingredients. Every order is prepared with
            care to deliver a delicious and satisfying dining experience.
          </p>
        </div>
      </section>
      <div className="order-btn">
        <button>Order Now </button>
      </div>
    </div>
  );
}

export default Home;

