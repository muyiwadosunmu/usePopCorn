import { useState, useEffect } from "react";

export function useMovies(query, KEY, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        ////////////////
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error(
              "Something went wrong with fetching the movies !!!"
            );

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (error) {
          console.error(error.message);
          if (error.name !== "AbortError") {
            setError(error.message);
          }
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
        // console.log(movies) This line would give us an old value because setState is asynchronous
      }
      /**Check our search length */
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      callback?.();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [KEY, query]
  );

  return { movies, isLoading, error };
}
