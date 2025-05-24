import Hero from "@/components/hero/Hero";
import MovieView from "@/components/movie-view/MovieView";
import Skeleton from "@/components/skeleton/Skeleton";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Home = () => {
  const { data, _, loading } = useFetch("/discover/movie");

  return (
    <div>
      <Hero movies={data?.results} />
      <MovieView movies={data?.results.slice(10)} />
      {loading && <Skeleton count={4} />}
    </div>
  );
};

export default React.memo(Home);
