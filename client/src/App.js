import './App.css';
import Header from './components/Header'; // anything exported as default does not require {}
import GetAll from './components/GetAll';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details';
import { Router } from '@reach/router'; // since router is not exported as default {} are required

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <GetAll path="/lit" />
        <Create path="/lit/create" />
        <Edit path="/lit/:id/edit" />
        <Details path="/lit/:id"/> 
      </Router>
    </div>
  );
}
export default App;