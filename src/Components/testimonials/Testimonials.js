import React from 'react'
import './Testimonials.css'
import girlie from '../../Images/girlie.jpeg'
import lady1 from '../../Images/lady1.jpg'
import roadMan from '../../Images/road guy.jpeg'
import scalfGirl from '../../Images/scalf girl.jpeg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data=[
    {
      avatar: girlie,
      name: 'Hannah Mount',
      review: 'lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed est sed turpis dapibus egestas. Suspendisse potenti. Sed pulvinar velit sed purus varius'
    },
    {
      avatar: lady1,
      name: 'Montannah Zarah',
      review: 'lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed est sed turpis dapibus egestas. Suspendisse potenti. Sed pulvinar velit sed purus varius'
    },
    {
      avatar: roadMan,
      name: 'Daniel Clinton',
      review: 'lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed est sed turpis dapibus egestas. Suspendisse potenti. Sed pulvinar velit sed purus varius'
    },
    {
      avatar: scalfGirl,
      name: 'Aishat Ibrahim',
      review: 'lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed est sed turpis dapibus egestas. Suspendisse potenti. Sed pulvinar velit sed purus varius'
    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[ Navigation, Pagination, Scrollbar, A11y ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
          {
            data.map(({avatar, name, review}, index) =>{
              return(
                <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt=' client review'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                  {review} 
                  </small>
              </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default Testimonials