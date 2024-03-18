/* eslint-disable react/no-array-index-key */
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const visa = [
  {
    que: 'What is the maximum visa period for tourist visa?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'How much does it cost for Tourist Visa?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
]
export const legal = [
  {
    que: 'Can we bring Alcohol to Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'Is smoking allowed in The Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
]
export const general = [
  {
    que: 'Does it snow in Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'What is the general temperature in Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'What is the maximum visa period for tourist visa?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
]
export default function FaqsAccordion() {
  return (
    <Box sx={{ mt: '60px' }}>
      <Typography sx={{ fontWeight: 600, fontSize: '20px', mb: 3 }}>
        Visa and Arrival
      </Typography>
      {visa.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            py: 1,
            boxShadow: 'none',
            borderBottom: '1px solid rgb(223, 223, 223)',
            borderTop: 'none',
          }}
        >
          <AccordionSummary
            sx={{ fontWeight: 600, px: '0 !important' }}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: 'var(--brown)',
                  fontSize: '35px',
                  bgcolor: { xs: '#E5E4E2', md: 'white' },
                  borderRadius: { xs: '100%', md: '0' },
                }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {faq.que}
          </AccordionSummary>
          <AccordionDetails>{faq.ans}</AccordionDetails>
        </Accordion>
      ))}
      <Typography sx={{ fontWeight: 600, fontSize: '20px', mb: 3, mt: '40px' }}>
        Legal Questions
      </Typography>
      {legal.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            py: 1,
            boxShadow: 'none',
            borderBottom: '1px solid rgb(223, 223, 223)',
            borderTop: 'none',
          }}
        >
          <AccordionSummary
            sx={{
              fontWeight: 600,
              px: '0 !important',
            }}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: 'var(--brown)',
                  fontSize: '35px',
                  bgcolor: { xs: '#E5E4E2', md: 'white' },
                  borderRadius: { xs: '100%', md: '0' },
                }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {faq.que}
          </AccordionSummary>
          <AccordionDetails>{faq.ans}</AccordionDetails>
        </Accordion>
      ))}
      <Typography sx={{ fontWeight: 600, fontSize: '20px', mb: 3, mt: '40px' }}>
        General Questions
      </Typography>
      {general.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            py: 1,
            boxShadow: 'none',
            borderBottom: '1px solid rgb(223, 223, 223)',
            borderTop: 'none',
          }}
        >
          <AccordionSummary
            sx={{ fontWeight: 600, px: '0 !important' }}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: 'var(--brown)',
                  fontSize: '35px',
                  bgcolor: { xs: '#E5E4E2', md: 'white' },
                  borderRadius: { xs: '100%', md: '0' },
                }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {faq.que}
          </AccordionSummary>
          <AccordionDetails>{faq.ans}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
