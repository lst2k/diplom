import {useRef} from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/swiper.min.css"
import SwiperCore, {Navigation} from 'swiper/core'
SwiperCore.use([Navigation])
import "swiper/components/navigation/navigation.min.css"

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'
import Button from '../../../components/Button'
import {mainColors} from '../../../constants/theme'

import photo from '../../../images/reviews/photo.png'
import Arrow from '../../../images/arrow.svg'


const ReviewsSection = () => {
  const next = useRef(null)
  const prev = useRef(null)

  return (
    <Styles.ReviewsSection>
      <BaseContainer>
        <Typography variant={'h4'} fontWeight={'700'} textColor={mainColors.darkBG} size={4}>Отзывы клиентов</Typography>

        <Styles.SliderButtons>
          <Button borderColor={mainColors.darkBG} type={'arrow'} rotate={'180'} ref={prev}><Arrow /></Button>
          <Button borderColor={mainColors.darkBG} type={'arrow'} ref={next}><Arrow /></Button>
        </Styles.SliderButtons>

        <Styles.Slider>
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prev.current
              swiper.params.navigation.nextEl = next.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            slidesPerView={3} spaceBetween={24} freeMode={true}>
            <SwiperSlide>
              <Styles.ReviewCard>
                <Styles.ReviewHeader>
                  <img src={photo} alt={'director'} />
                  <Styles.ProjectName>
                    <Typography variant={'p'} size={3} textColor={'#000'}>Имя Фамилия</Typography>
                    <div>
                      <Typography variant={'p'}>Основатель проекта</Typography>
                      <Typography variant={'p'} fontWeight={'700'}>“Lorem ipsum”</Typography>
                    </div>
                  </Styles.ProjectName>
                </Styles.ReviewHeader>

                <Styles.ReviewContent>
                  <Typography fontWeight={'600'} size={1} textColor={'#000'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                  </Typography>
                </Styles.ReviewContent>
              </Styles.ReviewCard>
            </SwiperSlide>

            <SwiperSlide>
              <Styles.ReviewCard>
                <Styles.ReviewHeader>
                  <img src={photo} alt={'director'} />
                  <Styles.ProjectName>
                    <Typography variant={'p'} size={3} textColor={'#000'}>Имя Фамилия</Typography>
                    <div>
                      <Typography variant={'p'}>Основатель проекта</Typography>
                      <Typography variant={'p'} fontWeight={'700'}>“Lorem ipsum”</Typography>
                    </div>
                  </Styles.ProjectName>
                </Styles.ReviewHeader>

                <Styles.ReviewContent>
                  <Typography fontWeight={'600'} size={1} textColor={'#000'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                  </Typography>
                </Styles.ReviewContent>
              </Styles.ReviewCard>
            </SwiperSlide>

            <SwiperSlide>
              <Styles.ReviewCard>
                <Styles.ReviewHeader>
                  <img src={photo} alt={'director'} />
                  <Styles.ProjectName>
                    <Typography variant={'p'} size={3} textColor={'#000'}>Имя Фамилия</Typography>
                    <div>
                      <Typography variant={'p'}>Основатель проекта</Typography>
                      <Typography variant={'p'} fontWeight={'700'}>“Lorem ipsum”</Typography>
                    </div>
                  </Styles.ProjectName>
                </Styles.ReviewHeader>

                <Styles.ReviewContent>
                  <Typography fontWeight={'600'} size={1} textColor={'#000'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                  </Typography>
                </Styles.ReviewContent>
              </Styles.ReviewCard>
            </SwiperSlide>

            <SwiperSlide>
              <Styles.ReviewCard>
                <Styles.ReviewHeader>
                  <img src={photo} alt={'director'} />
                  <Styles.ProjectName>
                    <Typography variant={'p'} size={3} textColor={'#000'}>Имя Фамилия</Typography>
                    <div>
                      <Typography variant={'p'}>Основатель проекта</Typography>
                      <Typography variant={'p'} fontWeight={'700'}>“Lorem ipsum”</Typography>
                    </div>
                  </Styles.ProjectName>
                </Styles.ReviewHeader>

                <Styles.ReviewContent>
                  <Typography fontWeight={'600'} size={1} textColor={'#000'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                  </Typography>
                </Styles.ReviewContent>
              </Styles.ReviewCard>
            </SwiperSlide>

            <SwiperSlide>
              <Styles.ReviewCard>
                <Styles.ReviewHeader>
                  <img src={photo} alt={'director'} />
                  <Styles.ProjectName>
                    <Typography variant={'p'} size={3} textColor={'#000'}>Имя Фамилия</Typography>
                    <div>
                      <Typography variant={'p'}>Основатель проекта</Typography>
                      <Typography variant={'p'} fontWeight={'700'}>“Lorem ipsum”</Typography>
                    </div>
                  </Styles.ProjectName>
                </Styles.ReviewHeader>

                <Styles.ReviewContent>
                  <Typography fontWeight={'600'} size={1} textColor={'#000'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                  </Typography>
                </Styles.ReviewContent>
              </Styles.ReviewCard>
            </SwiperSlide>

            <SwiperSlide>
              <Styles.ReviewCard>
                <Styles.ReviewHeader>
                  <img src={photo} alt={'director'} />
                  <Styles.ProjectName>
                    <Typography variant={'p'} size={3} textColor={'#000'}>Имя Фамилия</Typography>
                    <div>
                      <Typography variant={'p'}>Основатель проекта</Typography>
                      <Typography variant={'p'} fontWeight={'700'}>“Lorem ipsum”</Typography>
                    </div>
                  </Styles.ProjectName>
                </Styles.ReviewHeader>

                <Styles.ReviewContent>
                  <Typography fontWeight={'600'} size={1} textColor={'#000'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                  </Typography>
                </Styles.ReviewContent>
              </Styles.ReviewCard>
            </SwiperSlide>
          </Swiper>
        </Styles.Slider>

      </BaseContainer>
    </Styles.ReviewsSection>
  )
}

export default ReviewsSection
