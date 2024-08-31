import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.module.css"
import React from 'react'
import { border, Box } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
const ImageSlider = () => {
    const images = [{
        id: 1,
        src: "https://img.freepik.com/free-photo/image-advertising-property-sale-dream-home-sale_185193-109613.jpg?w=1380&t=st=1719656041~exp=1719656641~hmac=b27b6620528d412ae38533b9241eb083d8fe0206cd7e1d169829a2a2cdc48b0b",
        alt: "Image 1"
    },
    {
        id: 2,
        src: "https://img.freepik.com/free-photo/image-easter-interior-concept-season-interior_185193-109571.jpg?w=1380&t=st=1719656072~exp=1719656672~hmac=e5fa42df8ff1a398712b10722c255d40982227e61fcc65fd73d7f3e08c58a856",
        alt: "Image 2 "
    },
    {
        id: 3,
        src: "https://img.freepik.com/free-photo/sale-with-special-discount-couch_23-2150040375.jpg?w=1380&t=st=1719656118~exp=1719656718~hmac=5f18f01918658136d975ce509de1183221e32973dcf5e82835f3c9a364510b7a",
        alt: "Image 3"
    },
    {
        id: 4,
        src: "https://img.freepik.com/free-photo/blue-couch-living-room-with-black-lamp-wall_1340-26668.jpg?t=st=1719656139~exp=1719659739~hmac=3fbcf5cce5c5e2265b57b5a76223778578720dc89f86dd71bf7f03aa36e521ec&w=996",
        alt: "Image 4"
    }
    ];
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 3000,
   
  };
  return (
    <>

      <div className="imgslider" style={{width:"80%" ,align:"center" ,margin:"auto", }}>
        <Box  mt="2">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img style={{borderRadius:"20px", width:"100%", height:"500px"}} src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
        </Box>
      </div>
          </>
  )
}
export default ImageSlider;