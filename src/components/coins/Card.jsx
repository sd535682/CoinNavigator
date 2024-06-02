import React from "react";

function Card({ symbol, changePercent24Hr, priceUsd }) {
  return (
    <div
      className="bg-gradient-to-r from-[#7b2cbf] to-[#3c096c] ...
     text-slate-200 p-4 m-4 rounded-2xl">
      <div className="flex flex-row justify-between font-bold text-lg md:text-xl lg:text-2xl py-2">
        <img
          className="size-1/6"
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        />
        {parseFloat(changePercent24Hr).toFixed(3) > 0 ? (
          <p className="text-green-400">
            +{parseFloat(changePercent24Hr).toFixed(3)}%
          </p>
        ) : (
          <p className="text-red-500">
            {parseFloat(changePercent24Hr).toFixed(3)}%
          </p>
        )}
      </div>
      <div className="font-medium">
        <h1 className="font-bold opacity-80">{symbol}</h1>
        <p className="font-mono font-semibold">
          ${parseFloat(priceUsd).toFixed(4)}
        </p>
      </div>
    </div>
  );
}

export default Card;
