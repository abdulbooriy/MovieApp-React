import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import { Loading } from "@/utils";
import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";

const SingleMovie = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`/movie/${id}`);
  const { data: images } = useFetch(`/movie/${id}/images`);
  const { data: similars } = useFetch(`/movie/${id}/similar`);

  const url = import.meta.env.VITE_IMAGE_URL;

  window.scroll(0, 0);

  return (
    <div>
      {loading && <Loading />}
      <div className="w-[1360px] h-[640px] rounded-2xl mx-auto overflow-hidden relative">
        <img
          className="hover:scale-120 duration-200 text-white"
          src={url + data?.backdrop_path}
          alt="single main image"
        />
        <div className="absolute top-2/3 left-5 text-white flex flex-col gap-3 font-[Inter] font-medium">
          <h1 className="text-5xl">{data?.title}</h1>
          <p className="text-[18px] line-clamp-3">{data?.overview}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 text-2xl">
              <HiTrendingUp />
              <span>{data?.vote_average}</span>
            </div>
            <div className="flex items-center text-2xl">
              <MdOutlineAttachMoney />
              <strong>{data?.budget?.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[50px]">
        <div className="grid grid-cols-5 gap-3">
          {images?.backdrops?.slice(0, 10)?.map((image) => (
            <img
              src={url + image.file_path}
              key={image.file_path}
              alt="image"
              className="rounded-[12px] hover:scale-105 duration-200 cursor-pointer text-white"
            />
          ))}
        </div>
        <div>
          <h3 className="container mx-auto text-3xl font-bold text-red-700 pt-10 text-center">
            <span>Similar</span>
          </h3>
          <MovieView movies={similars?.results} />
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
