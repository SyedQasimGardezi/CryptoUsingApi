import React, { useState ,useEffect} from "react";
import "./search.css";
import List from "./List";
import Axios from "axios";
export default function Search() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins").then((res) => {
      console.log(res.data);
      setList(res.data.coins);
    });
  }, []);
  const filter = list.filter((coin)=>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="test">
      <div className="search-section">
      <input
        className="search"
        placeholder="Search Coin..."
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <List list={filter}/>
    </div>
  );
}
