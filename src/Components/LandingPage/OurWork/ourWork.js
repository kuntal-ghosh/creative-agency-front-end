import React, { Component } from "react";
import Slider from "react-slick";
import Styles from './OurWork.module.scss';
import {Typography} from '@material-ui/core';

export default class SimpleSlider extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: Styles.button__bar,
        // appendDots: dots => (
        //     <div
        //       style={{
        //         // backgroundColor: "red",
        //         // borderRadius: "10px",
        //         // padding: "10px"
        //       }}
        //     >
        //       <ul style={{ margin: "0px",color:"red"}}> {dots} </ul>
        //     </div>
        //   ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div style={{marginRight:"103px",
      marginLeft:"63px"}}>
        <Typography variant="h5" style={{textAlign: 'center',marginBottom:"40px",fontWeight:600}}>
        Here are some of  <span style={{color:"#7AB259"}}>our works</span> 
            </Typography>
        <Slider {...settings}>
          <div className={Styles.Item}>
            <img src="/images/carousel-1.png" alt="carousel-1" style={{width:"400px",height:"350px"}}/>
          </div>
          <div>
          <img src="/images/carousel-2.png" alt="carousel-2" style={{width:"400px",height:"350px"}}/>
          </div>
          <div>
          <img src="/images/carousel-3.png" alt="carousel-3" style={{width:"400px",height:"350px"}}/>
          </div>
          <div>
          <img src="/images/carousel-3.png" alt="carousel-3" style={{width:"400px",height:"350px"}}/>
          </div>
          <div>
          <img src="/images/carousel-3.png" alt="carousel-3" style={{width:"400px",height:"350px"}}/>
          </div>
        </Slider>
      </div>
    );
  }
}