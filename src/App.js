import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AuthRoutes from "./components/PrivateRoute/AuthRoute.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";
import HomePage from "./pages/HomePage/index.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Switch>
            <PrivateRoute path="/admin" component={Admin} />
            <AuthRoutes path="/auth" component={Auth} />
            <Route to="/">
              <HomePage />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
