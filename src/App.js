import { Route, Switch } from "react-router";
import Breadcrumb from "./components/Breadcrumb";

import {
  Home,
  Login,
  Register,
  Catalogs,
  Detail,
  Cart,
  Checkout,
} from "./pages";
import NotFound from "./pages/errors/NotFound";
// import HlmCatalog from "./pages/HlmCatalog";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/catalogs" component={Catalogs} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
