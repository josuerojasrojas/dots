import React, { useState } from "react";
import "./App.css";
import DotsCollection from "components/DotsCollection";
import {
  balanceColor2,
  balanceColor4,
  balanceColor6,
  balanceColor8,
  balanceColor12,
  balanceColor16
} from "util/balanceFunctions";

function App() {
  const [currBalanceFunc, setCurrBalanceFunc] = useState(0);
  const balanceFunc = [
    balanceColor2,
    balanceColor4,
    balanceColor6,
    balanceColor8,
    balanceColor12,
    balanceColor16
  ];
  return (
    <div
      className="App"
      onClick={() =>
        setCurrBalanceFunc((currBalanceFunc + 1) % balanceFunc.length)
      }
    >
      <DotsCollection
        length={12}
        width={12}
        colorFunction={balanceFunc[currBalanceFunc]}
      />
    </div>
  );
}

export default App;
