import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
  const [pokeData, setPokeData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      // Unsure how to grab random pokemon due to the id system. Looking into it.
      .get("https://api.pokemontcg.io/v2/cards?q=number:1&pageSize=1")
      .then((res) => {
        console.log(res.data.data[0]);
        setPokeData(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <p>Axios Test For Pokemon</p>
      <form onSubmit={submitHandler}>
        <button type="submit">Get JSON Data</button>
      </form>
      {pokeData && <pre>{JSON.stringify(pokeData, null, 2)}</pre>}
    </>
  );
};

export default Dashboard;
