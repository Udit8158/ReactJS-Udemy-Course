import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useQuotes from "../hooks/use-quotes";

export default function QuoteDetali() {
  const { quotesData, loading } = useQuotes();

  // Getting the more information of location
  const match = useRouteMatch();
  console.log(match);

  const params = useParams();
  const id = params.quoteId;

  const quote = quotesData.find((quote) => quote.id === id);

  if (!quote && !loading) {
    return <NoQuotesFound />;
  }

  if (loading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
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
