import {InputBox} from "./components";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyOptions = useCurrencyInfo(fromCurrency);
  console.log(currencyOptions);
  const options = Object.keys(currencyOptions);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  const convert = () => {
    setConvertedAmount(amount * currencyOptions[toCurrency]);
  };


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://tse2.mm.bing.net/th?id=OIP.8zJYriRG6Cboi60OoY2xpwHaEo&pid=Api&P=0&h=220')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencyOptions={options}
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                selectedCurrency={fromCurrency}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swapCurrencies}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To"
              currencyOptions={options}
              amount={convertedAmount}
              onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
              onCurrencyChange={(currency) => setToCurrency(currency)}
              selectedCurrency={toCurrency}
              amountDisabled={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;