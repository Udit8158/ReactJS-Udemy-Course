import { useEffect, useState } from "react";

const useQuotes = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      const res = await fetch(
        "https://react-http-request-26266-default-rtdb.firebaseio.com/quotes.json"
      );
      const data = await res.json();

      setLoading(false);

      for (const key in data) {
        quotesData.push({
          id: key,
          author: data[key].author,
          text: data[key].text,
        });
      }
    };

    fetchQuotes();
    // console.log(quotesData);
  }, []);

  return { quotesData, loading };
};

export default useQuotes;
