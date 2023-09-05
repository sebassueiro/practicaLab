import React from "react";

const BeerItem = ({ id, beerName, beerStyle, price, available , dollar}) => {
  return (
    <div>
      <h2>Nombre:{beerName}</h2>
      <h2>Estilo:{beerStyle}</h2>
      <h2>Precio:{price * dollar}</h2>
      <h2>Disponible:{available ? "Sii" : "No"} </h2>
      <br></br>
    </div>
  );
};

export default BeerItem;
