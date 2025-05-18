import Genres from "@/components/genres/Genres";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useCallback } from "react";
import Skeleton from "@/components/skeleton/Skeleton";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  let genres = params.get("genres") || "";
  let with_genres = genres.split("-").join(",").slice(1);

  const { data, _, loading } = useFetch("/discover/movie", {
    page,
    with_genres,
    without_genres: "18,10749,36",
  });

  window.scroll(0, 0);

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
      {loading && <Skeleton count={4} />}

      <div className="container mx-auto flex justify-center mt-[50px]">
        <Pagination
          count={data?.total_pages > 500 ? 500 : data?.total_pages}
          size="large"
          onChange={handleChange}
          page={Number(page)}
          sx={{
            "& .MuiPagination-ul": { color: "white" },
            "& .Mui-selected": {
              backgroundColor: "red",
              color: "white",
            },
            "& button": {
              color: "white",
              borderColor: "white",
              fontSize: "18px",
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Movies;
