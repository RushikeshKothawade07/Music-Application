import React from "react";
import Card from "./Card";
import SData from "./SData";
const nCard = (val) => {
  return (
    <Card
      name={val.name}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}

      
    />
  );
};
const Singer = () => {
  return (
    <>
      <h1 className="main-heading">Here are the top picks for you 🤩🤩</h1>
      <div className="cards">{SData.map(nCard)}</div>
    </>
  );
};

export default Singer;
