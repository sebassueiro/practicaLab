import React from "react";
import Beers from "../beers/Beers";

const BeerAvailable = ({ id, beerName, beerStyle, price, available }) => {
  const dolar = 735;
  const beerAvailable = (Beers) =>
    Beers.filter((item) => (item.available = true)).map(
      (item) => item.beerName
    );
  return (
    <div>
      {Beers.filter}
      <h2>Nombre:{beerName}</h2>
      <h2>Estilo:{beerStyle}</h2>
      <h2>Precio:{price * dolar}</h2>
      <br></br>
    </div>
  );
};

export default BeerAvailable;
