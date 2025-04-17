import React from "react";  
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../Css/Application.css';  
import { Avatar } from "@material-ui/core";  
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";  
import kkp from '../Images/kkp.jpg';  
  
const PreviousBtn = (props) => {  
  const { className, onClick } = props;  
  return (  
    <div className={className} onClick={onClick}>  
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />  
    </div>  
  );  
};  
  
const NextBtn = (props) => {  
  const { className, onClick } = props;  
  return (  
    <div className={className} onClick={onClick}>  
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />  
    </div>  
  );  
};  
  
const TestimonialCarousel = () => {  
  const settings = {  
    dots: true,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1, // Number of slides to show at once  
    slidesToScroll: 1,  
    prevArrow: <PreviousBtn />,  
    nextArrow: <NextBtn />,  
    autoplay: true, // Enable auto-play  
    autoplaySpeed: 4000, // Auto-play speed in milliseconds (2 seconds)  
  };  
  
  return (  
    <div  
      className="testimonial"  
      style={{ display: "flex", justifyContent: "center", marginTop: '70px' }}  
    >  
      <div style={{ width: "50%", textAlign: "center" }}>  
        <h1 style={{ marginBottom: 20 }}>Testimonials</h1>  
        <Slider {...settings}>  
          <Card img={kkp} />  
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />  
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />  
        </Slider>  
      </div>  
    </div>  
  );  
};  
  
const Card = ({ img }) => {  
  return (  
    <div  
      style={{  
        display: "flex",  
        alignItems: "center",  
        flexDirection: "column",  
        textAlign: "center",  
        color: "gray",  
      }}  
    >  
      <Avatar  
        imgProps={{ style: { borderRadius: "50%" } }}  
        src={img}  
        style={{  
          width: 120,  
          height: 120,  
          border: "1px solid lightgray",  
          padding: 6,  
          marginBottom: 20,  
        }}  
      />  
      <p>  
        Pranjal is an exemplary MTech student under my supervision. Throughout their course, Pranjal consistently demonstrated exceptional analytical skills, a strong work ethic, and an unyielding commitment to academic excellence. Their project on Data agent based volumetric progress detection over mobile Ad-hoc network was particularly noteworthy for its innovative approach and meticulous execution.  
      </p>  
      <p style={{ fontStyle: "italic", marginTop: 25 }}>  
        <span style={{ fontWeight: 500, color: "green" }}>Prof. Kiran Kumar Pattanaik</span> ,  
        ABV-IIITM Gwalior  
      </p>  
    </div>  
  );  
};  
  
export default TestimonialCarousel;  
