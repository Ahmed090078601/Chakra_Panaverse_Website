'use client'
import React from 'react'
import{Box, Text,Image, Center, Container, Flex, Heading} from '@chakra-ui/react'
import{data} from '../components/databasecities'
import { RevealWrapper } from  'next-reveal'
export default function Campuses() {
  return (
    <Box >
      <RevealWrapper origin='right' delay={200} duration={3000} distance='50px' reset={true}>
<Container maxW='1400'>
<Center pt={{lg: '100px', base: '30px'}} >
    <Heading size={'2xl'}>Join our Community</Heading>
</Center>
<Flex flexDir='row' display={{lg:'flex', base:'grid'}} pt={{lg: '50px', base: '30px'}}>
    {data.map((ins)=>(
<Box key={ins.id} >
<Center>
  <Image borderRadius='full' width={90} height={90} src={ins.src} />
    </Center>
<Heading textAlign='center'pt={{lg: '20px', base: '30px'}}>{ins.heading}</Heading>
<Text px='30px' fontSize='xl' textAlign='center'>{ins.text}</Text>
</Box>

    ))}
</Flex>
</Container>
</RevealWrapper>
    </Box>
  )
}
