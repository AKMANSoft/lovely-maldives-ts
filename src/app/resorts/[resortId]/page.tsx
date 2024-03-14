/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Rating,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { ModeOfTravel } from '@mui/icons-material'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OurCollection from '@/components/OurCollection'
import FilterTray from '@/components/FilterTray'
import bannerImg from '../../../../public/Images/collectionImg.jpg'

export default function Resort() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [amenities, setAmenities] = useState([...Array(8)])
  const mainSlider1 = {
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const thumbnailSlider1 = {
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    autoplay: false,
    centerPadding: '0px',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  const [readMore, setReadMore] = useState(false)
  const [sliderMain1Nav, setSliderMain1Nav] = useState<Slider>()
  const [sliderMain2Nav, setSliderMain2Nav] = useState<Slider>()
  const sliderMain1Ref = useRef<Slider>()
  const sliderMain2Ref = useRef<Slider>()

  const showExtraContent = () => {
    setReadMore(!readMore)
  }

  useEffect(() => {
    setSliderMain1Nav(sliderMain1Ref.current)
    setSliderMain2Nav(sliderMain2Ref.current)
  }, [])
  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' } }}>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <BreadCrumb />
        <FilterTray />
      </Container>
      <Container
        sx={{
          minWidth: '100% !important',
          px: { xs: '0px', md: '120px' },
        }}
      >
        <Container
          sx={{ minWidth: '100% !important', px: { xs: '0px', md: '120px' } }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ background: 'transparent' }}>
                <Box
                  sx={{
                    background: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    pb: '10px',
                    mt: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Slider
                    asNavFor={sliderMain2Nav}
                    ref={(slider) => {
                      if (slider) {
                        sliderMain1Ref.current = slider
                      }
                    }}
                    {...mainSlider1}
                  >
                    {amenities.map((val) => (
                      <Box key={val}>
                        <Image
                          src={bannerImg}
                          alt="Picture of the author"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Box>
                    ))}
                  </Slider>
                  <Slider
                    asNavFor={sliderMain1Nav}
                    ref={(slider) => {
                      if (slider) {
                        sliderMain2Ref.current = slider
                      }
                    }}
                    {...thumbnailSlider1}
                  >
                    {amenities.map((val) => (
                      <Box sx={{ p: 1, display: 'block' }} key={val}>
                        <Image
                          src={bannerImg}
                          alt="Picture of the author"
                          style={{
                            width: 'calc(100% - 16px)',
                            height: 'auto',
                            display: 'block',
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
                </Box>
                <Box sx={{ px: { xs: '24px', md: '120px' } }}>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    sx={{ display: 'flex', mt: 4 }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      m: 0,
                      mb: 2,
                      mt: 2,
                      fontSize: { xs: '22px', md: '30px' },
                      color: 'var(--white)',
                      textTransform: 'uppercase',
                    }}
                  >
                    One n Only Reethi Rah
                  </Typography>
                  <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                    Qui reprehenderit reprehenderit elit sunt commodo
                    adipisicing labore. Non nulla dolor in minim nulla proident
                    sint. Laboris pariatur cupidatat ex aliquip ut adipisicing
                    occaecat in ea esse nisi reprehenderit culpa. Quis commodo
                    in cupidatat commodo magna. Commodo excepteur ipsum proident
                    nisi laborum do officia enim.
                  </Typography>
                  <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                    Qui reprehenderit reprehenderit elit sunt commodo
                    adipisicing labore. Non nulla dolor in minim nulla proident
                    sint. Laboris pariatur cupidatat ex aliquip ut adipisicing
                    occaecat in ea esse nisi reprehenderit culpa. Quis commodo
                    in cupidatat commodo magna. Commodo excepteur ipsum proident
                    nisi laborum do officia enim.
                  </Typography>
                </Box>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  background: 'transparent',
                  textAlign: 'center',
                  px: { xs: '24px', md: '120px' },
                }}
              >
                {!readMore && (
                  <Button
                    sx={{ mt: 5 }}
                    variant="contained"
                    onClick={showExtraContent}
                  >
                    Read More
                  </Button>
                )}
              </Paper>
              {readMore && (
                <>
                  <Paper
                    elevation={0}
                    sx={{
                      background: 'transparent',
                      pt: 6,
                      px: { xs: '24px', md: '120px' },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        m: 0,
                        mb: 2,
                        mt: 5,
                        fontSize: { xs: '22px', md: '30px' },
                        color: 'var(--white)',
                        textTransform: 'uppercase',
                      }}
                    >
                      Quick Facts
                    </Typography>

                    <Grid container spacing={2}>
                      {amenities.map((val, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <ListItem
                            sx={{
                              p: 0,
                              display: 'flex',
                              alignItems: 'start',
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '30px', mt: 1.2 }}>
                              <ModeOfTravel />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography sx={{ fontWeight: '500' }}>
                                  30km from airport
                                </Typography>
                              }
                              secondary={[
                                <Typography
                                  paragraph
                                  sx={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                  }}
                                >
                                  (20 minutes to reach the hotel)
                                </Typography>,
                                <Typography
                                  paragraph
                                  sx={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                  }}
                                >
                                  (20 minutes to reach the hotel)
                                </Typography>,
                              ]}
                            />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid>
                    <hr />

                    <Typography
                      variant="h2"
                      sx={{
                        m: 0,
                        mb: 2,
                        mt: 5,
                        fontSize: { xs: '22px', md: '30px' },
                        color: 'var(--white)',
                        textTransform: 'uppercase',
                      }}
                    >
                      HOTEL AMINETIES
                    </Typography>

                    <Grid container spacing={2}>
                      {amenities.map((val, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <ListItem
                            sx={{
                              p: 0,
                              display: 'flex',
                              alignItems: 'start',
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '30px', mt: 1.2 }}>
                              <ModeOfTravel />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography sx={{ fontWeight: '500' }}>
                                  30km from airport
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  paragraph
                                  sx={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                  }}
                                >
                                  (20 minutes to reach the hotel)
                                </Typography>
                              }
                            />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{ background: 'transparent', mt: 5 }}
                  >
                    <Box
                      sx={{
                        background: '#000',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        pb: '10px',
                        mt: 3,
                      }}
                      className="slider-container"
                    >
                      <Slider
                        asNavFor={sliderMain2Nav}
                        ref={(slider) => {
                          if (slider) {
                            sliderMain1Ref.current = slider
                          }
                        }}
                        focusOnSelect
                        swipeToSlide
                        {...mainSlider1}
                      >
                        {amenities.map((val) => (
                          <Box key={val}>
                            <Image
                              src={bannerImg}
                              alt="Picture of the author"
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </Box>
                        ))}
                      </Slider>
                      <Slider
                        asNavFor={sliderMain1Nav}
                        ref={(slider) => {
                          if (slider) {
                            sliderMain2Ref.current = slider
                          }
                        }}
                        {...thumbnailSlider1}
                      >
                        {amenities.map((val) => (
                          <Box sx={{ p: 1, display: 'block' }} key={val}>
                            <Image
                              src={bannerImg}
                              alt="Picture of the author"
                              style={{
                                width: 'calc(100% - 16px)',
                                height: 'auto',
                                display: 'block',
                              }}
                            />
                          </Box>
                        ))}
                      </Slider>
                    </Box>
                    <Box sx={{ px: { xs: '24px', md: '120px' } }}>
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        sx={{ display: 'flex', mt: 4 }}
                      />
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: '22px', md: '30px' },
                          color: 'var(--white)',
                          textTransform: 'uppercase',
                          m: 0,
                          mt: 2,
                          mb: 2,
                        }}
                      >
                        One n Only Reethi Rah
                      </Typography>
                      <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                        Qui reprehenderit reprehenderit elit sunt commodo
                        adipisicing labore. Non nulla dolor in minim nulla
                        proident sint. Laboris pariatur cupidatat ex aliquip ut
                        adipisicing occaecat in ea esse nisi reprehenderit
                        culpa. Quis commodo in cupidatat commodo magna. Commodo
                        excepteur ipsum proident nisi laborum do officia enim.
                      </Typography>
                      <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                        Qui reprehenderit reprehenderit elit sunt commodo
                        adipisicing labore. Non nulla dolor in minim nulla
                        proident sint. Laboris pariatur cupidatat ex aliquip ut
                        adipisicing occaecat in ea esse nisi reprehenderit
                        culpa. Quis commodo in cupidatat commodo magna. Commodo
                        excepteur ipsum proident nisi laborum do officia enim.
                      </Typography>
                    </Box>
                  </Paper>
                </>
              )}
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8}>
              <Paper
                elevation={0}
                sx={{ background: 'transparent', textAlign: 'center', mb: 3 }}
              >
                <Typography
                  className="text-img"
                  variant="h4"
                  sx={{
                    fontSize: '1.25rem',
                    mb: 2,
                    color: 'var(--brown)',
                    fontWeight: '600',
                    opacity: '0.9',
                    textTransform: 'capitalize',
                  }}
                >
                  Discover Maldives
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ mb: '40px' }}>
          <OurCollection
            heading="OTHER RECOMMENDATIONS"
            button="none"
            iconShow="flex"
            radius="20px"
            bottomradius="0 0 20px  20px"
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
