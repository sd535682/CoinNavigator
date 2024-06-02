import React, { useEffect, useState } from "react";
import Card from "./Card";
import PageButton from "../pagination/page";

function Coins() {
  const [coin, setCoin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  useEffect(() => {
    const fetchCoins = setInterval(() => {
      fetch(`https://api.coincap.io/v2/assets`)
        .then((res) => res.json())
        .then((data) => setCoin(data.data))
        .catch((e) => console.log(e));
    }, 5 * 1000);
    return () => clearInterval(fetchCoins);
  }, []);

  const lastPostIndex = postPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = coin.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {currentPost.map((item) => (
          <Card
            key={item.id}
            symbol={item.symbol}
            changePercent24Hr={item.changePercent24Hr}
            priceUsd={item.priceUsd}
          />
        ))}
      </div>
      <PageButton
        totalPost={coin.length}
        pagePerPost={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Coins;
