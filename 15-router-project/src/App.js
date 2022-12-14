import React, { Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import NoQuotesFound from "./components/quotes/NoQuotesFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const Quotes = React.lazy(() => import("./pages/Quotes"));
const QuoteDetali = React.lazy(() => import("./pages/QuoteDetali"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <Quotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetali />
          </Route>

          <Route path="/new-quote">
            <NewQuote />
          </Route>
          {/* Not found page */}
          <Route path="*">
            <NoQuotesFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
