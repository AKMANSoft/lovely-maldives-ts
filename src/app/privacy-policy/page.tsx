'use client'

import { Box, Container, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import { privacyPolicyData } from '@/components/PrivacyPolicy'
import MailBox from '@/components/MailBox'

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ pt: { xs: '0px', md: '180px' } }}>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: { xs: '120px', md: '60px' },
        }}
      >
        <BreadCrumb />
      </Container>
      <Container
        sx={{
          mt: { xs: '60px', md: '60px' },
          maxWidth: '80%',
          px: '0 !important',
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '85% ',
          },
        }}
      >
        <Box sx={{ mt: 7, mb: 12 }}>
          {privacyPolicyData.map((data, index) => {
            return (
              <Accordion
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{
                  mt: '15px',
                  py: '10px',
                  px: '0 !important',
                  boxShadow: 'none',
                  border: '1px solid rgb(223, 223, 223)',
                  bgcolor: 'white',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography sx={{ px: 1 }}>{data.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ px: 1 }}>{data.content}</Box>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Box>
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
