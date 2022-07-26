import HeaderLayout from './Layout/Header.layout';
import MainContainerLayout from './Layout/MainContainer.layout';
import MainContentLayout from './Layout/MainContent.layout';
import FooterLayout from './Layout/Footer.layout';
import './scss/index.scss';
import MyNavBar from './components/Header/MyNavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import NotFound from './Pages/NotFound';
import Help from './Pages/Help';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './Context/CartContext';
import { CounterProvider } from './Context/CounterContext';
import {CartWidgetProvider} from './Context/CartWidgetContext';
import InfoHeader from './components/Header/InfoHeader';

function App() {
  return (
    <CartWidgetProvider>
    <CounterProvider>
    <CartProvider>
      <BrowserRouter>
        <MainContainerLayout>
          <HeaderLayout>
            <InfoHeader/>
            <MyNavBar/>
          </HeaderLayout>
          <MainContentLayout>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/productos/:category' element={<ItemListContainer/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<Detail/>}/>
              <Route path='/ayuda' element={<Help/>}/>
              <Route path='/miperfil' element={<UserProfile/>}/>
              <Route path='/carrito' element={<Cart/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </MainContentLayout>
          <FooterLayout/>
        </MainContainerLayout>
      </BrowserRouter>
    </CartProvider>
    </CounterProvider>
    </CartWidgetProvider>
  )
}

export default App;
