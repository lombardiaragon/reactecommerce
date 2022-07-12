import HeaderLayout from './Layout/Header.layout';
import MainContainerLayout from './Layout/MainContainer.layout';
import MainContentLayout from './Layout/MainContent.layout';
import FooterLayout from './Layout/Footer.layout';
import './scss/index.scss';
import MyNavBar from './components/MyNavBar';
import SlideBanner from './components/SlideBanner';
import ShopInfo from './components/ShopInfo';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <MainContainerLayout>
      <HeaderLayout>
        <MyNavBar/>
      </HeaderLayout>
      <MainContentLayout>
        <SlideBanner/>
        <ShopInfo/>
        <ItemListContainer/>
      </MainContentLayout>
      <FooterLayout/>
    </MainContainerLayout>
  )
}

export default App;
