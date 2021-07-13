import "./styles/App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../src/screens/HomeScreen";
import Header from "../src/components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UsersPage from "./screens/UsersPage";
import UserDetails from './screens/UserDetails'

const App = () => {
  return (
    <Router>
      <Header />
      {/* <UserPage /> */}
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/users" component={UsersPage} exact/>
          <Route path="/users/:id" component={UserDetails} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
