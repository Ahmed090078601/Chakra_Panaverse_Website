'use client'
import { Box, Button, Container, Flex, Grid, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import png from "../../public/images/Logo.png"
import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons'

export default function Header() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.50', 'whileAlpha.50')
    return (
        <Box boxShadow='sm' bg={bgColor} >
            <Container maxW={1400} zIndex={1} position='fixed'   bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg'>
                <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }} >
                    <Box color="gray" as="span">
                        {/* <Image  src={png} alt='panaverse_logo'></Image> */}
                        <Image src='/images/Logo.png' width="150" height="200" alt='img'></Image>
                    </Box>
                    <Flex as="span" display={{ lg: 'flex', base: 'none' }} placeItems='center' fontSize={16} fontWeight='semibold' gap={4}>
                        <Link href='/'>Home</Link>
                        <Link href='/syllabus'>Syllabus</Link>
                        <Link href='/explore'>Explore</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>
                        <Link href='/hiw'>How It Works</Link>
                    </Flex>
                    <Box display={{ lg: 'initial', base: 'none' }} as="span" >
                        <Link href="https://portal.piaic.org/signup">
                        <Button mt='20px' size='lg'  float='right' as="section" >Apply</Button>
                        </Link>
                        <Button onClick={toggleColorMode} mt='20px' ml='2' as="section" float='right' size='lg' colorScheme="blackAlpha" >
                            🌙</Button>
                    </Box>
                    <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
                        <Menu>
                            <MenuButton
                                float='right'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                            <MenuItem as="a" href="/">
      Home
    </MenuItem>
    <MenuItem as="a" href="/syllabus">
      Syllabus
    </MenuItem>
    <MenuItem as="a" href="/explore">
      Explore
    </MenuItem>
    <MenuItem as="a" href="/about">
      About
    </MenuItem>
    <MenuItem as="a" href="/contact">
      Contact
    </MenuItem>
    <MenuItem as="a" href="/hiw">
      How It Works
    </MenuItem>
    <MenuItem as="a" href="https://portal.piaic.org/signup">
      Apply
    </MenuItem>

                               
                            </MenuList>
                        </Menu>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
