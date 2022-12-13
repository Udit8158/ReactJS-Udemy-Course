import React, { useEffect, useState } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun" },
  { id: "q2", author: "Emma Watson", text: "Loving Harry Potter" },
];

export default function Quotes() {
  const quotesData = [];
  const [loadCompleted, setLoadCompleted] = useState(false);
  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch(
        "https://react-http-request-26266-default-rtdb.firebaseio.com/quotes.json"
      );
      const data = await res.json();

      for (const key in data) {
        quotesData.push({
          id: key,
          author: data[key].author,
          text: data[key].author,
        });
      }
      setLoadCompleted(true);
    };

    fetchQuotes();
    console.log(quotesData);
  }, [loadCompleted]);
  return <QuoteList quotes={quotesData} />;
}
