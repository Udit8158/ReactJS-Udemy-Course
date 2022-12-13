import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NoQuotesFound from "./components/quotes/NoQuotesFound";
import NewQuote from "./pages/NewQuote";
import QuoteDetali from "./pages/QuoteDetali";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
