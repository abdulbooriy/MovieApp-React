import React from "react";
import Card from "../card/Card";

const MovieView = ({ movies }) => {
  return (
    <div className="container mx-auto">
      <div className="flex overflow-auto gap-5 mt-[50px] py-10">
        {movies?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MovieView);
