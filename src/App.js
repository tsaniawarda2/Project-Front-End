import { Redirect, Route, Switch } from "react-router";

import {
  Home,
  Catalogs,
  Detail,
  Cart,
  Checkout,
  Login,
  Register,
} from "./pages";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/login"
          render={(props) => {
            if(!localStorage.getItem("dataRegister")){
              return <Redirect to="/register"/>
            } else if (localStorage.getItem("dataLogin")) {
              return <Redirect to="/" />;
            } else {
              return <Login {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/register"
          render={(props) => {
            if (localStorage.getItem("dataLogin")) {
              return <Redirect to="/" />;
            } else {
              return <Register {...props} />;
            }
          }}
        />
        <Route
          exact
          path="/catalogs"
          render={(props) => <Catalogs {...props} />}
        />
        <Route
          exact
          path="/checkout"
          render={(props) => {
            if (localStorage.getItem("dataLogin")) {
              return <Checkout {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route exact path="/cart" render={(props) => <Cart {...props} />} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
