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
            <Container maxW={1400} position='fixed'  bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg'>
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
                        <Button mt='20px' size='lg'  float='right' as="section">Apply</Button>
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
                                <MenuItem>
                                <Link href='/'>Home</Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/syllabus'>Syllabus</Link>
                                </MenuItem>
                                <MenuItem>
                                    Explore
                                </MenuItem>
                                <MenuItem>
                                    About
                                </MenuItem>
                                <MenuItem>
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
