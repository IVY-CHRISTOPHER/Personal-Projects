import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
  const [pokeData, setPokeData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const randPokeNum = Math.floor(Math.random() * (152 - 1) + 1);
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${randPokeNum}&orderBy=name`
      )
      .then((res) => {
        const randIndex = Math.floor(Math.random() * res.data.data.length);
        // Displays return list
        console.log(res.data.data);
        // Displays chosen from list
        console.log(res.data.data[randIndex]);
        // Displays pokeDex number and index chosen
        console.log(`PokeDex Number: ${randPokeNum}`, `Index: ${randIndex}`);
        setPokeData(res.data.data[randIndex]);
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
