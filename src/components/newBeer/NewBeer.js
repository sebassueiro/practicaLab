import React, { useState } from "react";

const BeerForm = ({ onSaveBeer }) => {
  const [beerName, setBeerName] = useState("");
  const [beerStyle, setBeerStyle] = useState("");
  const [price, setPrice] = useState();
  const [available, setAvailable] = useState("");
};

const changeNameHandler = (event) => {
  setBeerName(event.target.value);
};

const NewBeer = () => {
  return (
    <div>
      <form>
        <div>
          <label>Nombre de la cerveza:</label>
          <input
            onChange={changeNameHandler}
            type="text"
            value={beerName}
          ></input>
        </div>

        <div>
          <label>Estilo de la cerveza</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Precio:</label>
          <input type="number"></input>
        </div>

        <div>
          <label>Disponible:</label>
          <select>
            <option value={true}>True</option>
            <option value={false}>Flase</option>
          </select>
        </div>

        <div>
          <button>Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default NewBeer;
