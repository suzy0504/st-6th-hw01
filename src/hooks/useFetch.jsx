import { useEffect, useState } from "react";

export default function useFetch() {
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log("response:", response);
        if (!response.ok) {
          throw new Error("Network 오류");
        }
        const result = await response.json();
        setTitle(result.title);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { title, loading, error };
}
