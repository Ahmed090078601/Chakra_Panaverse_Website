'use client'
import React from 'react'
import {Box, Button, Container, Flex, Heading, Text} from '@chakra-ui/react'
import "./global.css"
import "./body.css"
import Image from 'next/image'
import Instructors from './instructors'
import Campuses from './campuses'
import Partners from './partners'
import { RevealWrapper } from  'next-reveal'
import { motion } from "framer-motion"

export default function body() {
  return (
    <>
  <Box  bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg'>

<Container maxW={1400}>
{/* <RevealWrapper  origin='left' distance='10px' className="load-hidden" rotate={{x: 12,y:40,z:0}} delay={200} duration={1000}  reset={true}> */}
<Flex pt={{lg: '150px', base: '30px'}} pb={{lg:'100px',base:'0'}} px={{lg:'40px', base:'5px'}} display={{lg:'flex', base:'grid'}}>
<Box flexBasis={{lg:'50%', base:'%'}} px={{lg:'40px', base: '0'}}>
<Heading color='black' size='2xl'>Prepare yourself for the Next Generation of Internet with Panaverse Web-3.0</Heading>
<Text  fontSize='xl' pt={{lg:'40px', base:'10px'}}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
<Button mt='10' size='lg' colorScheme='blackAlpha'>More Info</Button>
</Box>

<Box>
<motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Image src='/anmi-bd.png' width="824" height="239" alt='img'/>
    </motion.button>
</Box>

</Flex>
{/* </RevealWrapper> */}
</Container>


    <Box>
    <RevealWrapper origin='right' delay={100} duration={3000} distance='10px' reset={true}>
      <Container maxW={1400} >
<Flex  gap={{ lg:'100px', base:'10px'}} display={{ lg:'flex', base:'grid'}}>
          <Box flexBasis='50%' >
<Image src='/bg-2.png' width="616" height="629" alt='img2' />
          </Box>
<Box flexBasis='50%' textAlign={'center'} pt={{lg:'80px', base:'10px'}} px={{lg:'0', base:'5px'}} >
<Heading color='black' size='2xl' >The Program in a Nutshell</Heading>
<Heading textDecorationLine={'underline'} color='black' size='2xl'>Earn While You Learn</Heading>
<Text pr={{lg:'50px', base:"25px"}}  fontSize='xl' pt={{lg:'40px', base:'10px'}}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>       
         <Button  mt='10px' size='lg' colorScheme='blackAlpha' >Read More</Button>
          </Box>
        </Flex>
</Container>
</RevealWrapper>
    </Box>
    </Box>
    <RevealWrapper origin='left' delay={200} duration={3000} distance='10px' reset={true}>
   <Container maxW={1400}>
    <Flex textAlign={'center'} pt={{lg:'40px', base:'10px'}} gap={{lg:'100px', base:'10px'}} display={{lg:'flex', base:'grid'}}>
      <Box flexBasis='50%' pl={{lg:'60px', base:'5px'}}>
        <Heading size='2xl' >Why to join</Heading>
     <Text pt={{lg:'40px', base:'10px'}} fontSize='xl'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
      <Button mt='10px' size='lg' colorScheme='blackAlpha'>Read More</Button>
      </Box>
      <Box>
        <Image src='/aname-fu.png' width="616" height="629" alt='img3'/>
      </Box>
    </Flex>

   </Container>
</RevealWrapper>
   

   <Box>
   <RevealWrapper origin='right' delay={200} duration={1000} distance='10px' reset={true}>
      <Container maxW={1400} >
<Flex  gap={{ lg:'100px', base:'10px'}} display={{ lg:'flex', base:'grid'}}>
          <Box flexBasis='50%' >
<Image src='/logo2.webp' width="616" height="629" alt='img2' />
          </Box>
<Box flexBasis='50%' textAlign={'center'} pt={{lg:'80px', base:'10px'}} px={{lg:'0', base:'5px'}} >
<Heading size='2xl' >Become Certified Web 3.0 and Metaverse Developer</Heading>
<Text pr={{lg:'50px', base:"25px"}} pt={{lg:'40px', base:'10px'}} fontSize='xl' >Launch Your Dev Career With Web 3 and Metaverse Getting Ready for the Next Generation of the Internet</Text>       
         <Button  mt='10px' size='lg' colorScheme='blackAlpha'>Join Now</Button>
          </Box>
        </Flex>
</Container>
</RevealWrapper>
    </Box>
    
  <Instructors/>
  <Campuses/>
<Partners/>
    </>
  )
}
