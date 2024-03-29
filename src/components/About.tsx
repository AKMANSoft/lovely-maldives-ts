import Diversity2Icon from '@mui/icons-material/Diversity2'
import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'
// import Image from 'next/image'
// import sparkle from '../../public/Images/Quarters-w.svg'

export default function About() {
  return (
    <div>
      <Container
        sx={{
          px: { xs: '0px !important', md: '120px !important' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            mt: { xs: '60px', md: '120px' },
            mx: 'auto',
            width: { xs: '100%', md: '750px' },
            color: 'var(--white)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '22px', md: '30px' },
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            ABOUT US
          </Typography>
          <Box>
            <Box sx={{ textAlign: 'center' }}>
              {/* <Image
                src="/Images/maldivesLogo.png"
                height={60}
                width={100}
                alt="Lovely Maldives"
              /> */}
              <Diversity2Icon
                sx={{
                  fontSize: '55px',
                  mt: { xs: '30px', md: '60px' },
                  color: 'var(--brown)',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '18px', md: '22px' },
                fontWeight: '200',
                mt: { xs: '30px', md: '60px' },
                textAlign: 'justify',
                px: { xs: '20px', md: '0' },
              }}
            >
              Lovely Maldives, a distinguished travel agency from the Maldives
              strives to redene Luxury travel experiences in the Maldives. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                mt: { xs: '40px', md: '60px' },
                fontSize: { xs: '22px', md: '30px' },
                fontWeight: '400',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: 'var(--brown)',
              }}
            >
              Our Promise
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              background: 'var(--brown)',
              borderRadius: { xs: '0', md: '25px' },
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                py: '50px',
                position: 'relative',
                width: { xs: '300px', md: '500px' },
                height: { xs: '400px', md: '500px' },
                mx: 'auto',
                mt: { md: '60px', xs: '40px' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '300px', md: '500px' },
                  height: { xs: '300px', md: '300px' },
                  position: 'absolute',
                  top: { xs: '50%', md: '35%' },
                  left: { xs: '50%', md: '50%' },
                  mx: 'auto',
                  transform: 'translate(-50% ,-50%)',
                }}
              >
                {/* <Image
                  src={sparkle}
                  alt="sparkle"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundPosition: 'fixed',
                  }}
                /> */}
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1183.9 1080"
                  // style="enable-background:new 0 0 1183.9 1080;"
                  xmlSpace="preserve"
                  fill="white"
                  className="svgSparkle"
                >
                  <g>
                    <polygon
                      className="st0"
                      points="599.7,540 591.9,1080 584.2,540 599.7,540 	"
                    />
                    <polygon
                      className="st0"
                      points="584.2,540 591.9,0 599.7,540 584.2,540 	"
                    />
                    <g>
                      <polygon
                        className="st0"
                        points="591.9,547.8 0,540 591.9,532.2 591.9,547.8 		"
                      />
                      <polygon
                        className="st0"
                        points="591.9,532.2 1183.9,540 591.9,547.8 591.9,532.2 		"
                      />
                    </g>
                  </g>
                </svg>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: 'white',
                  // textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    pl: '25px',
                    // textAlign: 'right',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '28%', md: '25%' },
                    width: '50%',
                  }}
                >
                  Best Rates
                </Typography>
                <Typography
                  sx={{
                    pl: { md: '55px', xs: '40px' },
                    textAlign: 'left',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '28%', md: '25%' },
                    width: '50%',
                  }}
                >
                  Top Resorts
                </Typography>
                <Typography
                  sx={{
                    pl: '25px',
                    // textAlign: 'right',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '26%', md: '15%' },
                    width: '50%',
                  }}
                >
                  100% Privacy
                </Typography>
                <Typography
                  sx={{
                    pl: { md: '55px', xs: '40px' },
                    textAlign: 'left',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '26%', md: '15%' },
                    width: '50%',
                  }}
                >
                  Rapid Service
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}
