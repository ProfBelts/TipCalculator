import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <TipPercentage percentage={percentage1} onClick={setPercentage1}>
        <label> How did you like the service? </label>
      </TipPercentage>
      <TipPercentage percentage={percentage2} onClick={setPercentage2}>
        <label> How did your friend like the service? </label>
      </TipPercentage>
      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <button onClick={handleReset}> Reset </button>
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label> How much was the bill? </label>
      <input
        type="textbox"
        placeholder="Enter bill..."
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function TipPercentage({ children, percentage, onClick }) {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(e) => onClick(Number(e.target.value))}
      >
        <option value="0"> Not satisfied (0%) </option>
        <option value="5"> It was okay (5%) </option>
        <option value="10"> It was good (10%) </option>-
        <option value="20"> It was amazing! (20%) </option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  const totalBill = tip + bill;

  return (
    <h3>
      {" "}
      You pay ${totalBill} (${bill} + ${tip}){" "}
    </h3>
  );
}
