import Carousel from 'react-bootstrap/Carousel';

const SlideBanner=()=>{
    return(
        <Carousel className='p-0 '>
            <Carousel.Item interval={5000}>
            <img
                className="d-block w-100 slideImg"
                src="./tienda.jpg"
                alt="First slide"
            />
            <Carousel.Caption className='bg-dark bg-opacity-75 rounded'>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
            <img
                className="d-block w-100 slideImg"
                src="./tienda2.jpg"
                alt="Second slide"
            />
            <Carousel.Caption className='bg-dark bg-opacity-75 rounded'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
            <img
                className="d-block w-100 slideImg"
                src="./tienda1.jpg"
                alt="Third slide"
            />
            <Carousel.Caption className='bg-dark bg-opacity-75 rounded'>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
          )
}

export default SlideBanner