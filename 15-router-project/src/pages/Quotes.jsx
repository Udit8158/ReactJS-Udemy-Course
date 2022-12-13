import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun" },
  { id: "q2", author: "Emma Watson", text: "Loving Harry Potter" },
];

export default function Quotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
