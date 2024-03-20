/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { Close, DragHandle } from '@mui/icons-material'
import { useMenuStore } from '@/providers/menu-store-provider'
import NavItems from './NavItems'
// import IconMenu from './IconMenu'

const profilePic = '/Images/logo-png.png'
const profilePicCol = '/Images/logo-colored.png'

function SubNav({ menuItems }: any) {
  const isOpen = useMenuStore((state) => state.isOpen)

  return (
    <Box
      component="nav"
      sx={{
        background: 'white',
        position: 'fixed',
        top: { xs: '0', md: '91px' },
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        py: '20px',
        width: '100%',
        px: '100px',
        zIndex: 999,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        mt: { md: '0', xs: '85px' },
        gap: { md: '18px', xs: '0' },
        borderTop: '1px solid lightgray',
      }}
    >
      <NavItems items={menuItems} />
    </Box>
  )
}

function MobileNav({ menuItems }: any) {
  const isOpen = useMenuStore((state) => state.isOpen)
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: '0',
        zIndex: 999,
        transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
        background: 'var(--brown)',
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        pb: '20px',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        overflow: 'hidden',
        mt: { md: '0', xs: '90px' },
        gap: { md: '18px', xs: '0' },
        borderTop: '1px solid lightgray',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <NavItems items={menuItems} />
      <Box
        sx={{
          // mt: '20px',
          borderTop: '1px solid #fff',
          borderBottom: '1px solid #fff',
        }}
      >
        <Typography sx={{ mt: '20px' }}>Get in touch</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: '20px',
          }}
        >
          <Button sx={{ color: '#fff' }}>Email</Button>
          <Button sx={{ color: '#fff' }}>Contact Number</Button>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            mb: '50px',
            gap: '20px',
          }}
        >
          <FacebookRoundedIcon />
          <XIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const isOpen = useMenuStore((state) => state.isOpen)
  const open = useMenuStore((state) => state.open)
  const close = useMenuStore((state) => state.close)
  const toggleMenu = useMenuStore((state) => state.toggleMenu)

  const menuItem = [
    { label: 'About Maldives', route: '/about-maldives' },
    { label: 'Hotels', route: '/resorts' },
    { label: 'About us', route: '/about-us' },
    { label: 'Blog', route: '/blogs' },
  ]

  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setIsScrolled(scrollTop > 0)
  }
  if (typeof window !== 'undefined') {
    const { body } = document
    const scrollBarWidth = window.innerWidth - body.clientWidth

    if (isOpen && lessThanMd) {
      body.style.paddingRight = `${scrollBarWidth}px`
      body.style.overflow = 'hidden'
    } else {
      body.style.paddingRight = '0'
      body.style.overflow = 'initial'
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    if (lessThanMd) {
      close()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isScrolled, lessThanMd, handleResize])

  useEffect(() => {
    if (isScrolled) {
      close()
    } else if (!lessThanMd) {
      open()
    } else {
      close()
    }
  }, [isScrolled, lessThanMd])

  return (
    <Box component="header">
      <AppBar
        className={isScrolled ? 'scrolled' : ''}
        sx={{
          boxShadow: isScrolled
            ? isOpen
              ? 'none'
              : '0 0 25px rgb(0 0 0 / 10%)'
            : 'none',
          width: '100%',
          background: isScrolled ? 'white' : 'var(--brown)',
          transition: 'all ease .5s',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', // { md: "space-between", xs: "flex-start" },
            alignItems: 'center',
            py: '12px',
          }}
        >
          <Box sx={{ visibility: { md: 'visible', xs: 'hidden' } }}>
            <IconButton
              className="menuBtn"
              disableRipple
              sx={{
                height: '100%',
                width: '100%',
                // mt: '35px',
                // px: '20px',
                visibility: isScrolled
                  ? { md: 'visible', xs: 'hidden' }
                  : 'hidden',
              }}
              title="Menu button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <Close
                  sx={{
                    color: isScrolled ? 'var(--brown)' : 'white',
                    fontSize: '46px',
                  }}
                />
              ) : (
                <DragHandle
                  sx={{
                    color: isScrolled ? 'var(--brown)' : 'white',
                    fontSize: '46px',
                  }}
                />
              )}
              {/* <IconMenu isVisible={isOpen} /> */}
            </IconButton>
          </Box>
          <Box>
            <Link href="/">
              <Image
                src={isScrolled ? profilePicCol : profilePic}
                alt="Logo"
                width={95.6}
                height={60}
              />
            </Link>
          </Box>
          {/* <Box
            sx={{
              visibility: isScrolled
                ? { md: "visible", xs: "hidden" }
                : "hidden",
            }}
          ></Box> */}
          <Box>
            {lessThanMd ? (
              <Button
                className="menuBtn"
                disableRipple
                sx={{
                  height: '25px',
                }}
                title="Menu button"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <Close
                    sx={{
                      color: isScrolled ? 'var(--brown)' : 'white',
                      fontSize: '46px',
                    }}
                  />
                ) : (
                  <DragHandle
                    sx={{
                      color: isScrolled ? 'var(--brown)' : 'white',
                      fontSize: '46px',
                    }}
                  />
                )}
              </Button>
            ) : (
              <Button
                title="Enquire"
                sx={{
                  color: 'white',
                  bgcolor: 'var(--brown)',
                  px: 2.4,
                  py: 1.2,
                  visibility: isScrolled ? 'visible' : 'hidden',
                  opacity: isScrolled ? '1' : '0',
                  transition: isScrolled
                    ? 'opacity .3s linear'
                    : 'visibility 0s linear .3s, opacity .3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'var(--blue) !important',
                  },
                }}
              >
                ENQUIRE
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {lessThanMd ? (
        <MobileNav menuItems={menuItem} />
      ) : (
        <SubNav menuItems={menuItem} />
      )}
    </Box>
  )
}

export default Header
