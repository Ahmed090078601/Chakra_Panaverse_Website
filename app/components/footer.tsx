'use client'
import { Box, Link, Container, Heading, SimpleGrid, Image, Text, Grid, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'


export default function footer() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.50', 'whileAlpha.50')
    return (
        
        <Box  pt='2' bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg'>
            <Container maxW={1400} fontSize='xl'>
            <SimpleGrid textAlign={{lg:'start', base:'center'}} spacing='30px' py='60px' templateColumns={{base:'repeat(1,1fr)', lg:'repeat(4,1fr)'}} >
                <Box>
<Heading pb='20px' >About Us</Heading>
<Image src='/Logo1.png' alt='Panaverse' m={{base:'auto', lg:'0'}}></Image>
  <Text pt='5px' pr={{lg:'4px', base:'0'}} > Plot 245/2 M, PECHS Block 6, Karachi</Text>
                </Box>
                <Box>
                    <Heading >Useful Links</Heading>
                    <Grid pt='40px' >
                        <Link href='/'>Home</Link>
                        <Link href='/'>Syllabus</Link>
                        <Link href='/'>Explore</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Contact</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading >Follow US</Heading>
                    <Grid pt='40px' >
                    <Link href='/'>Home</Link>
                        <Link href='/'>Syllabus</Link>
                        <Link href='/'>Explore</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Contact</Link>
                        </Grid>
                </Box>
                <Box >
                    <Heading >Contact Us</Heading>
                    <Grid  pt='40px'>
                    <Link href='/'>(051) 2223191</Link>
                    <Link href='/'>PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.</Link>
                        <Link href='/'>PIAIC Attestation Center, F-10 Markaz, Islamabad, phone</Link>
                        
                    </Grid>
                </Box>
            </SimpleGrid>
            </Container>
        </Box>
    )
}
