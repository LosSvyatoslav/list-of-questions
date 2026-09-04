import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Ошибка при запросе данных");
            }
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData(url);
      }, [url]);
  return data
}