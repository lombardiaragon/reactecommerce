import Carousel from 'react-bootstrap/Carousel';
import slideBannerImgs from '../Utils/slideBannerMockImgs';

const SlideBanner=()=>{
    return(
    <Carousel className='p-0'>
        {slideBannerImgs.map((imageBanner,index)=>{
            const{image,info,titleImg,textImg}=imageBanner
            return(
            <Carousel.Item key={index} interval={5000}>
                <img
                    className="d-block w-100 slideImg"
                    src={image}
                    alt={info}
                />
                <Carousel.Caption className='bg-dark bg-opacity-75 rounded'>
                    <h3>{titleImg}</h3>
                    <p>{textImg}</p>
                </Carousel.Caption>
            </Carousel.Item>
            )
        })
        }
    </Carousel>
    )
}

export default SlideBanner