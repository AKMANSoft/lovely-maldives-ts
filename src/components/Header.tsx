/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Close from '@mui/icons-material/Close'
import DragHandle from '@mui/icons-material/DragHandle'

import useMediaQuery from '@mui/system/useMediaQuery'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useMenuStore } from '@/providers/menu-store-provider'
import MobileNav from './MobileNav'
import SubNav from './SubNav'

// const profilePic = '/Images/logo.svg'
// const profilePicCol = '/Images/logo-colored.svg'
import profilePic from '../../public/Images/logo.svg'
import profilePicCol from '../../public/Images/logo-colored.svg'

function Header(props: any) {
  const { headerData } = props
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const isOpen = useMenuStore((state) => state.isOpen)
  const open = useMenuStore((state) => state.open)
  const close = useMenuStore((state) => state.close)
  const toggleMenu = useMenuStore((state) => state.toggleMenu)
  const { scrollY } = useScroll()
  const [data, setData] = useState('')
  const [localData, setLocalData] = useState('' as any)

  const menuItem = [
    { label: 'About Maldives', route: '/about-maldives' },
    { label: 'Hotels', route: '/resorts' },
    { label: 'About us', route: '/about-us' },
    { label: 'Blog', route: '/blogs' },
  ]

  const [isScrolled, setIsScrolled] = React.useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })
  const handleResize = () => {
    if (lessThanMd) {
      close()
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize)

    if (headerData) {
      localStorage.setItem('headerData', JSON.stringify(headerData))
      setData(headerData)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [lessThanMd])

  React.useEffect(() => {
    if (isScrolled) {
      close()
    } else if (!lessThanMd) {
      open()
    } else {
      close()
    }
  }, [isScrolled, lessThanMd])

  // Add CSS classes instead of manipulating inline styles
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const { body } = document
      if (isOpen && lessThanMd) {
        body.classList.add('overflow-hidden')
      } else {
        body.classList.remove('overflow-hidden')
      }
    }
  }, [isOpen, lessThanMd])

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('headerData') as any))
  }, [])

  return (
    <Box component="header">
      <AppBar
        component="nav"
        className={isScrolled ? 'scrolled' : ''}
        sx={{
          boxShadow: isScrolled
            ? isOpen
              ? 'none'
              : '0 0 25px rgb(0 0 0 / 10%)'
            : 'none',
          width: '100%',
          background: isScrolled
            ? isOpen && lessThanMd
              ? localData?.heroBgcolor
              : localData?.otherBgcolor
            : localData?.heroBgcolor,
          transition: 'all ease .5s',
          zIndex: 998,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
            </IconButton>
          </Box>
          <Box>
            <Link href="/">
              {/* <Box
                component={Image}
                src={isScrolled ? profilePicCol : profilePic}
                alt="Logo"
                width={95.6}
                height={60}
              /> */}
              <Box
                sx={{
                  width: '95.5px',
                  height: '67px',
                }}
              >
                <Image
                  src={isScrolled ? localData?.otherLogo : localData?.heroLogo}
                  alt="hero logo"
                  width={localData?.heroWidth}
                  height={localData?.heroHeight}
                  style={{
                    // objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
            </Link>
          </Box>
          <Box>
            {lessThanMd ? (
              <Button
                className="menuBtn"
                disableRipple
                sx={{
                  height: '25px',
                }}
                title="Menu button"
                aria-label="Menu button"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <Close
                    sx={{
                      color: 'white',
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
                aria-label="Enquire"
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
        <SubNav menuItems={localData?.menus} />
      )}
    </Box>
  )
}

export default Header
