import { Redirect, Route, Switch } from "react-router";

import {
  Home,
  Catalogs,
  Detail,
  Cart,
  Checkout,
  Login,
  Register
} from "./pages";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" 
          render={(props) => {
            if (localStorage.getItem("dataSignIn")) {
              return <Redirect to="/" />;
            } else {
              return <Login {...props} />;
            }
          }}
         />
        <Route exact path="/register"  
          render={(props) => {
            if (localStorage.getItem("dataSignIn")) {
              return <Redirect to="/" />;
            } else {
              return <Register {...props} />;
            }
          }}/>
        <Route
          exact
          path="/catalogs"
          render={(props) => <Catalogs {...props} />}
        />
        <Route exact path="/checkout" 
        // render={(props) => <Checkout {...props}/>}
        render={(props) => {
            if (localStorage.getItem("dataSignIn")) {
              return <Checkout {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route exact path="/cart" 
          render={(props) => <Cart{...props}/>}
          // render={(props) => {
          //   if (localStorage.getItem("dataSignIn")) {
          //     return <Cart {...props} />;
          //   } else {
          //     return <Redirect to="/login" />;
          //   }
          // }}
          />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
