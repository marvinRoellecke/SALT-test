import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [bootcampData, setBootcampData] = useState([]);
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBootcampData(data);
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();
  }, [url]);
  return bootcampData;
}
