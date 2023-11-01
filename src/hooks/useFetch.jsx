import { useCallback, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);

      response = await fetch(url);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (error) {
      json = null;
      setError(error.message);
      console.log(error.message);
    } finally {
      setData(json);
      setLoading(false);
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};
