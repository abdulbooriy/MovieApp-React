import React from "react";
import Card from "../card/Card";

const MovieView = ({ movies }) => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-5">
      {movies?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(MovieView);
