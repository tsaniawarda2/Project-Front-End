import { Route, Switch } from "react-router";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Home, Login, Register, Catalogs, Detail, Checkout } from "./pages";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/catalogs" component={Catalogs} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/detail:id" component={Detail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
