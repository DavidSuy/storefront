import './App.css';
import Header from './components/header/header';
import Storefront from './components/storefront/storefront';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { getCategories } from './store/categories';

function App() {
  // let dispatch = useDispatch();
  // dispatch(getCategories());
  return (
    <Provider store={store}>
      <Header />
      <Storefront></Storefront>
    </Provider>
  );
}

export default App;
