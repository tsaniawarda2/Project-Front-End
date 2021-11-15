import { Route, Switch } from "react-router";

import {
  Home,
  SignIn,
  SignUp,
  Catalogs,
  Detail,
  Cart,
  Checkout,
} from "./pages";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/catalogs" component={Catalogs} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
