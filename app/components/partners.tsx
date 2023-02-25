'use client'
import React from 'react'
import{Box, Text,Image, Center, Container, Flex, Heading, HStack, VStack, Button} from '@chakra-ui/react'
import{data} from '../components/databasepartners'
import { RevealWrapper } from  'next-reveal'
export default function Partners() {
  return (
    <RevealWrapper origin='left' delay={200} duration={1000} distance='50px' reset={true}>
    <Box   display={{lg:'flex', base:''}}>
<Container maxW='1400'>
<Center pt={{lg: '100px', base: '30px'}} >
    <Heading size={'2xl'}>Our Partners</Heading>
    </Center>
{/* <Flex flexDir='row' display={{lg:'flex', base:'grid'}} pt={{lg: '50px', base: '30px'}}> */}
<HStack  alignItems={'center'} display={{lg:'flex', base:'grid'}} gap='70' pt='10' px={{lg:'70px', base:'5px'}}>
    {data.map((ins)=>( 
       <Center  >
     <Image  width={90} height={90} src={ins.src}  />
     
     </Center>
     
    ))}

    </HStack>
{/* </Flex> */}
<Box pt='10'>

</Box>
    </Container>
    </Box>
    </RevealWrapper>
    
  )
}
