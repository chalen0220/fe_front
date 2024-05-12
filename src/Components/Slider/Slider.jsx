import Carousel from 'react-bootstrap/Carousel';
import c1 from "../Assets/all_products/carousel_1.jpg"
import c2 from "../Assets/all_products/carousel_2.jpg"
import c3 from "../Assets/all_products/carousel_3.jpg"

function Slider() {
  return (
    <Carousel data-bs-theme="dark" mw-1200 className="shadow mb-5 bg-body-tertiary rounded z-n1">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;