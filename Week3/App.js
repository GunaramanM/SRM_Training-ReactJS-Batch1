
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import StudentDetails from "./Components/StudentDetails"
import AddStudent from "./Components/AddStudent"
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
 <BrowserRouter> 
  <NavBar/>
  <Switch>
  <Route exact path ="/" component={Home}/>
  <Route exact path ="/student" component={StudentDetails}/>
  <Route exact path ="/add" component={AddStudent}/>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
