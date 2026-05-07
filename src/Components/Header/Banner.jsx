import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Side'

const Banner = () => {
    return (
        <div className='  container px-2 rounded-2xl py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper rounded-2xl'
            >
                <SwiperSlide>
                    <Slide
                        image={"https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg"}
                        text='Transform Your Group Study Sessions with StudyBuddys Dynamic Features'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={"https://www.euroschoolindia.com/wp-content/uploads/2023/07/student-study-group.jpg"}
                        text='Connect and Collaborate Effortlessly on StudyBuddy'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={"https://www.eurokidsindia.com/blog/wp-content/uploads/2023/07/group-study.jpg"}
                        text='Achieve Academic Success Together on StudyBuddy'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
