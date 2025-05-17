import Genres from "@/components/genres/Genres";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useCallback, useState } from "react";
import Skeleton from "@/components/skeleton/Skeleton";
import { useSearchParams } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";

const Movies = () => {
  const [genre, setGenre] = useState("");
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  let genres = params.get("genres") || "";
  let with_genres = genres.split("-").join(",").slice(1);

  const { data, error, loading } = useFetch("/discover/movie", {
    page,
    with_genres,
    without_genres: "18,10749,36",
  });

  const handleChangeGenre = useCallback((id) => {
    let array = genres.split("-");
    if (array.includes(id)) {
      genres = array.filter((i) => i !== id).join("-");
    } else {
      genres += `-${id}`;
    }

    params.set("page", "1");
    if (!genres) {
      params.delete("genres");
      params.delete("page");
    } else {
      params.set("genres", genres);
    }
    setParams(params);
  }, []);

  let handleChange = (_, value) => {
    if (value === 1) {
      params.delete("page");
    } else {
      params.set("page", value.toString());
    }
    setParams(params);
  };

  return (
    <div>
      <Genres handleChangeGenre={handleChangeGenre} genres={genres} />
      <MovieView movies={data?.results} />
      {loading ? (
        <Skeleton coount={20} />
      ) : (
        <MovieView movies={data?.results} />
      )}

      <div className="container mx-auto flex justify-center mt-[50px]">
        <Pagination
          className="flex justify-center items-center gap-2 bg-white rounded-2xl"
          count={data?.total_pages > 500 ? 500 : data?.total_pages}
          size="large"
          onChange={handleChange}
          page={Number(page)}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Movies;
