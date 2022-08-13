import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
      avatar: AVTR1,
      name: 'Radinal Ridwan',
      review: 'Bismillah Alhamdulillah Jasa Pembuatan Website Rachmat Ramadhan Kualitasnya Bagus, Sepada Dengan Harganya, Profesionalisme, Dan Responsif. Project Kemarin Hanya Butuh Beberapa Hari Sampai Websitenya Jadi. Sangat Recomended Bagi Teman-Teman Pebisnis, Umkm, Dan Kreator Digital Dalam Membuat Website Selamat Berkarya.'
    },
    {
      avatar: AVTR2,
      name: 'Suharjun Abdullah',
      review: 'Saya Sangat Puas Dengan Jasa Pembuatan Websitenya. Konsep Dan Design Websitenya Keren, Kece Dan Professional. Yang Paling Berkesan Dibuatkan Sesuai Dengan Selera Kita. Direvisi Hingga Kita Puas Dengan Hasilnya. Mantap Pokoknya..🤩 Saran Saya Jika Anda Ingin Buat Website. Saya Recomended Tempat Ini. In Syaa Allah Hasilnya Memuaskan. 🙏😍.'
    },
    {
      avatar: AVTR3,
      name: 'Calista Ikeme',
      review: 'Awesome this is great, thanks Rachmat Ramadhan!.'
    },
    {
      avatar: AVTR4,
      name: 'Kevin Carter',
      review: 'Thanks for the article.'
    },
  ]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials