
import './App.css';
import {

  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import Countries from './Components/Countries/Countries'
import CountryModal from './Components/Countries/CountryModal';
import SingleDetails from './Components/Countries/SingleDetails';
function App() {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    
    <div className="App">
        <Switch location={background || location}>
          <Route exact path="/">
          <Countries />
          </Route>
          <Route path="/country/:name">
<SingleDetails />
          </Route>
        </Switch>
  {/* Show the modal when a background page is set */}
  {background &&   <Route path="/country/:name">
<CountryModal />
          </Route>}

    </div>
  
  );
}

export default App;
