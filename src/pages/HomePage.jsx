import { Link } from "react-router-dom";
import Tesla from "../assets/img/tesla.jpeg";

const HomePage = () => {
  return (
    <div>
      <h1>Nikola Tesla</h1>
      <img src={Tesla} alt="tesla" />
      <div>
        <h2>
          <Link to={"/about"}>About Page</Link>
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
