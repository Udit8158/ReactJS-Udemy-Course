import React from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useQuotes from "../hooks/use-quotes";

export default function Quotes() {
  // const [quotesData, setQuotesData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchQuotes = async () => {
  //     setLoading(true);
  //     const res = await fetch(
  //       "https://react-http-request-26266-default-rtdb.firebaseio.com/quotes.json"
  //     );
  //     const data = await res.json();

  //     setLoading(false);

  //     for (const key in data) {
  //       quotesData.push({
  //         id: key,
  //         author: data[key].author,
  //         text: data[key].author,
  //       });
  //     }
  //   };

  //   fetchQuotes();
  //   // console.log(quotesData);
  // }, []);

  const { quotesData, loading } = useQuotes();

  console.log(loading);
  if (loading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  console.log(quotesData);

  if (!loading && quotesData.length === 0) {
    return <NoQuotesFound />;
  }
  if (!loading) {
    return <QuoteList quotes={quotesData} />;
  }
}
