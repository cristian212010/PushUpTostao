import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='container-carousel'>
          <div className='text'>
            <h1><span>SOMOS CAFÉ 100% ORIGEN COLOMBIA</span></h1>
            <p className='text-p'>Disfruta diariamente de un delicioso café a tu gusto: caliente o frío: Lo mejor de nuestros cafetales, a tu taza.</p>
            <p>Cambia la rutina con nuestros productos</p>
          </div>
          <div className='img-container'>
            <img className='img-carousel' src='https://nosotros.tostao.com/wp-content/uploads/2020/04/taza-tostao2.png'></img>
          </div>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container-carousel'>
          <div className='text'>
            <h1><span>CALIDAD SUPERIOR</span></h1>
            <p className='text-p'>Desayunos, almuerzos, “onces” o antojos, en <span>TOSTAO’ Café & Pan</span> te ofrecemos sólo productos frescos, de la más alta calidad a un muy buen precio.</p>
            <p>Cambia de ritmo comiendo algo rico</p>
          </div>
          <div className='img-container'>
            <img className='img-carousel' src='https://nosotros.tostao.com/wp-content/uploads/2022/08/Toatao-calidad-superior.jpg'></img>
          </div>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;