import { Route } from 'react-router-dom'
import Header from './components/Header'
import {Home, Cart} from './pages'


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
      <Route path="/" exact component={Home}/>
      <Route path="/cart"  component={Cart}/>
      </div>
    </div>
  );
}

export default App;
