import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import { Loading } from "@/utils";
import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`/movie/${id}`);
  const { data: images } = useFetch(`/movie/${id}/images`);
  const { data: similars } = useFetch(`/movie/${id}/similar`);

  const url = import.meta.env.VITE_IMAGE_URL;

  return (
    <div>
      {loading && <Loading />}
      <div className="container mx-auto">
        <div>
          <img src={url + data?.backdrop_path} alt="single main image" />
        </div>
        <div>
          <h1 className="text-4xl">{data?.title}</h1>
          <p>{data?.overview}</p>
          <p>{data?.vote_average}</p>
          <strong>{data?.budget?.toLocaleString()} USD</strong>
        </div>

        <div className="grid grid-cols-5">
          {images?.backdrops?.map((image) => (
            <img
              src={url + image.file_path}
              key={image.file_path}
              alt="image"
            />
          ))}
        </div>
        <div>
          <h3 className="container mx-auto text-2xl font-bold">Similar</h3>
          <MovieView movies={similars?.results?.slice(0, 4)} />
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
