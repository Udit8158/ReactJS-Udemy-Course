import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

export default function QuoteDetali() {
  const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is fun" },
    { id: "q2", author: "Emma Watson", text: "Loving Harry Potter" },
  ];

  // Getting the more information of location
  const match = useRouteMatch();
  console.log(match);

  const params = useParams();
  const id = params.quoteId;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === id);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.url} exact>
        <div className="centerd">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`} exact>
        <Comments />
      </Route>
    </>
  );
}
