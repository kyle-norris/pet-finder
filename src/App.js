import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import PetDetails from "./pages/PetDetails";
import 'semantic-ui-css/semantic.min.css';


function App() {

  return (
    <>
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/pet/:petID" component={PetDetails} />
    </Router>
    </>
  );
}

export default App;
