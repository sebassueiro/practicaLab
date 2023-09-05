import React from 'react'

const ChangeDollar = ({valueDollar, onChangeDollarHandler}) => {
    const changeDollarHandler = (event) => {
        onChangeDollarHandler(event.target.value);
    }
  return (
    
    <div>
        <label>Nuevo precio del dolar</label>
        <input type="number" onChange={changeDollarHandler} value={valueDollar}/>
    </div>
  )
}

export default ChangeDollar

