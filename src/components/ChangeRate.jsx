import React, { useState } from "react";
import Currency from "../components/Currency";
import Swap from "../components/Swap";

const ChangeRate = () => {
  const [selectedCurrency1, setSelectedCurrency1] = useState["USD"];
  const [selectedCurrency2, setSelectedCurrency2] = useState["VND"];
  const selectHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    if (e.target.id === "currency-one") {
      setSelectedCurrency1(e.target.value);
    } else {
      setSelectedCurrency2(e.target.value);
    }
  };
  return (
    <div className="currency">
      <Currency
        id="currency-one"
        value={selectedCurrency1}
        selectHandler={selectHandler}
      />
      <input type="number" id="amount-one" placeholder="0" value="1" />
      <Swap />
      <Currency
        id="currency-two"
        value={selectedCurrency2}
        selectHandler={selectHandler}
      />
      <input type="number" id="amount-two" placeholder="0" />
    </div>
  );
};

export default ChangeRate;
