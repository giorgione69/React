//import components
import Header from "./components/Header";
import Books from "./components/Books";
import Details from "./components/Details";
import Footer from "./components/Footer";

//import context
import BooksContextProvider from "./context/BookContext";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

<Router>
  <BooksContextProvider>
    <Header />
      <Switch>
        <Route exact path="/" component={Books} />{" "}
        <Route path="/:details_id" component={Details} />{" "}
      </Switch>{" "}
  </BooksContextProvider>{" "}
  <Footer />
</Router>
    
  );
}

export default App;
