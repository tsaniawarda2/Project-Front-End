import { Redirect, Route, Switch } from "react-router";

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
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/signUp"
          render={(props) => {
            if (localStorage.getItem("dataSignIn")) {
              return <Redirect to="/" />;
            } else {
              return <SignUp {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/signIn"
          render={(props) => {
            if (localStorage.getItem("dataSignIn")) {
              return <Redirect to="/" />;
            } else {
              return <SignIn {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/catalogs"
          render={(props) => <Catalogs {...props} />}
        />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/cart"
          render={(props) => {
            if (localStorage.getItem("dataSignIn")) {
              return <Cart {...props} />;
            } else {
              return <Redirect to="/signIn" />;
            }
          }}
        />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
