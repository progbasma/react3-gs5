import Carousel from 'react-bootstrap/Carousel';

function Headerc() {
  let carouselitems=[{img:"https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_640.jpg",caption:"First slide label",description:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
    {img:"https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_640.jpg",caption:"second slide label",description:"Nulla vitae elit libero, a pharetra augue mollis interdum."}];
  return (
    <Carousel data-bs-theme="dark">
      {carouselitems.map((item)=><Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{item.caption}</h5>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
      

    </Carousel>
  );
}

export default Headerc;