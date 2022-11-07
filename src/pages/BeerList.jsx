
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import homeImg from "../assets/blueHome.png";

function BeerList() {
  const [beerList, setBeerList] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  // Api call
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // save Data
     console.log(response.data)
      setBeerList(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  

  if (isFetching === true) {
    return <h3>Buscando...</h3>;
  }

  return (
    <div>
      <nav>
        <Link to="/">
          <img src={homeImg} alt="home" />
        </Link>
      </nav>

      <h4>Beers List</h4>
      {beerList.map((eachBeer) => {
        return (
          <div
            key={eachBeer._id}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <div>
              <img src={eachBeer.image_url} alt="" width="100px" />
            </div>

            <div>
              <Link to={`/beers/${eachBeer._id}`}>
                <h4>{eachBeer.name}</h4>
              </Link>

              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
