import BannerFooter from "../components/BannerFooter"
import ItemListContainer from "../components/ItemListContainer"
import MyHero from "../components/MyHero"
import ShopInfo from "../components/ShopInfo"
import SlideBanner from "../components/SlideBanner"
import SwiperCards from "../components/SwiperCards"

const Home =()=>{
    return(
        <>
            <SlideBanner/>
            <ShopInfo/>
            <MyHero/>
            <div><SwiperCards/></div>
            <BannerFooter/>
            {/* <ItemListContainer/> */}
        </>

    )
}
export default Home