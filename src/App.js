import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Invantory from './components/Invantory/Invantory';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/order'>
            <Order></Order>
          </Route>
          <Route path='/invantory'>
            <Invantory></Invantory>
          </Route>
          <Route path='/revieworder'>
            <ReviewOrder></ReviewOrder>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
