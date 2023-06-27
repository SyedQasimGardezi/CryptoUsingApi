import React from "react";
import Card from "./Card";
import "./list.css";

export default function List({ list }) {
  return (
    <div className="parent-card">
      {list.map((p) => {
        return (
          <div>
            <Card
              src={p.icon}
              name={p.name}
              cap={p.marketCap}
              rank={p.rank}
              price={p.price}
              symbol={p.symbol}
            />
          </div>
        );
      })}
    </div>
  );
}
