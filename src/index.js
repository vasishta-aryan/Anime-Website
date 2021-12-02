import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

function ncard(val) {
  return (
    <Card
      imgscr={val.imgscr}
      title={val.title}
      sname={val.sname}
      links={val.links}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading-style">Top 5 Animes Rated By Me </h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
