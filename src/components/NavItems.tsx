/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { useRouter } from 'next/navigation'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { Box } from '@mui/system'

function NavItems({ items }: any) {
  const router = useRouter()
  const handleMenu = (route: any) => {
    router.push(route)
  }
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: '10px', md: '20px' },
      }}
    >
      {items.map((item: any, index: number) => (
        <MenuItem
          key={index}
          onClick={() => {
            handleMenu(item.route)
          }}
          component={Link}
          href={item.route}
          sx={{
            pt: 1,
            px: '3px',
            pb: '3px',
            textTransform: 'capitalize',
            position: 'relative',
            fontSize: '1.2rem',
            fontWeight: { xs: '600', md: 'regular' },
            '&:after': {
              content: "''",
              position: 'absolute',
              width: '100%',
              transform: 'scaleX(0)',
              borderRadius: '5px',
              height: '1px',
              bottom: 0,
              left: 0,
              background: { xs: '#fff', md: '#666' },
              transformOrigin: 'bottom right',
              transition: 'transform 0.25s ease-out',
            },
            '&:hover': {
              background: 'transparent',
              '&:after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            },
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Box>
  )
}

export default NavItems
