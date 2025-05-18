import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const name = params.get("name");
  const [inputValue, setInputValue] = useState(name || "");

  const handleChange = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    let time = setTimeout(() => {
      if (inputValue === "") params.delete("name");
      else params.set("name", inputValue);
      setParams(params);
    }, 500);

    return () => clearTimeout(time);
  }, [inputValue]);

  useEffect(() => {
    if (name === "") setParams({});
  }, []);

  const { data, error, loading } = useFetch(
    `search/movie?query=${encodeURIComponent(inputValue)}`
  );
  return (
    <>
      <div className="container mx-auto flex justify-center pt-12">
        <form>
          <div className="relative">
            <div className="absolute top-5 left-5">
              <IoSearchOutline className="text-red-700 text-2xl indent-10" />
            </div>
            <input
              className="w-[380px] h-16 bg-[#111111] rounded-[12px] text-white text-[18px] font-semibold font-[Inter] pl-14 border-none outline-none"
              type="text"
              placeholder="Name film"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div>
        {!data?.results || !data?.results.length ? (
          <div className="container mx-auto flex justify-center pt-32">
            <p className="text-[#4D4D4D] text-2xl">The page is still empty</p>
          </div>
        ) : (
          <MovieView movies={data?.results} />
        )}

        {loading && (
          <div className="text-center text-[#4D4D4D] py-6 text-2xl font-[Inter] font-medium">
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 mt-6">
            <p>Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.</p>
          </div>
        )}

        {data?.results?.length === 0 && inputValue && (
          <div className="text-center text-[#4D4D4D] mt-10 text-2xl font-medium font-[Inter]">
            <p>Nothing found matching your request</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
