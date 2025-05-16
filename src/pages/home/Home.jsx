import Hero from "@/components/hero/Hero";
import MovieView from "@/components/movie-view/MovieView";
import Skeleton from "@/components/skeleton/Skeleton";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Home = () => {
  const { data, error, loading } = useFetch("/discover/movie");

  return (
    <div>
      <Hero movies={data?.results.slice(10)} />
      <MovieView movies={data?.results.slice(10)} />
      {loading && <Skeleton count={20}/>}
    </div>
  );
};

export default React.memo(Home);
